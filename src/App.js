import React, { useEffect } from 'react'
import Table from './Table'
import './App.css'

function App() {
  useEffect(() => {
    document.title = 'Test-driven Development'
  }, [])

  return (
    <div className="table-container">
      <h1>Test-driven Development</h1>
      <Table />
    </div>
  )
}

export default App
