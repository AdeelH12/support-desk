import React from "react";

function DeleteTicket({ tickets, setTickets }) {

  const deleteTask = (index) => {
    const updatedTickets = tickets.filter((_, i) => i !== index);
    setTickets(updatedTickets);
  };

  return (
    <>
      <h1>Delete a Ticket</h1>
      <ol>
        {tickets.map((t, index) => (
          <li key={index}>
            <strong>Name: {t.name}</strong><br />
            <em>Desc: {t.issue}</em><br />
            <span>Status: {t.status}</span><br />
            <button onClick={() => deleteTask(index)}>Delete Ticket</button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default DeleteTicket;
