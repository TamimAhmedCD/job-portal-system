import Lottie from "lottie-react";
import registerLottieData from '../../assets/lottie/register.json';

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        
        console.log(email, password);

        if (password.length < 6) {
            // setError("Password must contain at least 6 characters");
            return;
          }
          if (!/[a-z]/.test(password)) {
            // setError("Password must have at least one Lowercase letter ");
            return;
          }
          if (!/[A-Z]/.test(password)) {
            // setError("Password must have at least one Uppercase letter ");
            return;
          }
    }
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={registerLottieData}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold flex justify-center mt-4">Register now!</h1>
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
