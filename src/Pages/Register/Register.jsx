import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const from = "/";

  const {createUser} = useContext(AuthContext);

  const [showPassword, setShowPassWord] = useState(false);

//   const navigate = useNavigate();
//   const from = "/";

  const onSubmit = (data) => {
    console.log(data);
    const { email, password, photoUrl, fullName } = data;
    
    createUser(email, password)
    .then((result) => {
        console.log(result.user);
        navigate(from);
        if(result.user)
        {
            Swal.fire({
                title: "You Successfully Registered",
                text: "You clicked the button!",
                icon: "success"
              });
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        alert('You Entered A wrong email or password');
      });
  };


  return (
    <div className="min-h-screen bg-gray-100 rounded-xl animate__animated animate__backInUp">
      <div className="hero-content mt-10 flex-col lg:flex-row-reverse animate__animated animate__backInUp">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent animate__animated animate__backInUp">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="text"
                className="input input-bordered"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                className="input input-bordered"
                {...register("photoUrl", { required: true })}
              />
              {errors.photoUrl && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <div className="flex items-center relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                className="input input-bordered w-full"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
                })}
              /><span className="text-xl absolute right-6" onClick={() => setShowPassWord(!showPassword)}>{showPassword ? <FaEyeSlash/> : <FaEye/>}</span>
              </div>
              {errors.password && (
                <span className="text-red-500">This field is required and must have an uppercase letter, a lowercase letter, and be at least 6 characters long.</span>
              )}
              
            </div>
            <label className="label">
              <Link to='/login' className="label-text-alt link link-hover font-bold">Already have an account</Link>
            </label>
            <div className="form-control mt-6">
              <button onClick={createUser} className="btn btn-primary font-bold">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;