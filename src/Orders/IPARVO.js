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

const IPARVO = () => {
  const [page, setPage] = React.useState(0);
  const [Result, setResults] = React.useState([]);

  const API1 = `http://43.205.145.146:4000/api/ipa_rvo`

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
  }, [page, fetchData1]);

  return (
    <>
      <div className="banner">
        <div className="bound">
          <div className="page-title">IPA/RVO</div>
        </div>
      </div>
      <div className="page-content">
        <div className="bound">
          <Paper className='table-row' sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer>
              <Table className='data-table' stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell >Orders_Date</TableCell>
                    <TableCell >Subject</TableCell>
                    <TableCell >pdfLink</TableCell>
                    <TableCell >Orders_Remarks</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Result
                    .map((item, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          <TableCell >{item.Orders_Date}</TableCell>
                          <TableCell >{item.Subject}</TableCell>
                          <TableCell sx={{ cursor: 'pointer' }}>
                            <Link href={item.pdfLink} target="_blank" rel="noopener noreferrer">
                              <PictureAsPdfIcon />
                            </Link>
                          </TableCell>
                          <TableCell >{item.Orders_Remarks}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
              <Stack spacing={2}>

                <Pagination
                  count={2}
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

export default IPARVO