import React, { useState } from 'react'
import clientData from './data'
import './App.css'

function App() {

  const [client, setclient] = useState(clientData);

  return (
    <div>
      <table>

        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
        </tr>

        {
          client.map((client) => (
            <tr>

              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.city}</td>

            </tr>
          ))
        }

      </table>
    </div>
  )
}

export default App




























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
