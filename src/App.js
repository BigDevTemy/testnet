import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getByTestId } from '@testing-library/react';

function App() {

  const [email, setemail] =  useState();
  const [password, setpassword] =  useState();

  useEffect(()=>{
      getTest()
  },[])

  const getTest = ()=>{
    fetch('https://jupit.app/testnet',{
      headers:{
        'Content-Type':'application/json',

      },
      method:'GET'
    })
    .then(result=>console.log(result))
    .catch((err)=>{
      console.log('FirstCall',err)
    })
  }
  const CheckLogin = (e)=>{
    e.preventDefault();
    console.log(email,password)
    fetch('https://jupit.app/users/login',{
      headers:{
        'Content-Type':'application/json',

      },
      method:'POST',
      body:JSON.stringify({email,password})

    })
    .then((res)=>res.json())
    .then(result=>console.log(result))
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className="App">
      <div className='text-red-500 text-3xl mt-10' style={{marginTop:10,marginBottom:10,fontSize:20}}>Login</div>
      <div>
          <input type="text" placeholder='Email' style={{marginTop:10}} onChange={(e)=>setemail(e.target.value)} />
      </div>
      <div>
        <input type="secret" placeholder='password' style={{marginTop:10}} onChange={(e)=>setpassword(e.target.value)} />
      </div>

      <div>
        <input type="submit" value="Login" onClick={(e)=>{CheckLogin(e)}} style={{marginTop:10}} />
      </div>

    </div>
  );
}

export default App;
