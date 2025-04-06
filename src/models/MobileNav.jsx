import { useRef, useEffect, useState } from 'react'
import { Wifi, Signal, BatteryFull } from 'lucide-react'

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
					<div className="fixed right-8 flex">
						<Signal height={20} width={24} color='black' />
						<Wifi height={20} width={28} color='black' style={{ paddingLeft: '6px' }} />
						<BatteryFull height={20} width={30} color='black' style={{ paddingLeft: '6px' }} />
					</div>
				</div>
			</div>
			)}
		</>
	)
}