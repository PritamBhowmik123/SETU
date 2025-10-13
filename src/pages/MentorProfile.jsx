import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const MentorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar/>
      <div className="pt-25 min-h-screen bg-[#0d0d0d] text-white p-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-500 hover:underline mb-4"
      >
        ← Back
      </button>

      <div className="max-w-3xl mx-auto bg-[#1a1a1a] p-6 rounded-xl shadow-md">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-700 rounded-full mb-4"></div>
          <h2 className="text-2xl font-semibold mb-2">Mentor #{id}</h2>
          <p className="text-gray-400 mb-4">Expert in Full Stack Development</p>

          <div className="text-gray-300 text-sm space-y-2 text-center">
            <p>
              Experienced professional with 8+ years in software development and
              mentoring.
            </p>
            <p>
              Specialized in React, Node.js, and scalable web architecture.
            </p>
            <p>
              Helps mentees grow their technical and problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default MentorProfile;
