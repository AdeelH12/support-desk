import React from "react";
import { useEffect, useState } from "react";

function ViewTicket({tickets}) {

    if(tickets.length===0){

        return<p>No Tickets Found. Please create a new ticket</p>
    }
  
    return <>

        <h1>
            All Tickets
        </h1>

        <ol>
            {tickets.map((t, index) => (

                <li key={index}>
                    <strong>ID: {t.id}</strong><br/>
                    <em>Name: {t.name}</em><br/>
                    <em>Issue: {t.issue}</em><br/>
                    <em>Desc: {t.desc}</em><br/>
                    <span>Priority: {t.priority}</span>
                </li>
            ))}
        </ol>


    </>
}

export default ViewTicket;