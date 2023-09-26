import React from "react";
import { useFormik } from 'formik';

const Signup = () =>{

    const validate = values => {
        const errors = {};
      
        if (!values.firstName) {
          errors.firstName = '*Required';
        } else if (values.firstName.length > 15) {
          errors.firstName = '*Must be 15 characters or less';
        }
      
        if (!values.lastName) {
          errors.lastName = '*Required';
        } else if (values.lastName.length > 20) {
          errors.lastName = '*Must be 20 characters or less';
        }
      
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
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return(
    <div className="w-1/2 h-screen bg-purple-200">
     <form className="flex flex-col my-40 h-3/5" onSubmit={formik.handleSubmit}>

        <h1 className="text-center font-medium text-2xl my-8 text-purple-600"> Sign Up</h1>

        <div className="flex mx-auto justify-between">
        <div className="flex flex-col">
            <input
              className="py-1 px-3 my-2 mr-12 bg-purple-200 border-b-2 border-purple-600"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Firstname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
           />
           {formik.touched.firstName && formik.errors.firstName ? (
            <div className='text-xs text-red-600 font-medium'>{formik.errors.firstName}</div>
           ) : null}
         </div>
         <div className="flex flex-col">
            <input
              className="py-1 px-3 my-2  bg-purple-200 border-b-2 border-purple-600"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
           />
           {formik.touched.lastName && formik.errors.lastName ? (
             <div className='text-xs text-red-600 font-medium'>{formik.errors.lastName}</div>
           ) : null}
          </div>
        </div>

         <input
              className="py-1 px-3 my-2 mx-auto w-4/6  bg-purple-200 border-b-2 border-purple-600"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
         />
         {formik.touched.email && formik.errors.email ? (
           <div className='text-xs text-red-600 mx-28 font-medium'>{formik.errors.email}</div>
         ) : null}

         <input
              className="py-1 px-3 my-2 mx-auto w-4/6  bg-purple-200 border-b-2 border-purple-600"
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
        className="bg-purple-600 text-white w-2/6 p-2 my-4 mx-auto rounded-md font-semibold hover:bg-purple-700"
       >
         Submit
       </button>
     </form>
    </div>
    )
};

export default Signup;