import React, { useState, useRef, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { Details } from './components/Details';
import { AppState } from './types';

function App() {
  const [appState, setAppState] = useState<AppState>(AppState.LOADING);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Local background music (violin cover of Palagi by Tj Monterde)
  // Using new URL keeps TypeScript happy without extra asset typings.
  const MUSIC_URL = new URL(
    './audio/Palagi - Tj Monterde  Violin Cover by BOJO.mp3',
    import.meta.url
  ).href;

  const handleLoadingComplete = () => {
    setAppState(AppState.LANDING);
  };

  const handleOpenInvitation = () => {
    setAppState(AppState.DETAILS);
    // Smooth scroll to top if needed
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(e => console.error("Playback failed", e));
        setIsPlaying(true);
      }
    }
  };

  // Attempt autoplay when app enters LANDING state
  useEffect(() => {
    if (appState === AppState.LANDING && audioRef.current) {
      audioRef.current.volume = 0.4; // Set volume to 40%
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.log("Autoplay prevented by browser:", error);
          setIsPlaying(false);
        });
    }
  }, [appState]);

  return (
    <div className="relative min-h-screen bg-winter-cream text-winter-brown selection:bg-winter-brown selection:text-winter-cream overflow-hidden font-sans">
      
      {/* Background Music Audio Element */}
      <audio ref={audioRef} src={MUSIC_URL} loop />

      {/* Music Control Button - Visible after loading */}
      {appState !== AppState.LOADING && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-winter-cream/80 backdrop-blur-md border border-winter-brown/20 shadow-lg text-winter-brown hover:bg-winter-brown hover:text-winter-cream transition-all duration-300 group"
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? (
            <div className="flex space-x-[2px] h-4 items-end">
               <div className="w-1 bg-current h-4 animate-[pulse_1s_ease-in-out_infinite]"></div>
               <div className="w-1 bg-current h-2 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
               <div className="w-1 bg-current h-3 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
            </div>
          ) : (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
             </svg>
          )}
        </button>
      )}

      {/* Loading Screen */}
      {appState === AppState.LOADING && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* Main Content Area */}
      <main className="relative w-full h-full">
        
        {/* Landing Hero */}
        <Hero 
          onOpen={handleOpenInvitation} 
          visible={appState === AppState.LANDING} 
        />

        {/* Details Section */}
        <Details 
          visible={appState === AppState.DETAILS} 
        />
        
      </main>
    </div>
  );
}

export default App;
