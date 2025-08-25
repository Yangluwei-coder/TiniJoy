import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, IconButton
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export default function UserTable({ admins, onDelete }) {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table
        size="small"
        sx={{
          borderCollapse: 'collapse',
          '& td, & th': { border: '1px solid #ddd' }
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>序号</TableCell>
            <TableCell>用户名</TableCell>
            <TableCell>操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admins.map((admin, index) => ( //UserPage传的props
            
            <TableRow key={admin._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{admin.username}</TableCell>
              <TableCell>
                <IconButton color="error" onClick={() => {
                  // console.log(admin._id);
                  onDelete(admin._id);
                  }}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
