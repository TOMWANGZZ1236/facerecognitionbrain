import React from "react";
import { useState } from "react";


const Signin = ({loadUser, onRouteChange}) => {

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
                    loadUser(user);
                    onRouteChange('home');
                }
            })
            .catch(rejected => {
                console.log(rejected);
            });
    };
    

    return(
        <article className="center br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5">
            <main className="pa4 black-80">
                <form className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input onChange = {onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input onChange = {onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                </fieldset>
                <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Sign in" onClick={onSubmit} />
                </div>
                <div className="lh-copy mt3">
                    <p href="#0" onClick={() => {onRouteChange('home')}} className="f6 link dim black db" >Register</p>
                </div>
                </form>
            </main>
        </article>
      
    );
}


export default Signin