import React, { useState, useEffect } from 'react';
import NavigationBar from './components/NavigatonBar';
import KanbanBoard from './components/kanbanboard/KanbanBoard';
import './App.css';

const App = () => {
  const [groupingOption, setGroupingOption] = useState('');
  const [orderingOption, setOrderingOption] = useState('');

  useEffect(() => {
    const savedGroupingOption = localStorage.getItem('groupingOption');
    const savedOrderingOption = localStorage.getItem('orderingOption');
    if (savedGroupingOption) {
      setGroupingOption(savedGroupingOption);
    }
    if (savedOrderingOption) {
      setOrderingOption(savedOrderingOption);
    }
  }, []);

  const handleGroupingChange = (option) => {
    localStorage.setItem('groupingOption', option);
    setGroupingOption(option);
  };

  const handleOrderingChange = (option) => {
    localStorage.setItem('orderingOption', option);
    setOrderingOption(option);
  };

  return (
    <div className="app">
      <NavigationBar
        onGroupingChange={handleGroupingChange}
        onOrderingChange={handleOrderingChange}
      />
      <KanbanBoard groupingOption={groupingOption} orderingOption={orderingOption} />
    </div>
  );
};

export default App;
