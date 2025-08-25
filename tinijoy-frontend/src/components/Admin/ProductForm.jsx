// src/components/ProductForm.jsx
import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'

export default function ProductForm({ onAdd }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [link, setLink] = useState('')
  const [type, setType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !price || !link || !type) return

    onAdd({
      name,
      price: parseFloat(price),
      link,
      type
    })

    // 清空输入
    setName('')
    setPrice('')
    setLink('')
    setType('')
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Box mb={2}>
        <Typography>商品名称：</Typography>
        <TextField
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>

      <Box mb={2}>
        <Typography>商品价格：</Typography>
        <TextField
          fullWidth
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Box>

      <Box mb={2}>
        <Typography>商品链接：</Typography>
        <TextField
          fullWidth
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </Box>

      <Box mb={2}>
        <Typography>商品类型：</Typography>
        <TextField
          fullWidth
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </Box>

      <Button
        type="submit"
        variant="contained"
        sx={{ bgcolor: 'green', mt: 2, width:100}}
      >
        添加商品
      </Button>
    </Box>
  )
}
