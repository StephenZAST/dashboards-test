import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Link } from 'react-router-dom';

interface Props {
  theme: string;
  setTheme: (theme: string) => void;
}

function App({ theme, setTheme }: Props) {
  const [count, setCount] = useState(0);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Store the selected theme in localStorage
  };

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Link to="/dashboard">
          <button>Go to Dashboard</button>
        </Link>
        <Link to="/dashboard_two">
          <button>Go to Dashboard_two</button>
        </Link>
        <button id="theme-toggle" onClick={toggleTheme}>
          Toggle Theme
        </button>{' '}
        {/* Add button to toggle theme */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
