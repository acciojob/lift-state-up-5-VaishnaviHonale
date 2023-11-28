import React,{useState} from 'react';

const login = (isLoggedIn,setIsLoggedIn) => {

    const [data,setData]=useState({username:'',password:''});

    const handleChange = e =>{

        setData({...data,[e.target.name]: e.target.value});
    };
  return (
    <div>
      {isLoggedIn ? (<p>You are logged in! </p>):(
      <from>
        <div>
            <label htmlFor="username">username:</label>
            <input type="text" id="username" name="Username" value={data.username}onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password"name="password"id="password"value={data.password}onChange={handleChange}/>
            </div>
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        
        </from>
      )}
    </div>
  );
};

export default login;
