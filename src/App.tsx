import React from 'react'
import { Router } from './routes'
import { DataProvider } from './context/data'
import data from './assets/strings.json'

function App() {
  return (
    <DataProvider value={data}>
      <div className="App">
        <Router />
      </div>
    </DataProvider>
  )
}

export default App
