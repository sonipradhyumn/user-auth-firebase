import React, {Component} from 'react';
import {aBrowserRouter, Route, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import fire from './config/fire';
import Login from './Component/Login';
import Home from './Component/Home';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      user:{}
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }else{
        this.setState({user:null})
      }
    })
  }
  render () {
    return(
    
    <div className='App'>
    {/* Starting of the application */}
    {this.state.user?(<Home/>):(<Login/>)}
    </div>
    )
  }
}

export default App;
