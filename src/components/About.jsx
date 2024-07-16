// import { useState } from "react"
// import { books } from "../../data/favoriteBooks";
// import BookCard from "./BookCard";
import BookListModal from "./BookListModal";

const About = () => {

    return (
        <div className='pt-12'>
            <div className="flex flex-col justify-center items-center text-teal-900">
                <div className="text-2xl mx-auto px-4">
                    <h1 className="font-extrabold text-5xl text-center pt-12 pb-6 tracking-tight leading-none">About me</h1>
                    <p className="w-auto max-w-lg mb-4">My name is Timur Kapusto. I am a fullstack developer based in Finland.</p>
                    <p className="w-auto max-w-lg mb-4">I am most proficient with the MERN stack, but I also know Python. JS and React are what I enjoy using the most.</p>
                    <p className="w-auto max-w-lg mb-4">I embrace the continuous learning associated with the job of a web developer,
                        so it's only a matter of time before more technologies get added to this list.</p>
                    <p className="w-auto max-w-lg mb-4">I am currently pursuing a Business IT degree at Laurea University of Applied Sciences.</p>
                    <p className="w-auto max-w-lg mb-4">I also used to study Hospitality Management at Haaga-Helia University of Applied Sciences before discovering my passion for coding.</p>
                </div>
                <div className="text-2xl mx-auto px-4">
                    <div>
                        <h2 className="font-extrabold text-center text-4xl pt-8 pb-6 tracking-tight leading-none">My hobbies</h2>
                        <div className="flex gap-2">
                            <p className="w-auto max-w-lg mb-4">I love reading.</p>
                            <BookListModal buttonText="See"/> <span>the list of my favorite books.</span>
                        </div>
                        <p className="w-auto max-w-lg mb-4">My current read is <strong>You Don't Know JS Yet - Objects and Classes</strong>.</p>
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