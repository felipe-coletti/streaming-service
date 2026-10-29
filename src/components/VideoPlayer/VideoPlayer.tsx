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
			setDuration(Number.isFinite(video.duration) ? video.duration : 0)
		}
		const handlePlay = () => setPaused(false)
		const handlePause = () => setPaused(true)

		video.addEventListener('timeupdate', updateTime)
		video.addEventListener('loadedmetadata', updateTime)
		video.addEventListener('play', handlePlay)
		video.addEventListener('pause', handlePause)

		return () => {
			video.removeEventListener('timeupdate', updateTime)
			video.removeEventListener('loadedmetadata', updateTime)
			video.removeEventListener('play', handlePlay)
			video.removeEventListener('pause', handlePause)
		}
	}, [])

	useEffect(() => {
		const handleFullscreenChange = () => {
			setFullscreen(Boolean(document.fullscreenElement))
		}

		document.addEventListener('fullscreenchange', handleFullscreenChange)
		return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
	}, [])

	const play = () => {
		player.current?.play().catch(() => setPaused(true))
	}

	const handlePauseOrResume = () => {
		if (!player.current) return

		if (player.current.paused) {
			play()
		} else {
			player.current.pause()
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
			const restoredVolume = volume > 0 ? volume : 100
			setDisplayVolume(restoredVolume)
			setVolume(restoredVolume)
		}
	}

	const handleVolumeChange = (v: number) => {
		setDisplayVolume(v)
		if (v > 0) setVolume(v)
	}

	const handleFullscreenToggle = () => {
		if (!player.current) return

		if (!document.fullscreenElement) {
			player.current.requestFullscreen().catch(() => {})
		} else {
			document.exitFullscreen().catch(() => {})
		}
	}

	const handleBackward = () => {
		if (player.current) {
			player.current.currentTime = Math.max(0, player.current.currentTime - 10)
		}
	}

	const handleForward = () => {
		if (player.current) {
			player.current.currentTime = Math.min(player.current.currentTime + 10, duration)
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
						play()
					} else {
						handlePauseOrResume()
					}
				}}
			>
				{!isStarted && (
					<button className={styles.mainVideoButton} type='button' aria-label='Play'>
						<Icon icon='ph:play-fill' />
					</button>
				)}
			</div>
			<div className={styles.mobileVideoControls}>
				<button className={styles.videoControlButton} type='button' aria-label='Back 10 seconds' onClick={handleBackward}>
					<Icon icon='ph:arrow-counter-clockwise-bold' />
				</button>
				<button
					className={styles.mainVideoButton}
					type='button'
					aria-label={isPaused ? 'Play' : 'Pause'}
					onClick={handlePauseOrResume}
				>
					{isPaused ? <Icon icon='ph:play-fill' /> : <Icon icon='ph:pause-fill' />}
				</button>
				<button className={styles.videoControlButton} type='button' aria-label='Forward 10 seconds' onClick={handleForward}>
					<Icon icon='ph:arrow-clockwise-bold' />
				</button>
			</div>
			<div className={styles.videoControls}>
				<input
					className={styles.rangeInput}
					type='range'
					min={0}
					max={100}
					step='any'
					value={progress}
					aria-label='Progress'
					onChange={e => handleProgress(Number(e.target.value))}
				/>
				<div className={styles.videoControlButtons}>
					<div className={styles.videoActionsArea}>
						<button
							className={styles.videoControlButton}
							type='button'
							aria-label={isPaused ? 'Play' : 'Pause'}
							onClick={handlePauseOrResume}
						>
							{isPaused ? <Icon icon='ph:play-fill' /> : <Icon icon='ph:pause-fill' />}
						</button>
						<button className={styles.videoControlButton} type='button' aria-label='Next episode'>
							<Icon icon='ph:skip-forward-fill' />
						</button>
						<div className={styles.videoVolumeControl}>
							<button
								className={styles.volumeButton}
								type='button'
								aria-label={isMuted ? 'Unmute' : 'Mute'}
								onClick={toggleMute}
							>
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
								aria-label='Volume'
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
						<button className={styles.videoControlButton} type='button' aria-label='Settings'>
							<Icon icon='ph:gear-six-fill' />
						</button>
						<button
							className={styles.videoControlButton}
							type='button'
							aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
							onClick={handleFullscreenToggle}
						>
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
