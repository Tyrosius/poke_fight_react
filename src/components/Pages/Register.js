import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../../utils/auth';
import { Circles } from "react-loader-spinner";

const Register = ({
  status,
  setToken,
  setStatus,
  loading,
  setLoading
}) => {
  const [{ username, email, password }, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = e => setFormState(prev => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      if (!username || !email || !password)
        throw new Error('Username, email and password are required');
      setLoading(true);
      const { data, error } = await registerUser({
        username,
        email,
        password
      });
      if (error) throw error;
      setToken(data.token);
      setStatus(true);
      setLoading(false);
      localStorage.setItem('token', data.token);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  if (loading) return 
  <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>;
  if (status) {
    toast("You are already loged in!")
  return <Navigate to='/' />};
  return (
    <div className='row justify-content-center'>
      <div className='col-md-4'>
        <form className='form-signin' onSubmit={handleSubmit}>
          <label htmlFor='inputUserName' className='sr-only'>
            Username
          </label>
          <input
            id='username'
            className='form-control'
            placeholder='username'
            value={username}
            onChange={handleChange}
          />
          <label htmlFor='inputEmail' className='sr-only'>
            Email address
          </label>
          <input
            type='email'
            id='email'
            className='form-control'
            placeholder='Email address'
            value={email}
            onChange={handleChange}
          />
          <label htmlFor='inputPassword' className='sr-only'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='form-control'
            placeholder='Password'
            value={password}
            onChange={handleChange}
          />
          <button className='btn btn-lg btn-primary btn-block mt-3' type='submit'>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;