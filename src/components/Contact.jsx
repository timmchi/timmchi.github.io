import ContactForm from "./ContactForm";
import Header from "./Header";

const Contact = () => {
    return (
        <div>
            <Header text="Contact Me" />
            <div className="flex gap-4 justify-center mb-8">
                <p>timurkapusto@gmail.com</p>
                <p>Telegram</p>
            </div>
            <ContactForm />
        </div>
    )
}

export default Contact