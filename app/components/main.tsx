import Image from "next/image";

export default function Main() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-12">
        
        {/* Text Section */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug md:leading-tight">
            It's the food and groceries you love, delivered
          </h1>

          <div className="bg-white shadow-md p-4 rounded-xl mt-6 flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full sm:flex-1 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition"
            />
            <button className="bg-pink-600 text-white rounded-lg px-6 py-3 hover:bg-pink-700 transition">
              Find food
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="/panda-background.webp"
            alt="Panda background"
            width={700}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
