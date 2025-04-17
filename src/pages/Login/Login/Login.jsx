import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef(null);

  const [disabled, setDisabled] = useState(true);

  const {signIn} = useContext(AuthContext)

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const captcha = form.captcha.value;
    console.log(email, password);
    signIn(email,password)
        .then(res=>{
            const user= res.user
            console.log(user);
        })
  };

  const handleValidatCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;

    console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      alert("Captcha Does Not Match");
    }
  };
  return (
    <div>
      <Helmet>
        <title> Bistro Boss | 🔐 Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 normal-case">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Type Here Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <label className="fieldset-label">
                  <LoadCanvasTemplateNoReload />
                </label>
                <input
                  name="captcha"
                  ref={captchaRef}
                  type="text"
                  className="input"
                  placeholder="Type here"
                />
                <button
                  onClick={handleValidatCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  Validate
                </button>
                <div>
                  <a className="link link-hover">Reload Captcha?</a>
                </div>
                <button
                  disabled={disabled}
                  type="submit"
                  className="btn btn-neutral mt-4"
                >
                  Login
                </button>
              </fieldset>
            </form>
            <p><small>New Here? <Link to="/signup">Sign Up</Link></small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
