import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const PostDetails = () => {

    const [title, settitle] = useState("");
    const [image, setimage] = useState("");
    const [description, setdescription] = useState("");

    const { id, dynamicurl } = useParams()

    console.log(dynamicurl)

    useEffect(() => {
        // Define the API endpoint URL
        const apiUrl = `http://43.205.145.16:4000/blog/getTodoById/${id}`;

        // Create an async function to fetch todos
        async function fetchTodos() {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                settitle(data.todo.title); // Assuming the response contains a single todo
                setimage(data.todo.image); // Assuming the response contains a single todo
                setdescription(data.todo.description); // Assuming the response contains a single todo
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        }

        // Call the async function
        fetchTodos();
    }, [id]); // The empty dependency array means this effect runs once after the initial render

    const resolveImageUrl = (relativeUrl) => {
        const baseUrl = 'http://43.205.145.16:4000/'; // Replace with your server's base URL
        return `${baseUrl}${relativeUrl}`;
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
                    <Grid className="post-details" container spacing={4}>
                        <Grid className="post-img" item xs={12} md={6} sm={6}>
                            <img src={resolveImageUrl(image)} alt="banner" />
                        </Grid>
                        <Grid className="post-data" item xs={12} md={6} sm={6}>
                            <p className='ab-text' dangerouslySetInnerHTML={{ __html: description }}></p>
                        </Grid>
                    </Grid>
                    
                </div>
            </div>
        </>
    )
}

export default PostDetails