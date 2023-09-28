import React from "react";
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


const Signup = () =>{

    const navigate = useNavigate();

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
          Swal.fire({
            title: 'Account Created Successfully!',
            text: 'Directed to dashboard.',
            icon: 'success',
            confirmButtonText: 'Ok'
          })

          navigate("/dashboard");
        },
      });

    return(
    <div className="lg:w-2/5 md:w-5/12 w-2/3 mx-auto mb-20 bg-purple-200 shadow-md shadow-fuchsia-400 rounded-2xl">
     <form className="flex flex-col" onSubmit={formik.handleSubmit}>

        <h1 className = "font-medium md:text-2xl text-xl md:mt-16 mt-6 md:mb-2 mb-1 text-center text-blue-600">New User?</h1>
        <h2 className="font-medium md:text-2xl text-xl md:mb-4 mb-2 text-center text-gray-500">Start your journey Now.</h2>
        <h1 className="text-center font-medium md:text-2xl text-xl md:mb-4 mb-2 text-blue-500"> Sign Up</h1>

            <input
              className="py-1 px-3 md:my-4 my-2 mx-auto md:w-4/6 w-5/6  bg-purple-200 border-b-2 border-blue-500 rounded-2xl"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Firstname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
           />
           {formik.touched.firstName && formik.errors.firstName ? (
            <div className='text-xs text-red-600 font-medium md:mx-16 sm:mx-10 mx-8'>{formik.errors.firstName}</div>
           ) : null}
        
            <input
              className="py-1 px-3 md:my-4 my-2 mx-auto md:w-4/6 w-5/6  bg-purple-200 border-b-2 border-blue-500 rounded-2xl"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
           />
           {formik.touched.lastName && formik.errors.lastName ? (
             <div className='text-xs text-red-600 font-medium md:mx-16 sm:mx-10 mx-8'>{formik.errors.lastName}</div>
           ) : null}

         <input
              className="py-1 px-3 md:my-4 my-2 mx-auto md:w-4/6 w-5/6  bg-purple-200 border-b-2 border-blue-500 rounded-2xl"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
         />
         {formik.touched.email && formik.errors.email ? (
           <div className='text-xs text-red-600 md:mx-16 sm:mx-10 mx-8 font-medium'>{formik.errors.email}</div>
         ) : null}

         <input
              className="py-1 px-3 md:my-4 my-2 mx-auto md:w-4/6 w-5/6  bg-purple-200 border-b-2 border-blue-500 rounded-2xl"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
         />
         {formik.touched.password && formik.errors.password ? (
           <div className='text-xs text-red-600 md:mx-16 sm:mx-10 mx-8 font-medium'>{formik.errors.password}</div>
         ) : null}
 
       <button type="submit"
           className="bg-blue-500 text-white w-3/6 p-2 my-6 mx-auto rounded-2xl font-semibold hover:bg-blue-600"
           >
         Submit
       </button>
     </form>
    </div>
    )
};

export default Signup;