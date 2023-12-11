import { React, useState } from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';

const VideoPlayer = () => {
    const [isStarted, setStarted] = useState(false)
    const [isPaused, setPaused] = useState(true)
    const [displayVolume, setDisplayVolume] = useState(100)
    const [volume, setVolume] = useState(100)
    const isMuted = displayVolume === 0
    const [isFullscreen, setFullscreen] = useState(false)

    const handleFullscreen = () => {
        if (!isFullscreen) {
            
        } else {
            
        }
    }

    return (
        <div className={styles.videoContainer}>
            <video className={styles.videoDisplay} autoPlay buffered="true" poster="" muted={isMuted}>
                <source src="" type="video/mp4" />
                Unable to load video
            </video>
            {!isStarted && (
                <button className={styles.startVideoButton} onClick={() => {setStarted(true)}}>
                    <Icon icon="ph:play-fill" />
                </button>
            )}
            <div className={styles.mobileVideoControls}>
                <button className={styles.videoControlButton}>
                    <Icon icon="ph:arrow-counter-clockwise-bold" />
                </button>
                <button className={styles.mainVideoButton} onClick={() => {setPaused(!isPaused)}}>
                    {isPaused ? (
                        <Icon icon="ph:play-fill" />
                    ) : (
                        <Icon icon="ph:pause-fill" />
                    )}
                </button>
                <button className={styles.videoControlButton}>
                    <Icon icon="ph:arrow-clockwise-bold" />
                </button>
            </div>
            <div className={styles.videoControls}>
                <input type="range" />
                <div className={styles.videoControlButtons}>
                    <div className={styles.videoActionsArea}>
                        <button className={styles.videoControlButton} onClick={() => {setPaused(!isPaused)}}>
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
                            <input className={styles.videoVolumeInput} type="range" value={displayVolume} onChange={(e) => {setDisplayVolume(e.target.value)}} onClick={(e) => {e.target.value > 0 && (setVolume(e.target.value))}} />
                        </div>
                        <div className={styles.videoControlButton}>
                            <p className={styles.videoControlText}>00:00 / 00:00</p>
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