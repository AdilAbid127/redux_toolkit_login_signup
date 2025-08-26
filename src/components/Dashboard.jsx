import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../store/authSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <h2>Welcome to Your Dashboard</h2>
          <p>You are successfully logged in!</p>
        </div>

        <div className="user-info">
          <div className="user-avatar">
            {user?.email?.charAt(0).toUpperCase()}
          </div>
          <div className="user-details">
            <h3>{user?.email}</h3>
            <p>User ID: {user?.uid}</p>
          </div>
        </div>

        <div className="dashboard-actions">
          <button 
            onClick={handleLogout} 
            className="logout-button"
            disabled={loading}
          >
            {loading ? <div className="spinner"></div> : 'Logout'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;