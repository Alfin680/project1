import './Signup.css'
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Signup = () => {
  const {register,handleSubmit}=useForm();
  var [result,setResult]=useState({});
  const testClick=(val)=>{
    axios.post('http://localhost:15000/acc/Signup',val).then((response)=>{
        console.log(response.data);
        alert("registration completed");
        setResult(result=response.data);
    })
  }

  return (
    <div className='Signup'>
      <div className='Signup_form'>
        <Typography 
         variant = 'h4' 
         style={{fontFamily : 'Segoe UI', color: "brown", fontWeight : "bold"}}
        >
          SIGN UP
        </Typography>
        <br></br>
        <TextField 
         required 
         id="name" 
         {...register('name')}
         label="Name" 
         variant="outlined"
         helperText="Please enter your name"
         style={{ margin: "0px 5px 0px 10px" }}
        />
        <TextField
         required
         id="email"
         {...register('email')}
         label="Email"
         variant="outlined"
         helperText="Please enter your email"
         style={{ margin: "0px 5px 0px 1px" }}
        />
        <TextField
         required
         id="PhoneNumber"
         {...register('PhoneNumber')}
         label="Phone Number"
         variant="outlined"
         helperText="Please enter your phone number"
        />
        <br></br><br></br>
        <TextField
         required
         id="re_password"
         {...register('re_password')}
         label="Password"
         type="password"
         variant="outlined"
         helperText="Please enter your password"
         style={{ margin: "0px 5px 0px 10px" }}
        />
        <TextField
          required
          id="password"
          {...register('password')}
          label="Password"
          type="password"
          variant="outlined"
          helperText="Please confirm your password"
        />
        <br></br><br></br>
        <TextField
         required
         id="Age"
         {...register('Age')}
         label="Age"
         variant="outlined"
         helperText="Please enter your age"
         style={{ margin: "0px 5px 0px 10px" }}
        />
        <TextField
         required
         id="Height"
         {...register('Height')}
         label="Height"
         variant="outlined"
         helperText="Please enter your height"
         style={{ margin: "0px 5px 0px 10px" }}
        />
        <TextField
         required
         id="Weight"
         {...register('Weight')}
         label="Weight"
         variant="outlined"
         helperText="Please enter your weight"
         style={{ margin: "0px 5px 0px 10px" }}
        />
        <br></br><br></br>
        <Button
        onClick={handleSubmit (testClick)}
         variant='outlined'
         color='inherit'
         style={{margin: "0px 3px 0px 10px", fontSize: "14px", color: "red"}}
        >
          SIGN UP
        </Button>
        <br></br>
        <Button
        variant = 'outlined'
        color = 'inherit'
        style = {{margin: "10px 3px 0px 10px", fontSize: "14px", color: "red"}}
      >
        <Link to='/Login' style={{ textDecoration: 'none', color: "red" }} >
          Login
       </Link>
      </Button>
      </div>
    </div>
  )
}

export default Signup