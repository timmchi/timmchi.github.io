import ContactForm from "./ContactForm";
import Header from "./Header";
import { FaExternalLinkAlt } from "react-icons/fa";


const Contact = () => {
    return (
        <div className="h-[90vh] pt-4">
            <Header text="Contact Me" />
            <div className="flex justify-center mb-8 font-bold text-lg text-teal-800 dark:text-stone-200 divide-x divide-teal-900 dark:divide-stone-200 pr-4">
                <p className="pr-2">timurkapusto@gmail.com</p>
                <a href="https://t.me/tim_mchi" target="_blank" className="flex gap-1.5 pl-2">
                Telegram
                <FaExternalLinkAlt className="text-xl mt-0.5"/>
                </a>
            </div>
            <ContactForm />
        </div>
    )
}

export default Contact