import React, { useState } from "react";

function UpdateTicketStatus({ tickets, setTickets }) {
  const [status, setStatus] = useState("-");
  const [id, setID] = useState("");
  const [message, setMessage] = useState("");

  function ticketID(e) {
    setID(e.target.value);
  }

  function statusController(e) {
    setStatus(e.target.value);
  }

  function submitButton(e) {
    e.preventDefault(); 
    const ticketIndex = tickets.findIndex(ticket => ticket.id === Number(id));
    if (ticketIndex !== -1) {
      const updatedTickets = [...tickets];
      updatedTickets[ticketIndex] = {
        ...updatedTickets[ticketIndex],
        status: status,
      };
      setTickets(updatedTickets);
      setMessage(`Ticket ${id} status updated to ${status}`);
    } else {
      setMessage("Ticket does not exist");
    }
  }

  function reset() {
    setID("");
    setStatus("-");
    setMessage("");
  }

  return (
    <>
      <h1>Update Ticket Status</h1>

      <form
        onSubmit={submitButton}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          margin: "auto",
          gap: "12px",
        }}
      >
        <input
          type="number"
          placeholder="Enter Ticket ID"
          onChange={ticketID}
          value={id}
          style={{ padding: "8px", fontSize: "1rem" }}
        />

        <select
          onChange={statusController}
          value={status}
          style={{ padding: "8px", fontSize: "1rem" }}
        >
          <option value="-">-</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              fontSize: "1rem",
              cursor: "pointer",
              flex: 1,
              marginRight: "8px",
            }}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={reset}
            style={{
              padding: "8px 16px",
              fontSize: "1rem",
              cursor: "pointer",
              flex: 1,
            }}
          >
            Reset form
          </button>
        </div>
      </form>

      <h4 style={{ textAlign: "center", marginTop: "20px" }}>{message}</h4>
    </>
  );
}

export default UpdateTicketStatus;
