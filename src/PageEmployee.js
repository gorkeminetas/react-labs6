import React from 'react'

class PageEmployee extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:" ",age:0,company:" ",email:" ",isActive:false
        }
        this.nameChanged=this.nameChanged.bind(this);
        this.ageChanged=this.ageChanged.bind(this);
        this.companyChanged=this.companyChanged.bind(this);
        this.emailChanged=this.emailChanged.bind(this);
        this.isActiveChanged=this.isActiveChanged.bind(this);
    }
    nameChanged(ev){
        this.setState({name:ev.target.value});
    }
    ageChanged(ev){
        this.setState({age:ev.target.value});
    }
    companyChanged(ev){
        this.setState({company:ev.target.value});
    }
    emailChanged(ev){
        this.setState({email:ev.target.value});
    }
    isActiveChanged(ev){
        this.setState({isActive:ev.target.value});
    }
    render(){
        return(
            <div>
            <label>Name</label>
            <input type="text" value={this.state.name} onChange={this.nameChanged}></input>
            <label>Age</label>
            <input type="number" value={this.state.age} onChange={this.ageChanged}></input>
            <label>Company</label>
            <input type="text" value={this.state.company} onChange={this.companyChanged}></input>
            <label>E-mail</label>
            <input type="text" value={this.state.email} onChange={this.emailChanged}></input>
            <label>Status</label>
            <select value={isActive} onChange={this.isActiveChanged} >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>
            <button>Submit</button>
            </div>
        )   
    }
}

export default PageEmployee