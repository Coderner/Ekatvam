import React from "react";
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const Login = () =>{

    const navigate = useNavigate();

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
          Swal.fire({
            title: 'Logged in Successfully!',
            text: 'Directed to dashboard.',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          navigate("/dashboard");
        },
      });

   return(
    <div className='lg:w-2/5 md:w-5/12 w-2/3 mx-auto mb-20 bg-purple-200 shadow-md shadow-fuchsia-400 rounded-2xl'>
      <form className="flex flex-col" onSubmit={formik.handleSubmit}>
            
             <h1 className="font-medium md:text-2xl text-xl md:mt-16 mt-6 md:mb-2 mb-1 text-center text-blue-600">Already a User?</h1>
             <h1 className="text-center font-medium md:text-2xl text-xl md:mb-4 mb-2 text-gray-500"> 
               <span className="text-blue-500">Login</span> Your Account
             </h1>

            <input
                className="py-1 px-3 md:my-4 my-2 mx-auto md:w-4/6 w-5/6  bg-purple-200 border-b-2 border-blue-500 rounded-2xl"
                id="email"
                 name="email"
                 type="email"
                 placeholder="Email Address"
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
           className="bg-blue-500 text-white sm:w-3/6 w-4/6 p-2 my-6 mx-auto rounded-2xl font-semibold hover:bg-blue-600"
         >
            Submit
         </button>

         <p className='text-xs text-center font-medium text-gray-500 mb-3'>
          By clicking on Login, I accept the Terms & Conditions.
        </p>
        
       </form>
     </div>
   )
};

export default Login;