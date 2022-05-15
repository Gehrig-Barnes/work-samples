import React, { useState } from "react";

function SignUpForm({onLogin}){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email,
                name,
                password,
                password_confirmation: passwordConfirmation
            })
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
    }


    return (
        <div>
            <h1>sign up form</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" placeholder="email"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input><br></br>
                <input 
                    type="text" placeholder="name"
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                ></input><br></br>
                <input 
                    type="text" placeholder="password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input><br></br>
                <input 
                    type="text" placeholder="password confirmation"
                    value = {passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                ></input><br></br>
                <input type="submit" value="signup"></input>
            </form>
            {errors.map(error => (
                    <alert variant="danger" key={error}>{error}</alert>
                ))}
        </div>
    )
}

export default SignUpForm