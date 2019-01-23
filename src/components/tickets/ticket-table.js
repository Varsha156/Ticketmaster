import React from 'react'
import TicketRow from './ticket-row'
import axios from 'axios'

class TicketDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tickets:[]
        }
    }
    componentDidMount(){
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=79139a60c707cb9d').then(response=>{
            this.setState({
                tickets: response.data
            })
        })
    }
    render(){
    return(
        <div>
           <table border = '1'>
                  <thead>
                      <tr>
                          <th>Code</th>
                          <th>Name</th>
                          <th>Department</th>
                          <th>Priority</th>
                          <th>Message</th>
                          <th>Status</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.state.tickets.map(ticket=>{
                          return(
                              <TicketRow
                              key = {ticket.id}
                              code = {ticket.Code}
                              name = {ticket.name}
                              department = {ticket.Department}
                              priority = {ticket.Priority}
                              message = {ticket.Message}
                              status = {ticket.Status}/>
                          )
                      })}
                  </tbody>
                </table>
        </div>
       
    )
}
}
export default TicketDetail