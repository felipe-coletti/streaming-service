import { useState, useRef, useEffect } from 'react'
import styles from './styles.module.css'
import { Icon } from '@iconify/react'

export const VideoPlayer = () => {
	const player = useRef<HTMLVideoElement | null>(null)

	const [isStarted, setStarted] = useState(false)
	const [isPaused, setPaused] = useState(true)
	const [volume, setVolume] = useState(100)
	const [displayVolume, setDisplayVolume] = useState(100)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)
	const [isFullscreen, setFullscreen] = useState(false)

	const isMuted = displayVolume === 0
	const progress = duration > 0 ? (currentTime / duration) * 100 : 0

	useEffect(() => {
		if (player.current) {
			player.current.volume = volume / 100
		}
	}, [volume])

	useEffect(() => {
		const video = player.current
		if (!video) return

		const updateTime = () => {
			setCurrentTime(video.currentTime)
			setDuration(video.duration)
		}

		video.addEventListener('timeupdate', updateTime)
		video.addEventListener('loadedmetadata', updateTime)

		return () => {
			video.removeEventListener('timeupdate', updateTime)
			video.removeEventListener('loadedmetadata', updateTime)
		}
	}, [])

	useEffect(() => {
		const handleFullscreenChange = () => {
			setFullscreen(Boolean(document.fullscreenElement))
		}

		document.addEventListener('fullscreenchange', handleFullscreenChange)
		return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
	}, [])

	const handlePauseOrResume = () => {
		if (!player.current) return

		if (isPaused) {
			player.current.play()
			setPaused(false)
		} else {
			player.current.pause()
			setPaused(true)
		}
	}

	const handleProgress = (value: number) => {
		if (player.current && duration) {
			player.current.currentTime = (duration / 100) * value
		}
	}

	const formatTime = (time: number) => {
		const h = Math.floor(time / 3600)
		const m = Math.floor((time % 3600) / 60)
		const s = Math.floor(time % 60)

		const pad = (n: number) => String(n).padStart(2, '0')
		return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`
	}

	const toggleMute = () => {
		if (displayVolume > 0) {
			setDisplayVolume(0)
		} else {
			setDisplayVolume(volume)
		}
	}

	const handleVolumeChange = (v: number) => {
		setDisplayVolume(v)
		setVolume(v)
	}

	const handleFullscreenToggle = () => {
		if (!player.current) return

		if (!document.fullscreenElement) {
			player.current.requestFullscreen()
		} else {
			document.exitFullscreen()
		}
	}

	const handleBackward = () => {
		if (player.current) {
			player.current.currentTime = Math.max(0, player.current.currentTime - 10)
		}
	}

	const handleForward = () => {
		if (player.current) {
			player.current.currentTime =
				player.current.currentTime + 10 < duration ? player.current.currentTime + 10 : duration
		}
	}

	return (
		<div className={isPaused ? styles.pausedVideoContainer : styles.notPausedVideoContainer}>
			<video className={styles.videoDisplay} ref={player} autoPlay={isStarted} muted={isMuted} poster=''>
				<source src='' type='video/mp4' />
				Unable to load video
			</video>
			<div
				className={styles.floatingVideoControls}
				onClick={() => {
					if (!isStarted) {
						setStarted(true)
						setPaused(false)
						player.current?.play()
					} else {
						handlePauseOrResume()
					}
				}}
			>
				{!isStarted && (
					<button className={styles.mainVideoButton}>
						<Icon icon='ph:play-fill' />
					</button>
				)}
			</div>
			<div className={styles.mobileVideoControls}>
				<button className={styles.videoControlButton} onClick={handleBackward}>
					<Icon icon='ph:arrow-counter-clockwise-bold' />
				</button>
				<button className={styles.mainVideoButton} onClick={handlePauseOrResume}>
					{isPaused ? <Icon icon='ph:play-fill' /> : <Icon icon='ph:pause-fill' />}
				</button>
				<button className={styles.videoControlButton} onClick={handleForward}>
					<Icon icon='ph:arrow-clockwise-bold' />
				</button>
			</div>
			<div className={styles.videoControls}>
				<input
					className={styles.rangeInput}
					type='range'
					min={0}
					max={100}
					value={progress}
					onChange={e => handleProgress(Number(e.target.value))}
				/>
				<div className={styles.videoControlButtons}>
					<div className={styles.videoActionsArea}>
						<button className={styles.videoControlButton} onClick={handlePauseOrResume}>
							{isPaused ? <Icon icon='ph:play-fill' /> : <Icon icon='ph:pause-fill' />}
						</button>
						<button className={styles.videoControlButton}>
							<Icon icon='ph:skip-forward-fill' />
						</button>
						<div className={styles.videoVolumeControl}>
							<button className={styles.volumeButton} onClick={toggleMute}>
								{displayVolume <= 0 ? (
									<Icon icon='ph:speaker-simple-slash-fill' />
								) : displayVolume < 50 ? (
									<Icon icon='ph:speaker-simple-low-fill' />
								) : (
									<Icon icon='ph:speaker-simple-high-fill' />
								)}
							</button>
							<input
								className={styles.videoVolumeInput}
								type='range'
								min={0}
								max={100}
								value={displayVolume}
								onChange={e => handleVolumeChange(Number(e.target.value))}
							/>
						</div>
						<div className={styles.videoControlButton}>
							<p className={styles.videoControlText}>
								{formatTime(currentTime)} / {formatTime(duration)}
							</p>
						</div>
					</div>
					<div className={styles.videoActionsArea}>
						<button className={styles.videoControlButton}>
							<Icon icon='ph:gear-six-fill' />
						</button>
						<button className={styles.videoControlButton} onClick={handleFullscreenToggle}>
							{!isFullscreen ? (
								<Icon icon='ph:arrows-out-simple-bold' />
							) : (
								<Icon icon='ph:arrows-in-simple-bold' />
							)}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
