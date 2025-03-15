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
    formData.append(
      "courses",
      selectedCourses.map((course) => course.value).join(", ")
    );

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
      <form
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
        aria-label="Registration Form"
      >
        <div className="grid grid-cols-1 gap-6 mt-10 mb-8">
          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-md font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                className="p-2 border border-gray-400 rounded-md bg-white w-full outline-none"
                type="text"
                placeholder="Enter your name"
                required
                name="name"
                autoComplete="name"
                aria-required="true"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                className="p-2 border border-gray-400 rounded-md bg-white w-full outline-none"
                type="email"
                placeholder="Enter your email"
                required
                name="email"
                autoComplete="email"
                aria-required="true"
              />
            </div>
          </div>

          {/* Phone & Age */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block text-md font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                className="p-2 border border-gray-400 rounded-md bg-white w-full outline-none"
                type="tel"
                placeholder="Enter your phone number"
                required
                name="phone"
                autoComplete="tel"
                aria-required="true"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="age"
                className="block text-md font-medium text-gray-700"
              >
                Student Age
              </label>
              <input
                id="age"
                className="p-2 border border-gray-400 rounded-md bg-white w-full outline-none"
                type="number"
                placeholder="Enter student age"
                required
                name="age"
                min="1"
                aria-required="true"
              />
            </div>
          </div>

          {/* Multi-Select Courses */}
          <div>
            <label
              htmlFor="courses"
              className="block text-md font-medium text-gray-700"
            >
              Select Required Courses
            </label>
            <Select
              id="courses"
              options={options}
              isMulti
              value={selectedCourses}
              onChange={setSelectedCourses}
              className="basic-multi-select border border-gray-400 rounded-md"
              classNamePrefix="select"
              aria-labelledby="courses-label"
            />
          </div>

          {/* Preferred Days */}
          <div>
            <label
              htmlFor="preferred_days"
              className="block text-md font-medium text-gray-700"
            >
              Preferred Days
            </label>
            <input
              id="preferred_days"
              className="p-2 border border-gray-400 rounded-md bg-white w-full outline-none"
              type="text"
              placeholder="Preferred days (e.g., Monday, Wednesday)"
              required
              name="preferred_days"
              aria-required="true"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label
              htmlFor="notes"
              className="block text-md font-medium text-gray-700"
            >
              Additional Notes
            </label>
            <textarea
              id="notes"
              className="w-full p-2 border border-gray-400 rounded-md bg-white outline-none"
              rows={4}
              placeholder="Additional notes"
              name="notes"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="py-3 px-8 bg-black text-white rounded-full mx-auto block hover:bg-black/80 focus:ring focus:ring-gray-400"
          type="submit"
          aria-label="Submit Form"
        >
          Submit Now
        </button>

        {/* Form Status */}
        <p className="text-center mt-4" role="status" aria-live="polite">
          {result}
        </p>
      </form>
    </>
  );
};

export default Form;
