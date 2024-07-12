import { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', username), where('password', '==', password));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size === 1) {
        // Login successful
        setError('');
        console.log('Login successful!');
        // Redirect or perform actions after successful login
      } else {
        setError('Invalid username or password.');
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      setError('Error logging in. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
