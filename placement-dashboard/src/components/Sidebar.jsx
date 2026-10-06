import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Placement Portal</h2>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/jobs">Job Openings</Link>
        <Link to="/applications">My Applications</Link>
        <Link to="/interviews">Interviews</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;