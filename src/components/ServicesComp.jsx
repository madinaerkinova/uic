import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="p-6 sm:p-10 bg-[#242426] rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
      <h1 className="text-white text-xl sm:text-3xl lg:text-4xl font-bold mb-3">
        {title}
      </h1>
      <p className="text-gray-500 text-sm sm:text-base leading-7 lg:leading-8">
        {description}
      </p>
    </div>
  );
};

const ServicesComp = ({ title, desc }) => {
  return (
    <div className="w-full bg-[#1f1f21]">
      <div className="max-w-[1200px] w-full flex flex-col items-center justify-center mx-auto py-20">
        <div className="w-full items-center justify-start">
          <div className="flex items-center justify-start gap-2">
            <p className="text-sm text-[#00A795]">{desc}</p>
            <div className="w-32 border-[#ffffff] opacity-25 border"></div>
          </div>
          <h1 className="text-4xl text-white">{title}</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Web Development",
    description:
      "We develop websites with high quality, from corporate websites to web applications.",
  },
  {
    title: "Mobile apps",
    description:
      "Development and technical support of mobile applications of any complexity.",
  },
  {
    title: "UI&UX",
    description:
      "Developing a project MindMap and designing it with the optimal solution based on its architecture.",
  },
  {
    title: "Media production",
    description:
      "Professional preparation of 2D / 3D animation, project presentation, advertising, video and other media resources.",
  },
  {
    title: "CRM Systems",
    description:
      "Automation of business and processes, development of electronic management systems that reduce paper-work by 100%.",
  },
  {
    title: "Branding",
    description:
      "Developing a creative and unique logo for your project and create its branding guidelines.",
  },
  {
    title: "Production of games",
    description:
      "Development of games of any subject and complexity, corresponding to the international level.",
  },
  {
    title: "Artificial intelligence",
    description:
      "Development of intelligent computer systems with the capabilities of human intelligence.",
  },
  {
    title: "Cybersecurity",
    description:
      "Find and fix vulnerabilities in networks, devices, code, and data.",
  },
];

export default ServicesComp;
