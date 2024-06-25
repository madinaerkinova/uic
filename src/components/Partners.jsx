const Partners = () => {
  return (
    <div className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl font-semibold leading-tight pb-6">OUR PARTNERS</h2>
          <p className="text-4xl font-semibold mb-12">Companies that believe in us</p>
        </div>

        <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-800 group rounded-md overflow-hidden flex justify-center items-center p-2">
              <img
                className="filter grayscale group-hover:grayscale-0 transition-all duration-300"
                src={partner.image}
                alt={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const partners = [
  { name: "Asaka Bank", image: "./asakabank.svg" },
  { name: "Avloniy", image: "./avloniy.svg" },
  { name: "Capital", image: "./capital.png" },
  { name: "Express", image: "./express.svg" },
  { name: "IT Park", image: "./itpark.svg" },
  { name: "Gvardiya", image: "./gvardiya.svg" },
  { name: "Mininovvation", image: "./mininovvation.svg" },
  { name: "PM", image: "./PM.svg" },
  { name: "Pro SM", image: "./Pro_SM.svg" },
  { name: "TDIU", image: "./TDIU.svg" },
  { name: "Uzcard", image: "./Uzcard.svg" },
  { name: "Group 18791", image: "./Group_18791.svg" },
  { name: "Yoshlar Ittifoqi", image: "./YOSHLAR_ITTIFOQI.png" },
  { name: "TMCI", image: "./TMCI.svg" },
  { name: "CSC", image: "./csc.svg" },
  { name: "Cyber Park", image: "./cyber-park.png" },
  { name: "Uzclub", image: "./uzclub.svg" },
  { name: "Zor TV", image: "./zor_tv.svg" },
  { name: "SELLO", image: "./SELLO.svg" },
  { name: "Paylov", image: "./paylov.svg" },
  { name: "Ipoteka Bank", image: "./ipotekabank.svg" },
];

export default Partners;
