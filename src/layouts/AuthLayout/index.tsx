import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { getItem } from '../../utils'
import './styles.scss'

const AuthLayout = () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    const token = getItem('token')
    if (token) {
      navigate('/users')
    }
  }, [])

  return (
    <div className="auth-layout">
      <img
        src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH"
        alt="wissen-logo"
      />
      <Outlet />
    </div>
  )
}

export default AuthLayout
