import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbarComp/navbar";
import { ProfileProvider } from "@/context/ProfileContext";
import { DoctorProvider } from "@/context/GetDoctorsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HealHub",
  description:
    "Modern Telemedicine Platform for Healthcare Solutions",
  viewport: "width=device-width, initial-scale=1",
  keywords:
    "telemedicine, healthcare, health, medical, doctor, patient, appointment, video, call, chat, prescription, history, profile, user, admin, dashboard, calendar, schedule, reminder, notification, healhub",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DoctorProvider>
          <ProfileProvider>
            <Navbar />
            {children}
          </ProfileProvider>
        </DoctorProvider>
      </body>
    </html>
  );
}
