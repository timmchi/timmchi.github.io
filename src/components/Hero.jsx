const Hero = () => {
    return (
        <section className="h-screen">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Hello, my name is Timur, I am a fullstack developer</h1>
                    <button className="inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center text-white bg-sky-700 hover:bg-sky-900 rounded-full">
                        Contact Me
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <button className="inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center text-black bg-gray-100 hover:bg-gray-500 rounded-full">Download my CV</button>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img alt="timmchi avatar" src="https://avatars.githubusercontent.com/u/121810686?v=4" />
                </div>
            </div>
        </section>
    )
}

export default Hero