
import { useState } from 'react';
import './App.css';
import JSONDATA from './MOCK_DATA.json';

function App() {
  let [search,setSearch] = useState('');
  

  return (
    <div className='App'>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
      {JSONDATA.filter(user => user.first_name.toLowerCase().includes(search.toLowerCase())).map(user => <li key={user.id}>{user.first_name}</li>)}
      </ul>
    </div>
  );
}

export default App
