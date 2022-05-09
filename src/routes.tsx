import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  ContactForLeads,
  ContactForCustomers,
} from './screens/contact/contact_screen'
import { WhoWeSome } from './screens/who_we_some'
import { Home } from './screens/home'
import { FarMeBox } from './screens/farme_box'
import { Careers } from './screens/careers'
import { Clinics } from './screens/clinics'
import { ForCustomers } from './screens/customers'
import { ForCompanies } from './screens/companies'
import { ForDoctors } from './screens/doctors'
import { PSP } from './screens/psp'

const routes = [
  {
    path: '/para-clientes',
    name: 'customers',
    component: <ForCustomers />,
    exact: true,
    routes: [
      {
        path: 'quem-somos',
        name: 'WhoWeSome',
        component: <WhoWeSome />,
        exact: true,
      },
      {
        path: 'farme-box',
        name: 'FarMeBox',
        component: <FarMeBox />,
        exact: true,
      },
      {
        path: 'carreiras',
        name: 'Careers',
        component: <Careers />,
        exact: true,
      },
    ],
  },
  {
    path: '/para-instituicoes',
    name: 'companies',
    component: <ForCompanies />,
    exact: true,
    routes: [],
  },
  {
    path: '/para-medicos',
    name: 'doctors',
    component: <ForDoctors />,
    exact: true,
    routes: [
      {
        path: 'clinica',
        name: 'clinic',
        component: <Clinics />,
        exact: true,
      },
      {
        path: 'psp',
        name: 'psp',
        component: <PSP />,
        exact: true,
      },
    ],
  },
  {
    path: '/contato',
    name: 'contact',
    component: <ContactForLeads />,
    exact: true,
    routes: [
      {
        path: 'cliente',
        name: 'contact-customers',
        component: <ContactForCustomers />,
        exact: true,
      },
    ],
  },
  {
    path: '/',
    name: 'home',
    component: <Home />,
    exact: true,
    routes: [],
  },
]

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          key={routes.reverse()[0].name.concat(routes.reverse()[0].path)}
          element={routes.reverse()[0].component}
        />
        {routes.map((route) => (
          <>
            <Route
              key={route.name.concat(route.path)}
              element={route.component}
              index
            />
            <Route
              key={route.name}
              path={route.path}
              element={route.component}
              caseSensitive
            />
            {route.routes.map((subroute) => (
              <Route
                caseSensitive
                key={subroute.name}
                path={route.path + '/' + subroute.path}
                element={subroute.component}
              />
            ))}
          </>
        ))}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
