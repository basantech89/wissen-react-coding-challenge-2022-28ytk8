import React from 'react';
import { Table } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';

import { selectAllUsers } from '../../redux-store/usersSlice';

import './styles';

const Users = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.users);

  // React.useEffect(() => {
  //   fetchUsers().then((res) => setUsers(res?.data || []));
  // }, []);

  console.log('users', users);

  return (
    <React.Fragment>
      <h6> Users </h6>
      <Table striped bordered hover responsive className="users-table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => (
            <tr key={id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default Users;
