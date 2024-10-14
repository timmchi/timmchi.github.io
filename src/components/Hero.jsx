import { useInView } from "react-intersection-observer";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const Hero = ({ handleContactMe }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section className="md:h-screen md:pt-36">
      <div
        style={{
          opacity: inView ? 1 : 0,
          transition: "all 1s",
          filter: inView ? "blur(0)" : "blur(5px)",
          transform: inView ? "translateY(0)" : "translateY(10%)",
        }}
        ref={ref}
        className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div className="mr-auto place-self-center lg:col-span-7 mt-12 md:mt-0 text-teal-900 dark:text-stone-200">
          <h1 className="max-w-2xl ml-12 mb-4 pb-6 font-extrabold tracking-tight leading-none text-4xl md:ml-0 md:text-5xl xl:text-6xl">
            Hello, my name is Timur.
            <br /> I am a fullstack developer.
          </h1>
          <div className="text-center md:text-start flex items-center justify-center md:justify-start space-x-2">
            <button
              onClick={handleContactMe}
              className="inline-flex items-center justify-center px-5 py-3 font-medium text-center text-white bg-teal-700 dark:bg-stone-200 dark:text-teal-900 hover:bg-teal-900 dark:hover:bg-teal-600 dark:hover:text-stone-200 rounded-full"
            >
              Contact Me
              <FaArrowRight className="ml-1.5 -mr-1 w-4 h-4" />
            </button>
            <button className="inline-flex items-center justify-center px-5 py-3 border border-teal-900 font-medium text-center text-teal-900 hover:bg-white dark:border-stone-200 dark:text-stone-200 dark:hover:bg-teal-600 bg-transparent hover:bg-white rounded-full">
              <a
                href="https://drive.google.com/file/d/1GAkeJuPM2sgcj01UUDi_uaD_-SbiIYin/view?usp=sharing"
                target="_blank"
              >
                Open my CV
              </a>
            </button>
            <a
              className="inline-flex items-center justify-center text-5xl text-teal-700 dark:text-stone-200 hover:text-teal-900 dark:hover:text-teal-500"
              href="https://github.com/timmchi"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            alt="timmchi avatar"
            src="https://avatars.githubusercontent.com/u/121810686?v=4"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
