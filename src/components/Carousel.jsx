import { useState } from "react"

const Carousel = ({ images }) => {
    return (
        <div className="h-[420px] mx-auto py-8 px-4 relative">
            <div style={{backgroundImage: `url(${images[0].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
        </div>
    )
}

export default Carousel