import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { initializeCourse } from '../../actions/index';

const Signin = ({loadUser, onRouteChange}) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let onPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    let onEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    let onSubmit = () => {
        fetch('http://localhost:3001/signin', {
            method : 'post',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                email : email,
                password: password
            })
        })
            .then(response =>  response.json())
            .then(user => {
                if (user.id) {
                  fetch('http://localhost:3001/courseDisplay', {
                    method : 'post',
                    headers: {'Content-Type' : 'application/json'},
                    body : JSON.stringify({
                        email : email
                    })
                 })
                 .then(response => response.json())
                 .then(courses => {
                  // console.log('test1', courses);
                  dispatch(initializeCourse(courses));
                  loadUser(user, courses);
                  onRouteChange('home');
                 })

                }
            })
            .catch(rejected => {
                console.log(rejected);
            });
    };
    

    return (
      <>
      <div className="mt-16 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div  className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
             
            alt="Your Company"
            src="https://ih1.redbubble.net/image.1333020171.1187/st,small,507x507-pad,600x600,f8f8f8.jpg"
            className="mx-auto h-14 w-14"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange = {onEmailChange}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange = {onPasswordChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={onSubmit}
                type="button"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <a onClick={() => {onRouteChange('register')}} href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Click here to register!
            </a>
          </p>
        </div>
      </div>
    </>
  )
}


export default Signin


// import './Signin.css'

// export default function Signin() {
    // return (
    //   <>
    //     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    //       <div  className="sm:mx-auto sm:w-full sm:max-w-sm">
    //         <img
               
    //           alt="Your Company"
    //           src="https://ih1.redbubble.net/image.1333020171.1187/st,small,507x507-pad,600x600,f8f8f8.jpg"
    //           className="mx-auto h-14 w-14"
    //         />
    //         <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
    //           Sign in to your account
    //         </h2>
    //       </div>
  
    //       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    //         <form action="#" method="POST" className="space-y-6">
    //           <div>
    //             <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
    //               Email address
    //             </label>
    //             <div className="mt-2">
    //               <input
    //                 id="email"
    //                 name="email"
    //                 type="email"
    //                 required
    //                 autoComplete="email"
    //                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //               />
    //             </div>
    //           </div>
  
    //           <div>
    //             <div className="flex items-center justify-between">
    //               <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
    //                 Password
    //               </label>
    //             </div>
    //             <div className="mt-2">
    //               <input
    //                 id="password"
    //                 name="password"
    //                 type="password"
    //                 required
    //                 autoComplete="current-password"
    //                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    //               />
    //             </div>
    //           </div>
  
    //           <div>
    //             <button
    //               type="submit"
    //               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //             >
    //               Sign in
    //             </button>
    //           </div>
    //         </form>
  
    //         <p className="mt-10 text-center text-sm/6 text-gray-500">
    //           Not a member?{' '}
    //           <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
    //             Click here to register!
    //           </a>
    //         </p>
    //       </div>
    //     </div>
    //   </>
    // )
//   }
  






// return(
//     <article className="center br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5">
//         <main className="pa4 black-80">
//             <form className="measure">
//             <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//                 <legend className="f4 fw6 ph0 mh0">Sign In</legend>
//                 <div className="mt3">
//                 <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
//                 <input onChange = {onEmailChange} className="b--black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
//                 </div>
//                 <div className="mv3">
//                 <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
//                 <input onChange = {onPasswordChange} className="b b--black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
//                 </div>
//             </fieldset>
//             <div className="">
//                 <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Sign in" onClick={onSubmit} />
//             </div>
//             <div className="lh-copy mt3">
//                 <p href="#0" onClick={() => {onRouteChange('home')}} className="f6 link dim black db" >Register</p>
//             </div>
//             </form>
//         </main>
//     </article>
  
// );