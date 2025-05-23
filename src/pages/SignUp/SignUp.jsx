import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../assets/hooks/useAxiosPublic";
import SocialLogin from "../../assets/components/SectionTitle/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password).then((res) => {
      const loggedUser = res.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // console.log('User created');
          // create user in db
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("users/", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log('user added to db');
              reset();
              // sweet alert
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Profile updated....",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
          // reset();
          // // sweet alert
          // Swal.fire({
          //   position: "top-end",
          //   icon: "success",
          //   title: "User Profile updated....",
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
          // navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  // console.log(watch("example")) // watch input value by passing the name of it

  return (
    <>
      <Helmet>
        <title>Bistro Boss | 🚀 Sign Up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>

                <input
                  type="text"
                  className="input"
                  {...register("name", { required: true })}
                  placeholder="Name"
                />
                {/* errors will return when field validation fails  */}
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
                {/* photo url */}
                <label className="fieldset-label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                />
                {/* errors will return when field validation fails  */}
                {errors.photoURL && (
                  <span className="text-red-500">Photo URL is required</span>
                )}

                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  className="input"
                  {...register("email", { required: true })}
                  placeholder="Email"
                />
                {/* errors will return when field validation fails  */}
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}

                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&? "])[a-zA-Z0-9!#$%&? "]{6,}$/,
                  })}
                  placeholder="Password"
                />
                {/* errors will return when field validation fails  */}
                {errors.password?.type === "minLength" && (
                  <span role="alert" className="text-red-500">
                    Password must be 6 character required
                  </span>
                )}

                {/* errors will return when field validation fails  */}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500">
                    Password more then 20 character long
                  </span>
                )}
                {/* errors will return when field validation fails  */}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    Password must have one caps one lower latter and one special
                    character
                  </span>
                )}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <input
                  className="btn btn-neutral mt-4"
                  type="submit"
                  value={"SignUp"}
                />
                {/* <button className="btn btn-neutral mt-4">SignUp</button> */}
              </fieldset>
            </form>
            <p>
              <small>
                Already have an account{" "}
                <Link className="text-blue-900" to="/auth/login">
                  Login
                </Link>{" "}
              </small>
            </p>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
