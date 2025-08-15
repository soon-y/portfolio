"use client"

import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'
import Link from 'next/link'
import { Calendar, Code2, File } from 'lucide-react'
import '../styles.css'
import '../table.css'
import { useWindowRatio } from '@/utils/window'
import Image from 'next/image'

export default function AutoMode() {
  const scale = Array.from({ length: 100 }, () => 0.5 + Math.random() * 4)
  const ratio = useWindowRatio()

  const content = `
+++++-------------------------------------+++++
+++++         MyApp ----- MyRobot         +++++
+++++         Paired successfully         +++++
+++++-------------------------------------+++++

===============================================
 ('_')
 User : pressed AutoMode
===============================================
Robot.Battery_observing
Robot.Map_generating
Robot.Path_generating
===============================================

**** Current Battery: 100% ****

Robot.moving/scanning()
Robot.pathPlanning()
Robot.currentLocation(44, 470)
Robot.updateLocation()

Robot.moving/scanning()
Robot.pathPlanning()
Robot.currentLocation(64, 470)
Robot.updateLocation()

Robot.moving/scanning()
Robot.pathPlanning()
Robot.currentLocation(84, 470)
Robot.updateLocation()

Robot.moving/scanning()
Robot.pathPlanning()
Robot.currentLocation(104, 470)
Robot.updateLocation()

Robot.moving/scanning()
Robot.pathPlanning()
Robot.currentLocation(124, 470)
Robot.updateLocation()

******************************
* Obstacle.detected()        *
* Map.generated + Obstacle   *
* Robot.UpdatePath()         *
* Robot.Location (244,470)   *
* Robot.updateLocation()     *
******************************

Robot.moving/scanning()
Robot.pathPlanning()
Robot.currentLocation(244, 450)
Robot.updateLocation()

Robot.moving/scanning()
Robot.pathPlanning()
Robot.currentLocation(244, 430)
Robot.updateLocation()

******************************
* Wall.detected()            *
* Map.generated + Segment    *
* Robot.UpdatePath()         *
* Robot.Location (294,220)   *
* Robot.updateLocation()     *
******************************

Robot.moving/scanning()
Robot.pathPlanning()
Robot.currentLocation(194, 300)
Robot.updateLocation()

Robot.moving/scanning()
Robot.pathPlanning()
Robot.currentLocation(194, 280)
Robot.updateLocation()
+----------------------------+
| LOW BATTERY                |
| 10% battery remaining      |
| Robot.BackToChargingDock() |
| Robot.PathSaved()          |
| Robot.LocationSaved()      |
+----------------------------+
  `

  return (
    <div>
      <Canvas style={{ position: 'fixed' }} camera={{
        fov: 45,
        position: [0, 0, 0]
      }}
        gl={{ stencil: true }}>
        <Sparkles count={scale.length} size={scale} position={[0, 0, -10]} scale={[10, 10, 1]} speed={0.1} />
      </Canvas>

      <div className='wrapper relative robot'>
        <Link href={'/log'}>
          <p className='z-10 mix-blend-difference fixed top-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}>Back</p>
        </Link>
        <p className='top z-10 mix-blend-difference fixed bottom-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}><a href='#first'>Top</a></p>

        <div id='first' className='section-wo flex-container'>
          <div className='left-side p-6 w-full py-20 flex flex-col gap-4' style={{ alignItems: 'left', paddingLeft: ratio > 1 ? '7rem' : '2rem' }}>
            <h2 className='text-4xl robot-title'>autoMode()</h2>
            <p className='font-semibold'>#Java #DesignPattern #VerticalPrototype #SoftwareEngineering</p>
            <div className='flex gap-2 cursor-pointer'>
              <a href='https://github.com/soon-y/robotAutoMode' target="_blank">
                <Code2 />
              </a>
              <a
                href="/autoMode/javadoc/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <File />
              </a>
            </div>
            <div className='flex gap-2'>
              <Calendar strokeWidth={1} />
              <p>03.2022 to 07.2022</p>
            </div>
          </div>

          <div className='right-side'>
            <div>
              <p>
                Developing a vertical prototype of <strong>a cleaning robot system</strong> for a mobile robot platform was the topic of <em>Software engineering</em> className,
                where I learned the process from design to development. Among the use cases, I chose <a href="#uc3">Use Case #3, AutoMode</a>.
              </p>
              <ul className='pt-4'>
                <li>
                  The &lsquo;Auto&lsquo; button starts cleaning in automatic mode and
                  the robot simultaneously maps the cleaning area.
                </li>
                <li>
                  The &lsquo;Pause&lsquo; and &lsquo;Home&lsquo; buttons can be used to pause the robot or
                  return it to the charging station, respectively.
                </li>
                <li>
                  It is supposedly equipped with all the sensors and effectors
                  needed to safely navigate flat and rough floors for dry and wet cleaning,
                  and has navigation that doesn&lsquo;t fall down stairs with a laser scanner.
                </li>
                <li>
                  It uses local WiFi to communicate with the cleaning robot app on an IOS or Android-based smartphone.
                </li>
                <li>
                  Its current status, including map updates, is sent to the app at regular time intervals.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-16'>
          <div>
            <h2 className='text-center text-2xl py-2'>User Story</h2>
            <table>
              <tbody>
                <tr>
                  <th>Identifier</th>
                  <th label="User Story">User Story</th>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-1</td>
                  <td className="label" label="Story">
                    As a user, I want to click any buttons such as &lsquo;auto&lsquo;, &lsquo;room&lsquo; and &lsquo;region&lsquo; so that it operates the cleaning robot for its intended purpose.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-2</td>
                  <td className="label" label="Story">
                    As a user, I want to keep the cleaning robot and the APP paired after the initial registration through the local WIFI so that I can use it without additional connection.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-3</td>
                  <td className="label" label="Story">
                    As a user, I want to receive notifications on my phone before and after cleaning a specific area.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-4</td>
                  <td className="label" label="Story">
                    As a user, I want to use voice commands to operate the robot based on Alexa, Siri, and Google Home.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-5</td>
                  <td className="label" label="Story">
                    As a user, I want to see the autogenerated map for future cleaning agenda.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-6</td>
                  <td className="label" label="Story">
                    As an authorized user, I want to choose the minimum battery level (5%,10%,20%) so that the
                    cleaning robot operates only when the battery level is greater than the minimum setting.</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-7</td>
                  <td className="label" label="Story">
                    As a user, I want to check the robot&lsquo;s current location and progress while cleaning.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-8</td>
                  <td className="label" label="Story">
                    As a user, I want to define regions not to clean such as stairways
                    and indoor ponds to avoid accidents.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-9</td>
                  <td className="label" label="Story">
                    As a user, I want to have a drop-down menu with the option to report
                    system failure or force the robot to stop.</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-10</td>
                  <td className="label" label="Story">
                    As a user, I want to stop the robot in case of system error.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-11</td>
                  <td className="label" label="Story">
                    As a user, I want to get a notification to my APP and a red light
                    will blink in the robot with a feedback tone, to notify me in case of failure.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-12</td>
                  <td className="label" label="Story">
                    As a user, I want to press the button “Reset” to hard reset the
                    robot and revert the system back to default settings.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-13</td>
                  <td className="label" label="Story">
                    As a user, I want to use the option &lsquo;remove&lsquo; so that I disconnect
                    the robot to the APP so that is clears all of its saved settings.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className='text-center text-2xl py-2'>Functional Requirements</h2>
            <table>
              <tbody>
                <tr>
                  <th>Identifier</th>
                  <th>Priority</th>
                  <th>Requirement</th>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-1</td>
                  <td className="label" label="Prio.">Must</td>
                  <td className="label" label="Req.">
                    The system shall use the robot&lsquo;s LiDAR sensors to scan the
                    surrounding area to generate a map
                    and then transmit the data to the APP prior to cleaning.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-2</td>
                  <td className="label" label="Prio.">Must</td>
                  <td className="label" label="Req.">
                    The system shall connect the robot and the APP through local WIFI.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id." id="req3">REQ-3</td>
                  <td className="label" label="Prio.">Must</td>
                  <td className="label" label="Req.">
                    When the &lsquo;Auto&lsquo; button is pressed, the robot shall start cleaning
                    while generating a map and also updating its location.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-4</td>
                  <td className="label" label="Prio.">Must</td>
                  <td className="label" label="Req.">
                    The system shall use the ultrasonic, infrared and LiDAR sensors of
                    the robot to detect steps or any kinds of ground-level difference to avoid accidents.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-5</td>
                  <td className="label" label="Prio.">Should</td>
                  <td className="label" label="Req.">
                    The system shall make the robot able to detect flooring materials for dry and wet cleaning.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-6</td>
                  <td className="label" label="Prio.">Must</td>
                  <td className="label" label="Req.">
                    When the &lsquo;Home&lsquo; button is pressed, the robot shall stop cleaning and return back to the charging dock.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-7</td>
                  <td className="label" label="Prio.">Should</td>
                  <td className="label" label="Req.">
                    When the &lsquo;Pause&lsquo; button is pressed, the robot will stop cleaning and be idle at the current location.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-8</td>
                  <td className="label" label="Prio.">Should</td>
                  <td className="label" label="Req.">
                    When the on/off buttons are pressed the robot will respectively turn on and turn off its system immediately.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-9</td>
                  <td className="label" label="Prio.">Would</td>
                  <td className="label" label="Req.">
                    The system shall reset all the saved authorized users and revert back
                    to default settings when the &lsquo;Reset&lsquo; button is pressed.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-10</td>
                  <td className="label" label="Prio.">Could</td>
                  <td className="label" label="Req.">
                    The system shall automatically initiate &lsquo;home&lsquo; if the battery level of the robot is equal to the
                    minimum battery level (5%, 10%, 20%) which has been chosen by the user and send notifications when the battery level of the robot is below 10%(default).
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-11</td>
                  <td className="label" label="Prio.">Must</td>
                  <td className="label" label="Req.">
                    The robot system shall clean the selected rooms/regions and update its location in &lsquo;Room&lsquo;, &lsquo;Region&lsquo; mode.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-12</td>
                  <td className="label" label="Prio.">Must</td>
                  <td className="label" label="Req.">
                    The robot system shall consistantly check the remaining battery level.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className='text-center text-2xl py-2'>Use Case List</h2>
            <table>
              <tbody>
                <tr>
                  <th className='whitespace-nowrap'>UC Id.</th>
                  <th>Use Case Name</th>
                  <th>Actor</th>
                  <th>actor&lsquo;s goal (what the actor intends to accomplish)</th>
                  <th>Related REQ</th>
                </tr>
                <tr>
                  <td className="label" label="Id." id="uc1">UC-1</td>
                  <td className="label" label="Name">GenerateMap</td>
                  <td className="label" label="Actor">Navigation system</td>
                  <td className="label" label="Goal">
                    To generate a map via LiDAR scanning and send the data to the App
                  </td>
                  <td className="label" label="Related">REQ-1</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-2</td>
                  <td className="label" label="Name">ConnectRobot </td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To pair the robot and the APP</td>
                  <td className="label" label="Related">REQ-2</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-3</td>
                  <td className="label" label="Name" id="uc3">AutoMode</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">
                    To start the robot in &lsquo;auto&lsquo; mode and the robot cleans while generating a map and updates its location
                  </td>
                  <td className="label" label="Related">REQ-3</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-4</td>
                  <td className="label" label="Name">DetectObstacles</td>
                  <td className="label" label="Actor">Navigation system</td>
                  <td className="label" label="Goal">To detect obstacles such as stairs</td>
                  <td className="label" label="Related">REQ-4</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-5</td>
                  <td className="label" label="Name">DetectMaterials</td>
                  <td className="label" label="Actor">Drive system</td>
                  <td className="label" label="Goal">To detect floor material for dry and wet cleaning</td>
                  <td className="label" label="Related">REQ-5</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-6</td>
                  <td className="label" label="Name">SendRobotHome</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">
                    To stop the robot from cleaning and send back to the charging dock
                  </td>
                  <td className="label" label="Related">REQ-6</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-7</td>
                  <td className="label" label="Name">PauseRobot</td>
                  <td className="label" label="Actor">Navigation system</td>
                  <td className="label" label="Goal">To pause the robot</td>
                  <td className="label" label="Related">REQ-7</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-8</td>
                  <td className="label" label="Name">OnOff</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To turn on/off the robot</td>
                  <td className="label" label="Related">REQ-8</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-9</td>
                  <td className="label" label="Name">Reset</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To reset data</td>
                  <td className="label" label="Related">REQ-9</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-10</td>
                  <td className="label" label="Name">LowBattery</td>
                  <td className="label" label="Actor">Drive system</td>
                  <td className="label" label="Goal">
                    To send back the robot to the charging dock when the robot&lsquo;s battery is lower than the minimum setting
                  </td>
                  <td className="label" label="Related">REQ-10</td>
                </tr>
                <tr>
                  <td className="label" label="Id." id="uc11">UC-11</td>
                  <td className="label" label="Name">SendLocation </td>
                  <td className="label" label="Actor">Navigation system</td>
                  <td className="label" label="Goal">To send the app the current location at regular time intervals</td>
                  <td className="label" label="Related">REQ-11</td>
                </tr>
                <tr>
                  <td className="label" label="Id." id="uc12">UC-12</td>
                  <td className="label" label="Name">CheckBattery</td>
                  <td className="label" label="Actor">Drive system</td>
                  <td className="label" label="Goal">To update current battery status of the robot</td>
                  <td className="label" label="Related">REQ-12</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className='text-center text-2xl py-2'>Use Case Diagram</h2>
            <a href="/autoMode/UC-diagram.png" target="_blank">
              <Image width={1564} height={1580} alt='use case diagram' className='image' src="/autoMode/UC-diagram.png" />
            </a>
          </div>

          <div>
            <h2 className='text-center text-2xl py-2'>Use Case Description</h2>
            <p className='text-center pb-4'>
              Among the use cases above, I chose <a href="#uc3">Use Case #3, AutoMode</a>.
            </p>
            <table>
              <tbody>
                <tr>
                  <th scope="row">Use Case #3</th>
                  <td className="wideLabel" label="UC #3">AutoMode</td>
                </tr>
                <tr>
                  <th scope="row">Related Requirements</th>
                  <td className="wideLabel" label="Related"><a href="#req3">REQ-3</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Initiating Actor</th>
                  <td className="wideLabel" label="Initiator">User</td>
                </tr>
                <tr>
                  <th scope="row">actor&lsquo;s goal</th>
                  <td className="wideLabel" label="Goal">To make the robot clean while generating a map and updating its
                    location
                  </td>
                </tr>
                <tr>
                  <th scope="row">sectionicipating Actors</th>
                  <td className="wideLabel" label="Participant">APP, Drive system, Navigation system</td>
                </tr>
                <tr>
                  <th scope="row">Preconditions</th>
                  <td className="label" label="Precond.">
                    <ul>
                      <li>The &lsquo;Auto&lsquo; button is pressed.</li>
                      <li>Battery level is higher than the minimum battery value.</li>
                      <li>The robot is authorized and connected to the APP via local WIFI.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Postconditions</th>
                  <td className="wideLabel" label="Postcond.">
                    The cleaning robot goes back to charging dock when it finishs or the battery is less than minimum setting.
                  </td>
                </tr>
                <tr>
                  <td className="center thead" scope="row" colSpan="2">Flow of Events for Main Success Scenario</td>
                </tr>
                <tr>
                  <td className='text-right'> → </td>
                  <td>
                    <div className="flex-wrapper">
                      1. <strong>USER</strong> opens the APP and presses &lsquo;Auto&lsquo;.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> ← </td>
                  <td>
                    <div className="flex-wrapper">
                      2. <strong>Drive system</strong> checks the current
                      battery.</div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <div className="flex-wrapper">
                      3. <em><u>include:: CheckBattery (<a href="#uc12">UC-12</a>)</u></em>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> ← </td>
                  <td>
                    <div className="flex-wrapper">4. <strong>Navigation system</strong> signals to the Robot System to scan the surrounding area for generating a map.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <div className="flex-wrapper">
                      5. <em><u>include:: GenerateMap (<a href="#uc1">UC-1</a>)</u></em>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> ← </td>
                  <td>
                    <div className="flex-wrapper">
                      6. <strong>Navigation system</strong> signals to <strong>Robot system</strong> the path.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <div className="flex-wrapper">
                      7. <strong>Drive system</strong> operates.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> ← </td>
                  <td>
                    <div className="flex-wrapper">
                      8. <strong>Navigation System</strong> signals to the <strong>APP</strong> the location of the robot at regular time intervals.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <div className="flex-wrapper">
                      9. <em><u>include:: SendLocation (<a href="#uc11">UC-11</a>)</u></em>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> ← </td>
                  <td>
                    <div className="flex-wrapper">
                      10. <strong>Drive system</strong> keeps checking the current battery.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <div className="flex-wrapper">
                      11. <em><u>include:: CheckBattery (<a href="#uc12">UC-12)</a></u></em>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="center thead" scope="row" colSpan="2">Flow of Events for Extensions (Alternate Scenarios)
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> ← </td>
                  <td>
                    <div className="flex-wrapper">
                      2a. If the bettery level is less than minimum value, <strong>Drive system</strong> signals to the <strong>APP</strong> to alert and stay at the charging dock.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <div className="flex-wrapper" colSpan="2">
                      6a. <strong>Robot System</strong> detects obstacles and floor material while cleaning.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> ← </td>
                  <td>
                    <div className="flex-wrapper">
                      The <strong>Navigation system</strong> signals to the <strong>Robot system</strong> when it detects obstacles(stairs, furniture) and updates the new path.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> ← </td>
                  <td>
                    <div className="flex-wrapper">
                      The <strong>Drive system</strong> signals to the <strong>Robot system
                      </strong>
                      to detect the floor material through the amount of dirt and operate in wet/dry mode.</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className='text-center text-2xl py-2'>Activity Diagram</h2>
            <a href="/autoMode/activity-diagram.png" target="_blank">
              <Image width={1234} height={1668} className='image' src="/autoMode/activity-diagram.png" alt="Activity diagram" />
            </a>
          </div>

          <div>
            <h2 className='text-center text-2xl py-2'>ClassName Diagram</h2>
            <a href="/autoMode/class-diagram.jpg" target="_blank">
              <div className='py-8 bg-white'>
                <img width={1772} height={1136} className='image' src="/autoMode/class-diagram.jpg" alt="className diagram" />
              </div>
            </a>
          </div>

          <div>
            <h2 className='text-center text-2xl py-2'>Vertical Prototype</h2>
            <div className='flex justify-center'>
              <div className="w-[460px]">
                <code>
                  <pre>
                    {content}
                  </pre>
                </code>
              </div>
            </div>
          </div>

          <div>
            <h2 className='text-center text-2xl py-2'>Demo Video</h2>
            <video className='video' controls>
              <source src="/autoMode/demo.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}