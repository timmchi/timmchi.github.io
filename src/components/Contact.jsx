import ContactForm from "./ContactForm";
import Header from "./Header";

const Contact = () => {
    return (
        <div className="h-[87vh]">
            <Header text="Contact Me" />
            <div className="flex justify-center mb-8 font-bold text-lg text-teal-800 divide-x divide-slate-700 pr-8">
                <p className="pr-2">timurkapusto@gmail.com</p>
                <p className="pl-2">Telegram</p>
            </div>
            <ContactForm />
        </div>
    )
}

export default Contact