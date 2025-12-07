const HarvestMethods = () => {
  const methods = [
    {
      title: "Rooftop Rainwater Harvesting",
      img: "/rainwater harvesting.jpg",
      description:
        "Collect rainwater from rooftops and store it in tanks for household use.",
    },
    {
      title: "Surface Runoff Collection",
      img: "/surface.jpg",
      description:
        "Capture surface runoff water and store it in small reservoirs or ponds.",
    },
    {
      title: "Recharge Pits",
      img: "/recharge.jpg",
      description:
        "Small pits filled with gravel that help rainwater percolate underground.",
    },
    {
      title: "Rain Barrels",
      img: "rb.jpg",
      description:
        "Simple barrels connected to rooftop gutters to store rainwater efficiently.",
    },
    {
      title: "Percolation Tanks",
      img: "/kichu.jpeg",
      description:
        "Large tanks that help recharge groundwater by slow percolation.",
    },
    {
      title: "Green Roof System",
      img: "/gr.jpg",
      description:
        "Plants on rooftops absorb rainwater, reduce heat, and improve air quality.",
    },
  ];

  return (
    <section className="w-full bg-linear-to-b from-[#000A3B] via-black to-[#000A3B]
py-20 px-6 md:px-20 text-white">
      <h2 className="text-4xl font-bold text-center tracking-wide">
        RAINWATER HARVESTING <span className="text-[#26FF60]">METHODS</span>
      </h2>
      <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">
        Explore various eco-friendly methods for collecting and conserving rainwater.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {methods.map((item, idx) => (
          <div key={idx} className="card  w-80  mx-auto  bg-white/10 backdrop-blur-md border border-white/20 cursor-pointer 
    transition-all 
    hover:bg-white/20 
    hover:border-white/30 
    shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-gray-200">{item.title}</h2>
              <p className="text-gray-300">{item.description}</p>
            </div>
            <figure>
              <img
              className="h-48 w-80"
              src={item.img} alt={item.title} />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HarvestMethods;
