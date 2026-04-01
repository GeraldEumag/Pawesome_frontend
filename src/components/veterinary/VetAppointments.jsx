import React, { useState } from "react";

const VetAppointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, pet: "Buddy", owner: "Alice", date: "2026-03-28", service: "Check-up" },
    { id: 2, pet: "Milo", owner: "Gerald", date: "2026-03-29", service: "Vaccination" }
  ]);

  return (
    <div>
      <h2>Veterinary Appointments</h2>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id}>
            {appt.date} — {appt.pet} ({appt.owner}) : {appt.service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VetAppointments;