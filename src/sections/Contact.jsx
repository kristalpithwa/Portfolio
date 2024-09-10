import { useState } from "react";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { RiMailLine, RiPhoneLine } from "react-icons/ri";

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
      setIsLoading(true);

      try {
        const response = await emailjs.send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          {
            to_name: "Kristal Pithwa",
            from_name: values.name,
            message: values.message,
            reply_to: values.email,
          },
          import.meta.env.VITE_PUBLIC_ID
        );

        if (response.status === 200) {
          toast.success(
            <div>
              <span>Message sent successfully!</span>
              <div className="progress-bar" />
            </div>,
            {
              autoClose: 4000,
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
        setIsLoading(false);
      }
    },
  });

  return (
    <div
      className="text-black w-full h-screen flex items-center justify-center"
      id="Contact"
    >
      <ToastContainer />

      <div className="py-16 px-6 md:px-12 lg:px-20 xl:px-32 w-full max-w-screen-xl">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-8">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0 px-4 md:px-8 text-justify max-w-[650px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3
              className="text-4xl md:text-5xl font-semibold mb-4"
              whileHover={{ scale: 1.05, color: "#FF0080" }}
            >
              Let's Talk.
            </motion.h3>
            <motion.h3
              className="text-4xl md:text-5xl font-semibold mb-4"
              whileHover={{ scale: 1.05, color: "#FF0080" }}
            >
              Tell me about your
            </motion.h3>
            <motion.h3
              className="text-4xl md:text-5xl font-semibold mb-4"
              whileHover={{ scale: 1.05, color: "#FF0080" }}
            >
              Project.
            </motion.h3>

            <motion.p
              whileHover={{ scale: 1.02 }}
              className="mt-6 text-lg md:text-2xl font-medium"
            >
              Let's create something together
            </motion.p>

            <ul className="list-disc mt-5 text-gray-400 space-y-2">
              <li className="flex items-center">
                <RiPhoneLine className="text-xl md:text-2xl mr-2" />
                <a href="tel:+91 8000830484" className="text-black">
                  +91 8000830484
                </a>
              </li>
              <li className="flex items-center">
                <RiMailLine className="text-xl md:text-2xl mr-2" />
                <a className="text-black" href="mailto:crystalpithwa@gmail.com">
                  crystalpithwa@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full px-4 md:px-8 rounded-lg shadow-lg border-slate-600 border max-w-[600px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={formik.handleSubmit}>
              <div>
                <motion.h3
                  className="text-3xl font-semibold mt-5"
                  whileHover={{ scale: 1.05, color: "#FF0080" }}
                >
                  Send us a message
                </motion.h3>

                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black mt-3"
                >
                  Name
                </label>

                <motion.input
                  id="name"
                  name="name"
                  type="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-1 p-3 w-full rounded-md text-gray-400 border border-gray-600"
                />

                {formik.touched.name && formik.errors.name && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm mt-1"
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    {formik.errors.name}
                  </motion.div>
                )}
              </div>

              <div className="mb-6 mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black"
                >
                  Email
                </label>

                <motion.input
                  id="email"
                  name="email"
                  type="email"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="mt-1 p-3 w-full rounded-md text-gray-400 border border-gray-600"
                />

                {formik.touched.email && formik.errors.email && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm mt-1"
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
                  rows="4"
                  id="message"
                  name="message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="mt-1 p-3 w-full rounded-md text-gray-400 border border-gray-600"
                />

                {formik.touched.message && formik.errors.message && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm mt-1"
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >
                    {formik.errors.message}
                  </motion.div>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                className="w-full py-3 px-4 mb-5 bg-gradient-to-r from-[#b3138c] to-[#00b0ff] hover:from-pink-500 hover:to-blue-500 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
