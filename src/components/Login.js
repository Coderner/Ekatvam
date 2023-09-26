import React from "react";
import { useFormik } from 'formik';
import LogImage from "../images/login.avif";

const Login = () =>{

    const validate = values => {
        const errors = {};
        if (!values.email) {
          errors.email = '*Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = '*Invalid email address';
        }

        if (!values.password) {
            errors.password = '*Required';
          } else if (values.password.length<8) {
            errors.password = '*Password length must be greater than or equal to 8';
          }
      
        return errors;
      };

      const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

   return(
    <div className='w-1/2 h-screen bg-indigo-200'>
      <form className="flex flex-col h-3/5" onSubmit={formik.handleSubmit}>

         <h1 className="text-center font-medium text-2xl my-8 text-gray-500"> 
            <span className="text-blue-500">Login</span> Your Account
         </h1>

          <input
              className="py-1 px-3 my-2 mx-auto w-4/6  bg-indigo-200 border-b-2 border-blue-500"
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
         />
         {formik.touched.email && formik.errors.email ? (
           <div className='text-xs text-red-600 mx-28 font-medium'>{formik.errors.email}</div>
         ) : null}

         <input
              className="py-1 px-3 my-2 mx-auto w-4/6  bg-indigo-200 border-b-2 border-blue-500"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
         />
         {formik.touched.password && formik.errors.password ? (
           <div className='text-xs text-red-600 mx-28 font-medium'>{formik.errors.password}</div>
         ) : null}

         <button type="submit" 
           className="bg-blue-500 text-white w-2/6 p-2 my-4 mx-auto rounded-md font-semibold hover:bg-blue-600"
         >
            Submit
         </button>

         <p className='text-xs text-center font-medium text-gray-500'>By clicking on Login, I accept the Terms & Conditions.</p>
        
       </form>
     </div>
   )
};

export default Login;