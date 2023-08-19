import React, { useState, useEffect } from 'react';
import Ticket from '../Ticket/Ticket';

const KanbanBoard = ({ groupingOption, orderingOption }) => {
  const [groupedTickets, setGroupedTickets] = useState({});
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., show an error message to the user
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const newGroupedTickets = {};
  
    if (groupingOption === 'status') {
      // Grouping by status
      const statusOptions = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'];
  
      statusOptions.forEach((status) => {
        newGroupedTickets[status] = tickets.filter((ticket) => ticket.status.toLowerCase() === status.toLowerCase());
      });
    } else if (groupingOption === 'user') {
      // Grouping by user
      users.forEach((user) => {
        newGroupedTickets[user.name] = tickets.filter((ticket) => ticket.userId === user.id);
      });
    } else if (groupingOption === 'priority') {
      // Grouping by priority
      const priorityOptions = {
        0: 'No priority',
        1: 'Low',
        2: 'Medium',
        3: 'High',
        4: 'Urgent'
      };
  
      Object.keys(priorityOptions).forEach((priority) => {
        newGroupedTickets[priorityOptions[priority]] = tickets.filter((ticket) => ticket.priority === parseInt(priority));
      });
    }
  
    setGroupedTickets(newGroupedTickets);
  }, [groupingOption, tickets, users]);
  

  const sortTickets = (ticketsToSort) => {
    if (orderingOption === 'priority') {
      return ticketsToSort.sort((a, b) => b.priority - a.priority);
    } else if (orderingOption === 'title') {
      return ticketsToSort.sort((a, b) => a.title.localeCompare(b.title));
    }
    return ticketsToSort;
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div className="column" key={group}>
          <div className='alignment'>
           <div>
           <h4>{group}</h4>
           </div>
           <div className="ticket-count">{groupedTickets[group].length}
           </div>
           <div className='add'>
            <div>
            +
            </div>
            <div className="feautresadding">
             ...
            </div>
           </div>
          </div>
          {sortTickets(groupedTickets[group]).map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
