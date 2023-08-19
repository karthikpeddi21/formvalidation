import React, { useState } from 'react';

const NavigationBar = ({ onGroupingChange, onOrderingChange }) => {
  const [isDisplaying, setIsDisplaying] = useState(false);
  const [selectedGroupingOption, setSelectedGroupingOption] = useState('');
  const [selectedOrderingOption, setSelectedOrderingOption] = useState('');

  const handleDisplayClick = () => {
    setIsDisplaying(!isDisplaying);
  };

  const handleGroupingChange = (event) => {
    const newGroupingOption = event.target.value;
    setSelectedGroupingOption(newGroupingOption);
    onGroupingChange(newGroupingOption);
  };

  const handleOrderingChange = (event) => {
    const newOrderingOption = event.target.value;
    setSelectedOrderingOption(newOrderingOption);
    onOrderingChange(newOrderingOption);
  };

  return (
    <nav className="navbar">
     <div>
     <button className="display-button" onClick={handleDisplayClick}>
     Display <span className="Arrow"></span>
     </button>
     </div>
      {isDisplaying && (
        <div className="options">
          <div className="grouping-options">
            <div className="Grouping">
              Grouping
            </div>
            <div className='select'>
            <select value={selectedGroupingOption} onChange={handleGroupingChange}>
                <option value="">Select Grouping</option>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
          </div>
          <div className="ordering-options">
            <div className="Grouping">
              Ordering
            </div>
            <div className='select'>
            <select value={selectedOrderingOption} onChange={handleOrderingChange}>
                <option value="">Select Ordering</option>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
