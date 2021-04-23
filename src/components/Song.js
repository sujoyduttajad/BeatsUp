import React from 'react'

export default function Song({currentSong, isPlaying}) {
    return (
        <div className="song__area">
            <div className="song-container">
                <img className={`song__image ${isPlaying ? 'rotate' : ''}`} src={currentSong.cover} alt={currentSong.name}></img>
            </div>
        </div>
    )
}
