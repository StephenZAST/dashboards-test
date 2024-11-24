import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import { Dashboard } from './dashboard/Dashboard';
import { Dashboard_two } from './dashboard_two/Dashboard';

const root = createRoot(document.getElementById('root')!);

function MainApp() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Load the saved theme from localStorage on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // Update the data-theme attribute of the body element
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App theme={theme} setTheme={setTheme} />} />
        <Route
          path="/dashboard"
          element={<Dashboard theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="/dashboard_two"
          element={<Dashboard_two theme={theme} setTheme={setTheme} />}
        />
      </Routes>
    </Router>
  );
}

root.render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
);
