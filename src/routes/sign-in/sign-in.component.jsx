import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
    }
    return(
    <div>
    <h1>This is sign in</h1>
    <button onClick={logGoogleUser}>Google Login</button>
    </div>
    )
}

export default SignIn
