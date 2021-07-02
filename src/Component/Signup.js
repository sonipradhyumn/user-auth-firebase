import React, {useState} from 'react';
import fire from '../config/fire';
import Login from './Login';
import {
  Person,
  Lock,
  PhoneAndroid,
  PersonOutline,
  Event,
} from '@material-ui/icons';

function Signup () {
  const [data, setData] = useState ({
    email: '',
    phoneNo: '',
    name: '',
    dob: '',
    password: '',
  });
  const [loader, setLoader] = useState (false);
  const [sign, setsign] = useState (false);
 
//bringing value from input field
  function handelchange (e) {
    const {name, value} = e.target;
    if (name && value) {
      setData ({
        ...data,
        [name]: value,
      });
    }
  }
  //authanticating and adding data in Db
  function signup (e) {
    e.preventDefault ();
    fire
      .auth ()
      .createUserWithEmailAndPassword (data.email, data.password)
      .then (data => {
        console.log (data);
      })
      .catch (err => {
        console.log (err);
        
      });

    var db = fire.firestore ();
    db.collection ('users')
      .add ({
        email: data.email,
        phoneNo: data.phoneNo,
        name: data.name,
        dob: data.dob,
      })
      .then (() => {
        setLoader (true);
      })
      .catch (e => {
        alert ('Error', e.message);
        setLoader (true);
      });
  }
  return sign
    ? <Login />
    : <div className=" main main1 ">
        <h2>Signup</h2>
        <form className="forms">
          <span className="merge">
            <button className="proper"><Person /></button>

            <input
              className="box1"
              name="email"
              type="email"
              id="email"
              placeholder="enter email address"
              onChange={handelchange}
              value={data.email}
            />
          </span>
          <span className="merge">
            <button className="proper"><Lock /></button>
            <input
              className="box1"
              name="password"
              type="password"
              id="password"
              placeholder="enter password"
              onChange={handelchange}
              value={data.password}
            />
          </span>
          <span className="merge">
            <button className="proper"><PersonOutline /></button>
            <input
              className="box1"
              name="name"
              type="text"
              id="name"
              placeholder="enter name"
              onChange={handelchange}
              value={data.name}
            />
          </span>
          <span className="merge">
            <button className="proper"><PhoneAndroid /></button>
            <input
              className="box1"
              name="phoneNo"
              type="tel"
              id="phoneNo"
              placeholder="enter phone No"
              onChange={handelchange}
              value={data.phoneNo}
            />
          </span>

          <span className="merge">
            <button className="proper"><Event /></button>
            <input
              className="box1"
              name="dob"
              type="date"
              id="dob"
              placeholder="enter DOB"
              onChange={handelchange}
              value={data.dob}
            />
          </span>
 
          <button
            className="button"
            style={loader ? {background: '#fff',} : {background: '#ccc'}}
            onClick={signup}
          >
            Signup
          </button>
          <span className="dot" onClick={() => setsign (true)}>
            {' '}Go back to login screen
          </span>
        </form>
      </div>;
}

export default Signup;
