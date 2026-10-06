import Sidebar from "../components/Sidebar";

function Applications() {
  return (
    <div className="dashboard">

      {/* Reusable Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">

        <h1>My Applications</h1>

        <p>Track your job applications here.</p>

        <section className="section">

          <table>

            <thead>
              <tr>
                <th>Company</th>
                <th>Position</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>TCS</td>
                <td>Software Developer</td>
                <td>Chennai</td>
                <td>Applied</td>
              </tr>

              <tr>
                <td>Infosys</td>
                <td>React Developer</td>
                <td>Bangalore</td>
                <td>Under Review</td>
              </tr>

              <tr>
                <td>Wipro</td>
                <td>Frontend Developer</td>
                <td>Hyderabad</td>
                <td>Shortlisted</td>
              </tr>

              <tr>
                <td>Accenture</td>
                <td>Java Developer</td>
                <td>Chennai</td>
                <td>Selected</td>
              </tr>

            </tbody>

          </table>

        </section>

      </main>

    </div>
  );
}

export default Applications;