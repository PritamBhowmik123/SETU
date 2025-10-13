import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ConnectionProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-500 hover:underline mb-4"
      >
        ← Back
      </button>

      <div className="max-w-3xl mx-auto bg-[#1a1a1a] p-6 rounded-xl shadow-md">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-700 rounded-full mb-4"></div>
          <h2 className="text-2xl font-semibold mb-2">User #{id}</h2>
          <p className="text-gray-400 mb-4">Software Professional</p>
          <p className="text-gray-300 text-sm text-center">
            Enthusiastic tech professional focused on building impactful software
            products and mentoring peers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectionProfile;
