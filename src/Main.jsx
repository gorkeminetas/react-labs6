import React from 'react'
import Employee from './Employee'

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employee:[],
            isLoading: true

        }
    }
    
    componentDidMount(){
        fetch("http://localhost:3004/employees")
        .then(res => res.json())
        .then(res => this.setState({employee:res}))
        .then(() => this.setState({isLoading:false}));
    }


    render(){
       
        return this.state.isLoading ? <p>Loading...</p> :(
        <div>

         {this.state.employee.map(Employee)}
        
        </div>

        )

       
    }
}


export default Main