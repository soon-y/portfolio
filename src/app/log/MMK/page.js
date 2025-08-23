"use client"

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Environment } from '@react-three/drei'
import Link from 'next/link'
import Multi from "@/models/MMK.jsx"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import '../../MMK/styles.css'
import { Code2, LinkIcon } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function MMdesc() {
  const [ratio, setRatio] = useState(1)
  const scale = Array.from({ length: 500 }, () => 0.5 + Math.random() * 4)
  const logo = useRef(null)

  useGSAP(() => {
    const sec1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section1',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec1.from('.top', { opacity: 0 }, 0)
    sec1.from('.img01', { y: '30%', opacity: 0 }, 0)

    const sec2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section2',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec2.from('.text2_0', { x: '10%', opacity: 0 }, 0)
      .from('.text2_1', { x: '20%', opacity: 0 }, 0)
      .from('.text2_2', { x: '20%', opacity: 0 }, 0)
      .from('.text2_3', { x: '20%', opacity: 0 }, 0)
      .from('.text2_4', { x: '20%', opacity: 0 }, 0)

    const sec3_1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section3_1',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec3_1.from('.img03_1', { opacity: 0 }, 0)

    const sec3_2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section3_2',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec3_2.from('.img03_2', { opacity: 0 }, 0)

    const sec6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section6',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec6.from('.img06_1', { y: '30%', opacity: 0 }, 0)
    sec6.from('.img06_2', { y: '30%', opacity: 0 }, 0)

    const sec8 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section8',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec8.from('.img08_1', { y: '30%', opacity: 0 }, 0)
    sec8.from('.img08_2', { y: '30%', opacity: 0 }, 0)
  })

  useEffect(() => {
    const checkIfElementsAreLoaded = () => {
      if (logo.current) {
        const context = gsap.context(() => {
          const sec1 = gsap.timeline({
            scrollTrigger: {
              trigger: '.table',
              start: 'top bottom',
              end: 'bottom center',
              scrub: 1,
            }
          })
          sec1.to(logo.current.position, { y: 20 }, 0)
        })
        return () => context.revert()
      } else {
        setTimeout(checkIfElementsAreLoaded, 100)
      }
    }
    checkIfElementsAreLoaded()
    setRatio(window.innerWidth / window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const handleResize = () => {
    const newRatio = window.innerWidth / window.innerHeight
    setRatio(newRatio)
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
        <group ref={logo} onClick={() => {
          window.open("https://mmk-shop.vercel.app/", "_blank")
        }}>
          <Multi scale={0.5} opacity={0} position={[
            ratio > 1 ? -ratio * 2.2 : 0,
            ratio > 1 ? 0 : 1 + (1 - ratio) * 4,
            ratio > 1 ? -10 : -14]} />
        </group>
      </Canvas>

      <div className='wrapper mmk'>
        <Link href={'/log'}>
          <p className='z-10 mix-blend-difference fixed top-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}>Back</p>
        </Link>
        <p className='top z-10 mix-blend-difference fixed bottom-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}><a href='#first'>Top</a></p>

        <div id='first' className='section-wo flex-container'>
          <div className='left-side'></div>
          <div className='right-side'>
            <div>
              <p>
                Multiculture Museum Korea offers a rich multicultural experience to visiters.
                I designed a prototype of its e-commerce web site with react, nestJS and supabase.
              </p>

              <div className='flex gap-2 items-center pt-4'>
                <b>1. Shop (Frontend) for Customers/visitors</b>
                <a href='https://github.com/soon-y/mmk-shop' target='_blank'>
                  <Code2 />
                </a>
                <a href='https://mmk-shop.vercel.app/' target='_blank'>
                  <LinkIcon />
                </a>
              </div>
              <ul>
                <li>displays products, prices, and descriptions.</li>
                <li>lets customers add items to cart, checkout, and pay.</li>
                <li>provides an easy-to-use interface for browsing and purchasing.</li>
                <li>sends requests to the backend to get product data, create orders.</li>
              </ul>
              <div className='flex gap-2 items-center'>
                <b>2. Admin (Dashboard) for staffs</b>
                <a href='https://github.com/soon-y/mmk-admin' target='_blank'>
                  <Code2 />
                </a>
                <a href='https://mmk-admin.vercel.app/' target='_blank'>
                  <LinkIcon />
                </a>
              </div>
              <ul>
                <li>manage products (add/edit/delete).</li>
                <li>track inventory and stock levels.</li>
                <li>view and process customer orders.</li>
                <li>see sales analytics and reports.</li>
                <li>communicates with the APIs to update data, manage orders.</li>
              </ul>
              <div className='flex gap-2 items-center'>
                <b>3. Backend (Server)</b>
                <a href='https://github.com/soon-y/mmk-backend' target='_blank'>
                  <Code2 />
                </a>
              </div>
              <ul>
                <li>stores all data (products, customers, orders) in the database.</li>
                <li>provides APIs for both Shop and Admin to fetch or update data.</li>
                <li>secures the system with authentication & authorization.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='relative w-[100vw] h-auto flex flex-col table dewy-opp py-20'>
          <Image src={'/MMK/structure.png'} alt='structure' width={361} height={201} className='image' />

          <h3 className='pt-20'>User Story - Shop</h3>
          <table>
            <tbody>
              <tr>
                <th>Identifier</th>
                <th label="User Story">User Story</th>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-1</td>
                <td className="label" label="Story">
                  As a customer, I want to browse products by category so I can easily find what I am looking for.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-2</td>
                <td className="label" label="Story">
                  As a customer, I want to search products by filtering so I can limit the product list to items that meet my needs.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-3</td>
                <td className="label" label="Story">
                  As a customer, I want to search for products so I can quickly find specific items.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-4</td>
                <td className="label" label="Story">
                  As a customer, I want to add items to my favorites and see them later so I can easily revisit products I like.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-5</td>
                <td className="label" label="Story">
                  As a customer, I want to add items from my favorites to my cart easily so I can purchase products I&lsquo;ve saved without searching again.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-6</td>
                <td className="label" label="Story">
                  As a user, I want to see the product detail so I can understand its features and decide whether to buy it.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-7</td>
                <td className="label" label="Story">
                  As a customer, I want to add items to my cart and see the total price.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-8</td>
                <td className="label" label="Story">
                  As a customer, I want to checkout securely so my payment is processed safely.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-9</td>
                <td className="label" label="Story">
                  As a customer, I want to track my order so I know when it will arrive.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-10</td>
                <td className="label" label="Story">
                  As a user, I want to see my previous orders so I can keep track of what I have purchased.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-11</td>
                <td className="label" label="Story">
                  As a new user, I want to create an account so I can start using the system.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-12</td>
                <td className="label" label="Story">
                  As a registered user, I want to log in so I can access my account.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-13</td>
                <td className="label" label="Story">
                  As a customer, I want to change my personal information (e.g., password, shipping address) so that I can keep my account up-to-date.
                </td>
              </tr>
            </tbody>
          </table>

          <h3 className='pt-8'>Functional Requirements - Shop</h3>
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
                  The system shall allow customers to browse products by category.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-2</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall allow customers to filter products by price, color, and size.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-3</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall provide a search function for customers to find products by keyword.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-4</td>
                <td className="label" label="Prio.">Should</td>
                <td className="label" label="Req.">
                  The system should allow customers to add products to favorites for later viewing.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-5</td>
                <td className="label" label="Prio.">Should</td>
                <td className="label" label="Req.">
                  The system should allow customers to move items from favorites to the shopping cart.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-6</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall display detailed product information including images, description, and specifications.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-7</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall allow customers to add items to the cart and calculate the total price.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-8</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall allow customers to checkout securely using a valid payment method.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-9</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall allow customers to track their orders and view expected delivery dates.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-10</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall allow a customer to update their personal information including name, email, password, and shipping address.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-11</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall validate changes to personal information (e.g., email format, password strength) before saving.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-12</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall require re-authentication for sensitive changes such as updating the password or email address.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-13</td>
                <td className="label" label="Prio.">Should</td>
                <td className="label" label="Req.">
                  The system should send a confirmation email to the customer when critical personal information (password or email) is updated.
                </td>
              </tr>
            </tbody>
          </table>

          <h3 className='pt-8'>Use Case List - Shop</h3>
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
                <td className="label" label="Name">BrowseProducts</td>
                <td className="label" label="Actor">Customer</td>
                <td className="label" label="Goal">To browse products grouped by category</td>
                <td className="label" label="Related">REQ-1</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc2">UC-2</td>
                <td className="label" label="Name">FilterProducts</td>
                <td className="label" label="Actor">Customer</td>
                <td className="label" label="Goal">To filter products by price, color, and size</td>
                <td className="label" label="Related">REQ-2</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc3">UC-3</td>
                <td className="label" label="Name">SearchProducts</td>
                <td className="label" label="Actor">Customer</td>
                <td className="label" label="Goal">To search for products using keywords</td>
                <td className="label" label="Related">REQ-3</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc4">UC-4</td>
                <td className="label" label="Name">AddToFavorites</td>
                <td className="label" label="Actor">Customer</td>
                <td className="label" label="Goal">To save products for later viewing</td>
                <td className="label" label="Related">REQ-4</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc5">UC-5</td>
                <td className="label" label="Name">MoveFavoritesToCart</td>
                <td className="label" label="Actor">Customer</td>
                <td className="label" label="Goal">To move items from favorites into the shopping cart</td>
                <td className="label" label="Related">REQ-5</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc6">UC-6</td>
                <td className="label" label="Name">ViewProductDetail</td>
                <td className="label" label="Actor">Customer</td>
                <td className="label" label="Goal">To view product details including images, description, and specifications</td>
                <td className="label" label="Related">REQ-6</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc7">UC-7</td>
                <td className="label" label="Name">AddToCart</td>
                <td className="label" label="Actor">Customer</td>
                <td className="label" label="Goal">To add products to the cart and calculate the total price</td>
                <td className="label" label="Related">REQ-7</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc8">UC-8</td>
                <td className="label" label="Name">Checkout</td>
                <td className="label" label="Actor">Customer</td>
                <td className="label" label="Goal">To securely complete the purchase using a valid payment method</td>
                <td className="label" label="Related">REQ-8</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc9">UC-9</td>
                <td className="label" label="Name">TrackOrders</td>
                <td className="label" label="Actor">Customer</td>
                <td className="label" label="Goal">To track orders and view expected delivery dates</td>
                <td className="label" label="Related">REQ-9</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc10">UC-10</td>
                <td className="label" label="Name">UpdatePersonalInfo</td>
                <td className="label" label="Actor">Customer</td>
                <td className="label" label="Goal">To update name, email, password, and shipping address</td>
                <td className="label" label="Related">REQ-10</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc11">UC-11</td>
                <td className="label" label="Name">ValidatePersonalInfo</td>
                <td className="label" label="Actor">System</td>
                <td className="label" label="Goal">To validate format and strength of updated personal information</td>
                <td className="label" label="Related">REQ-11</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc12">UC-12</td>
                <td className="label" label="Name">AuthenticateForChanges</td>
                <td className="label" label="Actor">Customer</td>
                <td className="label" label="Goal">To confirm identity when updating sensitive details such as password or email</td>
                <td className="label" label="Related">REQ-12</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc13">UC-13</td>
                <td className="label" label="Name">SendConfirmationEmail</td>
                <td className="label" label="Actor">System</td>
                <td className="label" label="Goal">To send confirmation emails when critical personal information is updated</td>
                <td className="label" label="Related">REQ-13</td>
              </tr>
            </tbody>
          </table>

          <h3 className='pt-8'>User Story - Admin</h3>
          <table>
            <tbody>
              <tr>
                <th>Identifier</th>
                <th label="User Story">User Story</th>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-1</td>
                <td className="label" label="Story">
                  As an admin, I want to add and edit products so I can keep the store up-to-date.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-2</td>
                <td className="label" label="Story">
                  As an admin, I want to manage inventory so I can prevent selling out-of-stock items.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-3</td>
                <td className="label" label="Story">
                  As an admin, I want to view orders so I can process and ship them efficiently.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-4</td>
                <td className="label" label="Story">
                  As an admin, I want to view customers so I can manage sales effectively.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-5</td>
                <td className="label" label="Story">
                  As an admin, I want to see sales reports so I can understand business performance.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-6</td>
                <td className="label" label="Story">
                  As an admin, I want to update banners so I can keep the website visually appealing and promote relevant content.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-7</td>
                <td className="label" label="Story">
                  As an admin, I want to add or update categories so I can organize products effectively.
                </td>
              </tr>
            </tbody>
          </table>

          <h3 className='pt-8'>Functional Requirements - Admin</h3>
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
                  The system shall allow the admin to add and edit products so the store remains up-to-date.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-2</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall allow the admin to manage inventory to prevent selling out-of-stock items.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-3</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall allow the admin to view and process orders efficiently.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-4</td>
                <td className="label" label="Prio.">Should</td>
                <td className="label" label="Req.">
                  The system shall allow the admin to view customers to manage sales effectively.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-5</td>
                <td className="label" label="Prio.">Should</td>
                <td className="label" label="Req.">
                  The system shall allow the admin to view sales reports to understand business performance.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-6</td>
                <td className="label" label="Prio.">Could</td>
                <td className="label" label="Req.">
                  The system shall allow the admin to update banners to keep the website visually appealing and promote relevant content.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-7</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall allow the admin to add or update product categories to organize products effectively.
                </td>
              </tr>
            </tbody>
          </table>

          <h3 className='pt-8'>Use Case List - Admin</h3>
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
                <td className="label" label="Name">ManageProducts</td>
                <td className="label" label="Actor">Admin</td>
                <td className="label" label="Goal">To add and edit products so the store remains up-to-date</td>
                <td className="label" label="Related">REQ-1</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc2">UC-2</td>
                <td className="label" label="Name">ManageInventory</td>
                <td className="label" label="Actor">Admin</td>
                <td className="label" label="Goal">To manage inventory and prevent selling out-of-stock items</td>
                <td className="label" label="Related">REQ-2</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc3">UC-3</td>
                <td className="label" label="Name">ProcessOrders</td>
                <td className="label" label="Actor">Admin</td>
                <td className="label" label="Goal">To view and process orders efficiently</td>
                <td className="label" label="Related">REQ-3</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc4">UC-4</td>
                <td className="label" label="Name">ViewCustomers</td>
                <td className="label" label="Actor">Admin</td>
                <td className="label" label="Goal">To view customers and manage sales effectively</td>
                <td className="label" label="Related">REQ-4</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc5">UC-5</td>
                <td className="label" label="Name">ViewSalesReports</td>
                <td className="label" label="Actor">Admin</td>
                <td className="label" label="Goal">To view sales reports and understand business performance</td>
                <td className="label" label="Related">REQ-5</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc6">UC-6</td>
                <td className="label" label="Name">UpdateBanners</td>
                <td className="label" label="Actor">Admin</td>
                <td className="label" label="Goal">To update banners to keep the website visually appealing and promote relevant content</td>
                <td className="label" label="Related">REQ-6</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc7">UC-7</td>
                <td className="label" label="Name">ManageCategories</td>
                <td className="label" label="Actor">Admin</td>
                <td className="label" label="Goal">To add or update product categories to organize products effectively</td>
                <td className="label" label="Related">REQ-7</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='section-img section1' style={{ backgroundColor: '#e4e4e4' }}>
          <Image src="/MMK/m-logo.png" alt="Logo" width={3776} height={1621} priority className="w-full h-auto img01 web" />
          <Image src="/MMK/m-logo-mobile.png" alt="Logo" width={2985} height={1621} priority className="w-full h-auto img01 mobile" />
        </div>

        <h1 className='text2_0 relative pt-12 pb-4 text-center text-3xl font-bold'>Logo Conception</h1>
        <div className='section section2 grid grid-rows-[1fr_1fr_1fr_1fr] md:grid-rows-[1fr_1fr] md:grid-cols-[1fr_1fr]'>
          <div className='relative w-[100vw] h-[25vh] md:w-[50vw] md:h-[50vh] overflow-hidden'>
            <Image src="/MMK/hex.jpg" alt="Connection" sizes="100vh" priority fill className="concept object-cover object-center" />
            <h1 className="text2_1 absolute drop-shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
              Connection
            </h1>
          </div>
          <div className='relative w-[100vw] h-[25vh] md:w-[50vw] md:h-[50vh] overflow-hidden'>
            <Image src="/MMK/globe.jpg" alt="Globe" sizes="100vh" priority fill className="concept object-cover object-center" />
            <h1 className="text2_2 absolute drop-shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
              Globe
            </h1>
          </div>
          <div className='relative w-[100vw] h-[25vh] md:w-[50vw] md:h-[50vh] overflow-hidden'>
            <Image src="/MMK/support.jpg" alt="Support" sizes="100vh" priority fill className="concept object-cover object-center" />
            <h1 className="text2_3 absolute drop-shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
              Support
            </h1>
          </div>
          <div className='relative w-[100vw] h-[25vh] md:w-[50vw] md:h-[50vh] overflow-hidden'>
            <Image src="/MMK/network.jpg" alt="Network" sizes="100vh" priority fill className="concept object-cover object-center" />
            <h1 className="text2_4 absolute drop-shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
              Network
            </h1>
          </div>
        </div>

        <p className={`relative py-12 ${ratio > 1 ? 'w-[50%]' : 'w-[90%]'}`} style={{ margin: 'auto' }}>
          The design features a regular hexagon, chosen for its natural stability and ability to expand, much like a honeycomb.
          This shape symbolizes the globe, where different cultures connect and grow together.
          The CMYK color model reflects the vibrant diversity of global traditions, while the connected vertices represent the intricate relationships and unity between cultures.
          The logo indicates cultural exchange and harmony.
        </p>

        <div className='web section section3_1' style={{
          background: "url('/MMK/color-bg.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <Image src="/MMK/color.png" alt="Color" priority fill sizes="100vh" className="object-cover object-center img03_1" />
        </div>

        <div className='mobile section section3_2' style={{
          background: "url('/MMK/color-mobile-bg.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <Image src="/MMK/color-mobile.png" alt="Color" fill sizes="100vh" priority className="object-cover object-center  img03_2" />
        </div>

        <div className='section' style={{
          background: "url('/MMK/pattern.gif')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}></div>

        <div className='section-img section6' style={{ backgroundColor: '#dcdddd' }}>
          <Image src="/MMK/stationery.jpg" alt="stationery" width={5343} height={2294} priority className="w-full h-auto web img06_1" />
          <Image src="/MMK/stationery-mobile.jpg" alt="stationery" width={2898} height={2294} priority className="w-full h-auto mobile img06_2" />
        </div>

        <div className='section-img section8' style={{ backgroundColor: '#a8a8a8' }}>
          <Image src="/MMK/ticket.png" alt="ticket" width={3775} height={1884} priority className="w-full h-auto web img08_1" />
          <Image src="/MMK/ticket-mobile.png" alt="ticket" width={2095} height={1884} priority className="w-full h-auto mobile img08_2" />
        </div>
      </div>
    </div>
  )
}