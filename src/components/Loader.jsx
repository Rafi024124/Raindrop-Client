const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black/90">
      <div className="relative">
        
        
        <div className="w-20 h-20 rounded-full border-4 border-[#26FF60] border-t-transparent animate-spin neon-glow"></div>

        
        <p className="text-[#26FF60] font-semibold text-xl mt-4 text-center tracking-widest animate-pulse">
          LOADING
        </p>
      </div>
    </div>
  );
};

export default Loader;
