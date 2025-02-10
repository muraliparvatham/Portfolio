import { useState } from "react";
import "./App.css";
import emailJS from "emailjs-com";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_u3t8syx";
    const templateID = "template_aakaipd";
    const userID = "MhPhq_pgNNQORZXh1"; // This is the public key from EmailJS

    const templateParams = {
      to_name: "Murali",
      from_name: formData.name, // Match the variable names in your EmailJS template
      user_email: formData.email,
      message: formData.message, // Ensure this also matches the template
    };

    emailJS
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you for reaching out!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Please try again.");
      });
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      <header className="bg-gray-800 text-white p-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <svg
              className="w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="#ff6347"
                d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"
              />
            </svg>
            <span className="text-xl font-semibold ">Murali</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-500">
                  About
                </a>
              </li>
              <li>
                <a href="#project" className="hover:text-orange-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <section id="home" className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Hello, I'm <span className="text-orange-500">MURALI PARVATHAM</span>
          </h1>
          <p className="text-xl mt-4">Aspiring Developer | Tech Enthusiast</p>
          <div className="mt-8">
            <img
              src="/SSS_5014.JPG"
              alt="Profile"
              className="mx-auto rounded-full w-33 h-33 object-cover"
            />
          </div>
        </section>

        <section id="about" className="bg-gray-50 py-16">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold">About</h2>
            <p className="text-lg mt-4">
              Hi, I'm Murali, a passionate and dedicated fresher with a strong
              interest in technology. I have a solid foundation in Python, and
              I'm actively expanding my skills in areas like HTML, CSS,
              JavaScript, ReactJS, and Tailwind. My curiosity drives me to
              explore emerging technologies like ReactJS and Node.js. I’ve
              worked on projects like Bitcoin price prediction using LSTM,
              Calculator, and Expense Tracker.
            </p>
            <a
              href="Murali Parvatham.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-white bg-orange-500 px-6 py-2 rounded-md hover:bg-orange-600"
            >
              Download CV
            </a>
          </div>
        </section>

        <section id="skills" className="py-16 bg-gray-100">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <img
                  src="/Python.png"
                  alt="Python"
                  className="w-20 h-20 mb-2"
                />
                <p className="text-xl font-semibold text-gray-800">Python</p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/JavaScript.png"
                  alt="JavaScript"
                  className="w-20 h-20 mb-2"
                />
                <p className="text-xl font-semibold text-gray-800">
                  JavaScript
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img src="/React.png" alt="React" className="w-20 h-20 mb-2" />
                <p className="text-xl font-semibold text-gray-800">React</p>
              </div>

              <div className="flex flex-col items-center">
                <img src="/CSS3.png" alt="CSS" className="w-20 h-20 mb-2" />
                <p className="text-xl font-semibold text-gray-800">CSS</p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/HTML5 (1).png"
                  alt="HTML"
                  className="w-20 h-20 mb-2"
                />
                <p className="text-xl font-semibold text-gray-800">HTML</p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/Tailwind CSS.png"
                  alt="Tailwind CSS"
                  className="w-20 h-20 mb-2"
                />
                <p className="text-xl font-semibold text-gray-800">
                  Tailwind CSS
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/MySQL.png"
                  alt="Node.js"
                  className="w-20 h-20 mb-2"
                />
                <p className="text-xl font-semibold text-gray-800">MySql</p>
              </div>

              <div className="flex flex-col items-center">
                <img src="/Git.png" alt="Git" className="w-20 h-20 mb-2" />
                <p className="text-xl font-semibold text-gray-800">Git</p>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-16 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-semibold">
              My <span className="text-orange-500">Education</span>
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-2xl font-semibold">B.Tech</h4>
                <p>
                  <strong>College Name:</strong> Kallam Haranadha Reddy
                  Institute Of Technology
                </p>
                <p>
                  <strong>Stream:</strong> Computer Science and Engineering
                </p>
                <p>
                  <strong>Duration:</strong> 2019-2023
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-2xl font-semibold">Intermediate</h4>
                <p>
                  <strong>College Name:</strong> Sri Chaitanya Junior College
                </p>
                <p>
                  <strong>Stream:</strong> M.P.C
                </p>
                <p>
                  <strong>Duration:</strong> 2017-2019
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 bg-gray-100">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold">
              Latest <span className="text-orange-500">Projects</span>
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src="/Screenshot 2025-01-26 171424.png"
                  alt="Calculator"
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4">Numfinity</h3>
                <p>
                  Perform arithmetic operations like Addition, Subtraction,
                  Multiplication, and Division.
                  <a
                    href="https://numfinity.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    Link
                  </a>
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src="/Screenshot 2025-01-26 171256.png"
                  alt="Recipe Blog"
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4">Spndly</h3>
                <p>
                  Spndly is a user-friendly expense tracker that helps manage
                  credits, debits, and finances efficiently with categorized
                  transactions and a clear financial overview.
                  <a
                    href="https://spndlyonline.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    Link
                  </a>
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src="/image (1).png"
                  alt="Bitcoin Price Prediction"
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4">
                  Bitcoin Price Prediction
                </h3>
                <p>
                  A project to predict cryptocurrency prices using LSTM and RNN.
                  <a
                    href="https://www.kaggle.com/code/krksaikumar/bitcoin-price-prediction-with-lstm"
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    Link
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="mb-0">
          <section id="contact" className="py-16 bg-gray-50">
            <h2 className="text-3xl font-semibold text-center mt-8">
              Get in <span className="text-orange-500">Touch</span>
            </h2>

            <form className="mt-10 max-w-md mx-auto" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-left text-lg font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-left text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-left text-lg font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>

            <div className="mt-5 flex justify-center space-x-6">
              <a
                href="https://github.com/muraliparvatham"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/download.png" alt="GitHub" className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/muraliparvatham2002/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin-logo-png-2026.png"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </section>
        </footer>
      </main>
    </div>
  );
}
