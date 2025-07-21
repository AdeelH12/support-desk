import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import CreateNewTicket from './CreateNewTicket';
import ViewTicket from './ViewTickets';
import ViewTicketByID from './ViewTicketByID';
import UpdateTicketStatus from './UpdateTicketStatus';
import DeleteTicket from './DeleteTicket';
import Login from "./Login";
import { useEffect, useState } from "react";

function App() {


  const [isLoggedin, setIsLoggedIn] = useState(() =>{

    return localStorage.getItem("isLoggedIn") === "true";
  });

  const [tickets, setTickets] = useState(() => {
    const storedTickets = localStorage.getItem("tickets");
    return storedTickets ? JSON.parse(storedTickets) : [];
  });


  useEffect(() => {

    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets])

  function handleLogout(){

    setIsLoggedIn(false);
  }

  if(!isLoggedin) {

    return <Login onLogin={setIsLoggedIn} />
  }
  return (
    <Router>
      <div className="App">
        <h1>Welcome To Support Desk</h1>
    <button onClick={handleLogout} style={{float: "right", margin: "10px"}}>
      Logout
    </button>
        <nav>
          <ul>
            <li><Link to="/create">Create New Ticket</Link></li>
            <li><Link to="/view-all">View All Tickets</Link></li>
            <li><Link to="/view-id">View Ticket By ID</Link></li>
            <li><Link to="/update-status">Update Ticket Status</Link></li>
            <li><Link to="/delete">Delete a Ticket</Link></li>
            
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ViewTicket tickets={tickets} />} />
          <Route path="/create" element={<CreateNewTicket tickets={tickets} setTickets={setTickets} />} />
          <Route path="/view-all" element={<ViewTicket tickets={tickets} />} />
          <Route path="/view-id" element={<ViewTicketByID tickets={tickets} />} />
          <Route path="/update-status" element={<UpdateTicketStatus tickets={tickets} setTickets={setTickets} />} />
          <Route path="/delete" element={<DeleteTicket tickets={tickets} setTickets={setTickets} />} />
           <Route path="*" element={<Navigate to="/view-all" />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
