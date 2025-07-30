import React from 'react'
import CollaborationSlider from './CollaborationSlider'
import Collaborators from './Collaborators'

const Collaborations = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 ml-12 mr-12 mt-5 mb-10 overflow-x-hidden rounded-2xl shadow-lg">
      <h1 className="text-6xl font-bold text-center text-emerald-800 mb-9 mt-12 overflow-hidden">
        Our Collaborators
        <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
      </h1>
      <CollaborationSlider />
      <Collaborators/>
    </div>
  )
}

export default Collaborations