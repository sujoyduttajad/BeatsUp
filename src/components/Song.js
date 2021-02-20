import React from 'react'

export default function Song({currentSong}) {
    return (
        <div className="song__area">
            <div className="song-container">
                <img src={currentSong.cover} alt={currentSong.name}></img>
            </div>
        </div>
    )
}
