// src/pages/LoginPage.jsx
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { Button, TextField, Container, Typography, Box } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { InputAdornment, IconButton } from '@mui/material'
import axios from 'axios'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()  //阻止表单的默认提交行为（页面刷新），用axios发请求
    try {
      const res = await axios.post('/api/admin/login', {
        username,
        password,
      })

      // 返回 { success: true } 就说明登录成功
      if (res.data.success) {
        // 保存 token 到 localStorage
        localStorage.setItem('token', res.data.token);

        // 设置 Authorization header
        axios.defaults.headers['Authorization'] = `Bearer ${res.data.token}`;

        dispatch(login())
        navigate('/admin/products')
      } else {
        setError('Invalid credentials')
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('Login failed. Please try again.')
    }
  }

  return (
    <Box
      sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', 
      justifyContent: 'center'}}>
      <Container
        maxWidth="xs"
        sx={{
          bgcolor: '#fff',  py: 5, px:6,//padding
          borderRadius: 3, boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Admin Panel
        </Typography>
        <form onSubmit={handleSubmit}  >
          <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputLabelProps={{
            sx: { fontSize: '1.2rem' }
          }}
        />

          <TextField
          label="Password"
          fullWidth
          type={showPassword ? 'text' : 'password'}
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            }}
            InputLabelProps={{
            sx: { fontSize: '1.2rem' }
          }}
        />

          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, fontSize: '1.4rem'}}>
            Login
          </Button>
        </form>
      </Container>
    </Box>
  )
}
