const Hero = ({ handleContactMe }) => {
    return (
        <section className="md:h-screen md:py-12">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7 mt-12 md:mt-0">
                    <h1 className="max-w-2xl ml-12 mb-4 pb-6 font-extrabold text-teal-900 tracking-tight leading-none text-4xl md:ml-0 md:text-5xl xl:text-6xl">Hello, my name is Timur.<br/> I am a fullstack developer.</h1>
                    <div className="text-center md:text-start">
                        <button onClick={handleContactMe} className="inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center text-white bg-teal-700 hover:bg-teal-900 rounded-full">
                            Contact Me
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                        <button className="inline-flex items-center justify-center px-5 py-3 mr-3 border border-teal-900 font-medium text-center text-teal-900 bg-transparent hover:bg-white rounded-full"><a href="https://drive.google.com/file/d/151hoczp528HEz5CFvZDy6YkLr4ObCYIn/view?usp=sharing" target="_blank">Open my CV</a></button>
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img alt="timmchi avatar" src="https://avatars.githubusercontent.com/u/121810686?v=4" />
                </div>
            </div>
        </section>
    )
}

export default Hero