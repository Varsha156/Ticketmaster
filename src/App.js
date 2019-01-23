import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import TicketTable from './components/tickets/ticket-table';
import Tableform from './components/tickets/form';



class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <div>
        <h2>Ticket Master</h2>
        <TicketTable/>
        <Tableform/>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
