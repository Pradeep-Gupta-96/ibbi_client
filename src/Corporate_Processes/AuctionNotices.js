import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Link } from '@mui/material';

const AuctionNotices = () => {

    const [page, setPage] = React.useState(0);
    const [Result, setResults] = React.useState([]);

    const API1 = `http://localhost:4000/api/auction_notices`

    const fetchData1 = async (page) => {
        try {
            const response = await fetch(`${API1}?page=${page}`)

            const result = await response.json()

            setResults(result)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        fetchData1(page);
    }, [page]);


    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Type_of_AN</TableCell>
                            <TableCell >Date</TableCell>
                            <TableCell >Name_of_Corporate_Debtor</TableCell>
                            <TableCell >Date_of_Auction</TableCell>
                            <TableCell >Name_of_Insolvency_Professional</TableCell>
                            <TableCell >pdfLink1</TableCell>
                            <TableCell >Reserve_Price</TableCell>
                            <TableCell >Nature_of_Assets_to_be_Auctioned</TableCell>
                            <TableCell >Last_Date_of_Submission_of_EMD</TableCell>
                            <TableCell >pdfLink2</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Result
                            .map((item, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell >{item.Type_of_AN}</TableCell>
                                        <TableCell >{item.Date}</TableCell>
                                        <TableCell >{item.Name_of_Corporate_Debtor}</TableCell>
                                        <TableCell >{item.Date_of_Auction}</TableCell>
                                        <TableCell >{item.Name_of_Insolvency_Professional}</TableCell>
                                        <TableCell sx={{ cursor: 'pointer' }}>
                                            <Link href={item.pdfLink1} target="_blank" rel="noopener noreferrer">
                                                <PictureAsPdfIcon />
                                            </Link>
                                        </TableCell>
                                        <TableCell >{item.Reserve_Price}</TableCell>
                                        <TableCell >{item.Nature_of_Assets_to_be_Auctioned}</TableCell>
                                        <TableCell >{item.Last_Date_of_Submission_of_EMD}</TableCell>
                                        <TableCell sx={{ cursor: 'pointer' }}>
                                            <Link href={item.pdfLink2} target="_blank" rel="noopener noreferrer">
                                                <PictureAsPdfIcon />
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
                <Stack spacing={2}>

                    <Pagination
                        count={197}
                        page={page}
                        onChange={(event, value) => setPage(value)}
                        showFirstButton
                        showLastButton

                    />
                </Stack>
            </TableContainer>

        </Paper>
    )
}
export default AuctionNotices