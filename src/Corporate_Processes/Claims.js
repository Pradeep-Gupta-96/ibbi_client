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

const Claims = () => {

    const [page, setPage] = React.useState(0);
    const [Result, setResults] = React.useState([]);

    const API1 = `http://43.205.145.16:4000/api/claims`

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
                            <TableCell >CorporateDebtor</TableCell>
                            <TableCell >Name_of_IRP_RP_Liquidator</TableCell>
                            <TableCell >Under_Process</TableCell>
                            <TableCell >Latest_Claim_As_On_Date</TableCell>
                            <TableCell >View_Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Result
                            .map((item, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell >{item.CorporateDebtor}</TableCell>
                                        <TableCell >{item.Name_of_IRP_RP_Liquidator}</TableCell>
                                        <TableCell >{item.Under_Process}</TableCell>
                                        <TableCell >{item.Latest_Claim_As_On_Date}</TableCell>
                                        <TableCell >{item.View_Details}</TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
                <Stack spacing={2}>

                    <Pagination
                        count={96}
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

export default Claims