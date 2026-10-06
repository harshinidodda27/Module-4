import { createContext, useContext, useEffect, useState } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [student, setStudent] = useState(() => {
    const savedStudent = localStorage.getItem("student");

    if (savedStudent) {
      return JSON.parse(savedStudent);
    }

    return {
      name: "Student",
      email: "student@gmail.com",
      course: "B.Tech",
      skills: "React",
      phone: "",
    };
  });

  useEffect(() => {
    localStorage.setItem("student", JSON.stringify(student));
  }, [student]);

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  return useContext(StudentContext);
}