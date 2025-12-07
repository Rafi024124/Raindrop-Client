import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email format";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await axios.post(
          "https://rainserver.vercel.app/participants",
          form
        );

        if (res.data.insertedId) {
          Swal.fire({
            title: "Registration Successful!",
            text: "Click okay to continue",
            icon: "success",
            draggable: true,

            background: "#1e1e1e",
            color: "#fff",

            confirmButtonColor: "#3B82F6",
            cancelButtonColor: "#3B82F6",
          }).then(() => {
            navigate("/admin");
          });
        }

        setForm({
          name: "",
          email: "",
          phone: "",
          organization: "",
          role: "",
          message: "",
        });
      } catch (error) {
        console.error(error);
        setSuccess("Something went wrong. Try again!");
      }
    }
  };

  return (
    <section className="w-full  mx-auto bg-linear-to-b from-[#000A3B] to-black min-h-screen flex justify-center items-center px-6 py-10">
      <div className="bg-black w-full max-w-lg p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#525873]">
          Register for <span className="text-[#26FF60]">RainDrop</span>
        </h2>

        {success && (
          <p className="bg-green-200 text-green-700 p-3 rounded-lg mb-4 text-center">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-medium text-white">
              Full Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 text-white  bg-white/10 
    backdrop-blur-md 
    border border-white/20 
    rounded-xl 
    p-2 
    cursor-pointer 
    transition-all 
    hover:bg-white/20 
    hover:border-white/30 
    shadow-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="font-medium text-white">
              Email <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 text-white  bg-white/10 
    backdrop-blur-md 
    border border-white/20 
    rounded-xl 
    p-2
    cursor-pointer 
    transition-all 
    hover:bg-white/20 
    hover:border-white/30 
    shadow-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="font-medium text-white">
              Phone Number <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-1 text-white  bg-white/10 
    backdrop-blur-md 
    border border-white/20 
    rounded-xl 
    p-2 
    cursor-pointer 
    transition-all 
    hover:bg-white/20 
    hover:border-white/30 
    shadow-lg"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="font-medium text-white">Organization</label>
            <input
              type="text"
              name="organization"
              value={form.organization}
              onChange={handleChange}
              className="w-full mt-1 text-white  bg-white/10 
    backdrop-blur-md 
    border border-white/20 
    rounded-xl 
    p-2 
    cursor-pointer 
    transition-all 
    hover:bg-white/20 
    hover:border-white/30 
    shadow-lg"
            />
          </div>

          <div>
            <label className="font-medium text-white">Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full mt-1 text-white  bg-white/10 
    backdrop-blur-md 
    border border-white/20 
    rounded-xl 
    p-2 
    cursor-pointer 
    transition-all 
    hover:bg-white/20 
    hover:border-white/30 
    shadow-lg"
            >
              <option value="" className="bg-[#525873] text-white">
                Select role
              </option>
              <option value="Student" className="bg-[#525873] text-white">
                Student
              </option>
              <option value="Researcher" className="bg-[#525873] text-white">
                Researcher
              </option>
              <option value="Professional" className="bg-[#525873] text-white">
                Professional
              </option>
            </select>
          </div>

          <div>
            <label className="font-medium text-white">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full mt-1 text-white  bg-white/10 
    backdrop-blur-md 
    border border-white/20 
    rounded-xl 
    p-2 
    cursor-pointer 
    transition-all 
    hover:bg-white/20 
    hover:border-white/30 
    shadow-lg"
              rows="3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#26FF60] text-black font-bold py-3 rounded-lg hover:bg-green-400"
          >
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
