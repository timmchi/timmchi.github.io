import { useState } from "react"
import { books } from "../../data/favoriteBooks";

const About = () => {
    const [isBookListHidden, setIsBookListHidden] = useState(true);

    return (
        <div className='pt-12'>
            <div className="flex flex-col justify-center items-center">
                <div className="text-xl">
                    <h1 className="font-extrabold text-teal-900 text-4xl text-center px-6 py-12">About me</h1>
                    <p className="w-auto max-w-lg mb-4">My name is Timur Kapusto. I am a fullstack developer based in Finland.</p>
                    <p className="w-auto max-w-lg mb-4">I mainly work with React and Node, but I also know Python. I am familliar with both relational and document DBs.</p>
                    <p className="w-auto max-w-lg mb-4">I embrace the continuous learning associated with the job of a web developer,
                        so it's only a matter of time before new technologies get added to this list.</p>
                    <p className="w-auto max-w-lg mb-4">I am currently pursuing a Business IT degree at Laurea University of Applied Sciences.</p>
                </div>
                <div className="text-xl">
                    <div>
                        <h2 className="font-extrabold text-center text-teal-900 text-3xl pl-6 py-8">My hobbies</h2>
                        <p className="w-auto max-w-lg mb-4">I love reading!
                        <button className="border bg-teal-700 hover:bg-teal-900 text-white rounded-xl px-4 mx-1.5" onClick={() => setIsBookListHidden(!isBookListHidden)}>See</button>the list of my favorite books.
                        </p>
                        <ul className={`${isBookListHidden ? 'hidden' : 'flex'} gap-4`}>
                            {books.map(book => <li key={book.id}>{book.title}</li>)}
                        </ul>
                        <p className="w-auto max-w-lg mb-4">My current read is You Don't Know JS Yet - Objects and Classes.</p>
                    </div>
                    <div>
                        <p className="w-auto max-w-lg mb-4">I am also passionate about cooking. I am a trained chef and I used to work at restaurant Savoy, which is included in Micheline guide for Helsinki.</p>
                    </div>
                    <div>
                        <p className="w-auto max-w-lg mb-4">My favorite band is The Doors and my favorite artist is Bob Dylan.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About