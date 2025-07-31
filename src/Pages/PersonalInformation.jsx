import React, { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Yup validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  address: yup.string().min(5, "Address too short").required("Address is required"),
});

export default function PersonalInfo() {
  const [previewPic, setPreviewPic] = useState("https://i.pravatar.cc/100");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "9876543210",
      address: "123 Book Lane, Novel City, India",
      profilePic: "https://i.pravatar.cc/100",
    },
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setPreviewPic(imgURL);
      setValue("profilePic", imgURL); // Set in form
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    toast.success(" Profile Updated!");
    // Save to localStorage or Firebase later
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Personal Information</h2>

      {/* Profile Picture Upload & Preview */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={previewPic}
          alt="Profile Preview"
          className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover mb-3"
        />
        <label className="cursor-pointer text-sm text-blue-600 font-medium hover:underline">
          Change Profile Picture
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input type="hidden" {...register("profilePic")} />

        <div>
          <label className="block mb-1 font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full border rounded px-3 py-2"
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full border rounded px-3 py-2"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full border rounded px-3 py-2"
          />
          <p className="text-red-500 text-sm">{errors.phone?.message}</p>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Address</label>
          <textarea
            {...register("address")}
            className="w-full border rounded px-3 py-2"
          />
          <p className="text-red-500 text-sm">{errors.address?.message}</p>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Update Info
        </button>
      </form>
    </div>
  );
}
