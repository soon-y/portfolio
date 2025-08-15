"use client"

import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'
import Link from 'next/link'
import { Calendar, Code2, File } from 'lucide-react'
import '../styles.css'
import '../table.css'
import { useWindowRatio } from '@/utils/window'
import Image from 'next/image'

export default function ScheduleCleaning() {
  const scale = Array.from({ length: 100 }, () => 0.5 + Math.random() * 4)
  const ratio = useWindowRatio()

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
          <div className='left-side p-6 w-full py-20 flex flex-col gap-4' style={{ textAlign: 'left', paddingLeft: ratio > 1 ? '7rem' : '2rem' }}>
            <h2 className='text-4xl robot-title'>scheduleCleaning()</h2>
            <p className='font-semibold'>#Java #DesignPattern #VerticalPrototype #SoftwareEngineering</p>
            <div className='flex gap-2 cursor-pointer'>
              <a href='https://github.com/soon-y/robotScheduleCleaning' target="_blank">
                <Code2 />
              </a>
              <a
                href="/scheduleCleaning/javadoc/index.html"
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
                Developing a vertical prototype of <strong>a cleaning robot app</strong> was the topic of
                <em>Software engineering</em> class, where I learned the process from design to development.
                <a href="#uc10">Use Case #10, ScheduleCleaning</a> was programmed in Java,
                and schedules cleaning activities in specific cleaning modes.
              </p>
              <ul className='pt-4'>
                <li>
                  <b>Auto Mode</b>: the robot starts cleaning while generating a map of the cleaning area,
                  and can be paused or explicitly sent back to the charging dock to save its work history.
                  <a href="../scheduleCleaning/index.html">
                    <em>Discover more.</em>
                  </a>
                </li>
                <li>
                  <b>Region Mode</b>:
                  Users can define an area to perform cleaning tasks on an automatically generated map.
                </li>
                <li>
                  <b>Room Mode</b>:
                  Users can define rooms for cleaning tasks on an automatically generated map.
                </li>
              </ul>
              <p>
                Users can schedule cleaning tasks with specific modes and times.
                Assuming local WiFi is available and the robot is already registered with the app.
              </p>
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
                    As a user, I want to click on &lsquo;Auto&lsquo; so that the cleaning robot starts to clean while generating a map of the cleaning area.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-2</td>
                  <td className="label" label="Story">
                    As a user, I want to click on &lsquo;Pause&lsquo; so that the cleaning robot stops cleaning.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-3</td>
                  <td className="label" label="Story">
                    As a user, I want to click on &lsquo;Home&lsquo; so that the cleaning robot goes back to the charging dock.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-4</td>
                  <td className="label" label="Story">
                    As a user, I want to define a region for cleaning jobs in &lsquo;Region&lsquo; mode.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-5</td>
                  <td className="label" label="Story">
                    As a user, I want to select room(s) for the cleaning jobs in &lsquo;Room&lsquo; mode.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-6</td>
                  <td className="label" label="Story">
                    As a user, I want to toggle the on/off switch so that the cleaning robot is powered on or off.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UST-7</td>
                  <td className="label" label="Story">
                    As a user, I want to plan some cleaning jobs so that the cleaning robot operates on schedules.
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
                    The APP shall be able to discover the robot through the local WIFI in
                    the initial connection and keep the data for the authorized robot after the initial registration.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-2</td>
                  <td className="label" label="Prio.">Must</td>
                  <td className="label" label="Req.">
                    The APP shall transmit a signal starting cleaning to the robot system and update its location on
                    the generated map of the cleaning area along its way in &lsquo;Auto&lsquo; mode.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-3</td>
                  <td className="label" label="Prio.">Must</td>
                  <td className="label" label="Req.">
                    The APP shall transmit a signal to the robot&lsquo;s system and command it to pause the cleaning and
                    return back to the charging dock when the &lsquo;Home&lsquo; button is pressed.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id." id="req4">REQ-4</td>
                  <td className="label" label="Prio.">Must</td>
                  <td className="label" label="Req.">
                    In the &lsquo;Room&lsquo; mode the user can define rooms, and see uncleaned (not cleaned during the last 48 hours)
                    and cleaned (cleaned during the last 48 hours) rooms.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id." id="req5">REQ-5</td>
                  <td className="label" label="Prio.">Should</td>
                  <td className="label" label="Req.">
                    In the &lsquo;Region&lsquo; mode the APP shall grant the user to define areas to clean as regions and
                    display the currently defined regions which can be used for cleaning jobs.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-6</td>
                  <td className="label" label="Prio.">Could</td>
                  <td className="label" label="Req.">
                    The APP shall have a drop-down menu with the option to force stop by transmitting a signal to
                    the robot&lsquo;s system making it to force shutdown, in case of a system error.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-7</td>
                  <td className="label" label="Prio.">Would</td>
                  <td className="label" label="Req.">
                    The APP will send a notification to the smartphone / iPad / tablet system
                    when there is a system failure or an error in the robot&lsquo;s system.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-8</td>
                  <td className="label" label="Prio.">Should</td>
                  <td className="label" label="Req.">
                    Authorized user shall set minimum battery level (5%, 10%, 20%) which
                    the cleaning robot returns to the charging dock.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-9</td>
                  <td className="label" label="Prio.">Would</td>
                  <td className="label" label="Req.">The APP shall store the battery status of the robot. </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-10</td>
                  <td className="label" label="Prio.">Would</td>
                  <td className="label" label="Req.">
                    The user shall contact customer support from the drop-down menu in the APP.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-11</td>
                  <td className="label" label="Prio.">Could</td>
                  <td className="label" label="Req.">
                    The APP shall receive voice commands through Alexa and compile it into one of three
                    commands(&lsquo;Auto&lsquo;, &lsquo;Home&lsquo;, &lsquo;Pause&lsquo;) in requirements and transmit it to the robot&lsquo;s system.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-12</td>
                  <td className="label" label="Prio.">Must</td>
                  <td className="label" label="Req.">
                    The APP shall connect to a cloud system through WIFI and enable the
                    user to register or login and be able to access and control the robot.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-13</td>
                  <td className="label" label="Prio.">Should</td>
                  <td className="label" label="Req.">
                    When the &lsquo;Pause&lsquo; button is pressed, the robot shall stop cleaning and be idle in the current location.
                  </td>
                </tr>
                <tr>
                  <td className="label" label="Id.">REQ-14</td>
                  <td className="label" label="Prio.">Should</td>
                  <td className="label" label="Req.">
                    The APP shall record all the cleaning history in the cloud system.
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
                  <td className="label" label="Id.">UC-1</td>
                  <td className="label" label="Name">ConnectRobot</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To discover and connect with the robot via the local WIFI</td>
                  <td className="label" label="Related">REQ-1</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-2</td>
                  <td className="label" label="Name">StartRobot </td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To start robot cleaning in auto mode</td>
                  <td className="label" label="Related">REQ-2</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-3</td>
                  <td className="label" label="Name">SendHome</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To stop cleaning and send it back to the charging dock</td>
                  <td className="label" label="Related">REQ-3</td>
                </tr>
                <tr>
                  <td className="label" label="Id." id="uc4">UC-4</td>
                  <td className="label" label="Name">DefineRoom</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To define rooms to clean</td>
                  <td className="label" label="Related">REQ-4</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-5</td>
                  <td className="label" label="Name">DefineRegion</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To define regions to clean</td>
                  <td className="label" label="Related">REQ-5</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-6</td>
                  <td className="label" label="Name">Shutdown</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To make the robot force stop </td>
                  <td className="label" label="Related">REQ-6</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-7</td>
                  <td className="label" label="Name">Alert</td>
                  <td className="label" label="Actor">OS</td>
                  <td className="label" label="Goal">To send the user notifications for system failure and low battery
                    alerts</td>
                  <td className="label" label="Related">REQ-7, REQ-9</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-8</td>
                  <td className="label" label="Name">Support</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To contact the customer support on the APP</td>
                  <td className="label" label="Related">REQ-10</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-9</td>
                  <td className="label" label="Name">CommandWithVoice</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To control the robot by voice-command</td>
                  <td className="label" label="Related">REQ-11</td>
                </tr>
                <tr id="uc10">
                  <td className="label" label="Id.">UC-10</td>
                  <td className="label" label="Name">ScheduleCleaning</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To schedule cleaning jobs and select mode
                  </td>
                  <td className="label" label="Related"><a href="#req4">REQ-4</a>, <a href="#req5">REQ-5</a></td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-11</td>
                  <td className="label" label="Name">Login </td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To log in to the APP</td>
                  <td className="label" label="Related">REQ-12</td>
                </tr>
                <tr>
                  <td className="label" label="Id." id="uc12">UC-12</td>
                  <td className="label" label="Name">ViewMap</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To view the generated map in the APP</td>
                  <td className="label" label="Related">REQ-2</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-13</td>
                  <td className="label" label="Name">DropDownMenu</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To set the battery level, force stop and contact the customer support
                  </td>
                  <td className="label" label="Related">REQ-6, REQ-8, REQ-10</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-14</td>
                  <td className="label" label="Name">PauseRobot</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To pause the robot and keep idle</td>
                  <td className="label" label="Related">REQ-13</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-15</td>
                  <td className="label" label="Name">SetBatteryLevel</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To set the minimum battery level to be alert</td>
                  <td className="label" label="Related">REQ-8</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-16</td>
                  <td className="label" label="Name">ReportError</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To report system failure</td>
                  <td className="label" label="Related">REQ-7</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-17</td>
                  <td className="label" label="Name">ViewBatteryStatus</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To check the battery status of the robot</td>
                  <td className="label" label="Related">REQ-9</td>
                </tr>
                <tr>
                  <td className="label" label="Id.">UC-18</td>
                  <td className="label" label="Name">ViewHistory</td>
                  <td className="label" label="Actor">User</td>
                  <td className="label" label="Goal">To check the cleaning job history</td>
                  <td className="label" label="Related">REQ-14</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className='text-center text-2xl py-2'>Use Case Diagram</h2>
            <a href="/scheduleCleaning/UC-diagram.png" target="_blank">
              <Image width={1450} height={1368} alt='use case diagram' className='image' src="/scheduleCleaning/UC-diagram.png" />
            </a>
          </div>

          <div>
            <h2 className='text-center text-2xl py-2'>Use Case Description</h2>
            <p className='text-center pb-4'>
              Among the use cases above, I chose <a href="#uc10">Use Case #10, ScheduleCleaning</a>.
            </p>
            <table>
              <tbody>
                <tr>
                  <th scope="row">Use Case #10</th>
                  <td className="wideLabel" label="UC #10">ScheduleCleaning</td>
                </tr>
                <tr>
                  <th scope="row">Related Requirements</th>
                  <td className="wideLabel" label="Related."><a href="#req4">REQ-4</a>, <a href="#req5">REQ-5</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Initiating Actor</th>
                  <td className="wideLabel" label="Initiator">User</td>
                </tr>
                <tr>
                  <th scope="row">actor&lsquo;s goal</th>
                  <td className="wideLabel" label="Goal">To schedule cleaning jobs and select mode
                  </td>
                </tr>
                <tr>
                  <th scope="row">Participating Actors</th>
                  <td className="wideLabel" label="Participant">Robot system</td>
                </tr>
                <tr>
                  <th scope="row">Preconditions</th>
                  <td className="label" label="Precond.">
                    <ul>
                      <li>The defined rooms and regions are empty.</li>
                      <li>The robot is turned on.</li>
                      <li>User is logged in to the APP.</li>
                      <li>The map is generated.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Postconditions</th>
                  <td className="wideLabel" label="Postcond.">The data has been successfully saved. </td>
                </tr>
                <tr>
                  <td className="center thead" scope="row" colSpan="2">Flow of Events for Main Success Scenario</td>
                </tr>
                <tr>
                  <td className='text-right'> → </td>
                  <td>
                    <div className="flex-wrapper">
                      1. <strong>USER</strong> opens the <strong>APP</strong> and presses &lsquo;schedule&lsquo;.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> ← </td>
                  <td>
                    <div className="flex-wrapper">
                      2. <strong>APP</strong> signals to Robot System to send the latest scanned data.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> → </td>
                  <td>
                    <div className="flex-wrapper">
                      3. <strong>USER</strong> names the cleaning job on the <strong>APP</strong>.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> → </td>
                  <td>
                    <div className="flex-wrapper">
                      4. <strong>USER</strong> selects the time to clean on the <strong>APP</strong>.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> → </td>
                  <td>
                    <div className="flex-wrapper">
                      5. <strong>USER</strong> decides whether or not to repeat the cleaning job on the <strong>APP</strong>.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> → </td>
                  <td>
                    <div className="flex-wrapper">
                      6. <strong>USER</strong> selects the days to to repeat on the  <strong>APP</strong>.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> → </td>
                  <td>
                    <div className="flex-wrapper">
                      7. <strong>USER</strong> views the map on the <strong>APP</strong>.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <div className="flex-wrapper">
                      8. <em><u>include:: ViewMap (<a href="#uc12">UC-12</a>)</u></em>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> → </td>
                  <td>
                    <div className="flex-wrapper">
                      9. <strong>USER</strong> selects room(s) to clean on the <strong>APP</strong>.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <div className="flex-wrapper">
                      10. <em><u>include:: defineRoom (<a href="#uc4">UC-4</a>)</u></em>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> ← </td>
                  <td>
                    <div className="flex-wrapper">
                      11. <strong>APP</strong> signals to the <strong>Robot System</strong> to save the data [and Robot operates according to schedule.]
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="center thead" scope="row" colSpan="2">
                    Flow of Events for Extensions (Alternate Scenarios)
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> → </td>
                  <td>
                    <div className="flex-wrapper">
                      6a. <strong>USER</strong> select the date to clean on the <strong>APP</strong>.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="nolabel" colSpan="2">
                    6b. <strong>USER</strong> selects non-valide time. (e.g. time in the past)
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> ← </td>
                  <td>
                    <div className="flex-wrapper">
                      <strong>APP</strong> (a) detects error, (b) pops up the alert, and (c) reset the time.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-right'> → </td>
                  <td>
                    <div className="flex-wrapper">
                      9a. <strong>USER</strong> selects regions to clean on the APP.
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className='text-center text-2xl py-2'>Domain Model</h2>
            <table>
              <tbody>
                <tr>
                  <th>Responsibility description</th>
                  <th>Type</th>
                  <th>Concept name</th>
                </tr>
                <tr>
                  <td className="label" label="Desc.">App interface</td>
                  <td className="label" label="Type">Knowing</td>
                  <td className="label" label="Name">App</td>
                </tr>

                <tr>
                  <td className="label" label="Desc.">Log into the app</td>
                  <td className="label" label="Type">Doing</td>
                  <td className="label" label="Name">LogIn </td>
                </tr>
                <tr>
                  <td className="label" label="Desc.">Verify the user&lsquo;s account</td>
                  <td className="label" label="Type">Doing</td>
                  <td className="label" label="Name">LogInVerifier</td>
                </tr>
                <tr>
                  <td className="label" label="Desc.">Log in and pair the authorized cleaning robot</td>
                  <td className="label" label="Type">Doing</td>
                  <td className="label" label="Name">Pairing</td>
                </tr>
                <tr>
                  <td className="label" label="Desc.">Schedule the time, mode (region/room) and area to clean.</td>
                  <td className="label" label="Type">Doing</td>
                  <td className="label" label="Name">Schedule</td>
                </tr>
                <tr>
                  <td className="label" label="Desc.">Operate the robot</td>
                  <td className="label" label="Type">Doing</td>
                  <td className="label" label="Name">RobotOperator</td>
                </tr>
                <tr>
                  <td className="label" label="Desc.">Robot software</td>
                  <td className="label" label="Type">Knowing</td>
                  <td className="label" label="Name">RobotSoftware</td>
                </tr>
              </tbody>
            </table>

            <table>
              <tbody>
                <tr>
                  <th>Concept pair</th>
                  <th>Association description</th>
                  <th className='whitespace-nowrap'>Association name</th>
                </tr>
                <tr>
                  <td className="label whitespace-nowrap" label="Pair">LogIn ↔ LoginVerifer</td>
                  <td className="label" label="Desc.">LogInVerifier verify theuser&lsquo;s account.</td>
                  <td className="label" label="Name">verify</td>
                </tr>

                <tr>
                  <td className="label whitespace-nowrap" label="Pair">App ↔ Pairing</td>
                  <td className="label" label="Desc.">App signals to Pairing to connect the authorized robot on the app.</td>
                  <td className="label" label="Name">send signals</td>
                </tr>
                <tr>
                  <td className="label whitespace-nowrap" label="Pair">RobotOperator ↔ Pairing</td>
                  <td className="label" label="Desc.">RobotOperator signals to Pairing to connect the robot on the app.</td>
                  <td className="label" label="Name">send signals</td>
                </tr>
                <tr>
                  <td className="label whitespace-nowrap" label="Pair">Schedule ↔ RobotOperator</td>
                  <td className="label" label="Desc.">Schedule requests RobotOperator to save the data.</td>
                  <td className="label" label="Name">save requests</td>
                </tr>
              </tbody>
            </table>

            <table>
              <tbody>
                <tr>
                  <th>Concept</th>
                  <th>Attributes</th>
                  <th>Attribute description</th>
                </tr>
                <tr>
                  <td className="label" label="Concept">LogIn</td>
                  <td className="label" label="Attr.">User&lsquo;s account</td>
                  <td className="label" label="Desc.">Used to determine the actor&lsquo;s credentials to pair the authorized robot
                  </td>
                </tr>

                <tr>
                  <td className="label" label="Concept">Schedule</td>
                  <td className="label" label="Attr.">sechdule parameters</td>
                  <td className="label" label="Desc.">time, date, area to clean</td>
                </tr>
              </tbody>
            </table>
          </div>

          <a href="/scheduleCleaning/domain-model.png" target="_blank">
            <Image width={978} height={474} className='image p-8 bg-white' src="/scheduleCleaning/domain-model.png" alt="Domain model" />
          </a>

          <div>
            <h2 className='text-center text-2xl py-2'>Activity Diagram</h2>
            <a href="/scheduleCleaning/activity-diagram.png" target="_blank">
              <Image width={1444} height={1192} className='image' src="/scheduleCleaning/activity-diagram.png" alt="Activity diagram" />
            </a>
          </div>

          <div>
            <h2 className='text-center text-2xl py-2'>Vertical Prototype</h2>
            <a href="/scheduleCleaning/prototype.jpg" target="_blank">
              <div className='py-8 bg-white'>
                <Image width={1257} height={1602} className='image' src="/scheduleCleaning/prototype.jpg" alt="Vertical prototype" />
              </div>
            </a>
          </div>

          <div>
            <h2 className='text-center text-2xl py-2'>ClassName Diagram</h2>
            <a href="/scheduleCleaning/class-diagram.png" target="_blank">
              <div className='py-8 bg-white'>
                <Image width={2471} height={1833} className='image' src="/scheduleCleaning/class-diagram.png" alt="className diagram" />
              </div>
            </a>
          </div>

          <div>
            <h2 className='text-center text-2xl py-2'>Demo Video</h2>
            <video className='video' controls>
              <source src="/scheduleCleaning/demo.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}