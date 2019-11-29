import React from 'react'
import PageEmployee from './PageEmployee'
import { render } from 'react-dom'

class PageEmployeeList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employees:[],
            isLoading:true
        }
    }
    componentDidMount(){
        fetch("http://localhost:3004/employees")
        .then(res => res.json())
        .then(res => this.setState({employees:res}))
        .then(() => this.setState({isLoading:false}));
    }


    render(){
       
        return this.state.isLoading ? <p>Loading...</p> :(
        <div>

         {this.state.employees.map(employee=> <Employee key={employee._id} employee={employee}/>)}
        
        </div>

        )

       
    }
}