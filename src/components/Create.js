import { useFormik } from "formik";
import CreateImg from "../images/createimg.avif"

const Create = () =>{
    const validate = values => {
        const errors = {};

        if(!values.fullName){
            errors.fullName = '*Required';
          } else if(values.fullName.length < 4){
            errors.fullName = "*UserName must be more than or equal to 4 characters length"
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
          } else if(values.phone.length != 10){
            errors.userName = "*There must be 10 digits in phone no."
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
          userName: '',
          email: '',
          querry: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return(
        <>
          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white h-40 py-8">
              <img className="h-48 ml-44 shadow-md shadow-violet-900" src={CreateImg}/>
          </div>

          <div className="my-20 mx-24 p-8 bg-fuchsia-100 shadow-lg shadow-fuchsia-200">
              <h1 className="text-3xl font-medium text-violet-500 mb-3 text-center ">User Info Form</h1>
              <form onSubmit={formik.handleSubmit} className="flex flex-col">
                <div className="flex justify-between">
                 <input
                    className='p-2 mr-5 my-2 border-2 border-grey-500 w-1/2'
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
                    className='p-2 my-2 border-2 border-grey-500 w-1/2'
                    id="userName"
                    name="userName"
                    type="text"
                    placeholder="User Name (choose a name which you want people to refer you)"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                  />
                  {(formik.touched.userName && formik.errors.userName) ? <div className='text-xs text-red-600'>{formik.errors.userName}</div> : null}
                  </div>

                  <div className="flex justify-between">
                   <input
                    className='p-2 my-2 mr-5 border-2 border-grey-500 w-1/2'
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
                    className='p-2 my-2 border-2 border-grey-500 w-1/2'
                    id="phone"
                    name="phone"
                    type="phone"
                    placeholder="Phone No."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                   />
                  {(formik.touched.phone && formik.errors.phone) ? <div className='text-xs text-red-600'>{formik.errors.phone}</div> : null}

                  
                  </div>
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
        </>
    )
}

export default Create;