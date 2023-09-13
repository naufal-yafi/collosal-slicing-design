const BackgroundBlur = () => {
  return (
    <div className="absolute -z-10 top-0 left-0 w-full">
      <div className="animate-blur-particle absolute w-[600px] h-[600px] bg-green lg:right-[500px] top-[-80px]"></div>
      <div className="animate-blur-particle absolute w-[600px] h-[600px] bg-red right-[-400px] md:right-[-300px] lg:right-0 top-[-100px]"></div>
      <div className="animate-blur-particle absolute w-[400px] h-[400px] bg-yellow top-28 left-[-300px] md:left-[-200px]"></div>
    </div>
  );
};

export default BackgroundBlur;
