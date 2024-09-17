import { Routes, Route } from 'react-router-dom';

import { AddUser } from '../pages/AddUser';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';
import { Map } from '../pages/Map';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/add' element={<AddUser />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/home' element={<Home />} />
      <Route path='/map' element={<Map />} />
    </Routes>
  )
}