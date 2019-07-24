import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Loader from './components/LoadingBar';
import Tile from './components/Tiles';
import Data from './TestData.json'
import fs from 'fs'



const myData = JSON.stringify(Data)
const workingData = JSON.parse(myData)
let updatedSearch = [];



class App extends Component {
  state = {
    data : false ,
    firstName : '', 
    lastName: '',
    loading : false,
  }
 
  handleSubmit = (event) => {
    // console.log(workingData)
    // for(let i = 0; i < workingData.length; i++){
    //   if(this.state.firstName === workingData[i].firstname || this.state.lastName === workingData[i].lastname){
    //     updatedSearch.push({...workingData[i]})
    //   }
    // }
    // console.log(updatedSearch)
    this.setState({
      loading:true
    })
      alert('A name was submitted: ' + this.state.firstName + ',' + this.state.lastName);
      event.preventDefault();
      setInterval(() => {
        this.setState({
          data: true,
          firstName : '',
          lastName : '',
        })
      }, 8000);
    
  }
   handleChange = (event) =>{
    this.setState({
      [event.target.name] : event.target.value
    })
   }
   resetButton = () =>{
    this.setState({
      data : false ,
      firstName : '', 
      lastName: '',
      loading : false
    })
   }
    // dataFetch = () =>{
    //  fetch('http://localhost:9000/User')
    //  .then((results)=> console.log(results))
    //  }
   
   
  
  render() {
    let logic;
    if(!this.state.data && this.state.loading){
      logic = <Loader />
    } else if(this.state.data && this.state.loading) {
      logic = <Tile DataPeople={workingData} />
    };
    
    return (
    
      <div>
       <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} currentState={this.state.data} reset={this.resetButton} />
       <div className='MainComps'>
       {logic}
       </div>
     
       

      </div>
    );
  };
}

export default App;
