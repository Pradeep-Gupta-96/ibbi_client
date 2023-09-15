import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {  useParams } from 'react-router-dom'
const Viewclaims = () => {
    const { id } = useParams()
    const [Result, setResults] = React.useState([]);

    const API1 = `http://43.205.145.16:4000/api/viewclaims/${id}`

    const fetchData1 = React.useCallback(async () => {
        try {
            const response = await fetch(`${API1}`)

            const result = await response.json()

            setResults(result)
        } catch (error) {
            console.log(error)
        }
    }, [API1])

    React.useEffect(() => {
        fetchData1();
    }, [fetchData1]);

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
                                
                                <TableHead className='wiew-c-table'>
                                    <TableRow>
                                        <TableCell colSpan={14}>Annexure
                                            Filing under clause (d) of sub-regulation (5) of regulation 31 of the IBBI (Liquidation Process) Regulations, 2016</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell rowSpan={2}>Sl.No.</TableCell>
                                        <TableCell rowSpan={2}>Category of stakeholders</TableCell>
                                        <TableCell colSpan={2}>Summary of Claims Received</TableCell>
                                        <TableCell colSpan={2}>Summary of Claims Admitted</TableCell>
                                        <TableCell rowSpan={2}>Amount of contingent claims</TableCell>
                                        <TableCell rowSpan={2}>Amount of claims rejected</TableCell>

                                        <TableCell rowSpan={2}>Amount of Claims under Verification</TableCell>
                                        <TableCell rowSpan={2}>Details in Annexure</TableCell>
                                        <TableCell rowSpan={2}>Remarks, if any</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>No. of Claims</TableCell>
                                        <TableCell >Amount (Rs.)</TableCell>
                                        <TableCell >No. of Claims</TableCell>
                                        <TableCell >Amount of claims admitted</TableCell>
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
                                                    <TableCell >{item.amount}</TableCell>
                                                    <TableCell  >{item.number_claims1}</TableCell>
                                                    <TableCell  >{item.claims_admitted1}</TableCell>
                                                    <TableCell  >{item.contiget_claims1}</TableCell>
                                                    <TableCell  >{item.climas_rejected1}</TableCell>
                                                    <TableCell  >{item.under_varification1}</TableCell>
                                                    <TableCell  >{item.annexure1}</TableCell>
                                                    <TableCell  >{item.Remarks}</TableCell>
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Paper>
                </div>
            </div>
        </>
    )
}

export default Viewclaims