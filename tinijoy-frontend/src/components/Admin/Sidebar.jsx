import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <Box width={200} bgcolor="#f5f5f5" height="100vh" p={2}>
      <Typography variant="h6" gutterBottom>
        后台管理
      </Typography>
      <List>
        <ListItem button="true" component={Link} to="/admin/products"
        sx={{
            '&:hover': {
              bgcolor: 'transparent',  // 取消默认的背景阴影
              color: 'blue',           // 字体变蓝色
            },
            color: 'inherit',           // 默认颜色继承
          }}>
          <ListItemText primary="商品管理" />
        </ListItem>
        <ListItem button="true" component={Link} to="/admin/users"
        sx={{
            '&:hover': {
              bgcolor: 'transparent',  
              color: 'blue',           
            },
            color: 'inherit',           
          }}>
          <ListItemText primary="用户管理" />
        </ListItem>
      </List>
    </Box>
  )
}
