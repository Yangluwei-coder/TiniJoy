import { useState } from 'react'
import { TextField, Button, Box } from '@mui/material'

export default function UserForm({ onAdd }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username || !password) return
    onAdd({ username, password })
    setUsername('')
    setPassword('')
  }

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" gap={2} sx={{ maxWidth: 1000, width: '100%' }}>
      <TextField
        label="用户名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required = {false}   //去掉*
        sx={{ flex: 1 }}
      />
      <TextField
        label="密码"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required = {false}
        sx={{ flex: 1 }}
      />
      <Button type="submit" variant="contained">添加管理员</Button>
    </Box>
  )
}
