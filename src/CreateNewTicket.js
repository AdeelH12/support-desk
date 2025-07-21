import React, { useState } from "react";
import './App.css';

function CreateNewTicket({ tickets, setTickets }) {
  const [name, setName] = useState("");
  const [issue, setIssue] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("Low");
  const [ticketID, setTicketID] = useState(null);

  function nameController(e) {
    setName(e.target.value);
    setTicketID(null);
  }

  function issueController(e) {
    setIssue(e.target.value);
  }

  function descriptionController(e) {
    setDesc(e.target.value);
  }

  function priorityController(e) {
    setPriority(e.target.value);
  }

  function buttonClick(e) {
    e.preventDefault(); 

    if (name && issue && desc && priority) {
      const newTicket = {
        id: Date.now(),
        name,
        issue,
        desc,
        priority,
        status: "open",
      };

     
      setTickets([...tickets, newTicket]);

      setTicketID(newTicket.id);

  
      setName("");
      setIssue("");
      setDesc("");
      setPriority("Low");
    } else {
      alert("Please fill out all fields.");
    }
  }

  return (
    <>
      <h1>Create A New Ticket</h1>

      <form onSubmit={buttonClick}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={nameController}
          value={name}
        />
        <br />
        <input
          type="text"
          placeholder="Issue title"
          onChange={issueController}
          value={issue}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Description"
          onChange={descriptionController}
          value={desc}
        />
        <br />
        <select onChange={priorityController} value={priority}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>

      <p>Your Ticket ID is: {ticketID}</p>
    </>
  );
}

export default CreateNewTicket;
