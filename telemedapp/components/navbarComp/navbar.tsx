"use client";

import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { PiSignInBold } from "react-icons/pi";
import { BsPersonFillAdd } from "react-icons/bs";
import MenuList from "../MenuList/menuList";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

const menuIcon = <IoMenu className="h-8 w-8 text-[#035fe9]" />;
const signedInIcon = <FaUserCircle className="h-10 w-10 text-[#035fe9]" />;

const Navbar = () => {
  const [token, setToken] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  /* ---------------- sign‑out ---------------- */
  const handleSignOut = () => {
    localStorage.clear();
    setToken(null);
    setUserRole(null);
    router.push("/auth/signin");
  };

  /* ---------------- auth check ---------------- */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedToken = localStorage.getItem("jwt");
    const storedRole = localStorage.getItem("userRole");
    const expiryDate = localStorage.getItem("expiryDate");

    if (storedToken && !(expiryDate && Date.now() / 1000 > +expiryDate)) {
      setToken(storedToken);
      setUserRole(storedRole);
    } else {
      setToken(null);
      setUserRole(null);
    }
  }, [pathname]);

  /* ---------------- JSX ---------------- */
  return (
    <nav className="h-14 bg-white border-b sticky top-0 z-10 pb-8">
      <div className="max-w-full md:max-w-[90%] min-[1130px]:max-w-[75%] flex justify-between items-center mx-auto">
        {/* logo → home */}
        <Link href="/" className="flex items-center">
          <img src="/assets/de.png" alt="logo" className="w-14 h-14" />
          <span className="ml-1 text-base md:text-xl font-semibold">
            HealHub
          </span>
        </Link>

        {/* ------- desktop nav ------- */}
        <div className="hidden min-[1130px]:flex gap-6 text-[#4d4d4f] text-sm font-light">
          <button
            className="font-semibold hover:text-[#035fe9]"
            onClick={() => router.push("http://localhost:3000/")}
          >
            Home
          </button>
          <button
            className="font-semibold hover:text-[#035fe9]"
            onClick={() => router.push("http://localhost:3000/doctors")}
          >
            Find Care
          </button>
          <button
            className="font-semibold hover:text-[#035fe9]"
            onClick={() => router.push("/about")}
          >
            About
          </button>
          <button
            className="font-semibold hover:text-[#035fe9]"
            onClick={() => router.push("/health-tips")}
          >
            Health Tips
          </button>
          <button
            className="font-semibold hover:text-[#035fe9]"
            onClick={() => router.push("/contact")}
          >
            Contact
          </button>
        </div>

        {/* ------- auth controls + hamburger ------- */}
        <div className="flex items-center gap-4">
          {!token ? (
            <>
              <Link href="/auth/signin">
                <button className="hidden min-[1130px]:inline-block border border-[#035fe9] text-[#035fe9] rounded-lg px-12 py-2">
                  Sign in
                </button>
                <PiSignInBold className="min-[1130px]:hidden h-6 w-6 text-[#035fe9]" />
              </Link>
              <Link href="/auth/signup">
                <button
                  className={`${styles.gradient_button} hidden min-[1130px]:inline-block text-white rounded-lg px-12 py-2`}
                >
                  Sign up
                </button>
                <BsPersonFillAdd className="min-[1130px]:hidden h-6 w-6 text-[#035fe9]" />
              </Link>
            </>
          ) : (
            <MenuList
              linkTo={
                userRole === "Patient"
                  ? [
                      "/patientProfile",
                      "/patientProfile/upcoming_appointments",
                      "/patientProfile/patientDocuments",
                      "/patientProfile/paymentInfo",
                      "/auth/signout",
                    ]
                  : [
                      "/doctorProfile",
                      "/doctorProfile/timeSlots",
                      "/doctorProfile/appointments",
                      "/auth/signout",
                    ]
              }
              linkName={
                userRole === "Patient"
                  ? [
                      "View Profile",
                      "My Appointments",
                      "My Documents",
                      "Wallet",
                      "Sign Out",
                    ]
                  : [
                      "View Profile",
                      "Set Time Slots",
                      "My Appointments",
                      "Sign Out",
                    ]
              }
              text={signedInIcon}
              onSignOut={handleSignOut}
            />
          )}

          {/* mobile hamburger */}
          <div className="min-[1130px]:hidden">
            <MenuList
              linkTo={[
                "/",               // Home
                "/doctors",        // Find Care
                "/about",          // About
                "/health-tips",    // Health Tips
                "/contact",        // Contact
              ]}
              linkName={[
                "Home",
                "Find Care",
                "About",
                "Health Tips",
                "Contact",
              ]}
              text={menuIcon}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
