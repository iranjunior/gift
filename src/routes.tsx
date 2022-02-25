import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Contact } from './screens/contact'
import { WhoWeSome } from './screens/who_we_some'
import { Home } from './screens/home'
import { FarMeBox } from './screens/farme_box'
import { Careers } from './screens/careers'

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
  {
    path: '/quem-somos',
    name: 'WhoWeSome',
    component: <WhoWeSome />,
    exact: true,
  },
  {
    path: '/farme-box',
    name: 'FarMeBox',
    component: <FarMeBox />,
    exact: true,
  },
  {
    path: '/carreiras',
    name: 'Careers',
    component: <Careers />,
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
