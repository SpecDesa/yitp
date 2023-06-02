import Link from "next/link";
import React from "react";

const AboutYITP: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#e2e8f0] to-[#a0aec0]">
      <Link
        href="/"
        className="absolute left-4 top-4 "
      >
        <button className="rounded-lg bg-gray-300 px-6 py-2 font-bold text-gray-800 hover:bg-gray-400">
          Back
        </button>
      </Link>
      <div className="max-w-md rounded-xl bg-gray-200 p-8 shadow-xl">
        <h1 className="mb-4 text-3xl font-bold">Young IT Professionals</h1>
        <p className="mb-6">
          Young IT Professionals (YITP) hosts eight events every year,
          consisting of four keynote events and four networking events called
          &quot;Thirsty Thursday.&quot;
        </p>
        <h2 className="mb-2 text-xl font-bold">Keynote Events</h2>
        <p className="mb-4">
          The keynote events organized by YITP feature industry experts, thought
          leaders, and innovators who share their insights and experiences with
          young professionals in the IT field.
        </p>
        <h2 className="mb-2 text-xl font-bold">Thirsty Thursday</h2>
        <p className="mb-6">
          Thirsty Thursday is a series of networking events where young IT
          professionals can connect with each other, exchange ideas, and build
          valuable relationships within the industry.
        </p>
        <p className="text-gray-600">
          Learn, network, and grow with YITP. Join us at our upcoming events to
          expand your knowledge, connect with peers, and advance your IT career.
        </p>
      </div>
    </main>
  );
};

export default AboutYITP;
