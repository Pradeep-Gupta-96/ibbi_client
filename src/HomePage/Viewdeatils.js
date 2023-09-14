import React, { useCallback } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './HomePage.css'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Viewdeatils = () => {

    const [Result, setResults] = React.useState([]);

    const API1 = `http://43.205.145.16:4000/api/whats_new`

    const fetchData1 = useCallback(async () => {
        try {
            const response = await fetch(API1);
            const result = await response.json();
            setResults(result);
        } catch (error) {
            console.log(error);
        }
    }, [API1]); // Include API1 in the dependency array

    React.useEffect(() => {
        fetchData1();
    }, [fetchData1]);


    return (
        <>
            <div className="banner">
                <div className="bound">
                    <Grid className="main-banner" container spacing={2}>
                        <Grid className='banner-left' item xs={12} md={12}>
                            <Item>
                                <div className='new-sec'>
                                    <h2>Whats New </h2>
                                    <ul className='latest-new'>
                                        {Result.map((item, index) => {
                                            return (
                                                <>
                                                    <li key={index}>
                                                        <ArrowForwardIosIcon />
                                                        <Link className='send' target="_blank" to={item.pdfLink}>
                                                            <b>{item.date}</b>
                                                            &nbsp;&nbsp;{item.text}
                                                            <PictureAsPdfIcon />
                                                        </Link>
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    )
}

export default Viewdeatils