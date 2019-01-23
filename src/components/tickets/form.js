import React from 'react';
import axios from 'axios'


class TableForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            message: '',
            //code: '',
            department: '',
            priority:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange(event){
        this.setState({
            [event.target.name] : event.target.value

        })
    }
    handleSubmit(event) {
        event.preventDefault() 
        const formData = {
            name: this.state.name, 
            department: this.state.department,
            priority: this.state.priority, 
            message: this.state.message
        }
        
      axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=79139a60c707cb9d', formData).then(response => {          
        console.log(response.data)  
         {
             let newData = response.data
             this.props.handleNewTicket(newData)
            this.props.handleResponse(response.data)
            // this.setState({
            //     name: '',
            //     department: '',
            //     priority: '',
            //     message: '',
            //     hasServerError: false
            // })
        }
    })
}
handleReset=(event)=>{
    event.preventDefault()
    this.setState({
        name:'',
        department:'',
        priority:'',
        message:''
    })
    this.refs.form.reset()
}

   
    render(){

        return(
            <div>
                <h2>Add ticket</h2>
              <form onSubmit = {this.handleSubmit} ref= 'form'>
                  <label>Name
                      <input type = 'text' value = {this.state.name} name = 'name' onChange = {this.handleInputChange}/>
                  </label><br/>
                  <label>Department
                    
                    <select name="department"  onChange={this.handleInputChange}>
                            <option value=""> Select </option>
                            <option value="Technical"> Technical </option>
                            <option value="Hr"> Hr </option>
                            <option value="Sales"> Sales </option>
                        </select>
                  </label><br/>
                  <label>Priority :<br/>
                  <label>
                     <input type = 'radio' value="High" 
                      onChange={this.handleInputChange} name="priority" />
                      
                  </label>High<br/>
                  </label>
                  <label>
                     <input type = 'radio' value="Medium" 
                      onChange={this.handleInputChange} name="priority" />
                  </label>Medium<br/>
                  <label>
                     <input type = 'radio' value='Low'
                      onChange={this.handleInputChange} name="priority" />
                  </label>Low<br/>
                  <label>Message
                      <textarea value = {this.state.message} onChange = {this.handleInputChange} name="message"  />
                  </label><br/>
                  <label>
                      <input type = 'submit'  value ='submit' />
                  </label>
                  <label>
                      <input type = 'reset' value = 'reset' onClick= {this.handleReset}/>
                  </label>
              </form>
            </div>
        )
    }
}
export default TableForm