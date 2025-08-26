import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAuthListener } from './hooks/useAuthListener';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  
  useAuthListener();

  const handleToggleAuth = () => {
    setIsLogin(!isLogin);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <AuthForm isLogin={isLogin} onToggle={handleToggleAuth} />
      )}
    </div>
  );
}

export default App;