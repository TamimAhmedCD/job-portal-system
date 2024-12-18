import { useContext } from "react";
import authContext from "../../context/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(authContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(res => {
            console.log(res.user);
        })
        .cath(error => {
            console.log(error.error.massage);
        })
    }

  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn">Google</button>
    </div>
  );
};

export default SocialLogin;
