import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  //   const captchaRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log('state on location',location.state);

  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

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

    signIn(email, password).then((res) => {
      const user = res.user;
      console.log(user);

      Swal.fire({
        title: "Login successfully ",
        showClass: {
          popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
        },
        hideClass: {
          popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidatCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    // const user_captcha_value = captchaRef.current.value;

    console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      alert("Captcha Does Not Match");
    }
  };
  // go back
  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
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
                  onBlur={handleValidatCaptcha}
                  name="captcha"
                  //   ref={captchaRef}
                  type="text"
                  className="input"
                  placeholder="Type here"
                />
                <button
                  //   onClick={handleValidatCaptcha}
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
            <p>
              <small>
                New Here? <Link to="/auth/signup">Sign Up</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
      <button 
      onClick={handleGoBack}
      className="btn btn-accent">Go Back</button>
    </div>
  );
};

export default Login;
