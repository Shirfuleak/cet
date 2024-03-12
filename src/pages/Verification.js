import React from 'react'
import { useFormData } from './Formcontext'
import { useSelector } from 'react-redux';

const Verification = ({userdata}) => {
  const {formData}=useFormData();
  const formData1=useSelector((state)=>state.formData)
  console.log(formData);
  return (
    <div className='container card col-md-6 col-sm-12 my-5 py-5 px-5'>
        <h1>Verify Your Email</h1>
        <p>
        Email verification
An email with instructions to verify your email address has ben sent to your address test1234567@gmail.com. Please visit your registered email address for verification.

Haven't received a verification code in your email?
Click here to re-send the email. In case you do not find the email in your Primary Inbox, please check your Spam folder. In case the email get's delivered in your spam folder, please mark the email as "Not a Spam" and proceed with the Email Verification

Once, the email is verified, please Click here to re-login


        </p>
        {
          formData && (
            <div>email{formData.email}</div>
          )
        }
          {
          formData1 && (
            <div>email{formData1.email}</div>
          )
        }
        {
          <h1>{userdata?.email}</h1>
        }
    </div>
  )
}

export default Verification