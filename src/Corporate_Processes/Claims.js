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
import {useNavigate} from "react-router-dom"

const Claims = () => {

    const [page, setPage] = React.useState(0);
    const [Result, setResults] = React.useState([]);
    const navigate=useNavigate()

    const API1 = `http://43.205.145.16:4000/api/claims`

    const fetchData1 =React.useCallback( async (page) => {
        try {
            const response = await fetch(`${API1}?page=${page}`)

            const result = await response.json()

            setResults(result)
        } catch (error) {
            console.log(error)
        }
    },[API1])

    React.useEffect(() => {
        fetchData1(page);
    }, [page,fetchData1]);


    const onClickForViewDetails=(id)=>{
        navigate(`/Viewclaims/${id}`)
    }

    return (
        <>
            <div className="banner">
                <div className="bound">
                    <div className="page-title">CLAIMS</div>
                </div>
            </div>
            <div className="page-content">
                <div className="bound">
                    <Paper className='table-row' sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer>
                            <Table className='data-table' stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell >Corporate Debtor</TableCell>
                                        <TableCell >Name of IRP / RP / Liquidator</TableCell>
                                        <TableCell >Under Process</TableCell>
                                        <TableCell >Latest Claim As On Date</TableCell>
                                        <TableCell >View Details</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Result
                                        .map((item, index) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                    <TableCell onClick={()=>onClickForViewDetails(item.claimNumber)} >{item.CorporateDebtor}</TableCell>
                                                    <TableCell >{item.Name_of_IRP_RP_Liquidator}</TableCell>
                                                    <TableCell >{item.Under_Process}</TableCell>
                                                    <TableCell >{item.Latest_Claim_As_On_Date}</TableCell>
                                                    <TableCell onClick={()=>onClickForViewDetails(item.claimNumber)} >{item.View_Details}</TableCell>
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
                </div>
            </div>
        </>
    )
}

export default Claims