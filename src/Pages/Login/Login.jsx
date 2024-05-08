import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
const Login = () => {
    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm    shadow-2xl bg-base-100 ml-10">
                    <h1 className="text-3xl font-bold mt-5 text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                    <div className='text-center mb-10'>
                        <p>Or Sign In with</p>
                        <div>
                            <button className='p-3'>Facebook</button>
                            <button className='p-3'>github</button>
                            <button className='p-3'>google</button>
                        </div>
                        <p>Need an account? <Link to="/signup">Sign Up</Link> </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;