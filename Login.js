import React from 'react'
const Login =(props)=>{

    const{
         email,
         setEmail,
         password,
         setPassword,
         handleLogin,
         handleSignUp,
         hasAccount,
         setHasAccount,
         emailError,
         passwordError,
    } = props;
    return(
        <section className="login">
                <div className="loginContainer">
                    <label >UserName</label>
                    <input 
                    type=" text" 
                    autoFocus 
                    required
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)} />
                    <p className="errorMsg">{emailError}</p>
                    <label>Password</label>
                    <input
                     type="password"
                     required
                     value={password} 
                    onChange={(e)=> setPassword(e.target.value)}/> 
    <p className="errorMsg">{passwordError}</p>

    <div className="btncontainer">
        {hasAccount ? (
            <>
            <button onClick={handleLogin}> sign in</button>
            <p> no tienes cuenta? <span onClick={()=> setHasAccount(!hasAccount)}>sign up</span></p>
            </>

        ) : (
            <>
            <button onClick={handleSignUp}> sign in</button>
            <p> ya tengo cuenta <span onClick={()=>setHasAccount(!hasAccount)}>sign in</span></p>
            </>
        )}
       </div>
     </div>
   </section>
    );
};
export default Login;