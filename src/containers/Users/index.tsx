import React from 'react'
import { Table } from 'react-bootstrap'
import { useGetUsersQuery } from '../../redux-store/usersSlice'

import './styles.scss'

const Users = () => {
  const { data, error, isLoading } = useGetUsersQuery(null)
  const users = data?.data || []

  return (
    <React.Fragment>
      <h6> Users </h6>
      <Table striped bordered hover responsive className="users-table">
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => (
            <tr key={id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  )
}

export default Users
