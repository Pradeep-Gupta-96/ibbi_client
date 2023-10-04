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

const InvitationofResolutionPlan = () => {

    const [page, setPage] = React.useState(0);
    const [Result, setResults] = React.useState([]);

    const API1 = `http://43.205.145.146:4000/api/resolution_plans`

    const fetchData1 = React.useCallback(async (page) => {
        try {
            const response = await fetch(`${API1}?page=${page}`)

            const result = await response.json()

            setResults(result)
        } catch (error) {
            console.log(error)
        }
    }, [API1])

    React.useEffect(() => {
        fetchData1(page);
    }, [page, fetchData1]);


    return (
        <>
            <div className="banner">
                <div className="bound">
                    <div className="page-title">RESOLUTION PLANS</div>
                </div>
            </div>
            <div className="page-content">
                <div className="bound">
                    <Paper className='table-row' sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer>
                            <Table className='data-table' stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell >Name of Corporate Debtor</TableCell>
                                        <TableCell >Name of Resolution Professional</TableCell>
                                        <TableCell >Last date for receipt of expression of interest</TableCell>
                                        <TableCell >Date of issue of prospective resolution applicants</TableCell>
                                        <TableCell >Last date for submission of objections to provisional lists</TableCell>
                                        {/* <TableCell >Form G</TableCell>	
                                        <TableCell >Remarks</TableCell> */}
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
                </div>
            </div>
        </>
    )
}

export default InvitationofResolutionPlan