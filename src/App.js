
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Mainheader from './components/Mainheader';
import Verification from './pages/Verification';
import { FormContextProvider } from './pages/Formcontext';
import { useState } from 'react';

function App() {
  //passing data from child to child using the parent
  const [userdata,setUserdata]=useState();
  const updateData=(newData)=>{
    setUserdata(newData)
  }
  return (
    <FormContextProvider>
    <div className="">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainheader/>}>
          <Route index element={<Home/>}></Route>
          <Route path='register' element={<Register updateData={updateData}/>}></Route>
          <Route path='verification' element={<Verification userdata={userdata}/>}></Route>
          <Route path="*" element={<div className='container'><h1 className='text-center font-weight-bold my-5 py-5'>Page Not Found</h1></div>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div></FormContextProvider>
  );
}

export default App;
