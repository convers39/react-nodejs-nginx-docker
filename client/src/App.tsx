import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [test, setTest] = useState('')
  useEffect(() => {
    const testFetch = async () => {
      const res = await axios.get('/api/test')
      console.log(res)
      setTest(JSON.stringify(res.data))
    }
    testFetch()
  }, [])
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <h2>{test}</h2>
      </header>
    </div>
  )
}

export default App
