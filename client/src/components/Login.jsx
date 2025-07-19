import React, { useContext, useState, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { setAdmin } = useContext(AppContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const modalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdmin(true);
    navigate('/admin'); // or wherever you want after login
  };

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      navigate('/');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden backdrop-blur-xl bg-black/50"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-sm p-8 mx-4 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg bg-white/10 text-center"
      >
        {/* Close Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-2 right-3 text-white text-lg font-bold hover:text-red-400 transition"
          aria-label="Close"
        >
          &times;
        </button>

        <h1 className="text-3xl font-bold text-text1 mb-2">
          <span className="text-white/80 mr-1">Admin</span>Login
        </h1>
        <p className="text-white/70 text-sm mb-8">
          Enter your credentials to access the admin panel
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-6 text-white text-left">
          <div className="flex flex-col">
            <label className="text-sm mb-1">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              required
              placeholder="Your Email Id"
              className="border-b-2 border-white/30 bg-transparent p-2 outline-none text-white placeholder:text-white/50"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              required
              placeholder="Your Password"
              className="border-b-2 border-white/30 bg-transparent p-2 outline-none text-white placeholder:text-white/50"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full py-3 font-medium bg-text1 text-white rounded hover:bg-primary/90 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
