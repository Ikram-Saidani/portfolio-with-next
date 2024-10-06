"use client"

import { useState } from "react";
import { baseURL } from "../_components/utils/baseURL";
import contactStyle from "../styles/contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseURL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Contact information submitted successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        alert("Failed to submit contact information.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className={contactStyle.contact}>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">Firstname</label>
          <input
            id="firstname"
            type="text"
            placeholder="Your firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastname">Lastname</label>
          <input
            id="lastname"
            type="text"
            placeholder="Your lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="number"
            placeholder="Your phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            id="message"
            placeholder="Your Message"
            rows="5"
            cols="60"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
