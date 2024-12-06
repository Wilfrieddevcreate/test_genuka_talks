const HeroSection = () => {
    return (
        <div className="bg-white">
            <div className="flex justify-center items-center space-x-12 animate__animated animate__fadeIn animate__delay-1s">
                <div className="flex justify-between items-center mt-12 space-x-52">
                <div>
                    <h1 className="text-3xl font-semibold">Today's Task</h1>
                    <p className="text-gray-500">Wednesday, 11 May</p>
                </div>
                <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-200">
                    <span className="text-3xl">+</span>
                    <span className="text-lg">New Task</span>
                </button>
                </div>
            </div>
        </div>
    );
  };
  
  export default HeroSection;
  