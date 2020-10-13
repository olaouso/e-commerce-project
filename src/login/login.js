import React from 'react'

export default function Login({
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    hasAccount,
    setHasAccount,
    handleSignUp,
    handleLogIn
}) {
    return (
        <div>
            <label>Email:</label>
            <input 
            type="text"
            autoFocus
            required
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
            <p>{emailError}</p>
            <label>Password:</label>
            <input 
            type="text"
            autoFocus
            required
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
            <p>{passwordError}</p>
            <div className="buttons">
                {
                    hasAccount?(
                        <>
                        <button onClick={handleLogIn}>Sign In</button>
                        <p>İf you haven't an account, <span onClick={setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignUp}>Sign Up</button>
                        <p>İf you have an account, <span onClick={setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    )
                }
            </div>
        </div>
    )
}
