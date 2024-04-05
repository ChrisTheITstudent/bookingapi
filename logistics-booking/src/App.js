import { useEffect, useState } from 'react';
import './App.css';
import AvailabilityTable from './componants/AvailabilityTable';
import { fetchAppointments } from './scripts/fetchData';

function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAppointments();
      setContacts(data);
    }
    fetchData();
  }
  , [contacts]);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <p>Login</p>
          </li>
          <li>
            <p>Register</p>
          </li>
          <li>
            <p>Dashboard</p>
          </li>
        </ul>
      </nav>
      
      <AvailabilityTable />
      
      <p>{contacts}</p>
      
    </div>
  );
}

export default App;
