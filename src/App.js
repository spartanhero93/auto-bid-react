import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [response, handleResponse] = useState('NA')

  async function retrieveData() {
    try {
      const res = await fetch('http://localhost:3004/test')
      const {data} = await res.json()
      handleResponse(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>

        <div>
          <h2>Please press the button</h2>
          <h3>Info from button <span>{response}</span></h3>
        </div>
        <div>
          <button onClick={() => retrieveData()}>Fetch data</button>
        </div>
      </header>
    </div>
  );
}

export default App;
