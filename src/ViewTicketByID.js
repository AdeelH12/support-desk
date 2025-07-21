import React, { useState, useCallback } from "react";

function ViewTicketByID({ tickets }) {
  const [id, setID] = useState("");
  const [filteredTickets, setFilteredTickets] = useState([]);

  function idInput(e) {
    setID(e.target.value);
  }

  const myFunc = useCallback(() => {
    const matchingTicket = tickets.filter(ticket => ticket.id === Number(id));
    setFilteredTickets(matchingTicket);
  }, [id, tickets]);

  return (
    <>
      <h1>Search Ticket By ID</h1>

      <form
        onSubmit={e => {
          e.preventDefault();
          myFunc();
        }}
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px", margin: "auto", gap: "12px" }}
      >
        <input
          type="text"
          placeholder="Enter ID"
          onChange={idInput}
          value={id}
          style={{ padding: "8px", fontSize: "1rem" }}
        />
        <button type="submit" style={{ padding: "8px", fontSize: "1rem", cursor: "pointer" }}>
          Submit
        </button>
      </form>

      <ol style={{ maxWidth: "600px", margin: "20px auto" }}>
        {filteredTickets.map((t, index) => (
          <li key={index} style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
            <strong>Ticket ID: {t.id}</strong><br />
            <em>Name: {t.name}</em><br />
            <em>Issue: {t.issue}</em><br />
            <em>Description: {t.desc}</em><br />
            <em>Status: {t.status}</em><br />
            <span>Priority: {t.priority}</span>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ViewTicketByID;
