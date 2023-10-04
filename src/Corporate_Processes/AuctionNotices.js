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
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Link } from '@mui/material';

const AuctionNotices = () => {

    const [page, setPage] = React.useState(0);
    const [Result, setResults] = React.useState([]);

    const [openDialogIndex, setOpenDialogIndex] = React.useState(-1);

    const handleClickOpen = (index) => {
        // Open the dialog for the specified row
        setOpenDialogIndex(index);
    };

    const handleClose = () => {
        // Close the dialog for the current row
        setOpenDialogIndex(-1);
    };


    const API1 = `http://43.205.145.146:4000/api/auction_notices`

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


    return (
        <>
            <div className="banner">
                <div className="bound">
                    <div className="page-title">PUBLIC ANNOUNCEMENT</div>
                </div>
            </div>
            <div className="page-content">
                <div className="bound">
                    <Paper className='table-row' sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer>
                            <Table className='data-table' stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell >Type of AN</TableCell>
                                        <TableCell >Date</TableCell>
                                        <TableCell >Name of Corporate Debtor</TableCell>
                                        <TableCell >Date of Auction</TableCell>
                                        <TableCell >Name of Insolvency Professional</TableCell>
                                        <TableCell >Auction Notice</TableCell>
                                        <TableCell >Reserve Price</TableCell>
                                        <TableCell >Nature of Assets to be Auctioned</TableCell>
                                        <TableCell >Last Date of Submission of EMD</TableCell>
                                        <TableCell >Details</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Result
                                        .map((item, index) => {
                                            const isDialogOpen = openDialogIndex === index;
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
                                                    <TableCell className='view-detail'>
                                                        <Link variant="outlined" onClick={() => handleClickOpen(index)}>
                                                            View Details..
                                                        </Link>
                                                        <Dialog
                                                            open={isDialogOpen}
                                                            onClose={handleClose}
                                                            aria-labelledby="responsive-dialog-title"
                                                        >
                                                            <DialogContent>
                                                                <DialogContentText>
                                                                    {item.Nature_of_Assets_to_be_Auctioned}
                                                                </DialogContentText>
                                                            </DialogContent>
                                                            <DialogActions>
                                                                <Button onClick={handleClose} autoFocus>
                                                                    Close
                                                                </Button>
                                                            </DialogActions>
                                                        </Dialog>
                                                    </TableCell>

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
                </div>
            </div>
        </>
    )
}
export default AuctionNotices


