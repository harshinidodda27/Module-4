import Sidebar from "../components/Sidebar";

function Interviews() {
  return (
    <div className="dashboard">

      {/* Reusable Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">

        <h1>Interview Schedule</h1>

        <p>View your upcoming interviews here.</p>

        <section className="section">

          <table>

            <thead>
              <tr>
                <th>Company</th>
                <th>Position</th>
                <th>Date</th>
                <th>Time</th>
                <th>Mode</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>TCS</td>
                <td>Software Developer</td>
                <td>10 Oct 2026</td>
                <td>10:00 AM</td>
                <td>Online</td>
                <td>Scheduled</td>
              </tr>

              <tr>
                <td>Infosys</td>
                <td>React Developer</td>
                <td>12 Oct 2026</td>
                <td>2:00 PM</td>
                <td>Online</td>
                <td>Scheduled</td>
              </tr>

              <tr>
                <td>Wipro</td>
                <td>Frontend Developer</td>
                <td>15 Oct 2026</td>
                <td>11:00 AM</td>
                <td>Offline</td>
                <td>Scheduled</td>
              </tr>

            </tbody>

          </table>

        </section>

      </main>

    </div>
  );
}

export default Interviews;