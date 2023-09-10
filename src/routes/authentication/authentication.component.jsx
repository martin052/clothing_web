
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';


const Authentication = () => {

    return (
        <div className='authentication-container'>
            {/* <button onClick={logGoogleUser}>Sign In with google pop up</button> */}
            <SignInForm></SignInForm>
            {/* <button onClick={SignInWithGoogleRedirect}>Sign In with google redirect</button> */}
            <SignUpForm></SignUpForm>
        
        </div>
    )
}


export default Authentication;