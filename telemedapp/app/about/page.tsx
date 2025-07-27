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
              We're redefining access to healthcare—secure, personal, and
              delivered on‑demand in <strong>&lt; 3 minutes</strong>.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="leading-relaxed">
              Give every person, everywhere, friction‑free access to world‑class
              medical care—no waiting rooms, no paperwork mountains, no surprise
              bills.
            </p>
          </div>

          {/* story */}
          <div className="p-10 md:p-14">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h3>
            <p className="leading-relaxed">
              In the 2020 lockdown, an aspiring doctor and a software engineer spun up a
              <strong> Zoom clinic</strong> so patients could be seen from home. The demo
              soon added secure lab uploads and an <strong> AI layer</strong> that books
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
          Why Patients Choose Us
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: VerifiedIcon,
              title: "Verified Doctors",
              text: "Every clinician is credential‑checked and monitored for quality.",
            },
            {
              icon: ShieldIcon,
              title: "End‑to‑End Security",
              text: "HIPAA‑compliant video, encrypted records, SOC 2 audits.",
            },
            {
              icon: ClockIcon,
              title: "24/7 Availability",
              text: "Dermatologist at 2 a.m.? No problem—average wait < 3 min.",
            },
          ].map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* ───────── Meet the Founder ───────── */}
      <section className="max-w-6xl mx-auto px-6 my-24">
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet the Founder
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Founder Image/Avatar */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-6xl text-white">👩‍💻</span>
              </div>
              
              {/* Contact Links */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a 
                  href="mailto:mansikh.work@gmail.com"
                  className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition text-sm font-medium"
                >
                  <MailIcon />
                  Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/mansi-kharke-3b7565183/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition text-sm font-medium"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/MK-2206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition text-sm font-medium"
                >
                  <GithubIcon />
                  GitHub
                </a>
                <a 
                  href="https://mansikharke.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition text-sm font-medium"
                >
                  <PortfolioIcon />
                  Portfolio
                </a>
              </div>
            </div>

            {/* Founder Info */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-2">Mansi Kharke</h3>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                Full-Stack Software Developer & Healthcare Technology Innovator
              </p>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Mansi recently graduated with her Master's in Computer Science from <strong>Indiana University Bloomington</strong>. 
                  She's a full-stack developer specializing in healthcare technology, with experience at companies like 
                  <strong> Bloom Insurance</strong>, <strong>Mactores</strong>, and <strong>Open Cloudware</strong>.
                </p>
                
                <p>
                  Her expertise includes developing <strong>HIPAA-compliant telemedicine platforms</strong>, cloud security systems, 
                  and AI-powered applications. As a research co-author and <strong>Women Who Code</strong> team lead, 
                  she's passionate about making quality healthcare accessible and secure for everyone.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Key Achievements</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <h5 className="font-semibold text-blue-800 mb-1">Healthcare Innovation</h5>
                    <p className="text-sm text-gray-600">Developed HIPAA-compliant telemedicine platform reducing setup time by 60%</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                    <h5 className="font-semibold text-green-800 mb-1">Research Contribution</h5>
                    <p className="text-sm text-gray-600">Co-authored research on E-Health System Security using Cloud Computing</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500">
                    <h5 className="font-semibold text-purple-800 mb-1">Community Leadership</h5>
                    <p className="text-sm text-gray-600">Team Lead at Women Who Code, conducting workshops for 50+ students</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-500">
                    <h5 className="font-semibold text-orange-800 mb-1">Industry Recognition</h5>
                    <p className="text-sm text-gray-600">Adobe Student Ambassador & AWS Cloud Practitioner certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Expertise */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-2xl font-bold mb-6 text-center">Technical Expertise</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MedicalIcon />
                </div>
                <h5 className="font-semibold mb-2">Healthcare Tech</h5>
                <p className="text-sm text-gray-600">HIPAA Compliance, Telemedicine, Patient Data Security</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CodeIcon />
                </div>
                <h5 className="font-semibold mb-2">Full-Stack Dev</h5>
                <p className="text-sm text-gray-600">React.js, Node.js, .NET Core, Python, MongoDB</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CloudIcon />
                </div>
                <h5 className="font-semibold mb-2">Cloud & DevOps</h5>
                <p className="text-sm text-gray-600">AWS, Docker, CI/CD, Microservices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BrainIcon />
                </div>
                <h5 className="font-semibold mb-2">AI & ML</h5>
                <p className="text-sm text-gray-600">OpenAI API, Computer Vision, PyTorch</p>
              </div>
            </div>
          </div>
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
            Find Care Now
          </Link>
        </div>
      </section>
    </div>
  );
};

// Card component
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

// Icon Components
const VerifiedIcon = () => (
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

const ShieldIcon = () => (
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

const ClockIcon = () => (
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

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const MedicalIcon = () => (
  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const CodeIcon = () => (
  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <polyline points="16,18 22,12 16,6"/>
    <polyline points="8,6 2,12 8,18"/>
  </svg>
);

const CloudIcon = () => (
  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
  </svg>
);

const BrainIcon = () => (
  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M9.5 2A2.5 2.5 0 007 4.5v15A2.5 2.5 0 009.5 22h5a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0014.5 2h-5z"/>
    <circle cx="12" cy="8" r="2"/>
    <path d="M10.5 12h3"/>
    <path d="M10.5 16h3"/>
  </svg>
);

const PortfolioIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

export default About;