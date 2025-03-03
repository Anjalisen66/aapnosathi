import React, { useState } from 'react';
import './Login.css'; // Ensure this file exists
import hexImage from '../assets/hexagon.png';
import axios from 'axios';

const SignUp = () => {
  // State variables for form inputs and error messages
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault(); // Prevent page refresh
    setLoading(true);

    // Validation logic
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        name: username,
        email,
        password,
      });

      const data = response.data;
      setLoading(false);
      console.log(data);

      if (data.successMessage) {
        alert(data.successMessage);
        setMessage(data.successMessage);

        // Redirect the user to the login page after 2 seconds
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      } else if (data.errorMessage) {
        alert(data.errorMessage);
        setMessage(data.errorMessage);
      }
    } catch (error) {
      setLoading(false);
      setMessage('An error occurred. Please try again.');
      alert(message);
      console.error('SignUp Error:', error);
    }

    setError('');
    console.log('Form submitted with:', { username, email, password, confirmPassword });
  };

  return (
    <div className="login-box">
         <div
        className="hexagon-gallery"
        style={{
          backgroundImage: `url(${hexImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center top',
          height: '200px',
        }}
      >
        
      </div>
      {/* Sign-Up Form */}
      <div className="login-form">
        <form onSubmit={handleSignUp}>
          <h2>SIGN UP</h2>
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="login-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>} {/* Display error */}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>

      {/* Login Text Adjusted */}
      <div className="signup-container">
        <p className="signup-text">
          Already have an account? <a href="/login">LOGIN</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
