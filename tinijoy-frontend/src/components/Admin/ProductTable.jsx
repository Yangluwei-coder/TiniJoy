import { Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export default function ProductTable({ products, onDelete }) {
  return (
    <Table sx={{ borderCollapse: 'collapse' }}>
      <TableHead>
        <TableRow>
          <TableCell sx={{ border: '1px solid #ddd' }}>名称</TableCell>
          <TableCell sx={{ border: '1px solid #ddd' }}>价格</TableCell>
          <TableCell sx={{ border: '1px solid #ddd' }}>链接</TableCell>
          <TableCell sx={{ border: '1px solid #ddd' }}>类型</TableCell>
          <TableCell sx={{ border: '1px solid #ddd' }}>操作</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product._id}>
            <TableCell sx={{ border: '1px solid #ddd' }}>{product.name}</TableCell>
            <TableCell sx={{ border: '1px solid #ddd' }}>
              $ {product.price !== undefined ? product.price.toFixed(2) : '0.00'} 
              {/* 后端没返回或者数据还没加载到组件，product.price 可能是 undefined。防止对undefined调用 toFixed() */}
            </TableCell>  
            <TableCell>
              <a href={product.link} target="_blank" rel="noreferrer">
                访问
              </a>
            </TableCell>
            <TableCell sx={{ border: '1px solid #ddd' }}>{product.type}</TableCell>
            <TableCell sx={{ border: '1px solid #ddd' }}>
              <IconButton onClick={() => onDelete(product._id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
