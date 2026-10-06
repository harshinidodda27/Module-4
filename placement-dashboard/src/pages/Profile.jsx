import { useState } from "react";
import { useStudent } from "../context/StudentContext";
import Sidebar from "../components/Sidebar";

function Profile() {
  const { student, setStudent } = useStudent();

  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);
  const [course, setCourse] = useState(student.course);
  const [skills, setSkills] = useState(student.skills);
  const [phone, setPhone] = useState(student.phone || "");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Enter a valid email address";
    }

    if (phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = "Phone number must contain 10 digits";
    }

    if (skills.trim() === "") {
      newErrors.skills = "Please enter your skills";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStudent({
      name,
      email,
      course,
      skills,
      phone,
    });

    setErrors({});

    alert("Profile updated successfully!");
  };

  return (
    <div className="dashboard">

      {/* Reusable Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">

        <h1>Student Profile</h1>

        <p>Manage your personal and academic information.</p>

        <section className="section">

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div>
              <label>Name</label>
              <br />

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              {errors.name && (
                <p className="error">{errors.name}</p>
              )}
            </div>

            <br />

            {/* Email */}
            <div>
              <label>Email</label>
              <br />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {errors.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>

            <br />

            {/* Phone */}
            <div>
              <label>Phone</label>
              <br />

              <input
                type="text"
                placeholder="Enter 10 digit phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              {errors.phone && (
                <p className="error">{errors.phone}</p>
              )}
            </div>

            <br />

            {/* Course */}
            <div>
              <label>Course</label>
              <br />

              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option>B.Tech</option>
                <option>B.E</option>
                <option>BCA</option>
                <option>MCA</option>
                <option>M.Tech</option>
              </select>
            </div>

            <br />

            {/* Skills */}
            <div>
              <label>Skills</label>
              <br />

              <input
                type="text"
                placeholder="Example: React, JavaScript, HTML"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />

              {errors.skills && (
                <p className="error">{errors.skills}</p>
              )}
            </div>

            <br />

            <button type="submit">
              Update Profile
            </button>

          </form>

        </section>

      </main>

    </div>
  );
}

export default Profile;