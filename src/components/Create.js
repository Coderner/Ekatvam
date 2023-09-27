import { useFormik } from "formik";
import CreateImg from "../images/createimg.avif"
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Create = () =>{
    const post_url="https://jsonplaceholder.typicode.com/users";

    const validate = values => {
        const errors = {};

        if(!values.fullName){
            errors.fullName = '*Required';
          } else if(values.fullName.length < 4){
            errors.fullName = "*Name must be more than or equal to 4 characters length"
          }
      
        if(!values.userName){
            errors.userName = '*Required';
          } else if(values.userName.length < 4){
            errors.userName = "*UserName must be more than or equal to 4 characters length"
          }

        if (!values.email) {
          errors.email = '*Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = '*Invalid email address';
        }

        if(!values.phone){
            errors.phone = '*Required';
          } else if(values.phone.length !== 10){
            errors.phone = "*There must be 10 digits in phone no."
          }
      
        if(!values.address){
            errors.address = '*Required';
        }
        
        if(!values.website){
            errors.website = '*Required';
        }
      
        return errors;
      };

    const formik = useFormik({
        initialValues: {
          fullName:'',
          userName: '',
          email: '',
          phone: '',
          address: '',
          website: '',
        },
        validate,
        onSubmit: values => {
          postInfo(values);
          Swal.fire({
              title: 'Success!',
              icon: 'success',
              confirmButtonText: 'Ok'
          })
        },
   });

   async function postInfo(data) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
   
    return(
        <div>
          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white h-40 py-4">
              <Link to="/dashboard"><button className="font-bold ml-4">Back to Dashboard</button></Link>
              <img className="h-48 ml-40 shadow-md shadow-violet-900" src={CreateImg}/>
          </div>

          <div className="my-20 mx-auto rounded-xl w-1/2 p-8 bg-fuchsia-100 shadow-lg shadow-fuchsia-200">
              <h1 className="text-3xl font-medium text-violet-500 mb-3 text-center ">User Info Form</h1>
              <form onSubmit={formik.handleSubmit} className="flex flex-col">
                 <input
                    className='p-2 my-2 border-2 border-grey-500'
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                  />
                  {(formik.touched.fullName && formik.errors.fullName) ? <div className='text-xs text-red-600'>{formik.errors.fullName}</div> : null}
                 
                  <input
                    className='p-2 my-2 border-2 border-grey-500'
                    id="userName"
                    name="userName"
                    type="text"
                    placeholder="User Name (choose a name which you want people to refer you)"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                  />
                  {(formik.touched.userName && formik.errors.userName) ? <div className='text-xs text-red-600'>{formik.errors.userName}</div> : null}

                   <input
                    className='p-2 my-2 border-2 border-grey-500'
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                   />
                  {(formik.touched.email && formik.errors.email) ? <div className='text-xs text-red-600'>{formik.errors.email}</div> : null}
                  
                  <input
                    className='p-2 my-2 border-2 border-grey-500'
                    id="phone"
                    name="phone"
                    type="phone"
                    placeholder="Phone No."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                   />
                  {(formik.touched.phone && formik.errors.phone) ? <div className='text-xs text-red-600'>{formik.errors.phone}</div> : null}

                  <input
                    className='p-2 my-2 border-2 border-grey-500'
                    id="address"
                    name="address"
                    type="address"
                    placeholder="Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                  />
                  {(formik.touched.address && formik.errors.address) ? <div className='text-xs text-red-600'>{formik.errors.address}</div> : null}
                 
                  <input
                    className='p-2 my-2 border-2 border-grey-500'
                    id="website"
                    name="website"
                    type="website"
                    placeholder="Add your website link"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.website}
                  />
                  {(formik.touched.website && formik.errors.website) ? <div className='text-xs text-red-600'>{formik.errors.website}</div> : null}
                 
                  <button type="submit" className='mx-auto my-5 p-2 bg-violet-500 hover:bg-fuchsia-500 text-white font-semibold rounded-2xl w-44'>Submit</button>

              </form>
          </div>
        </div>
    )
}

export default Create;