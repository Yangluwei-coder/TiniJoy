import { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Typography } from '@mui/material'
import ProductForm from '../../components/Admin/ProductForm'
import ProductTable from '../../components/Admin/ProductTable'

export default function ProductPage() {
  const [products, setProducts] = useState([])
  const API_URL = import.meta.env.VITE_API_URL;

  // 1. 获取所有商品
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API_URL}/products`) 
        console.log('接口返回:', res.data)

        if (Array.isArray(res.data)) {
          setProducts(res.data)
        } else {
          setProducts([])
          console.warn('后端返回不是数组，自动设置为空数组')
        }
        // setProducts(res.data)
      } catch (err) {
        console.error('获取产品失败', err)
        setProducts([])  // 出错时也重置为空数组，防止崩溃
      }
    }

    fetchProducts()
  }, [])

  // 2. 添加商品
  const handleAdd = async (product) => {
    try {
      const res = await axios.post(`${API_URL}/products`, product)
      setProducts(prev => [...prev, res.data.product || res.data])
    } catch (err) {
      console.error('添加产品失败', err)
    }
  }

  // 3. 删除商品
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/products/${id}`)
      setProducts(prev => prev.filter(p => p._id !== id))
    } catch (err) {
      console.error('删除产品失败', err)
    }
  }

  return (
    <Box display="flex">
      {/* <Box mr={6}><Sidebar /></Box> */}
      <Box flexGrow={1} p={3}>
        <Typography variant="h4" mb={2}>商品管理</Typography>
        <ProductForm onAdd={handleAdd} />
        <Box mt={4}>
          <ProductTable products={products} onDelete={handleDelete} />
        </Box>
      </Box>
    </Box>
  )
}
