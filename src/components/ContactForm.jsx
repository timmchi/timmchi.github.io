import { useState } from "react"

const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [topic, setTopic] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div>
            <form className="max-w-sm mx-auto" onSubmit={() => console.log('hi')}>
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-bold text-gray-900">Your email</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="name@example.com"/>
                </div>
                <div className="mb-5">
                    <label for="topic" className="block mb-2 text-sm font-bold text-gray-900">Topic</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="topic" value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g. Collaboration"/>
                </div>
                <div className="mb-5">
                    <label for="message" className="block mb-2 text-sm font-bold text-gray-900">Message</label>
                    <textarea id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows="4" value={message} onChange={e => setMessage(e.target.value)} placeholder="Your message"/>
                </div>
                <button className="w-full py-2 border border-gray-600 rounded-lg text-white font-bold bg-sky-700 hover:bg-sky-900" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm