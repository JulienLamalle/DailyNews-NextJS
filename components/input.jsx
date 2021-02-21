import React from 'react';

const Input = ({query, handleSubmit, handleChange}) => {
  return(
    <form onSubmit={handleSubmit}>
      <div className="my-5 pt-5 mx-20">
        <div className="relative flex w-full flex-wrap items-stretch mb-3">
          <input type="text" value={query} onChange={handleChange} placeholder="Rechercher un article..." className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
          <span className="z-10 h-full font-normal absolute text-center text-gray-700 bg-transparent outline-none focus:outline-none rounded text-base items-center justify-center w-8 right-20 pr-3 py-3">
            <button type="submit">Rechercher</button>
          </span>
        </div>
      </div>
    </form>
  )
}

export default Input;