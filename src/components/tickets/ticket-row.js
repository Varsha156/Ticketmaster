import React from 'react';
import axios from 'axios';

class TicketRow extends React.Component{
    constructor(){
        super()
        this.state = {            
            checkedItems: new Map()           
        }
        this.status = this.status.bind(this) 
    }
    
    checkHandler= (event)=>{
        let ticket = this.props.data        
        console.log(event.target.name)
        let name = event.target.name
        let isChecked = event.target.checked
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(name, isChecked) }))
        if(isChecked){
            ticket.status = 'completed'                   
        }else{
            ticket.status = 'open'              
        }
        
        axios.put(`http://dct-api-data.herokuapp.com/tickets/${ticket.ticket_code}?api_key=79139a60c707cb9d`, ticket).then((response)=>{
            console.log(response.data)
            let data = response.data
            this.props.statusUpdate(data)
                
            })
        }

        status(ticket){        
            if(ticket.status === 'open'){
                return false
            } else {
                return true
            }            
        }

        render(){
            let ticket = this.props.data
            return (
                <tr>
                    <td>{this.props.data.ticket_code}</td>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.department}</td>
                    <td>{this.props.data.priority}</td>
                    <td>{this.props.data.message}</td>
                    <td>{this.props.data.status}</td>
                    <td><input type='checkbox' onChange={this.checkHandler} checked={this.status(ticket) || this.state.checkedItems.get(ticket.id)}  name={ticket.id}/> </td>
              
                </tr>
    
        )

    }
    
}

 export default TicketRow