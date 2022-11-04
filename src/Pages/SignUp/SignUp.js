import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleCreateUser = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)
        createUser(email, password)
            .then(result =>{
                const user = result.user;
                console.log(user)
                form.reset();
            })
            .catch(err =>{
                console.error(err);
            })
    }


    return (
        <div className="hero py-10 ">
            <div className="hero-content flex-col lg:flex-row gap-8 grid md:grid-cols-2">
                <div className="w-4/5">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-8">
                    <h1 className="text-3xl font-bold text-center pt-2">Sign Up</h1>
                <form onSubmit={handleCreateUser} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Your password" className="input input-bordered" required/>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='text-center'>Already have an account?<Link className='text-orange-600' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;