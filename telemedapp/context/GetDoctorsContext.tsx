"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Doctor = {
  id: string;
  name: string;
  title: string;
  numSessions: number;
  nearestApp: string;
  fees60min: number;
  fees30min: number;
  interests: string[];
  rating: number;
  numReviews: number;
  language: string[];
  speciality: string;
  gender: string;
  price: number[];
  todayDate: string;
  thisWeek: string;
  dateRange1: string;
  dateRange2: string;
  country: string[];
  sort: string;
  isOnline: string;
};
interface DoctorContextProps {
  doctors: Doctor[];
  isLoading: boolean;
  error: string | null;
  fetchDoctors: () => void;
}

const DoctorContext = createContext<DoctorContextProps | undefined>(undefined);

export const DoctorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDoctors = async () => {
    try {
      setIsLoading(true);
      // const response = await fetch(
      //   `${process.env.NEXT_PUBLIC_SERVER_NAME}/patient/home`,
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

      // if (!response.ok) {
      //   throw new Error("Failed to fetch doctors");
      // }
      // const data = await response.json();

      const data: Doctor[] = [
        {
          id: "1",
          name: "Dr. Sarah Johnson",
          title: "Psychiatrist",
          numSessions: 10,
          nearestApp: "2025-01-15",
          rating: 4.5,
          fees60min: 45,
          fees30min: 30,
          numReviews: 50,
          interests: ["Depression", "Anxiety", "Stress", "Relationships"],
          speciality: "Mental Health",
          gender: "Female",
          price: [45, 30],
          todayDate: "2025-01-15",
          thisWeek: "2025-01-15 to 2025-01-21",
          dateRange1: "2025-01-01 to 2025-01-07",
          dateRange2: "2025-01-08 to 2025-01-14",
          country: ["United States"],
          sort: "rating",
          isOnline: "Yes",
          language: ["English", "Spanish"],
        },
        {
          id: "2",
          name: "Dr. Priya Patel",
          title: "Cardiologist",
          numSessions: 15,
          nearestApp: "2025-01-20",
          rating: 4.7,
          fees60min: 75,
          fees30min: 50,
          numReviews: 60,
          interests: [
            "Heart Disease",
            "Hypertension",
            "Cholesterol",
            "Arrhythmia",
          ],
          speciality: "Cardiology",
          gender: "Female",
          price: [75, 50],
          todayDate: "2025-01-15",
          thisWeek: "2025-01-15 to 2025-01-21",
          dateRange1: "2025-01-01 to 2025-01-07",
          dateRange2: "2025-01-08 to 2025-01-14",
          country: ["India"],
          sort: "nearestApp",
          isOnline: "No",
          language: ["English", "Hindi"],
        },
        {
          id: "3",
          name: "Dr. Maria Rodriguez",
          title: "Dermatologist",
          numSessions: 20,
          nearestApp: "2025-01-25",
          rating: 4.8,
          fees60min: 85,
          fees30min: 55,
          numReviews: 70,
          interests: ["Acne", "Eczema", "Psoriasis", "Skin Cancer"],
          speciality: "Dermatology",
          gender: "Female",
          price: [85, 55],
          todayDate: "2025-01-15",
          thisWeek: "2025-01-15 to 2025-01-21",
          dateRange1: "2025-01-01 to 2025-01-07",
          dateRange2: "2025-01-08 to 2025-01-14",
          country: ["Mexico"],
          sort: "rating",
          language: ["English", "Spanish"],

          isOnline: "Yes",
        },
        {
          id: "4",
          name: "Dr. James Chen",
          title: "Pediatrician",
          numSessions: 25,
          nearestApp: "2025-01-30",
          rating: 4.9,
          fees60min: 80,
          fees30min: 45,
          numReviews: 80,
          interests: [
            "Child Development",
            "Vaccinations",
            "Nutrition",
            "Asthma",
          ],
          speciality: "Pediatrics",
          gender: "Male",
          price: [80, 45],
          todayDate: "2025-01-15",
          thisWeek: "2025-01-15 to 2025-01-21",
          dateRange1: "2025-01-01 to 2025-01-07",
          dateRange2: "2025-01-08 to 2025-01-14",
          country: ["Canada"],
          sort: "nearestApp",
          language: ["English", "Mandarin"],

          isOnline: "No",
        },
        {
          id: "5",
          name: "Dr. Aisha Williams",
          title: "Neurologist",
          numSessions: 18,
          nearestApp: "2025-02-05",
          rating: 4.6,
          fees60min: 95,
          fees30min: 65,
          numReviews: 55,
          interests: ["Epilepsy", "Stroke", "Migraine", "Multiple Sclerosis"],
          speciality: "Neurology",
          gender: "Female",
          price: [95, 65],
          todayDate: "2025-01-15",
          thisWeek: "2025-01-15 to 2025-01-21",
          dateRange1: "2025-01-01 to 2025-01-07",
          dateRange2: "2025-01-08 to 2025-01-14",
          country: ["United States"],
          sort: "rating",
          language: ["English", "Arabic"],

          isOnline: "Yes",
        },
        {
          id: "6",
          name: "Dr. Giovanni Rossi",
          title: "Endocrinologist",
          numSessions: 22,
          nearestApp: "2025-02-10",
          rating: 4.7,
          fees60min: 105,
          fees30min: 60,
          numReviews: 65,
          interests: [
            "Diabetes",
            "Thyroid Disorders",
            "Hormonal Imbalances",
            "Obesity",
          ],
          speciality: "Endocrinology",
          gender: "Male",
          price: [105, 60],
          todayDate: "2025-01-15",
          thisWeek: "2025-01-15 to 2025-01-21",
          dateRange1: "2025-01-01 to 2025-01-07",
          dateRange2: "2025-01-08 to 2025-01-14",
          country: ["Italy"],
          sort: "nearestApp",
          language: ["English", "Italian"],

          isOnline: "No",
        },
        {
          id: "7",
          name: "Dr. Ahmed Hassan",
          title: "Orthopedic Surgeon",
          numSessions: 30,
          nearestApp: "2025-02-15",
          rating: 4.8,
          fees60min: 125,
          fees30min: 70,
          numReviews: 75,
          interests: [
            "Joint Replacement",
            "Sports Injuries",
            "Arthritis",
            "Fractures",
          ],
          speciality: "Orthopedics",
          gender: "Male",
          price: [125, 70],
          todayDate: "2025-01-15",
          thisWeek: "2025-01-15 to 2025-01-21",
          dateRange1: "2025-01-01 to 2025-01-07",
          dateRange2: "2025-01-08 to 2025-01-14",
          country: ["Egypt"],
          sort: "rating",
          language: ["English", "Arabic"],

          isOnline: "Yes",
        },
        {
          id: "8",
          name: "Dr. Yuki Tanaka",
          title: "Gastroenterologist",
          numSessions: 28,
          nearestApp: "2025-02-20",
          rating: 4.9,
          fees60min: 115,
          fees30min: 62,
          numReviews: 85,
          interests: ["IBS", "Liver Disease", "GERD", "Colonoscopy"],
          speciality: "Gastroenterology",
          gender: "Female",
          price: [115, 62],
          todayDate: "2025-01-15",
          thisWeek: "2025-01-15 to 2025-01-21",
          dateRange1: "2025-01-01 to 2025-01-07",
          dateRange2: "2025-01-08 to 2025-01-14",
          country: ["Japan"],
          sort: "nearestApp",
          language: ["English", "Japanese"],
          isOnline: "No",
        },
      ];

      setDoctors(data);
      setIsLoading(false);
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (doctors.length === 0) {
      fetchDoctors();
    }
  }, [doctors]);

  return (
    <DoctorContext.Provider value={{ doctors, isLoading, error, fetchDoctors }}>
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctorContext = () => {
  const context = useContext(DoctorContext);
  if (!context) {
    throw new Error("useDoctorContext must be used within a DoctorProvider");
  }
  return context;
};
