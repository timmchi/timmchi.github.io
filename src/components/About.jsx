import { useState } from "react"
import { books } from "../../data/favoriteBooks";

const About = () => {
    const [isBookListHidden, setIsBookListHidden] = useState(true);

    return (
        <div className='bg-stone-200 font-heebo h-screen w-screen pt-24'>
            <h1 className="font-bold text-teal-900 text-3xl pl-6">About me</h1>
            <p className="pl-4">My name is Timur Kapusto. I am a fullstack developer based in Finland.</p>
            <p>I am currently pursuing a Business IT degree at Laurea University of Applied Sciences.</p>
            <div className="py-4">
                <p>I love reading!</p>
                Click<button className="border bg-teal-700 hover:bg-teal-900 text-white rounded-xl px-4 mx-1.5" onClick={() => setIsBookListHidden(!isBookListHidden)}>here</button>to see a list of my favorite books.
                <ul className={`${isBookListHidden ? 'hidden' : 'flex'} gap-4`}>
                    {books.map(book => <li key={book.id}>{book.title}</li>)}
                </ul>
                <p>My current read is You Don't Know JS Yet - Objects and Classes</p>
            </div>
            <div>
                <p>I also love cooking. I am a trained chef and I used to work at restaurant Savoy, which is included in Micheline guide for Helsinki.</p>
            </div>
            <div>
                <p>My favorite band is The Doors and my favorite artist is Bob Dylan.</p>
            </div>
        </div>
    )
}

export default About