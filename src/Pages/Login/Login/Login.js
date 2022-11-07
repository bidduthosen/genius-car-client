import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../assets/images/login/login.svg';
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { setAuthToken } from '../../../api/auth';

const Login = () => {
    const {loginUser, signInGoogle} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result =>{
                const user = result.user;
                form.reset();
                setAuthToken(user);
            })
            .catch(err =>{
                console.error(err);
            })

    }

    const handleSignInGoogle = () =>{
        signInGoogle(googleProvider)
            .then(result =>{
                const user = result.user;
                console.log(user);
                setAuthToken(user);
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero py-10">
            <div className="hero-content flex-col lg:flex-row gap-8 grid md:grid-cols-2">
                <div className="w-4/5">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-8">
                    <h1 className="text-3xl font-bold text-center pt-2">Login now!</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Your password" className="input input-bordered" required/>
                        <label className="label">
                            <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center pb-3'>Or sign Up With</p>
                <div className='flex justify-center'>
                    <Link  className='p-1 mr-1 bg-orange-500 rounded-full'><FaFacebook className='m-1 text-white' style={{width: '25px', height:'25px'}}></FaFacebook></Link>
                    <Link  className='p-1 mr-1 bg-orange-500 rounded-full'><FaLinkedin className='m-1 text-white' style={{width: '25px', height:'25px'}}></FaLinkedin></Link>
                    <Link onClick={handleSignInGoogle} className='p-1 mr-1 bg-orange-500 rounded-full'><FaGoogle className='m-1 text-white' style={{width: '25px', height:'25px'}}></FaGoogle></Link>
                </div>
                
                <p className='text-center'>Create a genius car account? <Link className='text-orange-600' to='/signup'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;