import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";

const LargeCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    currentImageIndex === images.length - 1
      ? setCurrentImageIndex(0)
      : setCurrentImageIndex(currentImageIndex + 1);
  };

  const handlePrevClick = () => {
    currentImageIndex === 0
      ? setCurrentImageIndex(images.length - 1)
      : setCurrentImageIndex(currentImageIndex - 1);
  };

  const handleGoToIndex = (index) => setCurrentImageIndex(index);

  return (
    <div className="h-[350px] w-[350px] mx-auto py-6 px-3 relative group lg:h-[420px] lg:w-[420px]">
      <div
        style={{ backgroundImage: `url(${images[currentImageIndex].url})` }}
        className="h-[290px] w-full rounded-2xl bg-center bg-cover duration-500 lg:h-[400px] lg:w-[400px]"
      ></div>
      <button
        className="hidden group-hover:block absolute top-[45%] -translate-x-0 -translate-y-[-50%] left-4 p-3 text-xs bg-white bg-opacity-40 hover:bg-opacity-60 rounded-full lg:text-lg lg:p-4 lg:top-[40%]"
        onClick={handlePrevClick}
      >
        <GrPrevious />
      </button>
      <button
        className="hidden group-hover:block absolute top-[45%] -translate-x-0 -translate-y-[-50%] right-5 p-3 text-xs bg-white bg-opacity-40 hover:bg-opacity-60 rounded-full lg:text-lg lg:p-4 lg:top-[40%] lg:right-3"
        onClick={handleNextClick}
      >
        <GrNext />
      </button>
      <div className="hidden group-hover:flex top-4 justify-center py-2">
        {images.map((image, index) => (
          <button
            key={`${image.url}${image.projectName}`}
            className={`${
              index === currentImageIndex
                ? "text-opacity-80"
                : "text-opacity-60"
            } text-slate-400 text-xs p-1 hover:text-opacity-80`}
            onClick={() => handleGoToIndex(index)}
          >
            <FaCircle />
          </button>
        ))}
      </div>
    </div>
  );
};

export default LargeCarousel;
