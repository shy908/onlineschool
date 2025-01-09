import React, { useState } from "react";
import emailjs from "emailjs-com";
import Notiflix from "notiflix";

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
      .send("service_w6yxdxo", "template_sffzds7", templateParams, "Ixi8Tv2oj7f-XWzAS")
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
    <>
      <div
        id="contact"
        className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24"
      >
        <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
          <form onSubmit={sendEmail}>
            <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold text-center lg:text-left text-[#1f5256] uppercase text-4xl">
                  Send us a message
                </h1>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                {/* First Name */}
                <div>
                  <input
                    name="first_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name*"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      clearErrors("first_name");
                    }}
                  />
                  {errors.first_name && (
                    <p className="text-red-500 text-sm">{errors.first_name}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <input
                    name="last_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Last Name*"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      clearErrors("last_name");
                    }}
                  />
                  {errors.last_name && (
                    <p className="text-red-500 text-sm">{errors.last_name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    name="email"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      clearErrors("email");
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <input
                    name="phone_number"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Phone*"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      clearErrors("phone_number");
                    }}
                  />
                  {errors.phone_number && (
                    <p className="text-red-500 text-sm">{errors.phone_number}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    clearErrors("message");
                  }}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-[#307487] hover:bg-[#1f5356] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
          <div className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-[#307487] rounded-2xl">
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
                                
                                    <div className='mt-5'>
                                        <h2 className="text-2xl">Send an E-mail</h2>
                                        <p className="text-gray-400">maduyuacademy@gmail.com</p>
                                    </div>
                            
                                </div>
                            </div>
                            
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a href="https://www.facebook.com/"  target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8 mx-1 text-center pt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                                </a>
                                <a href="https://wa.me/69 912 1028" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="rounded-full flex justify-center bg-white h-8 text-green-600 w-8 mx-1 text-center pt-1">
                                  <svg xmlns="http://www.w3.org/2000/svg" 
                                      viewBox="0 0 32 32" 
                                      className="fill-current hover:animate-pulse" 
                                      width="24" 
                                      height="24">
                                      <path d="M16.041 0.082c-8.773 0-15.959 7.186-15.959 15.959 0 2.81 0.729 5.555 2.116 7.96l-2.205 7.73 7.933-2.078c2.335 1.262 4.91 1.948 7.671 1.948h0.007c8.771 0 15.957-7.186 15.957-15.957 0-4.262-1.661-8.271-4.682-11.293-3.025-3.019-7.03-4.688-11.292-4.688zM16.047 29.156h-0.005c-2.463 0-4.868-0.641-7.004-1.857l-0.505-0.281-4.713 1.234 1.256-4.655-0.311-0.515c-1.309-2.174-2.001-4.678-2.001-7.223 0-7.267 5.914-13.182 13.183-13.182 3.519 0 6.829 1.372 9.326 3.869 2.494 2.498 3.865 5.807 3.865 9.319-0.001 7.27-5.916 13.184-13.181 13.184zM23.349 18.476c-0.381-0.191-2.258-1.115-2.609-1.241-0.352-0.127-0.609-0.191-0.866 0.191s-0.996 1.241-1.223 1.494c-0.223 0.256-0.447 0.286-0.828 0.096-0.381-0.191-1.609-0.593-3.063-1.891-1.133-1.012-1.898-2.263-2.121-2.645-0.223-0.381-0.024-0.586 0.167-0.777 0.172-0.173 0.381-0.447 0.571-0.669 0.191-0.223 0.255-0.381 0.381-0.637 0.127-0.256 0.064-0.478-0.032-0.669-0.096-0.191-0.866-2.092-1.187-2.865-0.312-0.751-0.629-0.649-0.866-0.649-0.223-0.014-0.479-0.014-0.734-0.014s-0.669 0.096-1.018 0.478c-0.352 0.381-1.336 1.303-1.336 3.18s1.366 3.681 1.557 3.935c0.191 0.256 2.654 4.048 6.438 5.679 0.9 0.387 1.604 0.619 2.155 0.791 0.906 0.287 1.733 0.246 2.39 0.149 0.729-0.109 2.258-0.92 2.58-1.809 0.32-0.887 0.32-1.646 0.223-1.809-0.095-0.159-0.347-0.256-0.729-0.447z"></path>
                                  </svg>
                              </a>

                            </div>
                        </div>
                    </div>
                </div>
              </div>
    </>
  );
};

export default Contact;