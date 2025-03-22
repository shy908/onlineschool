import React, { useState } from "react";
import emailjs from "emailjs-com";
import Notiflix from "notiflix";
import { motion } from "framer-motion";  // Import motion

const Contact = () => {
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.first_name = "First name is required.";
    if (!lastName.trim()) newErrors.last_name = "Last name is required.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Valid email is required.";
    if (!phone.trim() || !/^\d+$/.test(phone))
      newErrors.phone_number = "Valid phone number is required.";
    if (!message.trim()) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Send email
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      message,
      to_name: "Maduyu Academy Team",
    };

    emailjs
      .send("service_61ah6aq", "template_eowhu9c", templateParams, "Ixi8Tv2oj7f-XWzAS")
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          Notiflix.Notify.success("Thank you for sending a message, we'll be in touch soon.");
          // Clear form fields
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending email:", error);
          Notiflix.Notify.failure("Failed to send the message. Try again.");
        }
      );
  };

  // Clear errors when typing
  const clearErrors = (field) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
  };

  return (
    <motion.div
      id="contact"
      className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
        <form onSubmit={sendEmail}>
          <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold text-center lg:text-left text-primary uppercase text-4xl">
                Send us a message
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              {/* First Name */}
              <div>
                <motion.input
                  name="first_name"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="First Name*"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    clearErrors("first_name");
                  }}
                  whileFocus={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-sm">{errors.first_name}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <motion.input
                  name="last_name"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Last Name*"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    clearErrors("last_name");
                  }}
                  whileFocus={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                {errors.last_name && (
                  <p className="text-red-500 text-sm">{errors.last_name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <motion.input
                  name="email"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    clearErrors("email");
                  }}
                  whileFocus={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <motion.input
                  name="phone_number"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Phone*"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    clearErrors("phone_number");
                  }}
                  whileFocus={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                {errors.phone_number && (
                  <p className="text-red-500 text-sm">{errors.phone_number}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="my-4">
              <motion.textarea
                name="message"
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  clearErrors("message");
                }}
                whileFocus={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              ></motion.textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="my-2 w-1/2 lg:w-2/4">
              <motion.button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-secondary hover:bg-primary
                 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Send Message
              </motion.button>
            </div>
          </div>
        </form>

        {/* Contact Info Section */}
        <motion.div
          className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-primary rounded-2xl"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex flex-col text-white">
            <div className="flex my-4 w-2/3 lg:w-3/4">
              <div className="flex flex-col">
                <i className="fas fa-map-marker-alt pt-2 pr-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Our Location</h2>
                <p className="text-gray-400">Western Cape, South Africa</p>
              </div>
            </div>

            <div className="flex my-4 w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <i className="fas fa-phone-alt pt-2 pr-2" />
              </div>

              <div className="flex flex-col">
                <h2 className="text-2xl">Call Us</h2>
                <p className="text-gray-400">Tel: +27 69 912 1028</p>

                <div className="mt-5">
                  <h2 className="text-2xl">Send an E-mail</h2>
                  <p className="text-gray-400">maduyuacademy@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex my-4 w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <i className="fas fa-clock pt-2 pr-2" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Support Hours</h2>
                <p className="text-gray-400">
                  Monday – Saturday: 8:00 am to 5:00 pm
                </p>
                <p className="text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
