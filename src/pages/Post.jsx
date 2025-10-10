import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Post = () => {
  const [activeTab, setActiveTab] = useState("recommendations");
  const navigate = useNavigate();

  const mentors = [
    { id: 1, name: "Aarav Mehta", skill: "Full Stack Development", match: 92 },
    { id: 2, name: "Riya Sharma", skill: "Data Science & Machine Learning", match: 87 },
    { id: 3, name: "Vikram Nair", skill: "Cybersecurity & Cloud Computing", match: 81 },
    { id: 4, name: "Sneha Patel", skill: "UI/UX Design", match: 95 },
  ];

  const connections = [
    { id: 1, name: "Ananya Gupta", role: "Frontend Developer" },
    { id: 2, name: "Rohit Verma", role: "Data Analyst" },
    { id: 3, name: "Mehul Jain", role: "Cloud Engineer" },
    { id: 4, name: "Priya Das", role: "UX Researcher" },
    { id: 5, name: "Ishaan Roy", role: "Mobile App Developer" },
    { id: 6, name: "Simran Kaur", role: "AI Engineer" },
    { id: 7, name: "Kunal Sinha", role: "Backend Developer" },
    { id: 8, name: "Neha Reddy", role: "Product Manager" },
    { id: 9, name: "Rahul Yadav", role: "Blockchain Specialist" },
    { id: 10, name: "Divya Nair", role: "QA Engineer" },
  ];

  const posts = [
    {
      id: 1,
      author: "Aarav Mehta",
      role: "Full Stack Developer",
      text: "Excited to share my latest MERN stack project — a real-time collaboration tool!",
    },
    {
      id: 2,
      author: "Riya Sharma",
      role: "Data Scientist",
      text: "Achieved 98% model accuracy on an AI-driven healthcare dataset. Feeling accomplished!",
    },
    {
      id: 3,
      author: "Vikram Nair",
      role: "Cybersecurity Analyst",
      text: "Conducted a security audit on a fintech startup — learned so much about ethical hacking.",
    },
    {
      id: 4,
      author: "Sneha Patel",
      role: "UI/UX Designer",
      text: "Designing user experiences that feel human and intuitive is my true passion!",
    },
    {
      id: 5,
      author: "Kunal Sinha",
      role: "Backend Developer",
      text: "Implemented a new microservices architecture — the performance boost was massive 🚀",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="pt-24 min-h-screen bg-[#0d0d0d] text-white p-6">
        {/* Navigation Tabs */}
        <div className="flex justify-center gap-6 border-b border-gray-700 pb-3 mb-6">
          {["recommendations", "connections", "feed", "jobpost"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? "bg-[#C5B239] text-black"
                  : "text-gray-400 hover:text-[#C5B239]"
              }`}
            >
              {tab === "jobpost" ? "Job Post" : tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Recommendations */}
          {activeTab === "recommendations" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-2 text-[#C5B239]">
                Mentor Recommendations
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {mentors.map((mentor) => (
                  <div
                    key={mentor.id}
                    onClick={() => navigate(`/mentor/${mentor.id}`)}
                    className="bg-[#1a1a1a] p-5 rounded-xl shadow-md flex flex-col items-center cursor-pointer hover:bg-[#222] transition-all duration-200"
                  >
                    <div className="w-16 h-16 bg-gray-700 rounded-full mb-3"></div>
                    <h3 className="font-semibold text-lg text-[#C5B239]">
                      {mentor.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">{mentor.skill}</p>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 mt-3 mb-1">
                      <div
                        className="bg-[#C5B239] h-2.5 rounded-full"
                        style={{ width: `${mentor.match}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-400 text-xs">{mentor.match}% match</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Connections */}
          {activeTab === "connections" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-2 text-[#C5B239]">
                Your Connections
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {connections.map((conn) => (
                  <div
                    key={conn.id}
                    onClick={() => navigate(`/connectionProfile/${conn.id}`)}
                    className="bg-[#1a1a1a] p-4 rounded-xl shadow-md flex justify-between items-center hover:bg-[#222] cursor-pointer transition-all"
                  >
                    <div>
                      <h3 className="font-semibold text-[#C5B239]">{conn.name}</h3>
                      <p className="text-gray-400 text-sm">{conn.role}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/chat/${conn.id}`);
                      }}
                      className="bg-[#C5B239] hover:bg-[#b9a531] text-black font-medium px-3 py-1 rounded-md text-sm transition"
                    >
                      Message
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Feed */}
          {activeTab === "feed" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-2 text-[#C5B239]">Feed</h2>
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-[#1a1a1a] p-4 rounded-xl shadow-md space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                    <div>
                      <h3 className="font-semibold text-[#C5B239]">{post.author}</h3>
                      <p className="text-gray-400 text-sm">{post.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{post.text}</p>
                  <div className="bg-gray-800 h-40 rounded-lg"></div>

                  <div className="flex justify-between mt-3 pt-2 border-t border-gray-700">
                    {["👍 Like", "💬 Comment", "✉️ Message"].map((action) => (
                      <button
                        key={action}
                        className="text-gray-400 hover:text-[#C5B239] text-sm transition"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Job Post */}
          {activeTab === "jobpost" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-2 text-[#C5B239]">Job Openings</h2>
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="bg-[#1a1a1a] p-4 rounded-xl shadow-md flex justify-between items-start"
                >
                  <div>
                    <h3 className="font-semibold text-[#C5B239]">
                      Technical Support Officer
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      Company XYZ • Location: Remote
                    </p>
                    <p className="text-gray-300 text-sm">
                      Responsibilities include assisting customers with tech issues,
                      troubleshooting, and maintaining system logs.
                    </p>
                  </div>
                  <button
                    onClick={() => navigate(`/apply/${i}`)}
                    className="bg-[#C5B239] hover:bg-[#b9a531] text-black font-medium px-3 py-1 rounded-md text-sm transition"
                  >
                    Apply
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
