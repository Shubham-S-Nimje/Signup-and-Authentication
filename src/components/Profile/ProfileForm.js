import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Authcontext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const authCtx = useContext(Authcontext);
  const newPassward = useRef('');
  const history = useHistory();

  const OnSubmitHandler = (event) => {
    event.preventDefault();
    const NewEnteredPassword = newPassward.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD7vG1zsyc0oiPx-Fs4wwYD7BovjtV3UrE',
    {
      method: 'POST',
      body: JSON.stringify({
        idToken:authCtx.token,
        password:NewEnteredPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      history.replace('/');
    })
  }
  return (
    <form className={classes.form} onSubmit={OnSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={newPassward}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
