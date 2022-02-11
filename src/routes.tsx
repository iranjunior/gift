import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Contact } from './screens/contact'
import { Home } from './screens/home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: <Home />,
    exact: true,
  },
  {
    path: '/contato',
    name: 'contact',
    component: <Contact />,
    exact: true,
  },
]

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route key={route.name} path={route.path} element={route.component} />
      ))}
    </Routes>
  </BrowserRouter>
)
