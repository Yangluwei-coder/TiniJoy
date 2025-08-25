// src/components/AdminLayout.jsx
import { Box } from '@mui/material'
import Sidebar from './Sidebar'

export default function AdminLayout({ children }) {
  return (
    <Box display="flex" minHeight="100vh">
      {/* 左侧固定 Sidebar */}
      <Sidebar />
      
      {/* 右侧页面内容 */}
      <Box flex={1} p={2}>
        {children}
      </Box>
    </Box>
  )
}
