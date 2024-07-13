import ContactForm from "./ContactForm";
import Header from "./Header";



const Contact = () => {
    return (
        <div className="h-[87vh]">
            <Header text="Contact Me" />
            <div className="flex justify-center mb-8 font-bold text-lg text-teal-800 divide-x divide-slate-700 pr-4">
                <p className="pr-2">timurkapusto@gmail.com</p>
                <a href="https://t.me/tim_mchi" target="_blank" className="flex gap-1 pl-2">
                Telegram
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                </a>
            </div>
            <ContactForm />
        </div>
    )
}

export default Contact