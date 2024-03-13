import React, { useState } from "react";
import axios from 'axios';
import { useFormData } from "./Formcontext";
import {  Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateFormData } from "../components/redux/formDataSlice";
// import { updateFormData } from "../components/redux/actions";

const Register = ({updateData}) => {
    // const [selectedImage, setSelectedImage] = useState('');
  const intialvalues = {
    email: "",
    password: "",
    confirmpassword: "",
    fullname: "",
    dob: "",
    // candidatephoto: null
  };

  const navigate=useNavigate();
  const dispatch=useDispatch();
  

//   const handleImageChange = (e) => {
//     // console.log(e.target);
//     const file = e.target.files[0];
//     setSelectedImage(file);
//     // console.log(file);
   
//     // const file = e.target.files[0];
//     setFormvalues({
//       ...formValues,
//       candidatephoto: file,
//     });

//   };


  const [formValues, setFormvalues] = useState(intialvalues);
  const handleInputChange = (event) => {
    setFormvalues({ ...formValues, [event.target.name]: event.target.value });
  };

  const {setFormValues1}=useFormData();

  const onSubmitform = (e) => {
    e.preventDefault();
    // Create a FormData object
    // const formDataObject = new FormData();
    // console.log(FormData.imageName);
    // formDataObject.append('candidatephoto', FormData.imageFile);
    setFormValues1(formValues);
    console.log("The form was submitted: ", formValues);
    // dispatch(updateFormData(formValues));
    dispatch(updateFormData(formValues))
    updateData(formValues)
    navigate('/verification')
    axios.post('http://localhost:5000/upload',formValues).then((res)=>console.log(res)).catch((err)=>console.log(err))

  };
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-5 card">
          <h1>Register</h1>
          <div>
            <label htmlFor="fullname" className="form-label mt-3">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              className="form-control"
              value={formValues.fullname}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="email" className="form-label mt-3">
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="password" className="form-label mt-3">
              Password{" "}
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formValues.password}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="confirmpassword" className="form-label mt-3">
              Confirm password{" "}
            </label>
            <input
              type="password"
              name="confirmpassword"
              className="form-control"
              value={formValues.confirmpassword}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="dob" className="form-label mt-3">
              Date of birth{" "}
            </label>
            <input
              type="date"
              name="dob"
              className="form-control mb-3"
              value={formValues.dob}
              onChange={handleInputChange}
              required
            />
            {/* <label htmlFor="candidatephoto" className="form-label mt-3">
              candidatephoto
            </label>
            <input
              type="file"
              name="candidatephoto"
              className="form-control"
              capture="user"
              accept="image/*"
              onChange={handleImageChange}
            //   value={formValues.candidatephoto}
              required
            />
            {selectedImage && (
              <div>
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              </div>
            )} */}
             <button className="btn btn-primary form-control mb-3 font-weight-bold" onClick={onSubmitform}>Register </button>
             <p className="text-start text-decoration-none"><Link to='/' className="text-decoration-none">
Already Registered? Back to Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
