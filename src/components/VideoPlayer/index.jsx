import { React, useState, useRef } from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';

const VideoPlayer = () => {
    const player = useRef(null)

    const [isStarted, setStarted] = useState(false)
    const [isPaused, setPaused] = useState(isStarted ? false : true)
    const [displayVolume, setDisplayVolume] = useState(100)
    const [volume, setVolume] = useState(100)
    const isMuted = displayVolume === 0
    const currentTime = player.current && !isNaN(player.current.currentTime) ? (player.current.currentTime) : (0)
    const duration = player.current && !isNaN(player.current.duration) ? (player.current.duration) : (0)
    const progress = currentTime / duration * 100
    const [isFullscreen, setFullscreen] = useState(false)

    const handleProgress = (value) => {
        if (player.current.currentTime) {
            player.current.currentTime = player.current.duration / 100 * value
        }
    }

    const handlePauseOrResume = () => {
        setPaused(!isPaused)
        
        if (isPaused) {
            player.current.pause()
        } else {
            player.current.play()
        }
    }

    const handleVolume = () => {
        player.current.volume = volume
    }

    const formatTime = (time) => {
        let seconds = Math.floor(time)

        let minutes = 0
        let hours = 0

        while (seconds >= 60) {
            seconds -= 60
            minutes += 1
        }

        while (minutes >= 60) {
            minutes -= 60
            hours += 1
        }

        seconds = seconds.toString().padStart(2, "0")
        
        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds}`
        } else {
            return `${minutes}:${seconds}`
        }
    }

    const handleFullscreen = () => {
        if (!isFullscreen) {
            player.current.requestFullscreen()
        } else {
            player.current.exitFullscreen()
        }
    }

    const handleBackward = () => {
        if (player.current.currentTime >= 10) {
            player.current.currentTime -= 10
        } else {
            player.current.currentTime = 0
        }
    }

    const handleForward = () => {
        if (player.current.currentTime <= player.current.duration - 10) {
            player.current.currentTime += 10
        } else {
            player.current.currentTime = 0
        }
    }

    const handleFocus = () => {
        
    }

    return (
        <div className={isPaused ? styles.pausedVideoContainer : styles.notPausedVideoContainer} onFocus={handleFocus}>
            <video className={styles.videoDisplay} ref={player} autoPlay={isStarted} buffered="true" poster="" muted={isMuted}>
                <source src="" type="video/mp4" />
                Unable to load video
            </video>
            <div className={styles.floatingVideoControls} onClick={() => {handlePauseOrResume(); !isStarted && setStarted(true)}}>
                {!isStarted && (
                    <button className={styles.mainVideoButton} onClick={() => {setStarted(true); setPaused(false)}}>
                        <Icon icon="ph:play-fill" />
                    </button>
                )}
            </div>
            <div className={styles.mobileVideoControls}>
                <button className={styles.videoControlButton} onClick={handleBackward}>
                    <Icon icon="ph:arrow-counter-clockwise-bold" />
                </button>
                <button className={styles.mainVideoButton} onClick={() => {handlePauseOrResume()}}>
                    {isPaused ? (
                        <Icon icon="ph:play-fill" />
                    ) : (
                        <Icon icon="ph:pause-fill" />
                    )}
                </button>
                <button className={styles.videoControlButton} onClick={handleForward}>
                    <Icon icon="ph:arrow-clockwise-bold" />
                </button>
            </div>
            <div className={styles.videoControls}>
                <input className={styles.rangeInput} type="range" onChange={(e) => {handleProgress(e.target.value)}} />
                <div className={styles.videoControlButtons}>
                    <div className={styles.videoActionsArea}>
                        <button className={styles.videoControlButton} onClick={() => {handlePauseOrResume(); !isStarted && setStarted(true)}}>
                            {isPaused ? (
                                <Icon icon="ph:play-fill" />
                            ) : (
                                <Icon icon="ph:pause-fill" />
                            )}
                        </button>
                        <button className={styles.videoControlButton}>
                            <Icon icon="ph:skip-forward-fill" />
                        </button>
                        <div className={styles.videoVolumeControl}>
                            <button className={styles.volumeButton} onClick={() => {displayVolume > 0 ? (setDisplayVolume(0)) : (setDisplayVolume(volume))}}>
                                {displayVolume <= 0 ? (
                                    <Icon icon="ph:speaker-simple-slash-fill" />
                                ) : (
                                    displayVolume < 50 ? (
                                        <Icon icon="ph:speaker-simple-low-fill" />
                                    ) : (
                                        <Icon icon="ph:speaker-simple-high-fill" />
                                    )
                                    
                                )}
                            </button>
                            <input className={styles.videoVolumeInput} type="range" value={displayVolume} onChange={(e) => {setDisplayVolume(e.target.value, handleVolume)}} onClick={(e) => {e.target.value > 0 && (setVolume(e.target.value))}} />
                        </div>
                        <div className={styles.videoControlButton}>
                            <p className={styles.videoControlText}>{formatTime(currentTime)} / {formatTime(duration)}</p>
                        </div>
                    </div>
                    <div className={styles.videoActionsArea}>
                        <button className={styles.videoControlButton}>
                            <Icon icon="ph:gear-six-fill" />
                        </button>
                        <button className={styles.videoControlButton} onClick={() => {setFullscreen(!isFullscreen); handleFullscreen()}}>
                            {!isFullscreen ? (
                                <Icon icon="ph:arrows-out-simple-bold" />
                            ) : (
                                <Icon icon="ph:arrows-in-simple-bold" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer