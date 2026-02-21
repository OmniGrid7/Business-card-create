import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import data from './data'

function App() {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then(response => response.json())
      .then(data => setServerData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
   const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        )
    })

  return (
    <>
    <Header />
    {entryElements}
    </>
  )
}

export default App
 