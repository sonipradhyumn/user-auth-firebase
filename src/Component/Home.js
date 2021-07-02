import React, {useState, useEffect} from 'react';
import fire from '../config/fire';

function Home () {
  const db = fire.firestore ();
    const [u, setU] = useState ([]);
    const [trigger, settrigger] = useState(false)
//Fetching all the data into U state
  useEffect(() => {
    (async() => {
        let temp = []
        const response =  db.collection ('users');
        const data = await response.get();
        data.docs.map(item => {
          //console.log (item.data().name);         
          temp.push(item.data ());
          setU (temp);
        //   Renderr (item.data ());
        });
        settrigger(true)
        //console.log(temp)
      })() 
    
  }, [])
//is user press logout button then signing out
  function logout () {
    fire.auth ().signOut ();
    //console.log (fire.firestore);
  }

  return (
    <div> <span className=''>
      <h1>You are loged in !!!</h1>
      <button  onClick={logout}>Logout..</button>
      </span>
      <h3>All Users Details</h3>
      <div className='parent'>
      
      {u.map((item,i)=>{return(<div className='head' key={i}><h4>Name- {item.name}</h4>
        <span className='sub'>Email -{item.email}</span>
        <span className='sub' >Phone No -{item.phoneNo}</span>
        <span className='sub'>DOB -{item.dob}</span>        
      </div>)})}
    </div>
    </div>
  );
}

export default Home;
