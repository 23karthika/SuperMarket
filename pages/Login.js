import React,{useState} from 'react'
import Layout from '../components/Layout/Layout'
import { Box,TextField,Button, Typography } from '@mui/material'

const Login = () => {
    const [isSignup,setIsSignup] = useState(false);
    const [input,setInput] = useState(
        {
            name:"",
            email:"",
            password:"",
        }
    );
    const handleChange = (event) => {
        setInput((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value
        }));
    };
    const handleSubmit = (event) => {
        event.perventDefault();
        console.log(input);
    }
    const resetState = () => {
        setIsSignup(!isSignup);
        setInput({name:'',email:"",password:""})
    }
  return (
    <div style={{height:'100vh', backgroundImage:`url(https://img.freepik.com/premium-vector/beer-snacks-hand-drawn-seamless-pattern_373337-12.jpg?w=740)`,marginTop:'-30px' , backgroundSize:'cover' , justifyContent:'center', alignItems:'center'}}>
        <form onSubmit={handleSubmit}>
        <Box display={"flex"} flexDirection={"column"} maxWidth={400} alignItems={"center"} margin={"auto"}
             padding={3} borderRadius={5} boxShadow={'4px 4px 10px #ccc'} marginTop="2rem" marginBottom="2rem" bgcolor="white">
                <Typography variant='h2' padding={3} textAlign={"center"}>{isSignup ? "Signup" : "Login"}</Typography>
                { isSignup && (<TextField 
                        onChange={handleChange}
                        name="name" 
                        value={input.name}
                        margin="normal" 
                        type={'text'} 
                        variant="outlined" 
                        placeholder="UserName"/>)}
        
        <TextField 
        name='email'
        onChange={handleChange}
        value={input.email}
         placeholder='Email' 
         type='email'
         variant='outlined'
         margin='normal' />
        
        <TextField name='password'
        onChange={handleChange}
        value={input.password}
         placeholder='Password' 
         type='password'
         variant='outlined'
         margin='normal' />
         
         <Button type='submit' sx={{marginTop:3 , borderRadius:3}}
         variant='contained' color="warning">
            {isSignup ? "Signup" : "Login"}
         </Button>
         <Button onClick={resetState} sx={{marginTop:3 , borderRadius:3}} >
                        Change to {isSignup ? "Login" : "Signup"}
                        </Button>
         </Box>
         </form>
    </div>
  )
}

export default Login;
