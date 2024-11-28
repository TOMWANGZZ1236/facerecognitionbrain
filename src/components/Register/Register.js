import React from "react";
import { useState } from "react";


const Register = ({loadUser, onRouteChange}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    let onPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    let onEmailChange = (event) => {
        setEmail(event.target.value);
    };

    let onNameChange = (event) => {
        setName(event.target.value);
    };
    
    let onSubmit = () => {
        fetch('http://localhost:3001/register', {
            method : 'post',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                name: name,
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
                    <legend className="f4 fw6 ph0 mh0">Register</legend>
                    <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">User Name</label>
                    <input onChange = {onNameChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username"  id="username" />
                    </div>
                    <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Email</label>
                    <input  onChange = {onEmailChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="email"  id="email" />
                    </div>
                    <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input  onChange = {onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                </fieldset>
                <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Register" onClick={onSubmit} />
                </div>
                </form>
            </main>
        </article>
      
    );
}


export default Register