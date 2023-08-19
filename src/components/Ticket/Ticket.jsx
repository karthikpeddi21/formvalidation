import React from 'react';
const Ticket = ({ ticket }) => {
  return (
    <div className="ticket">
      <div className="ticket-feature">
        <span>{ticket.id}</span>
        <h5>{ticket.title}</h5>
        <div className="tag-container">
          <div className="circle"></div>
          <div>{ticket.tag.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}</div>
        </div>
      </div>
    </div>
  )
};

export default Ticket;
