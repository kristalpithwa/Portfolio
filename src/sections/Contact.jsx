import { useState } from "react";

import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { RiMapPin2Line, RiMailLine, RiPhoneLine } from "react-icons/ri";

import "react-toastify/dist/ReactToastify.css";

const ContactUsSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true); // Show loader

      try {
        const response = await emailjs.send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          {
            to_name: "Prayag Bhimani",
            from_name: values.name,
            message: values.message,
            reply_to: values.email,
          },
          import.meta.env.VITE_PUBLIC_ID
        );

        if (response.status === 200) {
          // Success toast with progress bar
          toast.success(
            <div>
              <span>Message sent successfully!</span>
              <div className="progress-bar" />
            </div>,
            {
              autoClose: 4000, // 4 seconds
              onClose: () => formik.resetForm(),
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              progressStyle: { backgroundColor: "#00b0ff" },
            }
          );
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        console.error("Error sending message:", error);
        toast.error("Failed to send message. Please try again later.");
      } finally {
        setIsLoading(false); // Hide loader
      }
    },
  });

  return (
    <div className="text-black py-16" id="Contact">
      <ToastContainer />

      <div className="container mx-auto py-28 px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0 px-12 text-justify max-w-[660px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3
              className="text-6xl font-semibold mb-4"
              whileHover={{ scale: 1.05, color: "#FF0080" }}
            >
              Let's Talk.
            </motion.h3>
            <motion.h3
              className="text-6xl font-semibold mb-4"
              whileHover={{ scale: 1.05, color: "#FF0080" }}
            >
              Tell me about your
            </motion.h3>
            <motion.h3
              className="text-6xl font-semibold mb-4"
              whileHover={{ scale: 1.05, color: "#FF0080" }}
            >
              Project.
            </motion.h3>

            <motion.p
              whileHover={{ scale: 1.02 }}
              className="mt-6 text-2xl font-medium"
            >
              Let's create something together
            </motion.p>

            <ul className="list-disc mt-5 text-gray-400 space-y-2">
              <li className="flex items-center">
                <RiPhoneLine className="text-2xl mr-2" />
                <a href="tel:+91 8000830484" className="text-black">
                  +91 8000830484
                </a>
              </li>
              <li className="flex items-center">
                <RiMailLine className="text-2xl mr-2" />
                <a className="text-black" href="mailto:crystalpithwa@gmail.com">
                  crystalpithwa@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full p-8 rounded-lg shadow-lg border-slate-600 border max-w-[660px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-6">
                <motion.h3
                  className="text-3xl font-semibold mb-4"
                  whileHover={{ scale: 1.05, color: "#FF0080" }}
                >
                  Send us a message
                </motion.h3>

                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Name
                </label>

                <motion.input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="mt-1 p-3 w-full rounded-md text-gray-400 border border-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />

                {formik.touched.name && formik.errors.name && (
                  <motion.div
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    {formik.errors.name}
                  </motion.div>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Email
                </label>

                <motion.input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="mt-1 p-3 w-full rounded-md text-gray-400 border border-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                />

                {formik.touched.email && formik.errors.email && (
                  <motion.div
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    {formik.errors.email}
                  </motion.div>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Tell me about your project.
                </label>

                <motion.textarea
                  id="message"
                  name="message"
                  rows="4"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="mt-1 p-3 w-full rounded-md text-gray-400 border border-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                />

                {formik.touched.message && formik.errors.message && (
                  <motion.div
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    {formik.errors.message}
                  </motion.div>
                )}
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-[#b3138c] to-[#00b0ff] hover:from-pink-500 hover:to-blue-500 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>

            {isLoading && (
              <div className="mt-4 flex justify-center">
                <div className="loader"></div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
