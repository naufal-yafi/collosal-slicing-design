const BackgroundBlur = () => {
  return (
    <div className="absolute -z-10 top-0 left-0 w-full">
      <div className="animate-blob absolute rounded-full w-[600px] h-[600px] bg-green right-[400px] top-[-80px]"></div>
      <div className="animate-blob absolute rounded-full w-[600px] h-[600px] bg-red right-0 top-[-100px]"></div>
      <div className="animate-blob absolute rounded-full w-[400px] h-[400px] bg-yellow top-28 left-[-200px]"></div>
      <div className="w-full h-screen bg-dark bg-opacity-80 backdrop-blur-[100px]"></div>
    </div>
  );
};

export default BackgroundBlur;
