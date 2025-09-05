import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import Sidebar from '../../components/Admin/Sidebar'
import UserForm from '../../components/Admin/UserForm'
import UserTable from '../../components/Admin/UserTable'
import axios from 'axios'

export default function UserPage() {
  const [admins, setAdmins] = useState([])
  const API_URL = import.meta.env.VITE_API_URL;

  // 初始化：获取所有管理员
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await axios.get(`${API_URL}/admin`)
        if (Array.isArray(res.data)) {
          setAdmins(res.data)
        } else {
          setAdmins([])
          console.warn('后端返回的管理员数据不是数组')
        }
      } catch (err) {
        console.error('获取管理员失败', err)
      }
    }

    fetchAdmins()
  }, [])

  // 添加管理员
  const handleAdd = async (admin) => {
    try {
      const res = await axios.post(`${API_URL}/admin`, admin) //请求
      const res2 = await axios.get(`${API_URL}/admin`) //获取
      setAdmins(res2.data)
      // setAdmins(prev => [...prev, res.data])
    } catch (err) {
      console.error('添加管理员失败', err)
    }
  }

  // 删除管理员
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/admin/${id}`)
      setAdmins(prev => prev.filter(admin => admin._id !== id))
    } catch (err) {
      console.error('删除管理员失败', err)
    }
  }

  return (
    <Box display="flex">
      {/* <Box mr={6}><Sidebar /></Box> */}
      <Box flexGrow={1} p={3}>
        <Typography variant="h4" mb={2}>管理员管理</Typography>
        <UserForm onAdd={handleAdd} />
        <Box mt={4}>
          <UserTable admins={admins} onDelete={handleDelete} />
        </Box>
      </Box>
    </Box>
  )
}
