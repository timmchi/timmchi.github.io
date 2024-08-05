import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";

const smallSizes = ["[350px]", "[420px]", "[290px]", "[400px]"];
const largeSizes = ["[350px]", "[700px]", "[290px]", "[600px]"];

const Carousel = ({ images, size }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  let sizes;

  size === "small" ? (sizes = smallSizes) : (sizes = largeSizes);

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
    // <div
    //   className={`h-${sizes[0]} w-${sizes[0]} mx-auto py-6 px-4 relative group lg:h-${sizes[1]} lg:w-${sizes[1]}`}
    // >
    //   <div
    //     style={{ backgroundImage: `url(${images[currentImageIndex].url})` }}
    //     className={`h-${sizes[2]} rounded-2xl bg-center bg-cover duration-500 lg:h-${sizes[3]} `}
    //   ></div>
    //   <button
    //     className="hidden group-hover:block absolute top-[45%] -translate-x-0 -translate-y-[-50%] left-5 p-3 text-xs bg-white bg-opacity-40 hover:bg-opacity-60 rounded-full lg:text-lg lg:p-4"
    //     onClick={handlePrevClick}
    //   >
    //     <GrPrevious />
    //   </button>
    //   <button
    //     className="hidden group-hover:block absolute top-[45%] -translate-x-0 -translate-y-[-50%] right-5 p-3 text-xs bg-white bg-opacity-40 hover:bg-opacity-60 rounded-full lg:text-lg lg:p-4"
    //     onClick={handleNextClick}
    //   >
    //     <GrNext />
    //   </button>
    //   <div className="hidden group-hover:flex top-4 justify-center py-2">
    //     {images.map((image, index) => (
    //       <button
    //         key={`${image.url}${image.projectName}`}
    //         className={`${
    //           index === currentImageIndex
    //             ? "text-opacity-80"
    //             : "text-opacity-60"
    //         } text-slate-400 text-xs p-1 hover:text-opacity-80`}
    //         onClick={() => handleGoToIndex(index)}
    //       >
    //         <FaCircle />
    //       </button>
    //     ))}
    //   </div>
    // </div>
    <div
      className={`h-${sizes[0]} w-${
        sizes[0]
      } mx-auto py-6 px-4 relative group lg:h-${sizes[1]} lg:w-${sizes[1]} ${
        size === "large" && "mt-24"
      }`}
    >
      <div
        style={{ backgroundImage: `url(${images[currentImageIndex].url})` }}
        className={`h-${sizes[2]} rounded-2xl bg-center bg-cover duration-500 lg:h-${sizes[3]} lg:w-${sizes[3]}`}
      ></div>
      <button
        className={`hidden group-hover:block absolute top-[45%] -translate-x-0 -translate-y-[-50%] left-5 p-3 text-xs bg-white bg-opacity-40 hover:bg-opacity-60 rounded-full lg:text-lg lg:p-4 lg:top-[40%] ${
          size === "large" && "lg:left-7"
        }`}
        onClick={handlePrevClick}
      >
        <GrPrevious />
      </button>
      <button
        className={`hidden group-hover:block absolute top-[45%] -translate-x-0 -translate-y-[-50%] right-5 p-3 text-xs bg-white bg-opacity-40 hover:bg-opacity-60 rounded-full lg:text-lg lg:p-4 lg:top-[40%] ${
          size === "large" && "lg:right-24"
        }`}
        onClick={handleNextClick}
      >
        <GrNext />
      </button>
      <div
        className={`hidden group-hover:flex top-4 justify-center py-2 ${
          size === "large" && "lg:pr-14"
        }`}
      >
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

export default Carousel;
