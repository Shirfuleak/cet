import React, { useState } from "react";
import {  useNavigate, Link } from "react-router-dom";

const Home = () => {
    const intialvalues={
        email:'',
        password:''
    }
    const navigate=useNavigate()
    const [formValues,setFormvalues]=useState(intialvalues);
    const handleInputChange= (event) =>{
        setFormvalues({...formValues ,[event.target.name]: event.target.value}) 
    }

    const  onSubmitform=(e)=>{
        e.preventDefault();
        console.log("The form was submitted: ", formValues);
        if(formValues.email==='test@gmail.com'  && formValues.password === '12345'){
            alert('Logged In Successfully');
        }else{
           alert('Invalid Email or Password'); 
        }
    }
  return (
    
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-sm-12 card">
        <h2 className="font-weight-bold my-3">Sign In</h2>
        <div className="row">
            <div className="col-md-6">
            <label htmlFor="email" className="form-label mt-3">Email address: </label>
            <input type="email" value={formValues.email} name="email" className="form-control" onChange={handleInputChange}/>
            <label htmlFor="password" className="form-label mt-3">Password </label>
            <input type="password" value={formValues.password} name="password" className="form-control" onChange={handleInputChange}/>
             <p className="text-end text-decoration-none"><Link to='register' className="text-decoration-none">Forget Password</Link></p>
             <button className="btn btn-primary form-control my-2" onClick={onSubmitform}>Sign In </button>
            </div>

            <div className="col-md-6 container  d-flex flex-column justify-content-center align-items-center">
             <h1 >New User ?</h1>
             {/* <Link to='register' className="btn btn-primary form-control">  */}
             <button className="btn btn-primary form-control " onClick={()=>{navigate('register')}}> Register </button>
             {/* </Link>  */}
            </div>
        <div className="text-center my-3">
           <h5> How to Register - User Manual Tutorial Video </h5> 
           <h5 className="">How to Raise a Ticket</h5>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
