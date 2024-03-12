import React, { createContext, useState,useContext } from 'react';

const FormDataContext=createContext();

export const FormContextProvider = ({children}) => {
    const [formData,setFormdata]=useState(null);

    const setFormValues1=(data)=>{
        setFormdata(data)
    }
  return (
    <FormDataContext.Provider value={{ formData, setFormValues1 }}>
    {children}
  </FormDataContext.Provider>
  )
}

export const useFormData = () => useContext(FormDataContext);