import { Routes, Route } from 'react-router-dom';

import { AddUser } from '../pages/AddUser';
import { Home } from '../pages/Home';
import { Map } from '../pages/Map';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<AddUser />} />
      <Route path='/map' element={<Map />} />
    </Routes>
  )
}