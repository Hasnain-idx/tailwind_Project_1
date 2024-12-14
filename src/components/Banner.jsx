import React from 'react'

const Banner = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-36">
        <h1 className="text-6xl font-semibold text-gray-800">
          Web Development Blog @
        </h1>

        <h1 className="text-6xl font-semibold text-gray-800">
          Material Tailwind
        </h1>

        <p className="text-2xl py-10 text-slate-400">
          Expand your web development knowledge with our tutorials and learning
          articles.
        </p>
      </div>
  )
}

export default Banner
