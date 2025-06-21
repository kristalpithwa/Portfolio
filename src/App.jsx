import React, { Suspense, useState } from "react";
import Header from "./components/Header";
import LoadingComponent from "./components/Loader.jsx";

function App() {
  const [menu] = useState(["Home", "About", "Projects", "Contact"]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-x-hidden">
      {/* <Header scrollToSection={scrollToSection} menu={menu} /> */}

      <Suspense fallback={<LoadingComponent />}>
        <div className="content-wrapper">
          <div className="container max-w-7xl mx-auto px-6 py-20">
            {/* Header Section */}
            <div className="animate-blur-in animate text-center mb-24">
              <div className="mb-8 flex mt-10 items-center justify-center gap-6 lg:flex-row lg:gap-12">
                <h1
                  className="text-5xl lg:text-7xl font-normal text-white tracking-tighter font-geist text-center lg:text-left animate-slide-fade animate"
                  style={{ transitionDelay: "0.4s" }}
                >
                  Kristal{" "}
                  <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                    Pithwa
                  </span>
                </h1>
              </div>

              <p
                className="text-lg font-medium text-gray-300 mb-4 animate-slide-fade animate"
                style={{ transitionDelay: "0.6s" }}
              >
                React & React Native Developer
              </p>

              <p
                className="max-w-3xl text-base text-gray-400 mx-auto leading-relaxed mb-8 animate-slide-fade animate"
                style={{ transitionDelay: "0.8s" }}
              >
                Hey stranger! My self Kristal Pithwa, and I enjoy creating
                things that live on the internet. I'm passionate about digital
                products that help people experience everyday life, not endure
                it. I specialize in building responsive and scalable web and
                mobile apps.
              </p>

              <div
                className="flex flex-wrap justify-center gap-3 mt-8 mb-12 animate-scale-in animate"
                style={{ transitionDelay: "1s" }}
              >
                <div className="glass-card rounded-full px-6 py-2">
                  <span className="text-emerald-400 text-sm font-medium">
                    Available for Projects
                  </span>
                </div>
                <div className="glass-card rounded-full px-6 py-2">
                  <span className="text-blue-400 text-sm font-medium">
                    San Francisco, CA
                  </span>
                </div>
                <div className="glass-card rounded-full px-6 py-2">
                  <span className="text-purple-400 text-sm font-medium">
                    Remote Friendly
                  </span>
                </div>
              </div>

              {/* Quick Stats */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
                <div
                  className="text-center animate-slide-fade animate"
                  style={{ transitionDelay: "1.2s" }}
                >
                  <div className="text-3xl font-normal text-white font-geist tracking-tighter mb-2">
                    150+
                  </div>
                  <div className="text-sm text-gray-400">
                    AI Models Optimized
                  </div>
                </div>
                <div
                  className="text-center animate-slide-fade animate"
                  style={{ transitionDelay: "1.4s" }}
                >
                  <div className="text-3xl font-normal text-white font-geist tracking-tighter mb-2">
                    98.7%
                  </div>
                  <div className="text-sm text-gray-400">
                    Average Model Accuracy
                  </div>
                </div>
                <div
                  className="text-center animate-slide-fade animate"
                  style={{ transitionDelay: "1.6s" }}
                >
                  <div className="text-3xl font-normal text-white font-geist tracking-tighter mb-2">
                    $2.4M
                  </div>
                  <div className="text-sm text-gray-400">
                    Cost Savings Generated
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Section Divider --> */}
            <div className="section-divider">
              <span className="border-white/10 border rounded-full">
                Core Expertise
              </span>
            </div>

            {/* <!-- Core Expertise --> */}
            <div className="mb-24">
              <h2 className="text-5xl font-normal text-white tracking-tighter font-geist text-center mb-16 animate-blur-in animate">
                Core Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Prompt Engineering */}
                <div
                  className="glass-card refraction-effect animate-float rounded-3xl p-8 animate-slide-left animate"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
                    {/* Icon */}
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
                      className="w-8 h-8 text-white"
                    >
                      <path d="M12 20h9"></path>
                      <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-normal text-white mb-4 tracking-tight font-geist">
                    Advanced Prompt Engineering
                  </h3>
                  <div className="divider-gradient mb-4"></div>
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    Expert in chain-of-thought prompting, few-shot learning, and
                    prompt optimization techniques. Developed proprietary
                    frameworks for consistent model outputs across different
                    domains.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-xs text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      Chain-of-Thought Prompting
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      Few-Shot Learning Optimization
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      Prompt Template Engineering
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-gray-400">Expertise Level</div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Model Fine-tuning */}
                <div
                  className="glass-card rounded-3xl p-8 refraction-effect animate-float animate-slide-fade animate"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
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
                      className="w-8 h-8 text-white"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-normal text-white mb-4 tracking-tight font-geist">
                    Custom Model Fine-tuning
                  </h3>
                  <div className="divider-gradient mb-4"></div>
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    Specialized in domain-specific model adaptation using
                    advanced fine-tuning techniques. Experience with LoRA,
                    QLoRA, and full parameter fine-tuning for enterprise
                    applications.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-xs text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      LoRA & QLoRA Implementation
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      Domain Adaptation Strategies
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      Performance Optimization
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-gray-400">Expertise Level</div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                        style={{ width: "88%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* AI Integration */}
                <div
                  className="glass-card rounded-3xl p-8 refraction-effect animate-float animate-slide-right animate"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6">
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
                      className="w-8 h-8 text-white"
                    >
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-normal text-white mb-4 tracking-tight font-geist">
                    Enterprise AI Integration
                  </h3>
                  <div className="divider-gradient mb-4"></div>
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    End-to-end AI system architecture and deployment. Expert in
                    RAG systems, vector databases, and scalable AI pipelines
                    that handle millions of requests with sub-second response
                    times.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-xs text-gray-400">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                      RAG System Architecture
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                      Vector Database Optimization
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                      Production Deployment
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-gray-400">Expertise Level</div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Section Divider --> */}
            <div className="section-divider">
              <span className="border-white/10 border rounded-full">
                Featured Work
              </span>
            </div>

            {/* Featured Projects */}
            <div className="glass-card refraction-effect animate-blur-in rounded-3xl mb-20 p-12 animate">
              <h2 className="text-5xl font-normal text-white tracking-tighter font-geist text-center mb-12">
                Featured Projects
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  {/* Project 1 */}
                  <div className="border-l-4 border-blue-500 pl-8 animate-slide-left animate">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-normal text-white font-geist tracking-tight">
                        Enterprise Chatbot System
                      </h3>
                      <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                        2024
                      </span>
                    </div>
                    <div className="divider-gradient mb-4"></div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      Architected and deployed a multi-modal AI assistant for a
                      Fortune 500 financial services company. The system
                      processes 15,000+ daily queries across 12 languages with
                      94% customer satisfaction rate and 60% reduction in
                      support ticket volume.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-gray-500">
                        Key Achievements:
                      </div>
                      <ul className="text-xs text-gray-400 space-y-1">
                        <li>
                          • Reduced average response time from 3 minutes to 8
                          seconds
                        </li>
                        <li>• Achieved 99.8% uptime across multiple regions</li>
                        <li>
                          • Integrated with 8 legacy systems and databases
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["GPT-4", "RAG", "Pinecone", "Azure"].map((tag, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs ${
                            {
                              "GPT-4": "bg-blue-500/20 text-blue-300",
                              RAG: "bg-purple-500/20 text-purple-300",
                              Pinecone: "bg-emerald-500/20 text-emerald-300",
                              Azure: "bg-yellow-500/20 text-yellow-300",
                            }[tag]
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div
                    className="border-l-4 border-purple-500 pl-8 animate-slide-left animate"
                    style={{ transitionDelay: "0.2s" }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-normal text-white font-geist tracking-tight">
                        Legal Document Analysis
                      </h3>
                      <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                        2023
                      </span>
                    </div>
                    <div className="divider-gradient mb-4"></div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      Developed specialized AI system for contract analysis and
                      legal document review. Custom fine-tuned models for legal
                      terminology with advanced prompt engineering reduced
                      manual review time by 75% while maintaining 99.2%
                      accuracy.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-gray-500">
                        Key Achievements:
                      </div>
                      <ul className="text-xs text-gray-400 space-y-1">
                        <li>• Processed 50,000+ legal documents</li>
                        <li>
                          • Identified critical clauses with 99.2% accuracy
                        </li>
                        <li>• Saved 2,400+ hours of manual review work</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Claude", "Fine-tuning", "spaCy", "PyTorch"].map(
                        (tag, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-xs ${
                              {
                                Claude: "bg-blue-500/20 text-blue-300",
                                "Fine-tuning":
                                  "bg-purple-500/20 text-purple-300",
                                spaCy: "bg-emerald-500/20 text-emerald-300",
                                PyTorch: "bg-red-500/20 text-red-300",
                              }[tag]
                            }`}
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Project 3 */}
                  <div className="border-l-4 border-emerald-500 pl-8 animate-slide-right animate">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-normal text-white font-geist tracking-tight">
                        Content Generation Pipeline
                      </h3>
                      <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                        2024
                      </span>
                    </div>
                    <div className="divider-gradient mb-4"></div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      Built end-to-end automated content creation system for
                      digital marketing agency. Advanced prompt chaining and
                      quality control systems generate 500+ SEO-optimized
                      articles monthly with consistent brand voice and 95%
                      approval rate.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-gray-500">
                        Key Achievements:
                      </div>
                      <ul className="text-xs text-gray-400 space-y-1">
                        <li>• 80% reduction in content production costs</li>
                        <li>
                          • Maintained brand consistency across 50+ clients
                        </li>
                        <li>
                          • Automated fact-checking and plagiarism detection
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "GPT-3.5",
                        "Chain Prompting",
                        "Zapier",
                        "WordPress",
                      ].map((tag, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs ${
                            {
                              "GPT-3.5": "bg-blue-500/20 text-blue-300",
                              "Chain Prompting":
                                "bg-purple-500/20 text-purple-300",
                              Zapier: "bg-emerald-500/20 text-emerald-300",
                              WordPress: "bg-orange-500/20 text-orange-300",
                            }[tag]
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project 4 */}
                  <div
                    className="border-l-4 border-yellow-500 pl-8 animate-slide-right animate"
                    style={{ transitionDelay: "0.2s" }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-normal text-white font-geist tracking-tight">
                        Code Review Assistant
                      </h3>
                      <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                        2023
                      </span>
                    </div>
                    <div className="divider-gradient mb-4"></div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      Engineered intelligent code review system for software
                      development teams. Custom prompts for security
                      vulnerability detection, performance optimization
                      suggestions, and code quality improvements across 15+
                      programming languages.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-gray-500">
                        Key Achievements:
                      </div>
                      <ul className="text-xs text-gray-400 space-y-1">
                        <li>• Identified 2,500+ security vulnerabilities</li>
                        <li>• Improved code quality scores by 40%</li>
                        <li>• Reduced deployment bugs by 65%</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "GPT-4",
                        "Static Analysis",
                        "GitHub API",
                        "Security",
                      ].map((tag, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs ${
                            {
                              "GPT-4": "bg-blue-500/20 text-blue-300",
                              "Static Analysis":
                                "bg-purple-500/20 text-purple-300",
                              "GitHub API":
                                "bg-emerald-500/20 text-emerald-300",
                              Security: "bg-red-500/20 text-red-300",
                            }[tag]
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Section Divider --> */}
            <div className="section-divider">
              <span className="border-white/10 border rounded-full">
                Technical Skills
              </span>
            </div>

            {/* Technical Skills */}
            <div className="mb-24">
              <h2 className="text-5xl font-normal text-white tracking-tighter font-geist text-center mb-16 animate-blur-in animate">
                Technical Arsenal
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* AI/ML Technologies */}
                <div className="glass-card rounded-3xl p-8 animate-slide-left animate">
                  <h3 className="text-2xl font-normal text-white mb-6 font-geist tracking-tight">
                    AI & Machine Learning
                  </h3>
                  <div className="divider-gradient mb-6"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      {[
                        {
                          label: "GPT-4 / Claude",
                          level: "Expert",
                          color: "blue",
                          width: "95%",
                        },
                        {
                          label: "PyTorch",
                          level: "Advanced",
                          color: "purple",
                          width: "85%",
                        },
                        {
                          label: "Transformers",
                          level: "Expert",
                          color: "emerald",
                          width: "90%",
                        },
                      ].map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-300">{skill.label}</span>
                            <span className={`text-${skill.color}-400`}>
                              {skill.level}
                            </span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 rounded-full`}
                              style={{ width: skill.width }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          label: "LangChain",
                          level: "Expert",
                          color: "yellow",
                          width: "92%",
                        },
                        {
                          label: "Vector DBs",
                          level: "Advanced",
                          color: "red",
                          width: "88%",
                        },
                        {
                          label: "Fine-tuning",
                          level: "Expert",
                          color: "pink",
                          width: "87%",
                        },
                      ].map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-300">{skill.label}</span>
                            <span className={`text-${skill.color}-400`}>
                              {skill.level}
                            </span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 rounded-full`}
                              style={{ width: skill.width }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Development & Cloud */}
                <div className="glass-card rounded-3xl p-8 animate-slide-right animate">
                  <h3 className="text-2xl font-normal text-white mb-6 font-geist tracking-tight">
                    Development & Cloud
                  </h3>
                  <div className="divider-gradient mb-6"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      {[
                        {
                          label: "Python",
                          level: "Expert",
                          color: "blue",
                          width: "93%",
                        },
                        {
                          label: "Docker",
                          level: "Advanced",
                          color: "purple",
                          width: "82%",
                        },
                        {
                          label: "FastAPI",
                          level: "Expert",
                          color: "emerald",
                          width: "91%",
                        },
                      ].map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-300">{skill.label}</span>
                            <span className={`text-${skill.color}-400`}>
                              {skill.level}
                            </span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 rounded-full`}
                              style={{ width: skill.width }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          label: "AWS/Azure",
                          level: "Advanced",
                          color: "yellow",
                          width: "86%",
                        },
                        {
                          label: "PostgreSQL",
                          level: "Advanced",
                          color: "red",
                          width: "84%",
                        },
                        {
                          label: "Kubernetes",
                          level: "Proficient",
                          color: "pink",
                          width: "75%",
                        },
                      ].map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-300">{skill.label}</span>
                            <span className={`text-${skill.color}-400`}>
                              {skill.level}
                            </span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 rounded-full`}
                              style={{ width: skill.width }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Section Divider --> */}
            <div className="section-divider">
              <span className="border-white/10 border rounded-full">
                Get In Touch
              </span>
            </div>

            {/* Contact Section */}
            <div className="text-center mb-20">
              <h2 className="text-5xl font-normal text-white tracking-tighter font-geist mb-8 animate-blur-in animate">
                Let's Build Something Amazing
              </h2>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 animate-slide-fade animate">
                Ready to transform your business with intelligent AI solutions?
                Let's discuss how we can optimize your workflows and unlock new
                possibilities.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-12 animate-scale-in animate">
                {/* Email */}
                <a
                  href="mailto:alex.chen@example.com"
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
                  <span className="font-medium">alex.chen@example.com</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/alexchen"
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
                  href="https://github.com/alexchen"
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
                  Open for new projects and consulting opportunities. Response
                  time: within 24 hours.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center pt-12 border-t border-gray-800">
                <p className="text-gray-500 text-sm">
                  © 2024 Alex Chen. Crafted with AI precision and human
                  creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
