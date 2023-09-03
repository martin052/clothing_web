import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import {
    auth, 
    // SignInWithGooglePopUp, 
    SignInWithGoogleRedirect, 
    createUserDocumentFromAuth
  } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    useEffect(() => {
        const getResponse = async () => {
          const response = await getRedirectResult(auth);
     
          if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user);
          }
        };
     
        getResponse().catch(console.error);
      }, []);

    // const logGoogleUser = async() => {
    //     const {user} = await SignInWithGooglePopUp();
    //     const userDocRef = await createUserDocumentFromAuth(user);
    // }

    return (
        <div>
            <h1>Sign In page</h1>
            {/* <button onClick={logGoogleUser}>Sign In with google pop up</button> */}
            <button onClick={SignInWithGoogleRedirect}>Sign In with google redirect</button>
            <SignUpForm></SignUpForm>
        </div>
    )
}


export default SignIn;