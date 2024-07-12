import { useState } from "react"

const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [topic, setTopic] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className="flex flex-col w-1/3 px-6">
            <form onSubmit={() => console.log('hi')}>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email"/>
                <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="topic"/>
                <input value={message} onChange={e => setMessage(e.target.value)} placeholder="message"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm