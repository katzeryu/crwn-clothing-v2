// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import {
//   auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";



const SignIn = () => {
//   useEffect(async () => {
//     const response = await getRedirectResult(auth);
//     if (response) {
//       const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
//   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>This is sign in</h1>
      <button onClick={logGoogleUser}>Google Login with popup</button>
      <span/>
      <SignUpForm/>
      {/* <button onClick={signInWithGoogleRedirect}>
        Google Login with redirect
      </button> */}
    </div>
  );
};

export default SignIn;
