"use client";

import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* ───────── Hero ───────── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-indigo-50 to-blue-100">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 px-6 py-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              About&nbsp;HealHub
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-xl">
              We’re redefining access to healthcare—secure, personal, and
              delivered on‑demand in <strong>&lt; 3 minutes</strong>.
            </p>
          </div>

          {/* image */}
          <div className="relative w-full h-72 lg:h-auto">
            <Image
              src="/assets/nnn.png"
              alt="Tele‑health illustration"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ───────── Mission + Story Card ───────── */}
      <section className="max-w-6xl mx-auto px-6 my-24">
        <div className="bg-white rounded-3xl shadow-xl grid md:grid-cols-2">
          {/* mission */}
          <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="leading-relaxed">
              Give every person, everywhere, friction‑free access to world‑class
              medical care—no waiting rooms, no paperwork mountains, no surprise
              bills.
            </p>
          </div>

          {/* story */}
          <div className="p-10 md:p-14">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h3>
            <p className="leading-relaxed">
  In the 2020 lockdown, an aspiring doctor and a software engineer spun up a
  <strong>Zoom clinic</strong> so patients could be seen from home. The demo
  soon added secure lab uploads and an  <strong>AI layer</strong> that books
  follow‑ups and sends e‑prescriptions. HealHub now brings
  <strong> fast, encrypted video visits</strong> and smart chat support—no
  waiting rooms required.
</p>



          </div>
        </div>
      </section>

      {/* ───────── Values Grid ───────── */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Patients Choose Us
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Verified,
              title: "Verified Doctors",
              text: "Every clinician is credential‑checked and monitored for quality.",
            },
            {
              icon: Shield,
              title: "End‑to‑End Security",
              text: "HIPAA‑compliant video, encrypted records, SOC 2 audits.",
            },
            {
              icon: Clock,
              title: "24/7 Availability",
              text: "Dermatologist at 2 a.m.? No problem—average wait < 3 min.",
            },
          ].map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* ───────── CTA Strip ───────── */}
      <section className="bg-[#035fe9] mt-24">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for care that moves at the speed of life?
          </h2>
          <Link
            href="/doctors"
            className="inline-block bg-white text-[#035fe9] font-semibold px-10 py-4 rounded-full shadow hover:shadow-lg transition"
          >
            Find Care Now
          </Link>
        </div>
      </section>
    </div>
  );
};

/* ───────── small components ───────── */

const Card = ({
  icon: Icon,
  title,
  text,
}: {
  icon: () => JSX.Element;
  title: string;
  text: string;
}) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition">
    <div className="w-14 h-14 mb-4 flex items-center justify-center bg-blue-100 rounded-xl">
      <Icon />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{text}</p>
  </div>
);

/* simple inline SVGs — no external package */
const Verified = () => (
  <svg
    className="w-7 h-7 text-blue-600"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const Shield = () => (
  <svg
    className="w-7 h-7 text-green-600"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const Clock = () => (
  <svg
    className="w-7 h-7 text-purple-600"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default About;
