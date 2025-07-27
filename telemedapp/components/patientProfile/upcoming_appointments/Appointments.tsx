"use client";
import React, { useEffect, useState } from "react";
import AppointmentsGrid from "./AppointmentsGrid";
import { useProfile } from "@/context/ProfileContext";

const Appointments: React.FC = () => {
  const { profileData, loading } = useProfile();
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(async () => {
      const storedAppointments = localStorage.getItem("appointments");
      if (storedAppointments) {
        setAppointments(JSON.parse(storedAppointments));
      } else {
        // Updated with correct data - keeping only 2 appointments
        setAppointments([
          {
            id: 1,
            appointment_id: "apt_001",
            doctor_availability_day_hour: "2025-01-15T10:00:00",
            appointment_duration: 30,
            appointment_type: "First Time",
            appointment_complaint: "Anxiety Consultation",
            appointment_settings_type: "Video",
            patient_first_name: "Mansi",
            patient_last_name: "Kharke",
            appointment_patient_id: "patient_001",
            doctor_first_name: "Sarah",
            doctor_last_name: "Johnson",
            specialty: "Psychiatrist"
          },
          {
            id: 2,
            appointment_id: "apt_002", 
            doctor_availability_day_hour: "2025-01-20T14:30:00",
            appointment_duration: 45,
            appointment_type: "Follow Up",
            appointment_complaint: "Cardiac follow-up consultation",
            appointment_settings_type: "Video",
            patient_first_name: "Mansi",
            patient_last_name: "Kharke",
            appointment_patient_id: "patient_001",
            doctor_first_name: " Priya",
            doctor_last_name: "Patel",
            specialty: "Cardiologist"
          }
        ]);
      }
    }, 2000); // Simulate loading delay
  }, [profileData]);

  console.log("Appointments: ", appointments);

  return (
    <div className="m-4 flex flex-col">
      {appointments?.length > 0 ? (
        <AppointmentsGrid
          appointments={appointments}
          profileData={profileData}
        />
      ) : (
        <p className="font-semibold">
          {loading ? "Loading..." : "No Upcoming Appointments Available"}
        </p>
      )}
    </div>
  );
};

export default Appointments;