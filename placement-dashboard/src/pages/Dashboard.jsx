import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useStudent } from "../context/StudentContext";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const { student } = useStudent();

  const applicationData = [
    {
      status: "Applied",
      count: 5,
    },
    {
      status: "Under Review",
      count: 3,
    },
    {
      status: "Shortlisted",
      count: 2,
    },
    {
      status: "Selected",
      count: 2,
    },
  ];

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">

        <h1>Student Placement Dashboard</h1>

        <p>
          Welcome back, {student.name}!
        </p>

        {/* Statistics Cards */}
        <div className="stats">

          <div className="card">
            <h3>Total Jobs Applied</h3>
            <h2>12</h2>
          </div>

          <div className="card">
            <h3>Applications Under Review</h3>
            <h2>5</h2>
          </div>

          <div className="card">
            <h3>Interviews Scheduled</h3>
            <h2>3</h2>
          </div>

          <div className="card">
            <h3>Selected</h3>
            <h2>2</h2>
          </div>

        </div>

        {/* Application Analytics */}
        <section className="section">

          <h2>Application Analytics</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={applicationData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="status" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="count" />

            </BarChart>
          </ResponsiveContainer>

        </section>

        {/* Upcoming Interviews */}
        <section className="section">

          <h2>Upcoming Interviews</h2>

          <table>

            <thead>
              <tr>
                <th>Company</th>
                <th>Date</th>
                <th>Time</th>
                <th>Mode</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>TCS</td>
                <td>10 Oct 2026</td>
                <td>10:00 AM</td>
                <td>Online</td>
              </tr>

              <tr>
                <td>Infosys</td>
                <td>12 Oct 2026</td>
                <td>2:00 PM</td>
                <td>Online</td>
              </tr>

            </tbody>

          </table>

        </section>

        {/* Recent Applications */}
        <section className="section">

          <h2>Recent Applications</h2>

          <table>

            <thead>
              <tr>
                <th>Company</th>
                <th>Position</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>TCS</td>
                <td>Software Developer</td>
                <td>Under Review</td>
              </tr>

              <tr>
                <td>Wipro</td>
                <td>Frontend Developer</td>
                <td>Shortlisted</td>
              </tr>

              <tr>
                <td>Infosys</td>
                <td>React Developer</td>
                <td>Applied</td>
              </tr>

            </tbody>

          </table>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;