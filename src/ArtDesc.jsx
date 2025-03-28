import { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sparkles, Environment } from '@react-three/drei'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faFaceLaugh, faFaceFrown, faMobileScreenButton, faDesktop, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router'
import { param } from './param.js'
import Mobile from "./Model/Mobile.jsx"
import NoteTaking from "./Model/NoteTaking.jsx"
import LipReading from "./Model/LipReading.jsx"
import Hand from "./Model/Hand.jsx"
import Art from "./Model/Art.jsx"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import './art.css'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

export default function ArtDesc() {
	const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight)
	const [radius, setRadius] = useState(ratio > 1 ? ratio * 3 : 5)

	const scale = Array.from({ length: 500 }, () => 0.5 + Math.random() * 4)

	const section0 = useRef(null)
	const section1 = useRef(null)
	const section2 = useRef(null)
	const section3 = useRef(null)
	const section4 = useRef(null)
	const section5 = useRef(null)
	const section6 = useRef(null)
	const section7 = useRef(null)
	const section8 = useRef(null)
	const section9 = useRef(null)
	const section10 = useRef(null)
	const section11 = useRef(null)
	const img01 = useRef(null)
	const text2 = useRef(null)
	const text2_1 = useRef(null)
	const text3 = useRef(null)
	const text4 = useRef(null)
	const text5 = useRef(null)
	const text6 = useRef(null)
	const text6_masking = useRef(null)

	const prototype = useRef(null)
	const model = useRef()
	const logo = useRef()

	useEffect(() => {
		const checkIfElementsAreLoaded = () => {
			if (logo.current && model.current && prototype.current) {
				const context = gsap.context(() => {
					const sec1 = gsap.timeline({
						scrollTrigger: {
							trigger: section1.current,
							start: 'top bottom',
							end: 'bottom center',
							scrub: 1,
						}
					})
					sec1.to('.top', { opacity: 1 }, 0)
					sec1.from(img01.current, { x: '10%' }, 0)
					sec1.to(logo.current.position, { y: 20 }, 0)

					const sec2 = gsap.timeline({
						scrollTrigger: {
							trigger: section2.current,
							start: 'top center',
							end: 'bottom bottom',
							scrub: 1,
						}
					})
					sec2.from(text2.current, { x: '20%', opacity: 0 }, 0)
					sec2.from(text2_1.current, { x: '-20%', opacity: 0 }, 0)

					const sec3 = gsap.timeline({
						scrollTrigger: {
							trigger: section3.current,
							start: 'top center',
							end: 'bottom bottom',
							scrub: 1,
						}
					})
					sec3.from(text3.current, { x: '20%', opacity: 0 }, 0)
					sec3.to(model.current.position, { y: ratio > 1 ? '0' : 1.5 }, 0)
					sec3.from(model.current.rotation, { y: Math.PI / 3 }, 0)

					const sec4 = gsap.timeline({
						scrollTrigger: {
							trigger: section4.current,
							start: 'top center',
							end: 'bottom bottom',
							scrub: 1,
						}
					})
					sec4.from(text4.current, { x: '20%', opacity: 0 }, 0)
					sec4.to(model.current.rotation, { y: -Math.PI * 2 / 3 }, 0)

					const sec5 = gsap.timeline({
						scrollTrigger: {
							trigger: section5.current,
							start: 'top center',
							end: 'bottom bottom',
							scrub: 1,
						}
					})
					sec5.from(text5.current, { x: '20%', opacity: 0 }, 0)
					sec5.to(model.current.rotation, { y: -Math.PI * 4 / 3 }, 0)

					const sec6 = gsap.timeline({
						scrollTrigger: {
							trigger: section6.current,
							start: 'top center',
							end: 'bottom bottom',
							scrub: 1,
						}
					})
					sec6.from(text6.current, { x: '20%', opacity: 0 }, 0)
					sec6.to(text6_masking.current, { opacity: 1 }, 0)
					sec6.to(model.current.position, { y: 10 }, 0)

					const sec7 = gsap.timeline({
						scrollTrigger: {
							trigger: section7.current,
							start: 'top center',
							end: 'bottom bottom',
							scrub: 1, ease: "power1.out"
						}
					})
					sec7.from('#persona1 .profile-img', { opacity: 0 }, 0)
						.from('#persona1 .quote', { y: '20%', opacity: 0 }, 0)
						.from('#persona1 .profile', { y: '20%', opacity: 0 }, 0)
						.from('#persona1 #EI', { y: '20%', opacity: 0 }, 0)
						.from('#persona1 #SN', { y: '20%', opacity: 0 }, 0)
						.from('#persona1 #TF', { y: '20%', opacity: 0 }, 0)
						.from('#persona1 #JP', { y: '20%', opacity: 0 }, 0)
						.from('#persona1 .bio', { y: '20%', opacity: 0 }, 0)
						.from('#persona1 .needs', { y: '20%', opacity: 0 }, 0)
						.from('#persona1 .experience', { y: '20%', opacity: 0 }, 0)

					const sec8 = gsap.timeline({
						scrollTrigger: {
							trigger: section8.current,
							start: 'top center',
							end: 'bottom bottom',
							scrub: 1, ease: "power1.out"
						}
					})
					sec8.from('#persona2 .profile-img', { opacity: 0 }, 0)
						.from('#persona2 .quote', { y: '20%', opacity: 0 }, 0)
						.from('#persona2 .profile', { y: '20%', opacity: 0 }, 0)
						.from('#persona2 #EI', { y: '20%', opacity: 0 }, 0)
						.from('#persona2 #SN', { y: '20%', opacity: 0 }, 0)
						.from('#persona2 #TF', { y: '20%', opacity: 0 }, 0)
						.from('#persona2 #JP', { y: '20%', opacity: 0 }, 0)
						.from('#persona2 .bio', { y: '20%', opacity: 0 }, 0)
						.from('#persona2 .needs', { y: '20%', opacity: 0 }, 0)
						.from('#persona2 .experience', { y: '20%', opacity: 0 }, 0)

					const sec9 = gsap.timeline({
						scrollTrigger: {
							trigger: section9.current,
							start: 'top 40%',
							end: 'bottom bottom',
							scrub: 1, ease: "power1.out"
						}
					})
					sec9.from('.journey-profile', { opacity: 0 }, 0)
						.from('.journey-map', { y: '20%', opacity: 0 }, 0)
						.from('.journey-touch', { y: '20%', opacity: 0 }, 0)
						.from('.journey-stage', { y: '20%', opacity: 0 }, 0)
						.from('.journey-feeling', { y: '20%', opacity: 0 }, 0)

					const sec10 = gsap.timeline({
						scrollTrigger: {
							trigger: section10.current,
							start: 'top center',
							end: 'top 20%',
							scrub: 1,
						}
					})
					sec10.from('.flowchart', { opacity: 0 }, 0)
						.from('.flowchart', { y: '20%' }, 0)

					const sec11 = gsap.timeline({
						scrollTrigger: {
							trigger: section11.current,
							start: 'top center',
							end: 'bottom bottom',
							scrub: 1,
						}
					})
					sec11.to(prototype.current.position, { y: 0 }, 0)
				})
				return () => context.revert()
			} else {
				setTimeout(checkIfElementsAreLoaded, 100)
			}
		}
		checkIfElementsAreLoaded()

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, [])

	const handleResize = () => {
		const newRatio = window.innerWidth / window.innerHeight;
		setRatio(newRatio)
		setRadius(ratio > 1 ? newRatio * 3 : 5)
	}

	return (
		<div>
			<Canvas style={{ position: 'fixed' }} camera={{
				fov: 45,
				position: [0, 0, 0]
			}}
				gl={{ stencil: true }}>
				{/* <OrbitControls /> */}
				<ambientLight intensity={0.1} />
				<Environment preset="sunset" />
				<Sparkles count={scale.length} size={scale} position={[0, 0, -10]} scale={[12, 12, 20]} speed={0.1} />
				<group ref={logo} onClick={() => { window.open("https://art-plus.vercel.app/", "_blank") }}>
					<Art position={[
						ratio > 1 ? -ratio * 2.2 : 0,
						ratio > 1 ? 0 : 1 + (1 - ratio) * 5,
						ratio > 1 ? -10 : -14]}
						opacity={0} scale={0.5} />
				</group>
				<group position={[0, -10, -7]} ref={prototype}>
					<Mobile
						rotation={[0, -Math.PI / 2, 0]}
						scale={1}
						matcap={param.matcapOrange}
						src={"https://art-plus.vercel.app/"}
						content={"iframe-time"} />
				</group>
				<group ref={model} position={[ratio > 1 ? -radius * 1.8 : -radius, -10, -10]} >
					<Hand position={[radius, -2, 0]} scale={0.3} />
					<LipReading rotation-y={Math.PI * 0.66} position={[-Math.cos(Math.PI / 3) * radius, 0, -Math.sin(Math.PI / 3) * radius]} scale={0.8} />
					<NoteTaking rotation={[Math.PI / 2, Math.PI / 3, -Math.PI / 2]} position={[-Math.cos(Math.PI / 3) * radius, 0, Math.sin(Math.PI / 3) * radius]} scale={1.1} />
				</group>
			</Canvas>

			<div className='wrapper'>
				<Link to={'/'}>
					<p className='nav back button-decoration'>Back</p>
				</Link>
				<p className='nav top button-decoration'><a href='#first'>Top</a></p>

				<div id='first' className='section-wo flex-container' ref={section0}>
					<div className='left-side'></div>
					<div className='right-side'>
						<div className='desc art'>
							<p>
								In 2016, I came across a
								<a className='art' href="https://comic.naver.com/webtoon/list?titleId=659934&page=1&sort=ASC" target="_blank"> comic </a>
								written by a deaf writer based on her real-life experiences. As a museum-goer at the time,
								I was curious about how deaf people engaged with culture such as museums and galleries.<br />
								I researched how deaf people communicate and how the museum's docent service operates
								to identify touch points.
								Based on the research, I designed a exhibition guide app
								that allows deaf people to reserve and interact with the docents the way they want to.
								The logo represents the idea of bringing art to augmented reality (AR).
							</p>
						</div>
					</div>
				</div>

				<div className='section-img' ref={section1} style={{
					background: "url('./art/art_bg.jpg')",
					backgroundSize: 'cover', backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}>
					<img ref={img01} style={{ height: '100vh' }}
						src='/art/art_thumb.png' />
				</div>

				<div className='section' ref={section2} style={{
					display: 'flex', alignItems: 'center',
				}}>
					<div style={{ opacity: 0.3, position: 'absolute', right: 0 }} ref={text2_1} >
						<p className='stroke' style={{ lineHeight: 1.1, textAlign: 'right', marginRight: '1rem' }}>
							Sign Language<br />Lip Reading<br />Written Communication
						</p>
					</div>
					<p ref={text2} className='art desc' style={{
						width: ratio > 1 ? '50vw' : '90vw',
						margin: 'auto',
						textAlign: 'left',
					}}>
						People with hearing loss use a variety of communication methods depending on the severity of their
						hearing loss, their preferences, and the resources available to them.
					</p>
				</div>

				<div className='section flex-container' ref={section3}>
					<div className='left-side'>
					</div>
					<div className='right-side desc art'>
						<div ref={text3}>
							<p style={{ color: 'rgba(255,255,255,0.8)' }}>common methods <b>01</b></p>
							<p className='method-title'>Sign Language</p>
							<p>
								Sign language is the primary language for many individuals with hearing loss,
								allowing them to express themselves fluently and connect with others who are also proficient in
								sign language.
							</p>
						</div>
					</div>
				</div>

				<div className='section flex-container' ref={section4}>
					<div className='left-side'>
					</div>
					<div className='right-side desc art'>
						<div ref={text4}>
							<p style={{ color: 'rgba(255,255,255,0.8)' }}>common methods <b>02</b></p>
							<p className='method-title'>Lip Reading (Speechreading)</p>
							<p>
								Lip reading involves watching the movement of a speaker’s lips, face, and body to understand
								what they are saying. The speakers should show their lips with frontal faces and speak clearly
								at a natural pace.
								However, it is sometimes challenging because many sounds look similar on the lips, and some
								words are hard to distinguish just by lip movement.
							</p>
						</div>
					</div>
				</div>

				<div className='section flex-container' ref={section5}>
					<div className='left-side'>
					</div>
					<div className='right-side desc art'>
						<div ref={text5}>
							<p style={{ color: 'rgba(255,255,255,0.8)' }}>common methods <b>03</b></p>
							<p className='method-title'>Written Communication</p>
							<p>
								Texting, writing notes, or typing on electronic devices is a common method of communication for
								people with hearing loss, especially in one-on-one or small group settings.
								Many individuals with hearing loss prefer to carry a pen and paper or use a smartphone/tablet to
								facilitate easier communication in situations where verbal communication might be challenging.
							</p>
						</div>
					</div>
				</div>

				<div className='section flex-container' ref={section6}>
					<div className='left-side' style={{ display: 'flex' }}>
						<div ref={text6_masking} className='art' style={{ alignContent: ratio > 0.5 ? 'center' : 'flex-end' }}>
							<p style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 700, marginBottom: '0.5rem' }}>
								- Reference -
							</p>
							<a target="_blank" href="https://www.museum.go.kr/site/eng/content/tours_and_services">
								<p className='masking'>National <br />Museum <br />of Korea</p>
							</a>
						</div>
					</div>
					<div className='right-side desc art'>
						<div ref={text6} style={{ alignContent: 'center' }}>
							<b>
								<p style={{ margin: 0 }}>Sign language docent</p>
							</b>
							<ul style={{ margin: 0 }}>
								<li>For groups of 5 to 20 people, it should be booked at least one day before your desired date.
								</li>
								<li>Walk-ins are also accepted, but priority is given to those who make reservations in advance.
								</li>
							</ul>
							<b>
								<p style={{ margin: '0.5rem 0 0 0' }}>Exhibition Guide App</p>
							</b>
							<ul style={{ margin: 0 }}>
								<li>
									This is a new exhibition guide service that uses Bluetooth beacons and smart devices to
									automatically
									guide
									visitors to exhibits based on their location.</li>
								<li>After installing the app, you need to download the content in advance while connected to WIFI.
								</li>
								<li>Bluetooth function must be turned on.</li>
							</ul>
						</div>
					</div>
				</div>

				<div id="persona1" className="persona section-auto" ref={section7}>
					<div className="profile-img">
					</div>
					<div className='profile-desc'>
						<div className="quote box art">
							<p className='title'>Persona 01</p>
							<p className="quotes">
								<q><em>
									I want to be able to see at a glance where sign language docents are available and book
									them easily and conveniently.
								</em></q></p>
						</div>
						<div className="profile">
							<table>
								<tbody>
									<tr>
										<th className='art' colSpan={2} style={{ fontSize: '1.2rem' }}>
											Mina Kim
										</th>
										{ratio < 1 && <td rowSpan={4} style={{
											width: '30%',
											height: '100%',
											backgroundImage: 'url(./art/portrait1-mobile.jpg)',
											backgroundSize: 'cover',
											backgroundPosition: 'center',
										}}>
										</td>}
									</tr>
									<tr>
										<th><p className='art'>Age</p></th>
										<td><p className='art'>31</p></td>
									</tr>
									<tr>
										<th><p className='art'>Location</p></th>
										<td><p className='art'>Seoul, Korea</p></td>
									</tr>
									<tr>
										<th><p className='art'>Family</p></th>
										<td><p className='art'>Parents, 1 older brother</p></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="bars" id="EI">
						<div className="bar"></div>
						<div className="circle"></div>
						<p className="leftside">Extrovert</p>
						<p className="rightside">Introvert</p>
					</div>
					<div className="bars" id="SN">
						<div className="bar"></div>
						<div className="circle"></div>
						<p className="leftside">Sensing</p>
						<p className="rightside">Intuition</p>
					</div>
					<div className="bars" id="TF">
						<div className="bar"></div>
						<div className="circle"></div>
						<p className="leftside">Thinking</p>
						<p className="rightside">Feeling</p>
					</div>
					<div className="bars" id="JP">
						<div className="bar"></div>
						<div className="circle"></div>
						<p className="leftside">Judging</p>
						<p className="rightside">Perceiving</p>
					</div>
					<div className="bio box">
						<h3 className='art'>Bio</h3>
						<p className='art-opp'>
							When Mina was five, she had an ear infection that made her right ear deaf. She could still use her
							left ear
							normally, but by the time she was 15, she had lost a lot of her hearing. She can recognise high-pitched
							female voices, but otherwise communicates through text, speech reading and sign language.
						</p>
					</div>
					<div className="needs box">
						<h3 className='art'>Needs</h3>
						<p className='art-opp'>
							Mina loves art and culture, so she searches for exhibitions and goes to places she wants to visit
							in her free time. She previously enjoyed going to art exhibitions on her own, but recently she has been
							trying to find a docent because she thinks it is more interesting to learn about the deeper meaning of
							the artwork.
							She would like there to be more sign language interpreters for the docent programs.
						</p>
					</div>
					<div className="experience box">
						<h3 className='art'>Experience</h3>
						<p className='art-opp'>
							Mina visited the museum to listen to the docent, but when she arrived at the last slot, there were
							so many people that it was hard to see the curator's lips, and to make matters worse, she could barely
							understand what he was saying because he had a low-pitched voice. Mina couldn't help but look at
							the exhibition alone.
						</p>
					</div>
				</div>

				<div id="persona2" className="persona section-auto" ref={section8}>
					<div className="profile-img">
						<div className="portrait"></div>
					</div>
					<div className='profile-desc'>
						<div className="quote box art">
							<p className='title'>Persona 02</p>
							<p className="quotes">
								<q><em>
									I want the freedom to explore artworks in depth without being restricted by docent schedules.
								</em></q>
							</p>
						</div>
						<div className="profile">
							<table>
								<tbody>
									<tr>
										<th className='art' colSpan={2} style={{ fontSize: '1.2rem' }}>
											Yoonha Lee
										</th>
										<td><p className='art'></p></td>
										{ratio < 1 && <td rowSpan={4} style={{
											width: '30%',
											height: '100%',
											backgroundImage: 'url(./art/portrait2-mobile.jpg)',
											backgroundSize: 'cover',
											backgroundPosition: 'center',
										}}>
										</td>}
									</tr>
									<tr>
										<th><p className='art'>Age</p></th>
										<td><p className='art'>20</p></td>
									</tr>
									<tr>
										<th><p className='art'>Location</p></th>
										<td><p className='art'>Incheon, Korea</p></td>
									</tr>
									<tr>
										<th><p className='art'>Family</p></th>
										<td><p className='art'>Parents, 1 younger sister</p></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="bars" id="EI">
						<div className="bar"></div>
						<div className="circle"></div>
						<p className="leftside">Extrovert</p>
						<p className="rightside">Introvert</p>
					</div>
					<div className="bars" id="SN">
						<div className="bar"></div>
						<div className="circle"></div>
						<p className="leftside">Sensing</p>
						<p className="rightside">Intuition</p>
					</div>
					<div className="bars" id="TF">
						<div className="bar"></div>
						<div className="circle"></div>
						<p className="leftside">Thinking</p>
						<p className="rightside">Feeling</p>
					</div>
					<div className="bars" id="JP">
						<div className="bar"></div>
						<div className="circle"></div>
						<p className="leftside">Judging</p>
						<p className="rightside">Perceiving</p>
					</div>
					<div className="bio box">
						<h3 className='art'>Bio</h3>
						<p className='art-opp'>
							Yoonha was born with a congenital hearing loss. As a child, she was teased for not speaking well, which
							left a deep scar, and now she rarely speaks, preferring to communicate through sign language. She loves
							to
							draw because she can convey messages through pictures without having to speak. She visits museums to get
							inspiration for her drawings, but she wants to understand them more deeply.
						</p>
					</div>
					<div className="needs box">
						<h3 className='art'>Needs</h3>
						<p className='art-opp'>
							Yoonha usually draws by herself at home. Sometimes she goes to an arts centre for people with
							disabilities
							to meet other people and talk about painting. When she needs a change of scenery, she goes to museums
							when there aren't many people. This is because she needs sign language interpretation, which she can
							watch by herself.
						</p>
					</div>
					<div className="experience box">
						<h3 className='art'>Experience</h3>
						<p className='art-opp'>
							It's been a while since Yoonha has been to an art museum. She tried to sign up for a sign language
							interpretation guide, but it was cancelled because the number of participants was not met.
							She downloaded the museum app to read the exhibit descriptions, but the writing was hard to read.
						</p>
					</div>
				</div>

				<div className="section-auto" ref={section9}>
					<table className="journey-map art">
						<tbody>
							<tr>
								<td className='journey-touch'>
									<img src='./art/portrait2-mobile.jpg' className="journey-profile" />
								</td>
								<td colSpan={5} className="journey-stage journey-case">
									<b><p>Yoonha Lee </p></b>
									<p>
										She is visiting a gallery on the schedule of the sign language docent.
									</p>
								</td>
							</tr>
							<tr>
								<th colSpan={5} className='title'>
									Journey Map
								</th>
							</tr>
							<tr>
								<th className="journey-touch">Stages</th>
								<th className="journey-stage">User action</th>
								<th colSpan="3">Feelings</th>
							</tr>
							<tr>
								<td className="journey-touch">
									<p>
										Motivation
									</p>
								</td>
								<td className="journey-stage">
									<p>
										Wants to go to a gallery
									</p>
								</td>
								<td></td>
								<td></td>
								<td className="journey-feeling"><FontAwesomeIcon icon={faFaceLaugh} className={"face-laugh-beam icon"} /></td>
							</tr>
							<tr>
								<td className="journey-touch"><p>
									Discovery
								</p></td>
								<td className="journey-stage"><p>
									Searches exhibitions and sign language docent programs
								</p></td>
								<td></td>
								<td className="journey-feeling"><FontAwesomeIcon icon={faFaceSmile} className="face-smile icon" /></td>
								<td></td>
							</tr>
							<tr>
								<td className="journey-touch"><p>
									Booking
								</p></td>
								<td className="journey-stage"><p>
									Selects a gallery and reserves a sign language docent
								</p></td>
								<td></td>
								<td></td>
								<td className="journey-feeling"><FontAwesomeIcon icon={faFaceLaugh} className={"face-laugh-beam icon"} /></td>
							</tr>
							<tr>
								<td className="journey-touch"><p>
									Visit
								</p></td>
								<td className="journey-stage"><p>
									Visits the gallery, however docent service is cancelled
								</p></td>
								<td className="journey-feeling"><FontAwesomeIcon icon={faFaceFrown} className="face-frown icon" /></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td className="journey-touch"><p>
									Explore
								</p></td>
								<td className="journey-stage"><p>
									Appreciates the artworks with reading descriptions
								</p></td>
								<td className="journey-feeling"><FontAwesomeIcon icon={faFaceFrown} className="face-frown icon" /></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td className="journey-touch"><p>
									Completion
								</p></td>
								<td className="journey-stage"><p>
									Leaves the gallery
								</p></td>
								<td></td>
								<td className="journey-feeling"><FontAwesomeIcon icon={faFaceSmile} className="face-smile icon" /></td>
								<td></td>
							</tr>
							<tr>
								<th className="title" colSpan={7}>Solution</th>
							</tr>
							<tr>
								<td className="journey-touch"><p>
									Discovery
								</p></td>
								<td className="journey-stage" colSpan={4}>
									<FontAwesomeIcon icon={faDesktop} className='icon desktop-screen' />
									<FontAwesomeIcon icon={faMobileScreenButton} className='icon mobile-screen' />
									<p style={{ display: 'inline' }}>
										Archiving galleries where sign language docent programs are provided,
										and being albe to book them
									</p></td>
							</tr>
							<tr>
								<td className="journey-touch"><p>
									Explore
								</p></td>
								<td className="journey-stage" colSpan={4}>
									<FontAwesomeIcon icon={faMobileScreenButton} className='icon mobile-screen' />
									<p style={{ display: 'inline' }}>
										Providing sign language docents via AR
									</p></td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="section" style={{ backgroundColor: 'white' }} ref={section10}>
					<img src='./art/flowchart.png' width={ratio > 1 ? '60%' : '100%'} className='center flowchart' />
					<p className='art stroke' style={{
						position: 'absolute', left: '50%', bottom: 0,
						color: 'white', stroke: 'rgb(205, 205, 205)',
						WebkitTextStrokeColor: 'rgb(205, 205, 205)',
						textAlign: 'center',
						zIndex: 1,
						transform: 'translate(-50%, 10%)',
						mixBlendMode: 'multiply',
					}}>Flowchart
					</p>
				</div>

				<div style={{ width: '100vw', height: '100vh' }} ref={section11}>
					<p className='stroke' style={{ textAlign: 'center' }}>Prototype</p>
				</div>
			</div>
		</div>
	)
}