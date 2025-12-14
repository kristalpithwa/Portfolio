import React from "react";
import AnimatedText from "../components/AnimatedText";

const Contact = () => {
  return (
    <>
      <div className="section-divider">
        <span className="border-white/10 border rounded-full">
          Get In Touch
        </span>
      </div>

      <div className="text-center mb-20">
        <h2 className="text-5xl font-normal text-white tracking-tighter font-geist mb-8">
          <AnimatedText text="Let's Build Something Amazing" type="words" />
        </h2>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 animate-slide-fade animate">
          Ready to transform your business with intelligent AI solutions? Let's
          discuss how we can optimize your workflows and unlock new
          possibilities.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-scale-in animate">
          {/* Email */}
          <a
            href="mailto:crystalpithwa@gmail.com"
            className="glass-card refraction-effect rounded-2xl px-8 py-4 flex items-center gap-3 text-white hover:text-blue-300 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span className="font-medium">crystalpithwa@gmail.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kristal-pithwa-a62861a4"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card refraction-effect rounded-2xl px-8 py-4 flex items-center gap-3 text-white hover:text-blue-300 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="font-medium">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/kristalpithwa"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card refraction-effect rounded-2xl px-8 py-4 flex items-center gap-3 text-white hover:text-blue-300 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span className="font-medium">GitHub</span>
          </a>
        </div>

        {/* Availability Status */}

        <div className="glass-card rounded-2xl p-6 max-w-md mx-auto animate-slide-fade animate">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 font-medium">
              Currently Available
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            Open for new projects and consulting opportunities. Response time:
            within 24 hours.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
