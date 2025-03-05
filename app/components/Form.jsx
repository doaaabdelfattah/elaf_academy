"use client";
import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "Quraan", label: "Quraan" },
  { value: "Arabic", label: "Arabic" },
  { value: "Islamic Studies", label: "Islamic Studies" },
];

const Form = () => {
  const [result, setResult] = useState("");
  const [selectedCourses, setSelectedCourses] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "607f3f69-6145-4ca6-9bfc-35b3aac7f5b7");

    // Append selected courses as a comma-separated string
    formData.append("courses", selectedCourses.map((course) => course.value).join(", "));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setSelectedCourses([]); // Reset selected courses
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <form suppressHydrationWarning className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-10 mb-8">
          {/* Name & Email */}
          <div className="flex md:flex-row flex-col gap-4">
            <div className="w-full">
              <label className="block text-md font-medium text-gray-700">Name</label>
              <input
                className="p-2 border border-gray-400 rounded-md bg-white w-full outline-none"
                type="text"
                placeholder="Enter your name"
                required
                name="name"
              />
            </div>

            <div className="w-full">
              <label className="block text-md font-medium text-gray-700">Email</label>
              <input
                className="p-2 border border-gray-400 rounded-md bg-white w-full outline-none"
                type="email"
                placeholder="Enter your Email"
                required
                name="email"
              />
            </div>
          </div>

          {/* Phone & Age */}
          <div className="flex md:flex-row flex-col gap-4">
            <div className="w-full">
              <label className="block text-md font-medium text-gray-700">Phone Number</label>
              <input
                className="p-2 border border-gray-400 rounded-md bg-white w-full outline-none"
                type="tel"
                placeholder="Enter your phone number"
                required
                name="phone"
              />
            </div>

            <div className="w-full">
              <label className="block text-md font-medium text-gray-700">Student Age</label>
              <input
                className="p-2 border border-gray-400 rounded-md bg-white w-full outline-none"
                type="number"
                placeholder="Enter student age"
                required
                name="age"
              />
            </div>
          </div>

          {/* Multi-Select Courses */}
          <div>
            <label className="block text-md font-medium text-gray-700">Select Required Courses</label>
            <Select
              options={options}
              isMulti
              value={selectedCourses}
              onChange={setSelectedCourses}
              className="basic-multi-select border border-gray-400 rounded-md"
              classNamePrefix="select"
            />
          </div>

          {/* Preferred Days */}
          <div>
            <label className="block text-md font-medium text-gray-700">Preferred Days</label>
            <input
              className="p-2 border border-gray-400 rounded-md bg-white w-full outline-none"
              type="text"
              placeholder="Preferred days (e.g., Monday, Wednesday)"
              required
              name="preferred_days"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-md font-medium text-gray-700">Additional Notes</label>
            <textarea
              className="w-full p-2 border border-gray-400 rounded-md bg-white outline-none"
              rows="4"
              placeholder="Additional notes"
              name="notes"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="py-3 px-8 bg-black text-white rounded-full mx-auto block hover:bg-black/80"
          type="submit"
        >
          Submit now
        </button>

        <p className="text-center mt-4">{result}</p>
      </form>
    </>
  );
};

export default Form;
