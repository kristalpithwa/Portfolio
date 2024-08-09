import { motion } from "framer-motion";

const services = [
  {
    title: "Full-Stack Development",
    description:
      "Building responsive, full-stack applications using the MERN stack.",
    icon: "🌐",
  },
  {
    title: "API Development",
    description:
      "Creating robust and scalable RESTful APIs with Node.js and Express.",
    icon: "🔌",
  },
  {
    title: "Frontend Development",
    description:
      "Designing interactive and dynamic user interfaces with React.",
    icon: "💻",
  },
  {
    title: "Database Management",
    description: "Efficiently managing data with MongoDB and Mongoose.",
    icon: "📊",
  },
];

const ServiceSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16" id="services">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 border-2 rounded-lg shadow-lg transition transform duration-500 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                border: "2px solid",
                borderImage: "linear-gradient(90deg, #b3138c, #00c9ff) 1",
                backgroundColor: "transparent",
                borderRadius: "10px",
              }}
            >
              <div className="text-6xl mb-4 mx-auto">{service.icon}</div>
              <h3
                className="text-2xl font-semibold mb-2"
                style={{
                  background: "linear-gradient(90deg, #b3138c, #00c9ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {service.title}
              </h3>
              <p className="text-sky-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
