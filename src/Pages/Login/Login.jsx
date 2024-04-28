import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const { signInUser, googleLogin, gitHubLogin } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const onSubmit = (formData) => {
    const { email, password } = formData;
    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        navigate(from);
        if(result.user)
        {
            Swal.fire({
                title: "You Successfully Logged In",
                text: "You clicked the button!",
                icon: "success"
              });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 rounded-xl animate__animated animate__backInUp">
      <div className="hero-content flex-col mt-10 lg:flex-row-reverse bg-transparent animate__animated animate__backInUp">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <label className="label">
              <Link className="label-text-alt link link-hover font-bold">Forgot password?</Link>
              <Link to='/register' className="label-text-alt link link-hover font-bold">create an account</Link>
            </label>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className='flex gap-2 m-4'>
            <button onClick={() => {
                
                googleLogin()
                .then(result => {
                    navigate(from)
                })
                }} className='btn btn-secondary w-1/2'>Google</button>
            <button onClick={() => {
                gitHubLogin()
                .then(result =>{
                    navigate(from)
                })
            }} className='btn btn-accent w-1/2'>Github</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
