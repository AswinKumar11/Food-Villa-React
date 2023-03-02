import React,{ useContext } from 'react';
import { useFormik } from 'formik';
import {Link} from 'react-router-dom';
import {LoginData} from './UserContext';

const Basic = () => {
  const {isLoginDone} = useContext(LoginData);
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {},
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col">
      <label htmlFor="email" className='m-2 p-2 font-bold'>Email Address</label>
      <input
        className='border-solid border-2 border-black w-60 m-2 p-2'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.values.email.length>0?<Link to = '/'><button type="submit" className='border-solid border-2 border-black bg-gray-50 m-2 p-2 w-20' onClick={()=>{
        isLoginDone({LoginDetails:{
          emailId:formik.values.email,
          logIn:true
      }})
      }}>Submit</button></Link>:<button type="submit" className='border-solid border-2 border-black bg-gray-200 m-2 p-2 w-20' onClick={()=>{
        alert("Please Enter a valid Email");
        }}>Submit</button>}
    </form>
  );
};

export default Basic