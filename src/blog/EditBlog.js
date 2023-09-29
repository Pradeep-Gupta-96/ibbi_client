import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Avatar } from '@mui/material';


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

const ListItemCSS = {
    display: 'block', cursor: "pointer",
    width: "100px",
    height: "100px",
    borderRadius: "100%",
    boxShadow: "0 0 0 10px #eceff1",
    background: "#eceff1"
}

const EditBlog = () => {

    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [avatarImage, setAvatarImage] = useState(null)
    const [ImagaeLogo, setImagaeLogo] = useState('')
    const navigate = useNavigate()


    useEffect(() => {
        const apiUrl = `http://43.205.145.16:4000/blog/getTodoById/${id}`;

        async function fetchTodo() {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTitle(data.todo.title);
                setImage(data.todo.image);
                setDescription(data.todo.description);
            } catch (error) {
                console.error('Error fetching todo:', error);
            }
        }

        fetchTodo();
    }, [id]);

    const handleOnChange = (event) => {
        // Handle changes in form fields (e.g., title, description)
        const { name, value } = event.target;
        setTitle(value); // Update the title state
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        setImagaeLogo(event.target.files[0])
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setAvatarImage(reader.result);
        };
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("image", ImagaeLogo);

            const API = `http://43.205.145.16:4000/blog/updateTodoById/${id}`;

            // Retrieve the JWT token from localStorage
            const token = localStorage.getItem("token");
            console.log(token)

            // Create the headers object with the Authorization header
            const headers = new Headers();
            headers.append("Authorization", token);

            // Create the fetch options with headers
            const requestOptions = {
                method: "PUT",
                headers: headers,
                body: formData, // You can send form data directly as the body
            };

            // Make the HTTP POST request
            const response = await fetch(API, requestOptions);

            if (response.ok) {
                // Handle successful response
                await response.json();
                navigate("/blogs")
            } else {
                // Handle error response
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Form submission error:', error);
        }
    };


    return (
        <>
            <div className="banner">
                <div className="bound">
                    <div className="page-title">{title}</div>
                </div>
            </div>
            <div className="page-content pb-40">
                <div className="bound">
                {localStorage.getItem("token") ? <div className="add-post-sec">
                    <h3>Update Post</h3>
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
                            <Grid item xs={12} sm={6}>
                                <label style={styles.label}>
                                    {(image || avatarImage) ? (
                                        <img src={`http://43.205.145.16:4000/${image}` || avatarImage} style={{ width: '100%', height: 'auto' }} />
                                    ) : (
                                        <label style={styles.label}>
                                            <TextField
                                                required
                                                id="outlined-required"
                                                type="file"
                                                style={styles.fileInput}
                                                accept="image/*"
                                            />
                                            <Typography variant="body2" component="span" style={styles.labelText}>
                                                IMAGE
                                            </Typography>
                                        </label>
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
                                    value={title}
                                    onChange={handleOnChange}
                                />
                            </Grid>
                            <CKEditor
                                editor={ClassicEditor}
                                required
                                data={description}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setDescription(data)
                                }}
                            />
                            <Button className='submit-btn' type="submit" variant="contained" > Update </Button>
                        </Grid>
                    </Box>
                </div> : ""}
                </div>
            </div>
        </>
    )
}


export default EditBlog