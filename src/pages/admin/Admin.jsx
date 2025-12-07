import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const Admin = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("https://rainserver.vercel.app/participants")
      .then((res) => {
        setParticipants(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;

  const validate = () => {
    let newErrors = {};

    if (!editForm.name.trim()) newErrors.name = "Name is required";
    if (!editForm.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(editForm.email))
      newErrors.email = "Invalid email format";

    if (!editForm.phone.trim()) newErrors.phone = "Phone number is required";

    return newErrors;
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        axios
          .patch(
            `https://rainserver.vercel.app/participants/${editingUser._id}`,
            editForm
          )
          .then(() => {
            setParticipants((prev) =>
              prev.map((item) =>
                item._id === editingUser._id ? { ...item, ...editForm } : item
              )
            );

            setIsEditOpen(false);
          })
          .catch(console.log);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDelete = (_id) => {


  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  background: "#1e1e1e",
  color: "#ffffff",
  showCancelButton: true,
  confirmButtonText: "Yes, delete!",
  cancelButtonText: "Cancel",
  confirmButtonColor: "#ff4d4d",
  cancelButtonColor: "#3B82F6",
  customClass: {
    
    confirmButton: "text-black font-bold",
    cancelButton: "text-black font-bold"
  }
}).then((result) => {
  if (result.isConfirmed) {

   axios
      .delete(`https://rainserver.vercel.app/participants/${_id}`)
      .then((res) => {
        console.log(res.data);

        setParticipants((prev) => prev.filter((p) => p._id !== _id));
      })
      .catch((err) => {
        console.log(err);
      });
    



    Swal.fire({
      title: "Deleted!",
      text: "The participant has been removed.",
      icon: "success",
      background: "#1e1e1e",
      color: "#ffffff",
      confirmButtonColor: "#26FF60",
      customClass: {
        popup: "shadow-lg shadow-[#26FF6044] rounded-xl",
        confirmButton: "text-black font-bold"
      }
    });
  }
});



   
  };

  return (
    <div className="w-full mx-auto min-h-screen bg-linear-to-b from-[#000A3B] to-black py-16 px-6 md:px-20 text-white">
      <h2 className="text-2xl font-semibold mb-4">Participants</h2>

      <div className="overflow-x-auto">
        <table
          className="w-full 
      
   
  "
        >
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 border border-gray-700">Name</th>
              <th className="p-3 border border-gray-700">Email</th>
              <th className="p-3 border border-gray-700">Phone</th>
              <th className="p-3 border border-gray-700">Role</th>
              <th className="p-3 border border-gray-700">Actions</th>
            </tr>
          </thead>

          <tbody>
            {participants.map((p) => (
              <tr
                key={p._id}
                className="text-center border border-gray-700 bg-white/10  backdrop-blur-md  hover:bg-white/20 
    hover:border-white/30  "
              >
                <td className="p-3 border border-gray-700">{p.name}</td>
                <td className="p-3 border border-gray-700">{p.email}</td>
                <td className="p-3 border border-gray-700">{p.phone}</td>
                <td className="p-3 border border-gray-700">{p.role || "—"}</td>

                <td className="p-3 border border-gray-700 flex justify-center">
                  <button
                    onClick={() => {
                      setEditingUser(p);
                      setEditForm({
                        name: p.name,
                        email: p.email,
                        phone: p.phone,
                        organization: p.organization || "",
                        role: p.role || "",
                        message: p.message || "",
                      });
                      setIsEditOpen(true);
                    }}
                    className="px-3 py-1 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600"
                  >
                    <FaRegEdit></FaRegEdit>
                  </button>

                  <button
                    onClick={() => handleDelete(p._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    <MdDelete></MdDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4">
          <div className="bg-[#1e1e1e] w-full max-w-lg p-6 rounded-2xl shadow-lg border border-white/10">
            <div className="flex justify-end">
              <p
                className="text-red-600 cursor-pointer text-xl font-bold"
                onClick={() => setIsEditOpen(false)}
              >
                ×
              </p>
            </div>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="font-medium text-white">
                  Full Name <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                  className="w-full mt-1 text-white bg-white/10 backdrop-blur-md 
        border border-white/20 rounded-xl p-2 cursor-pointer transition-all 
        hover:bg-white/20 hover:border-white/30 shadow-lg"
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
                  value={editForm.email}
                  onChange={handleEditChange}
                  className="w-full mt-1 text-white bg-white/10 backdrop-blur-md 
        border border-white/20 rounded-xl p-2 cursor-pointer transition-all 
        hover:bg-white/20 hover:border-white/30 shadow-lg"
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
                  value={editForm.phone}
                  onChange={handleEditChange}
                  className="w-full mt-1 text-white bg-white/10 backdrop-blur-md 
        border border-white/20 rounded-xl p-2 cursor-pointer transition-all 
        hover:bg-white/20 hover:border-white/30 shadow-lg"
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
                  value={editForm.organization}
                  onChange={handleEditChange}
                  className="w-full mt-1 text-white bg-white/10 backdrop-blur-md 
        border border-white/20 rounded-xl p-2 cursor-pointer transition-all 
        hover:bg-white/20 hover:border-white/30 shadow-lg"
                />
              </div>

              <div>
                <label className="font-medium text-white">Role</label>
                <select
                  name="role"
                  value={editForm.role}
                  onChange={handleEditChange}
                  className="w-full mt-1 text-white bg-white/10 backdrop-blur-md 
        border border-white/20 rounded-xl p-2 cursor-pointer transition-all 
        hover:bg-white/20 hover:border-white/30 shadow-lg"
                >
                  <option value="" className="bg-[#525873] text-white">
                    Select role
                  </option>
                  <option value="Student" className="bg-[#525873] text-white">
                    Student
                  </option>
                  <option
                    value="Researcher"
                    className="bg-[#525873] text-white"
                  >
                    Researcher
                  </option>
                  <option
                    value="Professional"
                    className="bg-[#525873] text-white"
                  >
                    Professional
                  </option>
                </select>
              </div>

              <div>
                <label className="font-medium text-white">Message</label>
                <textarea
                  name="message"
                  value={editForm.message}
                  onChange={handleEditChange}
                  className="w-full mt-1 text-white bg-white/10 backdrop-blur-md 
        border border-white/20 rounded-xl p-2 cursor-pointer transition-all 
        hover:bg-white/20 hover:border-white/30 shadow-lg"
                  rows="3"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#26FF60] text-black font-bold py-3 rounded-lg hover:bg-green-400"
              >
                Update Participant
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
