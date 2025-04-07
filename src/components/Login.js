import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
      <img className='w-full h-full' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs" alt= "logo"/> 
        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Form Section */}
      <div className="relative flex justify-center items-center min-h-screen px-4">
        <form className="bg-black bg-opacity-75 text-white p-8 md:p-12 rounded-lg w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input
        type="text"
        placeholder="Full Name"
        className="p-3 mb-4 w-full rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white-600"
        />)}
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 mb-4 w-full rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 mb-6 w-full rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white-600"
          />
          <button className="w-full bg-red-700 hover:bg-red-800 p-3 rounded font-semibold transition-colors cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign UP Now" : "Alreday registered Sign In Now."}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
