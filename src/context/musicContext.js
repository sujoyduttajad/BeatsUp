import React, { useState, createContext } from 'react';

export const MusicContext = createContext();

export const MusicProvider = props => {
    const [libraryStatus, setLibraryStatus] = useState(false);
    // const [isPlaying, setIsPlaying] = useState(false);
    
    return (
        <MusicContext.Provider value={[libraryStatus, setLibraryStatus]}>
            {props.children}
        </MusicContext.Provider>
    )
}

