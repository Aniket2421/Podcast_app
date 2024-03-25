import React from 'react'
import CreatePodcastForm from '../Componet/StartPodcast/CreatePodcastForm'
import Navbar from '../Componet/Header/Navbar'

const CreateAPodcast = () => {
  return (
    <div>
      <Navbar />
      <div className="input-wrapper">
        <h1>Create A Podcast</h1>
        <CreatePodcastForm />
      </div>
    </div>
  )
}

export default CreateAPodcast