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

const Announcements = () => {

    const [page, setPage] = React.useState(0);
    const [Result, setResults] = React.useState([]);

    const API1 = `http://localhost:4000/api/public_announcement`

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
                            <TableCell >typeOfPA</TableCell>
                            <TableCell >dateOfAnnouncement</TableCell>
                            <TableCell >lastDateOfSubmission</TableCell>
                            <TableCell >corporateDebtor</TableCell>
                            <TableCell >nameOfApplicant</TableCell>
                            <TableCell >nameOfIP</TableCell>
                            <TableCell >pdfLink</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Result
                            .map((item, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell >{item.typeOfPA}</TableCell>
                                        <TableCell >{item.dateOfAnnouncement}</TableCell>
                                        <TableCell >{item.lastDateOfSubmission}</TableCell>
                                        <TableCell >{item.corporateDebtor}</TableCell>
                                        <TableCell >{item.nameOfApplicant}</TableCell>
                                        <TableCell >{item.nameOfIP}</TableCell>
                                        <TableCell sx={{ cursor: 'pointer' }}>
                                            <Link href={item.pdfLink} target="_blank" rel="noopener noreferrer">
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
                        count={525}
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

export default Announcements