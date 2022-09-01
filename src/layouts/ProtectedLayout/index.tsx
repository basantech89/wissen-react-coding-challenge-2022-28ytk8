import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { getItem, logout } from '../../utils'
import { Navbar, Button } from 'react-bootstrap'

import './styles.scss'

const ProtectedLayout = () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    const token = getItem('token')
    if (!token) {
      navigate('/')
    }
  }, [])

  return (
    <div className="protected-layout">
      <Navbar>
        <Navbar.Brand href="">
          <img
            src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH"
            alt="wissen-logo"
          />
        </Navbar.Brand>
        <Button variant="danger" onClick={logout}>
          Logout
        </Button>
      </Navbar>

      <Outlet />
    </div>
  )
}

export default ProtectedLayout
