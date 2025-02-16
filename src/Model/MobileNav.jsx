import { useRef, useEffect, } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faSignal, faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'

export default function MobileNav(props) {
	const hour = useRef(new Date().getHours())
	const min = useRef(new Date().getMinutes())

	setInterval(() => {
		if (hour.current && min.current) {
			updateTime()
		}
	}, 1000);

	useEffect(() => {
		if (hour.current && min.current) {
			updateTime()
		}
	}, [min])

	const updateTime = () => {
		const now = new Date()
		min.current = now.getMinutes()
		hour.current = now.getHours()
	}

	return (
		<>
			{props.content === "video" && (
				<video controls loop autoPlay muted width={400}>
					<source className="content-wrapper" src={props.src} type="video/mp4" />
				</video>
			)}

			{props.content === "iframe" && (
				<iframe className="content-wrapper" src={props.src} />
			)}

			{props.content === "iframe-time" && (<div>
				<iframe className="content-wrapper" src={props.src} />
				{/* <iframe className="content-embed" src={props.src}/> */}
				<div className="statusBar">
					<div className="current-time">
						{hour.current < 10 ? '0' + hour.current : hour.current}:{min.current < 10 ? '0' + min.current : min.current}
					</div>
					<div className="status">
						<FontAwesomeIcon icon={faSignal} style={{ fontSize: '14px' }} />
						<FontAwesomeIcon icon={faWifi} style={{ fontSize: '14px', paddingLeft: '6px' }} />
						<FontAwesomeIcon icon={faBatteryThreeQuarters} style={{ fontSize: '16px', paddingLeft: '6px' }} />
					</div>
				</div>

			</div>
			)}
		</>
	)
}