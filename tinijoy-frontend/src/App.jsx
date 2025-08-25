import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Links from './router/Links';
import { useSelector } from 'react-redux';
import Router from './router/Routers';

// Admin 部分
import LoginPage from './pages/admin/LoginPage'
import ProductPage from './pages/admin/ProductPage'
import UserPage from './pages/admin/UserPage'
import AdminLayout from './components/Admin/AdminLayout'

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  return (
    <BrowserRouter>
      <Links />

      <Routes>
        {/* 普通商城路由 */}
        <Route path="/*" element={<Router />} />

        {/* 登录页 */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/admin/products" /> : <LoginPage />}
        />

        {/* 商品管理 */}
        <Route
          path="/admin/products"
          element={
            isLoggedIn ? (
              <AdminLayout>
                <ProductPage />
              </AdminLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* 用户管理 */}
        <Route
          path="/admin/users"
          element={
            isLoggedIn ? (
              <AdminLayout>
                <UserPage />
              </AdminLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* 兜底 */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App