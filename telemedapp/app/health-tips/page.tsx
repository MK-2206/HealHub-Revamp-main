"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HealthTips = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for subscribing!");
    setEmail("");
  };

  const quickTips = [
    {
      id: 1,
      title: "Desk Stretch Routine",
      teaser: "Beat back pain in 3 minutes.",
      image: "/assets/str.png",
      link: "https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/desk-stretches/art-20047250",
    },
    {
      id: 2,
      title: "Heart‑Smart Snacks",
      teaser: "Five foods your arteries love.",
      image: "/assets/hhh.png",
      link: "https://www.health.harvard.edu/heart-health/5-heart-healthy-snacks",
    },
    {
      id: 3,
      title: "Better Sleep Tonight",
      teaser: "Two habits to start at sunset.",
      image: "/assets/sl.png",
      link: "https://www.sleepfoundation.org/sleep-hygiene/healthy-sleep-tips",
    },
    {
      id: 4,
      title: "Screen‑Time Breaks",
      teaser: "The 20‑20‑20 rule for happier eyes.",
      image: "/assets/dtx.png",
      link: "https://www.aao.org/eye-health/tips-prevention/computer-usage",
    },
    {
      id: 5,
      title: "Post‑Workout Fuel",
      teaser: "Protein vs. carbs—timing is everything.",
      image: "/assets/cb.png",
      link: "https://www.acsm.org/blog-detail/acsm-certified-blog/2018/09/17/what-to-eat-after-workout",
    },
    {
      id: 6,
      title: "Mindful Breathing",
      teaser: "A 60‑second reset for midday stress.",
      image: "/assets/mb.png",
      link: "https://www.nhs.uk/mental-health/self-help/tips-and-support/breathing-exercises-for-stress/",
    },
  ];
  

  const trustedBlogs = [
    {
      title: "Spotting Heart-Attack Warning Signs",
      source: "Mayo Clinic",
      icon: "/assets/tt.png",
      url: "https://www.mayoclinic.org/diseases-conditions/heart-attack/symptoms-causes/syc-20373106"
    },
    {
      title: "Mediterranean Diet 101",
      source: "Harvard Health",
      icon: "/assets/mdt.png",
      url: "https://www.health.harvard.edu/heart-health/mediterranean-diet-101"
    },
    {
      title: "Understanding Long COVID",
      source: "WHO",
      icon: "/assets/cv.png",
      url: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19"
    },
    {
      title: "Strength Training for Seniors",
      source: "NHS",
      icon: "/blog-icons/4.png",
      url: "https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-older-adults/"
    },
    {
      title: "Mental Health First Aid",
      source: "JAMA Network",
      icon: "/blog-icons/5.png",
      url: "https://jamanetwork.com/journals/jama/fullarticle/2785678"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Health Tips & Trusted Reads
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Evidence‑based advice plus curated articles from the web.
          </p>
        </div>
      </section>

      {/* Featured In-House Tip */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="https://www.health.harvard.edu/category/staying-healthy"
          target="_blank"
          rel="noopener noreferrer"
    >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src="/assets/wt.png"
                      alt="Stay Hydrated"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Stay Hydrated—How Much Water Do You Really Need?
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Discover the science behind hydration and learn practical tips to maintain optimal water intake throughout your day. From understanding your body's signals to debunking common myths about daily water requirements.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Quick Tips Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Quick Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickTips.map((tip) => (
              <Link key={tip.id} href={tip.link}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className="relative h-48">
                    <Image
                      src={tip.image}
                      alt={tip.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-700">
                      {tip.teaser}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Blogs Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            Worth the Read
          </h2>
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
            {trustedBlogs.map((blog, index) => (
              <div key={index} className="flex-shrink-0 snap-start">
                <Link
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 min-w-[280px]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="relative w-8 h-8 flex-shrink-0">
                      <Image
                        src={blog.icon}
                        alt={blog.source}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {blog.source}
                      </p>
                      <div className="flex items-center text-blue-600">
                        <span className="text-sm font-medium">Read more</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Subscribe CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get weekly wellness tips
            </h2>
            <p className="text-gray-600 mb-8">
              No spam. Unsubscribe anytime.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthTips; 