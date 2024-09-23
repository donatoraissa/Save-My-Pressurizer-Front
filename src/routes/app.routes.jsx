import { Routes, Route, Navigate } from 'react-router-dom';

import { AddUser } from '../pages/AddUser';
import { Home } from '../pages/Home';
import { Map } from '../pages/Map';
import { Users } from '../pages/Users';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<AddUser />} />
      <Route path='/map' element={<Map />} />
      <Route path='/users' element={<Users />} />

      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}