import React,{useState} from 'react'
import fire from '../config/fire';
import Signup from './Signup';
import {Person, Lock}from '@material-ui/icons';

function Login() {
    const [log, setLog] = useState({email:'',password:''})
    const [sign,setsign]=useState(false)

//Authanticating with firebase
    function login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(log.email,log.password).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err);
            alert ('Email or Password is incorrect.!!!');
        })
    }
//Handling the data from input
    function handelchange(e){
        const {name, value} = e.target;
        if (name && value) {
            // console.log(`name- ${name}  value- ${value}`)
            setLog ({
            ...log,
            [name]: value,
          });
        
        }
    }
    
    return (<div className='alignment'>
       {sign ?
        
            <Signup/>
                    
            :
            <div className = 'main'>
            <h2>Login</h2>
            <span className='text' onClick={()=>setsign(true)}>Create an account</span>
            
            <span className='merge'>
            <button className='proper'><Person></Person></button>
                <input className='box'
                    name='email'
                    type='email'
                    id='email'
                    placeholder='enter email address'
                    onChange={handelchange}
                     value={log.email}
                    >
                </input>
                </span>
                <span className='merge'> <button className='proper'><Lock></Lock></button>
                <input className='box'
                    name='password'
                    type='password'
                    id='password'
                    placeholder='enter password'
                    onChange={handelchange}
                    value={log.password}
                    >
                </input>
                </span>
                
                <span className='seprate' >
                    <button className='button' onClick={login}>Login</button>
                 </span>
            
        </div>}
        </div>)
}

export default Login
