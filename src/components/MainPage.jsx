import Hero from "./Hero"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import Carousel from "./Carousel"

const testImages = [
    { url: 'https://storage.googleapis.com/petbacker/images/blog/2021/orange-cat-slept-whole-day-gone-viral/fat-cat-sleeping-every-time-4.jpg' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-j7TRghl9jpykKcP7QHZPz8dl0dk_Um49w&s' }
]

const MainPage = () => {
    return (
        <div className="py-10">
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Carousel images={testImages} />
        </div>
    )
}

export default MainPage