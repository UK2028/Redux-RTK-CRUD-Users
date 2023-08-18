import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, UserForm } from '../pages'

export const AllRoutes = () => {
  return (
    <main className='max-w-screen-xl mx-auto'>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/edit/:id' element={<UserForm/>} key="edit" />
          <Route path='/add' element={<UserForm/>} key="add" />
      </Routes>
    </main>
  )
}
