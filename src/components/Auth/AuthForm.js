import { useRef, useState } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailinput = useRef();
  const passwardinput = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isloading, Setisloading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredemail = emailinput.current.value;
    const enteredpassword = passwardinput.current.value;

    Setisloading(true);
    if(isLogin) {}
    else{
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD7vG1zsyc0oiPx-Fs4wwYD7BovjtV3UrE',
    {
      method: 'POST',
      body: JSON.stringify({
        email: enteredemail,
        password: enteredpassword,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    }
      ).then((res) => {
        Setisloading(false)
        if(res.ok) {}
        else{
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed';
            if(data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage)
          });
        }
      });
    }

  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref = {emailinput}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref = {passwardinput}
            required
          />
        </div>
        <div className={classes.actions}>
          {!isloading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isloading && <p>Sending Request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
