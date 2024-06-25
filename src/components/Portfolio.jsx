const Portfolio = () => {
  return (
    <div className="max-w-full bg-gray-900">
      <div className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-24">
        <div className="w-full flex items-center justify-between mb-8">
          <h1 className="font-bold text-3xl md:text-5xl text-white leading-tight uppercase">Portfolio</h1>
          <div className="flex space-x-4">
            <button className="portfolio-btn">Branding</button>
            <button className="portfolio-btn">Mobile App</button>
            <button className="portfolio-btn">CRM</button>
            <button className="portfolio-btn">Website</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-xl transition-opacity duration-300 hover:opacity-80" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black bg-opacity-50 backdrop-blur-lg backdrop-filter rounded-xl">
                <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 leading-tight">{project.title}</h2>
                <p className="text-white text-xs md:text-sm font-semibold uppercase">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Uzbekistan's Club",
    category: "Website",
    image: "https://uic.group/media/cache/0c/39/0c392b9a99ead3fb208087f2a1e1e145.jpg",
  },
  {
    title: "Anatomica",
    category: "Website",
    image: "https://uic.group/media/cache/29/88/29883e26588ac429b3ca86b3ac39efa6.jpg",
  },
  {
    title: "Anatomica App",
    category: "Mobile App",
    image: "https://uic.group/media/cache/cc/39/cc392cc7e6083d974df22bdf3f7baae3.jpg",
  },
  {
    title: "Express24",
    category: "Mobile App",
    image: "https://uic.group/media/cache/59/f1/59f1ca58bab7263f9c5eaff3033d5951.jpg",
  },
  {
    title: "Toshkent Parfum",
    category: "Mobile App",
    image: "https://uic.group/media/cache/b6/27/b6273a3cbd3fe1e5ad0e9b9acdccdfc4.jpg",
  },
  {
    title: "Toshkent Parfum",
    category: "Website",
    image: "https://uic.group/media/cache/b3/6b/b36bc02390ec157e4a4a99eb5c0643b2.jpg",
  },
  {
    title: "Uzbekistan's Club App",
    category: "Mobile App",
    image: "https://uic.group/media/cache/bf/05/bf057b6e96af88ea2c68d1da6a1ee07e.jpg",
  },
  {
    title: "WAYU",
    category: "Website",
    image: "https://uic.group/media/cache/77/4d/774ddc33fda844b44bb597539531dec6.jpg",
  },
  {
    title: "Ricomel",
    category: "Website",
    image: "https://uic.group/media/cache/30/da/30da918dacc113dd034fb5dbb8063282.jpg",
  },
  {
    title: "Infomax Freight",
    category: "Website",
    image: "https://uic.group/media/cache/d4/e7/d4e7073d362f8d5a16efbb3e656fc4ee.jpg",
  },
];

export default Portfolio;
