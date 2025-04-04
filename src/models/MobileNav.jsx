import { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faSignal, faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'

export default function MobileNav(props) {
	const [min, setMin] = useState(new Date().getMinutes())
	const hour = useRef(new Date().getHours())
	useEffect(() => { hour.current = new Date().getHours() }, [min])
	setInterval(() => { setMin(new Date().getMinutes()) }, 5000)

	return (
		<>
			{props.content === "video" && (
				<video playsInline loop autoPlay muted>
					<source className="iframe-wrapper" src={props.src} type="video/mp4" />
				</video>
			)}

			{props.content === "iframe" && (
				<iframe className="iframe-wrapper" src={props.src} />
			)}

			{props.content === "iframe-time" && (<div>
				<iframe className="iframe-wrapper" src={props.src} />
				<div className="fixed top-4 text-black">
					<div className="fixed left-8 font-bold current-time">
						{hour.current < 10 ? '0' + hour.current : hour.current}:{min < 10 ? '0' + min : min}
					</div>
					<div className="fixed right-8">
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