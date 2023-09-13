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

const InvitationofResolutionPlan = () => {

    const [page, setPage] = React.useState(0);
    const [Result, setResults] = React.useState([]);

    const API1 = `http://43.205.145.16:4000/api/resolution_plans`

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
                            <TableCell >Name_of_Corporate_Debtor</TableCell>
                            <TableCell >Name_of_Resolution_Professional</TableCell>
                            <TableCell >Last_date_for_receipt_of_expression_of_interest</TableCell>
                            <TableCell >Date_of_issue_of_prospective_resolution_applicants</TableCell>
                            <TableCell >Last_date_for_submission_of_objections_to_provisional_lists</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Result
                            .map((item, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell >{item.Name_of_Corporate_Debtor}</TableCell>
                                        <TableCell >{item.Name_of_Resolution_Professional}</TableCell>
                                        <TableCell >{item.Last_date_for_receipt_of_expression_of_interest}</TableCell>
                                        <TableCell >{item.Date_of_issue_of_prospective_resolution_applicants}</TableCell>
                                        <TableCell >{item.Last_date_for_submission_of_objections_to_provisional_lists}</TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
                <Stack spacing={2}>

                    <Pagination
                        count={45}
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

export default InvitationofResolutionPlan