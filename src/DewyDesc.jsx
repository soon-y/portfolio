import { useState, useEffect } from 'react'
import { Html, Float } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { param } from './param.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faCloudMoon } from '@fortawesome/free-solid-svg-icons'
import Mobile from "./Model/Mobile.jsx"
import './dewy.css'

function DewyDesc() {
	const { camera, viewport } = useThree()
	const [radius, setRadius] = useState(viewport.aspect < 1.2 ? param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20 : param.diameter * 10)
	const [hc, setHc] = useState((2 * radius * Math.tan(Math.PI / 180 * camera.fov / 2)) * 0.5)
	const [wc, setWc] = useState((viewport.aspect * hc))
	const [daytime, setDaytime] = useState(true)
	const [weatherIndex, setWeather] = useState(0)
	const [moonPhase, setMoonphase] = useState(4)

	useEffect(() => {
		if (viewport.aspect < 1.2) { setRadius(param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20) }
		else { setRadius(param.diameter * 10) }
		setHc((2 * radius * Math.tan(Math.PI / 180 * camera.fov / 2)) * 0.5)
		setWc((camera.aspect * hc) * 0.5)
	}, [viewport])

	useEffect(() => {
		if (document.querySelector('.slider')) {
			const slider = document.querySelector('.slider')
			slider.style.setProperty(
				'--moonPhase',
				`url('/dewy/thumb${moonPhase == 8 ? 0 : moonPhase}.png')`
			)
		}
	}, [moonPhase])

	useEffect(() => {
		if ((weatherIndex !== 0 && weatherIndex !== 1)) setMoonphase(4)
		if (daytime) setMoonphase(4)
	}, [weatherIndex, daytime])

	return (
		<>
			<Html>
				<p className='desc center dewy' style={{ position: 'absolute', top: `100vh`, left: '0' }}>
					<a className='dewy' target="_blank" href="https://www.bbc.com/future/article/20190403-how-much-water-should-you-drink-a-day">
						How much water should we drink a day? </a>
					It's very important to drink appropriate amount of water every day.
					The water you should intake depends on your age, weight and activity level. The weather also apparently affects.
					In general, people think that they should drink more water than usual when it's extremely hot,
					however, that wasn't the case for me.
					<br />
					I used to drink little water, and <a className='dewy' target="_blank" href="https://www.bbc.com/news/world-asia-65247927">
						the fine dust in Korea</a> made my nose and throat feel dry.
					I started thinking about how to make drinking water fun,
					and came up with the idea to make it an interactive and fun game to achieve my daily goal!
				</p>

				<div style={{ position: 'absolute', top: `200vh` }}>
					<div className="mobile section center" style={{
						background: "url('./dewy/phone-mobile.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
					<div className="web section center" style={{
						background: "url('./dewy/phone-web.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
				</div>
			</Html>

			<Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
				<Mobile position={[viewport.aspect >= 1 ? -wc * 0.8 : 0, viewport.aspect >= 1 ? -hc * 6 : -hc * 5.6, 0]}
					rotation={[0, viewport.aspect >= 1 ? -Math.PI / 2 + 0.3 : -Math.PI / 2, 0]}
					scale={viewport.aspect >= 1 ? 2 : (1 - viewport.aspect) * 4 + 2}
					matcap={param.matcapSky}
					src={"./dewy/v1-profile.mp4"}
					content={"video"} />
			</Float>
			<Html center>
				<div style={{
					position: 'absolute', top: viewport.aspect >= 1 ? `300vh` : `320vh`,
					left: viewport.aspect >= 1 ? '40vw' : 0,
					transform: viewport.aspect >= 1 ? 'translateX(-25vw)' : 'translateX(0)'
				}}>
					<div className='desc center dewy'>
						<p className='dewy' style={{ fontWeight: 700, fontSize: '1.8rem', lineHeight: 1.2, marginBottom: '0.5rem', }}>
							Reach your goal with Dewy!
						</p>
						The amount of water you need to drink depends on your weight, thet weather, and your daily activity level.
						Establish your weight and exercise time and find out the daily goal.
						If you want to have a habit of drinking water regularly, setting alarms helps you achieve the goal.
					</div>
				</div>
			</Html>

			<Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
				<Mobile position={[viewport.aspect >= 1 ? wc * 0.8 : 0, viewport.aspect >= 1 ? -hc * 8 : -hc * 7.6, 0]}
					rotation={[0, viewport.aspect >= 1 ? -Math.PI / 2 - 0.3 : -Math.PI / 2, 0]}
					scale={viewport.aspect >= 1 ? 2 : (1 - viewport.aspect) * 4 + 2}
					matcap={param.matcapSky}
					src={"./dewy/v2-cupSelection.mp4"}
					content={"video"} />
			</Float>
			<Html center>
				<div style={{ position: 'absolute', top: viewport.aspect >= 1 ? `400vh` : `420vh`, left: viewport.aspect >= 1 ? '-15vw' : 0 }}>
					<div className='desc center dewy'>
						<p className='dewy' style={{ fontWeight: 700, fontSize: '1.8rem', lineHeight: 1.2, marginBottom: '0.5rem', }}>
							Set the capacity of your favorites
						</p>
						You can specify the capacity of your preferred cup, tumbler, and bottle, respectively.
						To change cups, switch the cup icon and set the volume of cup.
					</div>
				</div>
			</Html>

			<Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
				<Mobile position={[viewport.aspect >= 1 ? -wc * 0.8 : 0, viewport.aspect >= 1 ? -hc * 10 : -hc * 9.6, 0]}
					rotation={[0, viewport.aspect >= 1 ? -Math.PI / 2 + 0.3 : -Math.PI / 2, 0]}
					scale={viewport.aspect >= 1 ? 2 : (1 - viewport.aspect) * 4 + 2}
					matcap={param.matcapSky}
					src={"./dewy/v3-sliderAdjustion.mp4"}
					content={"video"} />
			</Float>
			<Html center>
				<div style={{
					position: 'absolute', top: viewport.aspect >= 1 ? `500vh` : `520vh`,
					left: viewport.aspect >= 1 ? '40vw' : 0,
					transform: viewport.aspect >= 1 ? 'translateX(-25vw)' : 'translateX(0)'
				}}>
					<div className='desc center dewy'>
						<p className='dewy' style={{ fontWeight: 700, fontSize: '1.8rem', lineHeight: 1.2, marginBottom: '0.5rem', }}>
							Easily add your water intake
						</p>
						After selecting a cup, simply add water by adjusting the slider to the amount you drink.
						Then the water fills up, Dewy splashs around, and your percentage of water intake towards your goal updates.
						You can review the cups and amounts you had in Timeline.
					</div>
				</div>
			</Html>

			<Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
				<Mobile position={[viewport.aspect >= 1 ? wc * 0.8 : 0, viewport.aspect >= 1 ? -hc * 12 : -hc * 11.6, 0]}
					rotation={[0, viewport.aspect >= 1 ? -Math.PI / 2 - 0.3 : -Math.PI / 2, 0]}
					scale={viewport.aspect >= 1 ? 2 : (1 - viewport.aspect) * 4 + 2}
					matcap={param.matcapSky}
					src={"./dewy/v4-weather.mp4"}
					content={"video"} />
			</Float>
			<Html center>
				<div style={{ position: 'absolute', top: viewport.aspect >= 1 ? `600vh` : `620vh`, left: viewport.aspect >= 1 ? '-15vw' : 0 }}>
					<div className='desc center dewy'>
						<p className='dewy' style={{ fontWeight: 700, fontSize: '1.8rem', lineHeight: 1.2, marginBottom: '0.5rem', }}>
							Real-time weather updates
						</p>
						Dewy Days provides real-time weather data via
						<a href="https://open-meteo.com/" target="_blank" className='desc center dewy'> Open Meteo API</a>.
						If the particulate matter index (PM10/PM2.5) is very poor or the temperature is too high,
						make sure to drink plenty of water.
					</div>
				</div>

				<div style={{ position: 'absolute', top: `700vh` }}>
					<div className="section center" style={{
						background: daytime ? "url('./dewy/bg.jpg')" : "url('./dewy/bgNight.jpg')",
						backgroundSize: daytime ? 'cover' : 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: daytime ? 'no-repeat' : 'no-repeat',
					}}>

						{viewport.aspect >= 1 && <span style={{
							color: 'white',
							fontWeight: 700,
							position: 'fixed',
							margin: '1.8rem',
							left: '5%',
							fontSize: '2rem',
						}}>Weather Icon
						</span>}

						<div style={{
							position: 'relative',
							left: '50%',
							transform: 'translateX(-50%)',
							display: 'inline-block',
							height: '10%'
						}}>
							<FontAwesomeIcon icon={faCloudSun} className='bubble' style={{
								margin: '2rem 0.5rem',
								backgroundColor: daytime ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0)'
							}} onClick={() => setDaytime(true)} />
							<FontAwesomeIcon icon={faCloudMoon} className='bubble' style={{
								margin: '2rem 0.5rem',
								backgroundColor: !daytime ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0)'
							}} onClick={() => setDaytime(false)} />
						</div>

						<div style={{
							height: viewport.aspect >= 0.6 ? '40%' : `30%`,
							aspectRatio: 1,
							margin: 'auto',
							position: 'relative',
						}}>

							{daytime && (weatherIndex === 0) &&
								<div>
									<img src='./dewy/sunMane.png' alt='sun' className='weatherComp sunMane sun' />
									<img src='./dewy/sunFace.png' alt='sun' className='weatherComp sunFace sun' />
								</div>}

							{daytime && (weatherIndex === 1) &&
								<div>
									<img src='./dewy/sunMane.png' alt='sun' className='weatherComp sunMane sunManeCloud sun' />
									<img src='./dewy/sunFace.png' alt='sun' className='weatherComp sunFaceCloud sun' />
									<img src='./dewy/cloud.png' alt='cloud' className='weatherComp partlyCloud' />
								</div>}

							{daytime && (weatherIndex === 2) &&
								<div>
									<img src='./dewy/cloud.png' alt='cloud' className='weatherComp cloud' />
								</div>}

							{!daytime && (weatherIndex === 2) &&
								<div>
									<img src='./dewy/cloudNight.png' alt='cloud' className='weatherComp cloud' />
								</div>}

							{daytime && (weatherIndex === 3) &&
								<div>
									<img src="dewy/smog.png" alt="smog" className="weatherComp smogT smog" />
									<img src="dewy/smog.png" alt="smog" className="weatherComp smogB smog" />
								</div>}

							{!daytime && (weatherIndex === 3) &&
								<div>
									<img src="dewy/smogNight.png" alt="smog" className="weatherComp smogT smog" />
									<img src="dewy/smogNight.png" alt="smog" className="weatherComp smogB smog" />
								</div>}

							{daytime && (weatherIndex === 4) &&
								<div>
									<img src="dewy/rain.png" alt="rain" className="weatherComp drizzle0 drop" />
									<img src="dewy/rain.png" alt="rain" className="weatherComp drizzle1 drop" />
									<img src="dewy/rain.png" alt="rain" className="weatherComp drizzle2 drop" />
								</div>}

							{daytime && (weatherIndex === 5) &&
								<div>
									<img src="dewy/rain.png" alt="rain" className="weatherComp rain0 drop" />
									<img src="dewy/rain.png" alt="rain" className="weatherComp rain1 drop" />
									<img src="dewy/rain.png" alt="rain" className="weatherComp rain2 drop" />
								</div>}

							{!daytime && (weatherIndex === 4) &&
								<div>
									<img src="dewy/rainNight.png" alt="rain" className="weatherComp drizzle0 drop" />
									<img src="dewy/rainNight.png" alt="rain" className="weatherComp drizzle1 drop" />
									<img src="dewy/rainNight.png" alt="rain" className="weatherComp drizzle2 drop" />
								</div>}

							{!daytime && (weatherIndex === 5) &&
								<div>
									<img src="dewy/rainNight.png" alt="rain" className="weatherComp rain0 drop" />
									<img src="dewy/rainNight.png" alt="rain" className="weatherComp rain1 drop" />
									<img src="dewy/rainNight.png" alt="rain" className="weatherComp rain2 drop" />
								</div>}

							{daytime && (weatherIndex === 6) &&
								<div>
									<img src="dewy/rain.png" alt="rain" className="weatherComp rain0 drop" />
									<img src="dewy/lightning.png" alt="thunder" className="weatherComp lightning drop" />
									<img src="dewy/rain.png" alt="rain" className="weatherComp rain2 drop" />
								</div>}

							{!daytime && (weatherIndex === 6) &&
								<div>
									<img src="dewy/rainNight.png" alt="rain" className="weatherComp rain0 drop" />
									<img src="dewy/lightning.png" alt="thunder" className="weatherComp lightning drop" />
									<img src="dewy/rainNight.png" alt="rain" className="weatherComp rain2 drop" />
								</div>}

							{daytime && (weatherIndex === 7) &&
								<div>
									<img src="dewy/snow.png" alt="snow" className="weatherComp rain0 snow" />
									<img src="dewy/snow.png" alt="snow" className="weatherComp rain1 snow" />
									<img src="dewy/snow.png" alt="snow" className="weatherComp rain2 snow" />
								</div>}

							{!daytime && (weatherIndex === 7) &&
								<div>
									<img src="dewy/snowNight.png" alt="snow" className="weatherComp rain0 snow" />
									<img src="dewy/snowNight.png" alt="snow" className="weatherComp rain1 snow" />
									<img src="dewy/snowNight.png" alt="snow" className="weatherComp rain2 snow" />
								</div>}

							{daytime && (weatherIndex === 8) &&
								<div>
									<img src="dewy/tornado0.png" alt="tornado" className="weatherComp tornado tornado0" />
									<img src="dewy/tornado1.png" alt="tornado" className="weatherComp tornado tornado1" />
									<img src="dewy/tornado2.png" alt="tornado" className="weatherComp tornado tornado2" />
									<img src="dewy/tornado3.png" alt="tornado" className="weatherComp tornado tornado3" />
								</div>}

							{!daytime && (weatherIndex === 8) &&
								<div>
									<img src="dewy/tornadoNight0.png" alt="tornado" className="weatherComp tornado tornado0" />
									<img src="dewy/tornadoNight1.png" alt="tornado" className="weatherComp tornado tornado1" />
									<img src="dewy/tornadoNight2.png" alt="tornado" className="weatherComp tornado tornado2" />
									<img src="dewy/tornadoNight3.png" alt="tornado" className="weatherComp tornado tornado3" />
								</div>}

							{daytime && (weatherIndex === 3 || weatherIndex === 4 || weatherIndex === 5 ||
								weatherIndex === 6 || weatherIndex === 7) &&
								<div>
									<img src='./dewy/cloud.png' alt="cloud" className='weatherComp cloud cloudmit' />
								</div>}

							{!daytime && (weatherIndex === 3 || weatherIndex === 4 || weatherIndex === 5 ||
								weatherIndex === 6 || weatherIndex === 7) &&
								<div>
									<img src='./dewy/cloudNight.png' alt="cloud" className='weatherComp cloud cloudmit' />
								</div>}

							{(!daytime) && (weatherIndex === 0) && (moonPhase == 4) &&
								<div>
									<img src='./dewy/moonlight.png' alt="moonlight" className='weatherComp moonlight sun' />
									<img src='./dewy/moonFace.png' alt="moon" className='weatherComp sunFace sun' />
								</div>}

							{(!daytime) && (weatherIndex === 0) && (moonPhase == 0) &&
								<div>
									<img src='./dewy/moon0.png' alt="moon" className='weatherComp sunFace sun' />
								</div>}

							{(!daytime) && (weatherIndex === 0) && (moonPhase == 1) &&
								<div>
									<img src='./dewy/moon1.png' alt="moon" className='weatherComp sunFace sun' />
								</div>}

							{(!daytime) && (weatherIndex === 0) && (moonPhase == 2) &&
								<div>
									<img src='./dewy/moon2.png' alt="moon" className='weatherComp sunFace sun' />
								</div>}

							{(!daytime) && (weatherIndex === 0) && (moonPhase == 3) &&
								<div>
									<img src='./dewy/moon3.png' alt="moon" className='weatherComp sunFace sun' />
								</div>}

							{(!daytime) && (weatherIndex === 0) && (moonPhase == 5) &&
								<div>
									<img src='./dewy/moon5.png' alt="moon" className='weatherComp sunFace sun' />
								</div>}

							{(!daytime) && (weatherIndex === 0) && (moonPhase == 6) &&
								<div>
									<img src='./dewy/moon6.png' alt="moon" className='weatherComp sunFace sun' />
								</div>}

							{(!daytime) && (weatherIndex === 0) && (moonPhase == 7) &&
								<div>
									<img src='./dewy/moon7.png' alt="moon" className='weatherComp sunFace sun' />
								</div>}

							{(!daytime) && (weatherIndex === 0) && (moonPhase == 8) &&
								<div>
									<img src='./dewy/moon0.png' alt="moon" className='weatherComp sunFace sun' />
								</div>}


							{(!daytime) && (weatherIndex === 1) && (moonPhase == 4) &&
								<div>
									<img src='./dewy/moonlight.png' alt="moonlight" className='weatherComp moonlightCloud sun' />
									<img src='./dewy/moonFace.png' alt="moon" className='weatherComp sunFaceCloud sun' />
								</div>}

							{(!daytime) && (weatherIndex === 1) && (moonPhase == 0) &&
								<div>
									<img src='./dewy/moon0.png' alt="moon" className='weatherComp sunFaceCloud sun' />
								</div>}

							{(!daytime) && (weatherIndex === 1) && (moonPhase == 1) &&
								<div>
									<img src='./dewy/moon1.png' alt="moon" className='weatherComp sunFaceCloud sun' />
								</div>}

							{(!daytime) && (weatherIndex === 1) && (moonPhase == 2) &&
								<div>
									<img src='./dewy/moon2.png' alt="moon" className='weatherComp sunFaceCloud sun' />
								</div>}

							{(!daytime) && (weatherIndex === 1) && (moonPhase == 3) &&
								<div>
									<img src='./dewy/moon3.png' alt="moon" className='weatherComp sunFaceCloud sun' />
								</div>}

							{(!daytime) && (weatherIndex === 1) && (moonPhase == 5) &&
								<div>
									<img src='./dewy/moon5.png' alt="moon" className='weatherComp sunFaceCloud sun' />
								</div>}

							{(!daytime) && (weatherIndex === 1) && (moonPhase == 6) &&
								<div>
									<img src='./dewy/moon6.png' alt="moon" className='weatherComp sunFaceCloud sun' />
								</div>}

							{(!daytime) && (weatherIndex === 1) && (moonPhase == 7) &&
								<div>
									<img src='./dewy/moon7.png' alt="moon" className='weatherComp sunFaceCloud sun' />
								</div>}

							{(!daytime) && (weatherIndex === 1) && (moonPhase == 8) &&
								<div>
									<img src='./dewy/moon0.png' alt="moon" className='weatherComp sunFaceCloud sun' />
								</div>}

							{!daytime && (weatherIndex === 1) &&
								<div>
									<img src='./dewy/cloudNight.png' alt='cloud' className='weatherComp partlyCloud' />
								</div>}
						</div>

						<div style={{
							height: '10%',
							width: '50%',
							margin: 'auto',
							position: 'relative',
							alignContent: 'center'
						}}>
							{!daytime && (weatherIndex === 0 || weatherIndex === 1) &&
								<div className="slidecontainer" style={{
									width: viewport.aspect >= 1 ? '50%' : '100%'
								}}>
									<input type="range" min="0" max="8" step="1" className="slider" value={moonPhase}
										onChange={(event) => setMoonphase(event.target.value)} />
								</div>}
						</div>

						<div style={{
							width: viewport.aspect >= 1 ? '90vw' : '96vw',
							height: 'auto',
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'center',
							alignItems: 'center',
							margin: '1rem auto',
							position: 'relative',
						}}>
							<button className="weatherBtn" onClick={() => setWeather(0)} style={{
								backgroundColor: weatherIndex === 0 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)',
							}}><p>Clear</p></button>
							<button className="weatherBtn" onClick={() => setWeather(1)} style={{
								backgroundColor: weatherIndex === 1 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
							}}><p style={{ transform: 'translateY(-25%)' }}>Partly cloudy</p></button>
							<button className="weatherBtn" onClick={() => setWeather(2)} style={{
								backgroundColor: weatherIndex === 2 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
							}}><p>Overcast</p></button>
							<button className="weatherBtn" onClick={() => setWeather(3)} style={{
								backgroundColor: weatherIndex === 3 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
							}}><p>Fog</p></button>
							<button className="weatherBtn" onClick={() => setWeather(4)} style={{
								backgroundColor: weatherIndex === 4 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
							}}><p>Drizzle</p></button>
							<button className="weatherBtn" onClick={() => setWeather(5)} style={{
								backgroundColor: weatherIndex === 5 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
							}}><p>Rain</p></button>
							<button className="weatherBtn" onClick={() => setWeather(6)} style={{
								backgroundColor: weatherIndex === 6 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
							}}><p>Thunder</p></button>
							<button className="weatherBtn" onClick={() => setWeather(7)} style={{
								backgroundColor: weatherIndex === 7 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
							}}><p>Snow</p></button>
							<button className="weatherBtn" onClick={() => setWeather(8)} style={{
								backgroundColor: weatherIndex === 8 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
							}}><p>Tornado</p></button>
						</div>
					</div>
				</div>

				<div style={{ position: 'absolute', top: `800vh` }}>
					<div className="section center" style={{
						backgroundColor: 'white'
					}}>

						<span style={{
							color: 'rgb(205, 205, 205)',
							fontWeight: 700,
							position: 'fixed',
							marginTop: '2rem',
							left: '50%',
							fontSize: '2rem',
							transform: 'translateX(-50%)',
							textAlign: 'center',
						}}>Information Architecture
						</span>

						<img src='./dewy/dewyIA.png' width={viewport.aspect >= 1 ? '50%' : '100%'} style={{
							position: 'relative',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%,-50%)'
						}} />
					</div>
				</div>
			</Html>

			<Float speed={0.1} rotationIntensity={0.1} floatIntensity={0.1}>
				<Mobile position={[0, -hc * 18, 0]}
					rotation={[0, -Math.PI / 2, 0]}
					scale={viewport.aspect >= 1 ? 2.5 : (1 - viewport.aspect) * 8 + 2}
					matcap={param.matcapSky}
					src={"https://dewydays.vercel.app/"}
					content={"iframe"} />
				<Html transform position={[0, viewport.aspect >= 1 ? -hc * 17.25 : -hc * 17.3, 1]}>
					<a href='https://dewydays.vercel.app/' target='_blank'>
						<p style={{
							fontSize: viewport.aspect >= 0.8 ? '1.2rem' : '2rem',
						}}>
							Discover more
						</p>
					</a>
				</Html>
			</Float>

			<Html center>
				<div style={{ position: 'absolute', top: `1000vh` }}>
					<div className="mobile section center" style={{
						background: "url('./dewy/flyer-mobile.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
					<div className="web section center" style={{
						background: "url('./dewy/flyer-web.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
				</div>

				<div style={{ position: 'absolute', top: `1100vh` }}>
					<div className="mobile section center" style={{
						background: "url('./dewy/cup-mobile.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
					<div className="web section center" style={{
						background: "url('./dewy/cup-web.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
				</div>

				<div style={{ position: 'absolute', top: `1200vh` }}>
					<div className="mobile section center" style={{
						background: "url('./dewy/cups-mobile.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
					<div className="web section center" style={{
						background: "url('./dewy/cups-web.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
				</div>

				<div style={{ position: 'absolute', top: `1300vh` }}>
					<div className="mobile section center" style={{
						background: "url('./dewy/tumbler-mobile.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
					<div className="web section center" style={{
						background: "url('./dewy/tumbler-web.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
				</div>

				<div style={{ position: 'absolute', top: `1400vh` }}>
					<div className="mobile section center" style={{
						background: "url('./dewy/water-package-mobile.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
					<div className="web section center" style={{
						background: "url('./dewy/water-package-web.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
				</div>

				<div style={{ position: 'absolute', top: `1500vh` }}>
					<div className="mobile section center" style={{
						background: "url('./dewy/card-mobile.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
					<div className="web section center" style={{
						background: "url('./dewy/card-web.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					</div>
				</div>
			</Html>
		</>
	)
}

export default DewyDesc