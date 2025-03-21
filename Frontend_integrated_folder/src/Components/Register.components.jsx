"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Register() {
  const router = useRouter(); // Initialize router for redirection

  // State variables for form fields and messages
  const [name, setName] = useState(""); // User's full name
  const [email, setEmail] = useState(""); // User's email
  const [phone, setPhone] = useState(""); // User's phone number
  const [password, setPassword] = useState(""); // User's password
  const [error, setError] = useState(""); // Error message state
  const [success, setSuccess] = useState(""); // Success message state

  // Function to handle user signup
  const handleSignup = async () => {
    try {
      // Sending signup request to backend API
      const response = await axios.post("http://localhost:8000/auth/signup", {
        name,
        email,
        phone,
        password,
      });

      if (response.status === 201) {
        setSuccess("Signup successful! Redirecting...");
        setTimeout(() => router.push("/Login"), 2000); // Redirect to login page after 2 seconds
      }
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed. Please try again."); // Set error message
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-[35%] max-w-2xl rounded-[2rem] shadow-lg border border-gray-300 bg-white p-8">
        {/* Signup Form */}
        <div className="w-full flex flex-col items-center text-black">
          <h2 className="text-3xl font-semibold">Create an Account</h2>
          <p className="mb-4">Create your account</p>

          {/* Social Signup Icons */}
          <div className="flex space-x-4 mb-4">
            <img
              src="/Icons & Icon-gifs/google.png"
              alt="Google"
              className="w-8 h-8 cursor-pointer"
            />
            <img
              src="/Icons & Icon-gifs/facebook icon.png"
              alt="Facebook"
              className="w-8 h-8 cursor-pointer"
            />
            <img
              src="/Icons & Icon-gifs/instagram.png"
              alt="Instagram"
              className="w-8 h-8 cursor-pointer"
            />
          </div>

          {/* Signup Input Fields */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-3/4 py-3 px-5 rounded-[2rem] mb-3 border border-gray-300 bg-[#D9D9D9] text-black outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Example@email.com"
            className="w-3/4 py-3 px-5 rounded-[2rem] mb-3 border border-gray-300 bg-[#D9D9D9] text-black outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-3/4 py-3 px-5 rounded-[2rem] mb-3 border border-gray-300 bg-[#D9D9D9] text-black outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-3/4 py-3 px-5 rounded-[2rem] mb-3 border border-gray-300 bg-[#D9D9D9] text-black outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Error & Success Messages */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          {/* Signup Button */}
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-[2rem] mt-2"
            onClick={handleSignup}
          >
            Sign Up
          </button>

          {/* Redirect to Login */}
          <p className="mt-4">
            Already have an account?{" "}
            <a
              href="/Login"
              className="text-green-600 cursor-pointer underline"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
