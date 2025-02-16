import { useState, useEffect, forwardRef } from 'react'
import { Html, Float } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { param } from './param.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faFaceLaugh, faFaceFrown, faMobileScreenButton, faDesktop, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import Mobile from "./Model/Mobile.jsx"
import NoteTaking from "./Model/NoteTaking.jsx"
import LipReading from "./Model/LipReading.jsx"
import Hand from "./Model/Hand.jsx"
import './art.css'

const artDesc = forwardRef(function artDesc(props, ref) {
	const { camera, viewport } = useThree()
	const [radius, setRadius] = useState(viewport.aspect < 1.2 ? param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20 : param.diameter * 10)
	const [hc, setHc] = useState((2 * radius * Math.tan(Math.PI / 180 * camera.fov / 2)) * 0.5)
	const [select, setSelct] = useState(0)

	useEffect(() => {
		if (viewport.aspect < 1.2) { setRadius(param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20) }
		else { setRadius(param.diameter * 10) }
		setHc((2 * radius * Math.tan(Math.PI / 180 * camera.fov / 2)) * 0.5)
	}, [viewport])

	return (
		<>
			<Html>
				<p className='desc center art' style={{ position: 'absolute', top: `100vh`, left: '0' }}>
					In 2016, I came across a
					<a className='art' href="https://comic.naver.com/webtoon/list?titleId=659934&page=1&sort=ASC" target="_blank"> comic </a>
					written by a deaf writer based on her real-life experiences. As a museum-goer at the time,
					I was curious about how deaf people engaged with culture such as museums and galleries.<br />
					I researched how deaf people communicate and how the museum's docent service operates
					to identify touch points.
					Based on the research, I designed a exhibition guide app
					that allows deaf people to reserve and interact with the docents the way they want to.
				</p>

				<div className='section' style={{ position: 'absolute', top: `200vh` }}>
					<div className="mobile section center" style={{
						background: "url('./art/mockupMobile.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
					<div className="web section center" style={{
						background: "url('./art/mockupWeb.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
				</div>

				<div className='section center' style={{ position: 'absolute', top: `300vh` }}>
					<div className='desc' style={{ position: 'relative', top: `5%`, margin: 'auto' }}>
						<p className='art'>
							People with hearing loss use a variety of communication methods depending on the severity of their
							hearing loss, their preferences, and the resources available to them. Some common methods include:
						</p>

						<div>
							<span className='art-opp' style={{
								fontWeight: 700, margin: '0', fontSize: '1.2rem',
								color: select === 0 ? '#ff9501' : 'white', cursor: 'pointer'
							}}
								onClick={() => setSelct(0)} >
								Sign Language
							</span>
							{!(select === 0) && <FontAwesomeIcon icon={faCaretDown} style={{ margin: '0 0.5rem' }} />}
							{select === 0 && <FontAwesomeIcon icon={faCaretUp} style={{ margin: '-0.1rem 0.5rem', color: '#ff9501' }} />}
						</div>

						{select === 0 &&
							<div className='art-opp'>
								Sign language is the primary language for many individuals with hearing loss,
								allowing them to express themselves fluently and connect with others who are also proficient in
								sign language.
							</div>}

						<div>
							<span className='art-opp' style={{
								fontWeight: 700, margin: '0', fontSize: '1.2rem',
								color: select === 1 ? '#ff9501' : 'white', cursor: 'pointer'
							}}
								onClick={() => setSelct(1)}>
								Lip Reading (Speechreading)
							</span>
							{!(select === 1) && <FontAwesomeIcon icon={faCaretDown} style={{ margin: '0 0.5rem' }} />}
							{select === 1 && <FontAwesomeIcon icon={faCaretUp} style={{ margin: '-0.1rem 0.5rem', color: '#ff9501' }} />}

						</div>

						{select === 1 &&
							<div className='art-opp'>
								Lip reading involves watching the movement of a speaker’s lips, face, and body to understand
								what they are saying. The speakers should show their lips with frontal faces and speak clearly
								at a natural pace.
								However, it is sometimes challenging because many sounds look similar on the lips, and some
								words are hard to distinguish just by lip movement.
							</div>}
						<div>

							<span className='art-opp' style={{
								fontWeight: 700, margin: '0', fontSize: '1.2rem',
								color: select === 2 ? '#ff9501' : 'white', pointer: 'cursor'
							}}
								onClick={() => setSelct(2)}>
								Written Communication
							</span>
							{!(select === 2) && <FontAwesomeIcon icon={faCaretDown} style={{ margin: '0 0.5rem' }} />}
							{select === 2 && <FontAwesomeIcon icon={faCaretUp} style={{ margin: '-0.1rem 0.5rem', color: '#ff9501' }} />}
						</div>

						{select === 2 &&
							<div className='art-opp'>
								Texting, writing notes, or typing on electronic devices is a common method of communication for
								people with hearing loss, especially in one-on-one or small group settings.
								Many individuals with hearing loss prefer to carry a pen and paper or use a smartphone/tablet to
								facilitate easier communication in situations where verbal communication might be challenging.
							</div>}
					</div>
				</div>
			</Html>

			<Float floatIntensity={0.1} speed={0.5} floatingRange={[0.05, 0.05]} rotationIntensity={0.1}>
				{select === 0 && <Hand position={[0, -hc * 6.7, 0]} scale={0.6} />}
				{select === 1 && <LipReading position={[0, -hc * 6.4, 0]} scale={1.5} />}
				{select === 2 && <NoteTaking position={[0, -hc * 6.5, 0]} scale={2} />}
			</Float>

			<Html>
				<div className='desc center art' style={{ position: 'absolute', top: `400vh` }}>
					<p className='art-opp'>I referenced the docent programs provided by
						<a target="_blank" href="https://www.museum.go.kr/site/eng/content/tours_and_services">
							<b><em> National Museum of Korea </em> </b>
						</a>
					</p>
					<b>
						<p className='art-opp'>Sign language docent</p>
					</b>
					<ul>
						<li>For groups of 5 to 20 people, it should be booked at least one day before your desired date.
						</li>
						<li>Walk-ins are also accepted, but priority is given to those who make reservations in advance.
						</li>
					</ul>
					<b>
						<p className='art-opp'>Exhibition Guide App</p>
					</b>
					<ul>
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
				<div id="persona1" className="persona" style={{ position: 'absolute', top: `500vh` }}>
					<div className="profile-img">
					</div>
					<div className="quote box">
						<p className="quotes"><q><em className='art'>
							I want to be able to see at a glance where sign language docents are available and book
							them easily and conveniently.
						</em></q></p>
					</div>
					<div className="profile box">
						<table>
							<tbody>
								<tr>
									<th className='art' colSpan={2} style={{ fontSize: '1.2rem' }}>
										Mina Kim
									</th>
									<td rowSpan={4} className='' style={{
										width: viewport.aspect < 1 ? '30%' : '0',
										height: '100%',
										backgroundImage: viewport.aspect < 1 ? 'url(./art/portrait1-mobile.jpg)' : '',
										backgroundSize: 'cover',
										backgroundPosition: 'center',
									}}>
									</td>
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

				<div id="persona2" className="persona" style={{ position: 'absolute', top: `600vh` }}>
					<div className="profile-img">
						<div className="portrait"></div>
					</div>
					<div className="quote box">
						<p className="quotes art">
							<q><em className='art'>
								I want the freedom to explore artworks in depth without being restricted by docent schedules.
							</em></q>
						</p>
					</div>
					<div className="profile box">
						<table>
							<tbody>
								<tr>
									<th className='art' colSpan={2} style={{ fontSize: '1.2rem' }}>
										Yoonha Lee
									</th>
									<td><p className='art'></p></td>
									<td rowSpan={4} style={{
										width: viewport.aspect < 1 ? '30%' : '0',
										height: '100%',
										backgroundImage: viewport.aspect < 1 ? 'url(./art/portrait2-mobile.jpg)' : '',
										backgroundSize: 'cover',
										backgroundPosition: 'center',
									}}>
									</td>
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

				<div className="section center" style={{ position: 'absolute', top: `700vh` }}>
					<table className="journey-map" style={{
						top: '50%', transform: 'translateY(-50%)', position: 'relative'
					}}>
						<tbody>
							<tr>
								<td className="journey-profile-wrapper"></td>
								<td colSpan={5} className="journey-stage">
									<b><p className='art'>Yoonha Lee </p></b>
									<p className='art'>
										She is visiting a gallery on the schedule of the sign language docent.
									</p></td>
							</tr>
							<tr>
								<th colSpan={5} className='title art-opp'>
									Journey Map
								</th>
							</tr>
							<tr>
								<th className="journey-touch art">Stages</th>
								<th className="journey-stage art">User action</th>
								<th colSpan="3" className='art'>Feelings</th>
							</tr>
							<tr>
								<td className="journey-touch">
									<p className='art'>
										Motivation
									</p>
								</td>
								<td className="journey-stage">
									<p className='art'>
										Wants to go to a gallery
									</p>
								</td>
								<td className="journey-feeling"></td>
								<td className="journey-feeling"></td>
								<td className="journey-feeling"><FontAwesomeIcon icon={faFaceLaugh} className={"face-laugh-beam icon"} /></td>
							</tr>
							<tr>
								<td className="journey-touch"><p className='art'>
									Discovery
								</p></td>
								<td className="journey-stage"><p className='art'>
									Searches exhibitions and sign language docent programs
								</p></td>
								<td className="journey-feeling"></td>
								<td className="journey-feeling"><FontAwesomeIcon icon={faFaceSmile} className="face-smile icon" /></td>
								<td className="journey-feeling"></td>
							</tr>
							<tr>
								<td className="journey-touch"><p className='art'>
									Booking
								</p></td>
								<td className="journey-stage"><p className='art'>
									Selects a gallery and reserves a sign language docent
								</p></td>
								<td className="journey-feeling"></td>
								<td className="journey-feeling"></td>
								<td className="journey-feeling"><FontAwesomeIcon icon={faFaceLaugh} className={"face-laugh-beam icon"} /></td>
							</tr>
							<tr>
								<td className="journey-touch"><p className='art'>
									Visit
								</p></td>
								<td className="journey-stage"><p className='art'>
									Visits the gallery, however docent service is cancelled
								</p></td>
								<td className="journey-feeling"><FontAwesomeIcon icon={faFaceFrown} className="face-frown icon" /></td>
								<td className="journey-feeling"></td>
								<td className="journey-feeling"></td>
							</tr>
							<tr>
								<td className="journey-touch"><p className='art'>
									Explore
								</p></td>
								<td className="journey-stage"><p className='art'>
									Appreciates the artworks with reading descriptions
								</p></td>
								<td className="journey-feeling"><FontAwesomeIcon icon={faFaceFrown} className="face-frown icon" /></td>
								<td className="journey-feeling"></td>
								<td className="journey-feeling"></td>
							</tr>
							<tr>
								<td className="journey-touch"><p className='art'>
									Completion
								</p></td>
								<td className="journey-stage"><p className='art'>
									Leaves the gallery
								</p></td>
								<td className="journey-feeling"></td>
								<td className="journey-feeling"><FontAwesomeIcon icon={faFaceSmile} className="face-smile icon" /></td>
								<td className="journey-feeling"></td>
							</tr>
							<tr>
								<th className="title art-opp" colSpan={7}>Solution</th>
							</tr>
							<tr>
								<td className="journey-touch"><p className='art'>
									Discovery
								</p></td>
								<td className="journey-stage" colSpan={4}>
									<FontAwesomeIcon icon={faDesktop} className='icon desktop-screen' />
									<FontAwesomeIcon icon={faMobileScreenButton} className='icon mobile-screen' />
									<p className='art' style={{ display: 'inline' }}>
										Archiving galleries where sign language docent programs are provided,
										and being albe to book them
									</p></td>
							</tr>
							<tr>
								<td className="journey-touch"><p className='art'>
									Explore
								</p></td>
								<td className="journey-stage" colSpan={4}>
									<FontAwesomeIcon icon={faMobileScreenButton} className='icon mobile-screen' />
									<p className='art' style={{ display: 'inline' }}>
										Providing sign language docents via AR
									</p></td>
							</tr>
						</tbody>
					</table>
				</div>

				<div style={{ position: 'absolute', top: `800vh` }}>
					<div className="section center" style={{
						backgroundColor: '#fbfbfb'
					}}>

						<div className='desc art' style={{
							color: 'rgb(190, 190, 190)',
							fontWeight: 700,
							position: 'fixed',
							marginTop: '2rem',
							left: '50%',
							fontSize: '2rem',
							transform: 'translateX(-50%)',
							textAlign: 'center',
						}}>Logo Idea

							<p className='art' style={{
								fontWeight: 500,
								fontSize: '1.2rem',
								lineHeight: '1.5rem',
								margin: '0.5rem 0',
							}}>
								The logo represents the idea of bringing art to augmented reality (AR).
							</p>
						</div>


						<img src='./art/art-logo.gif' width={viewport.aspect >= 1 ? '60%' : '90%'} style={{
							position: 'relative',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%,-50%)'
						}} />
					</div>
				</div>

				<div style={{ position: 'absolute', top: `900vh` }}>
					<div className="section center" style={{
						backgroundColor: 'white'
					}}>



						<img src='./art/flowchart.png' width={viewport.aspect >= 1 ? '60%' : '90%'} style={{
							position: 'relative',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%,-50%)'
						}} />

						<span className='art' style={{
							color: 'rgb(205, 205, 205)',
							fontWeight: 700,
							position: 'fixed',
							marginTop: '2rem',
							left: '50%',
							fontSize: '2rem',
							transform: 'translateX(-50%)',
							textAlign: 'center',
						}}>Flowchart
						</span>
					</div>
				</div>

			</Html>

			<Float speed={0.1} rotationIntensity={0.1} floatIntensity={0.1}>
				<Mobile position={[0, -hc * 20, 0]}
					rotation={[0, -Math.PI / 2, 0]}
					scale={viewport.aspect >= 1 ? 2.5 : (1 - viewport.aspect) * 7 + 2}
					matcap={param.matcapOrange}
					src={"https://soonyoung-p.github.io/log/art/prototype/"}
					content={"iframe-time"} />
			</Float>
		</>
	)
})


export default artDesc