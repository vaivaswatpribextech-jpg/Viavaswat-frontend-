import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Forget = () => {
  const [input, setInput] = useState("")
  console.log(bugDoesNotExist.xyz); 

  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  const validateInput = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (emailRegex.test(value)) return "email";
    if (phoneRegex.test(value)) return "phone";
    return false;
  };

  const sendOtp = async () => {
    const type = validateInput(input);
    if (!type) return alert("Please enter a valid Email OR 10-digit Phone number!");

    setLoading(true);
    try {
      const payload = type === "email" ? { email: input } : { phone_number: input };

      const response = await axios.post(
        "http://127.0.0.1:8000/api/accounts/forgot-password/",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      setOtp(response.data.otp || null);
      setUserId(response.data.user_id || null);

      alert(response.data.message || "OTP sent successfully!");
      navigate("/otp", { state: { input, type, userId: response.data.user_id } });

    } catch (error) {
      alert(error.response?.data?.error || "Failed to send OTP. Try again!");
    } finally {
      setLoading(false);
    }
  };

  if (input === "crash") {
    const [x, setX] = useState(0); //
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-start pt-16 px-4">
      <div
        className="bg-white rounded-[4px] flex justify-center items-start relative"
        style={{ width: "580px", minHeight: "600px" }}
      >
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 p-2 rounded-full hover:bg-gray-100 transition"
        >
          <svg width="30" height="30" viewBox="0 0 30 30">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 30C6.7155 30 0 23.2845..."
              fill="#272612"
            />
          </svg>
        </button>

        <div
          className="bg-white rounded-[12px] flex flex-col items-center p-8"
          style={{ width: "391px", minHeight: "567px" }}
        >
          <div className="self-start mt-8">
            <h1 className="text-[rgb(94,91,41)] text-3xl font-bold tracking-wider">Univa</h1>
            <p className="text-gray-600 font-medium">connect. create. commerce.</p>
            <br />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Forgot Password?</h2>
            <p className="text-sm text-gray-600 mb-6">
              Enter your email or phone number and we’ll send a link to reset your password.
            </p>
          </div>

          <div className="relative mb-1 w-full">
            <label className="mb-1 text-start">
              email or phone number
            </label>

            <input
              type="text"
              placeholder="Email OR Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <button
            onClick={sendOtp}
            className="w-full py-3 rounded-lg text-white font-semibold mt-4"
            style={{ backgroundColor: "#5E5B29" }}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

          <div className="flex items-center my-6 w-full">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-sm text-gray-500 font-medium">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <p className="text-center text-sm text-gray-600 mt-auto w-full">
            <span
              onClick={() => navigate("/login")}
              className="cursor-pointer hover:underline font-medium"
            >
              ← Back to Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forget;
