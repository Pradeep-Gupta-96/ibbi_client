import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import aboutimg from '../utility/about-img.jpeg'
import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Avatar, Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ListItemCSS = {
    display: 'block', cursor: "pointer",
    width: "100px",
    height: "100px",
    borderRadius: "100%",
    boxShadow: "0 0 0 10px #eceff1",
    background: "#eceff1"
}

const styles = {
    fileInput: {
        display: 'none', // hide the default input element
    },
    label: {
        display: 'block',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        boxShadow: '0 0 0 10px #eceff1',
        cursor: 'pointer',
        overflow: 'hidden',
    },
    labelText: {
        display: 'block',
        textAlign: 'center',
        marginTop: '45px',
        fontSize: '14px',
        color: '#777',
    },
};

const Blogs = () => {



    const [Title, setTitle] = useState({ Post_Title: "" })
    const [discription, setDiscription] = useState("")
    const [avatarImage, setAvatarImage] = useState(null);
    const [ImagaeLogo, setImagaeLogo] = useState('')
    const [todos, setTodos] = useState([]);

    const handleOnChange = (event) => {
        const { name, value } = event.target
        setTitle({
            ...Title,
            [name]: value
        })
    }

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        setImagaeLogo(event.target.files[0])
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setAvatarImage(reader.result);
        };
    };

    const logout = () => {
        // Remove the token from localStorage
        localStorage.removeItem('token');

        // Reload the page
        window.location.reload();
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();

            const formData = new FormData();
            formData.append("title", Title.Post_Title);
            formData.append("description", discription);
            formData.append("image", ImagaeLogo);

            const API = "http://43.205.145.16:4000/blog/insertTodo";

            // Retrieve the JWT token from localStorage
            const token = localStorage.getItem("token");

            // Create the headers object with the Authorization header
            const headers = new Headers();
            headers.append("Authorization", token);

            // Create the fetch options with headers
            const requestOptions = {
                method: "POST",
                headers: headers,
                body: formData, // You can send form data directly as the body
            };

            // Make the HTTP POST request
            const response = await fetch(API, requestOptions);

            if (response.ok) {
                // Handle successful response
                await response.json();
                // Reload the page
                window.location.reload();
            } else {
                // Handle error response
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Form submission error:', error);
        }
    };


    const handleForDelete = async (id) => {
        console.log("kjbk")
        try {
            const API = `http://43.205.145.16:4000/blog/deleteTodoById/${id}`;

            // Retrieve the JWT token from localStorage
            const token = localStorage.getItem("token");

            // Create the headers object with the Authorization header
            const headers = new Headers();
            headers.append("Authorization", token);

            // Create the fetch options with headers
            const requestOptions = {
                method: "DELETE",
                headers: headers,
            };

            // Make the HTTP POST request
            const response = await fetch(API, requestOptions);

            if (response.ok) {
                // Reload the page
                window.location.reload();
            } else {
                // Handle error response
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Form submission error:', error);
        }
    };

    useEffect(() => {
        // Define the API endpoint URL
        const apiUrl = 'http://43.205.145.16:4000/blog/getAllTodo';

        // Create an async function to fetch todos
        async function fetchTodos() {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTodos(data.todos.reverse()); // Assuming the response contains an array of todos
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        }

        // Call the async function
        fetchTodos();
    }, []); // The empty dependency array means this effect runs once after the initial render

    const resolveImageUrl = (relativeUrl) => {
        const baseUrl = 'http://43.205.145.16:4000/'; // Replace with your server's base URL
        return `${baseUrl}${relativeUrl}`;
    };


    return (
        <>
            <div className="banner">
                <div className="bound">
                    <div className="page-title">Blog</div>
                </div>
            </div>
            <div className="page-content blue-bg pb-40">
                <div className="bound">
                    <div className='blog-sec highlights-sec padding-50'>
                        <div className="bound">

                            {localStorage.getItem("token") ? <div className="add-post-sec">
                                <h3>Add new post</h3>
                                <Button onClick={logout}>Logout</Button>
                                <Box component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: '1%', width: '48%' }, '& .MuiTextField-root:last-child': { m: '1%', width: '98%' },
                                    }}
                                    noValidate
                                    onSubmit={handleSubmit}

                                >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <label style={styles.label}>
                                                {avatarImage ? (
                                                    <Avatar sx={ListItemCSS} src={avatarImage} />
                                                ) : (
                                                    <>
                                                        <TextField
                                                            required
                                                            id="outlined-required"
                                                            type='file'
                                                            style={styles.fileInput}
                                                            onChange={handleAvatarChange}
                                                            accept="image/*"
                                                        />
                                                        <Typography variant="body2" component="span" style={styles.labelText}>
                                                            IMAGE
                                                        </Typography>
                                                    </>
                                                )}
                                            </label>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}> </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Post Title"
                                                name='Post_Title'
                                                onChange={handleOnChange}
                                                value={Title.Post_Title}
                                            />
                                        </Grid>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            required
                                            data="<p>Text here...</p>"
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setDiscription(data)
                                            }}
                                        />
                                        <Button className='submit-btn' type="submit" variant="contained" > POST </Button>
                                    </Grid>
                                </Box>
                            </div> : ""}

                            <Grid className="services-items" container spacing={2}>
                                {todos.map((item, index) => (
                                    <Grid item xs={12} md={4} key={item.id || index}>
                                        <Item className='service-item shadow-remove'>
                                            <div className="post-img">
                                                <img src={resolveImageUrl(item.image)} alt="banner" />
                                            </div>
                                            <div className="content-box">
                                                <h3>{item.title}</h3>
                                                <p className='ab-text' dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                                <div className='more-text subscribe-btn'>
                                                    <Link to={`/postdetails/${item.id}/${item.title}`} className='blue-btn'>
                                                        Read More
                                                    </Link>
                                                </div>
                                                {localStorage.getItem("token") && (
                                                    <>
                                                        <Link to={`/editBlog/${item.id}`} className='blue-btn'>
                                                            <EditIcon />
                                                        </Link>
                                                        <Link onClick={() => handleForDelete(item.id)} className='blue-btn'>
                                                            <DeleteForeverTwoToneIcon />
                                                        </Link>
                                                    </>
                                                )}
                                            </div>
                                        </Item>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs