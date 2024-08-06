import ContactForm from "./ContactForm";
import { useInView } from "react-intersection-observer";
import Header from "./Header";
import { FaExternalLinkAlt } from "react-icons/fa";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transition: "all 1s",
        filter: inView ? "blur(0)" : "blur(5px)",
      }}
      className="h-[90vh] pt-4"
    >
      <Header text="Contact Me" />
      <div className="flex justify-center mb-8 font-bold text-lg text-teal-800 dark:text-stone-200 divide-teal-900 dark:divide-stone-200 pr-4">
        <a
          href="https://t.me/tim_mchi"
          target="_blank"
          className="flex gap-1.5 pl-2"
        >
          Telegram
          <FaExternalLinkAlt className="text-xl mt-0.5" />
        </a>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
