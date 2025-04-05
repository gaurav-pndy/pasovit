export default function Hero() {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-between xl:h-[calc(100vh-6rem)] gap-20  px-8 md:px-16 xl:px-32 py-16 "
      style={{
        backgroundImage:
          "url('https://www.pasovit.com/wp-content/uploads/2022/02/Hero-background-min.png')",
        backgroundSize: "cover",
      }}
    >
      {/* Left Side Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-[2.4rem] md:text-7xl font-bold leading-tight">
          We develop <br />
          <span className="text-black">Digital Solutions</span>
          <span className="text-red-600">.</span>
        </h1>
        <p className="mt-4 text-gray-800 text-xl">
          Let’s build coherent solutions to scale your business, digitally!
        </p>
        <button className="mt-6 bg-[#001e8a] text-white  rounded font-medium hover:bg-blue-800 cursor-pointer px-6 py-3  md:text-lg shadow-md  transition-all duration-300">
          Book Free Strategy Call
        </button>
      </div>

      {/* Right Side Illustration */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="https://www.pasovit.com/wp-content/uploads/2022/02/Asset-6.svg"
          alt="Rocket Illustration"
          className="w-full max-w-md md:max-w-5xl scale-110"
        />
      </div>
    </section>
  );
}
