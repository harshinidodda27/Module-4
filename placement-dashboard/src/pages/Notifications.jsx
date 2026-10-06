import Sidebar from "../components/Sidebar";

function Notifications() {
  return (
    <div className="dashboard">

      {/* Reusable Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">

        <h1>Notifications</h1>

        <p>Stay updated with your placement activities.</p>

        <section className="section">

          <div>
            <h3>Interview Scheduled</h3>
            <p>
              Your TCS interview is scheduled for 10 Oct 2026 at 10:00 AM.
            </p>
          </div>

          <hr />

          <br />

          <div>
            <h3>Application Shortlisted</h3>
            <p>
              Your application for Wipro has been shortlisted.
            </p>
          </div>

          <hr />

          <br />

          <div>
            <h3>New Job Opening</h3>
            <p>
              A new React Developer position is available at Infosys.
            </p>
          </div>

          <hr />

          <br />

          <div>
            <h3>Application Submitted</h3>
            <p>
              Your application for TCS was successfully submitted.
            </p>
          </div>

        </section>

      </main>

    </div>
  );
}

export default Notifications;