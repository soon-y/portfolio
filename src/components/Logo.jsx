import { useState, useEffect, useRef } from 'react'
import { param } from '@/lib/param'
import { useThree, useFrame } from '@react-three/fiber'
import gsap from "gsap"
import Toggle from "@/models/Toggle"
import LinkedIn from "@/models/LinkedIn"
import HalfArc from "@/models/mesh/HalfArc"
import DiameterBox from "@/models/mesh/DiameterBox"
import RadiusBox from "@/models/mesh/RadiusBox"
import SmallBox from "@/models/mesh/SmallBox"
import Typo from "@/models/mesh/Typo"

function Logo(props) {
  const [lang, setLang] = useState(true)
  const [hovered, setHover] = useState(false)
  const [transforming, setTransform] = useState(false)
  const { camera, viewport } = useThree()
  const [radius, setRadius] = useState(viewport.aspect < 1.2 ? param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20 : param.diameter * 10)
  const [hc, setHc] = useState((2 * radius * Math.tan(Math.PI / 180 * camera.fov / 2)) * 0.5)
  const [wc, setWc] = useState((viewport.aspect * hc))
  const Hello = useRef()
  const Hello1 = useRef()
  const Hello2 = useRef()
  const Hello3 = useRef()
  const Hello4 = useRef()
  const Hello5 = useRef()
  const Hello6 = useRef()
  const Hello7 = useRef()
  const Hello8 = useRef()
  const Hello9 = useRef()

  const Intro = useRef()
  const IntroKO = useRef()
  const IntroKO1 = useRef()
  const IntroKO2 = useRef()
  const IntroKO3 = useRef()
  const IntroKO4 = useRef()
  const IntroKO5 = useRef()
  const IntroKO6 = useRef()
  const IntroKO7 = useRef()
  const IntroKO8 = useRef()
  const IntroKO9 = useRef()
  const IntroKO10 = useRef()
  const IntroKO11 = useRef()
  const IntroKO12 = useRef()
  const IntroKO13 = useRef()
  const IntroKO14 = useRef()

  const IntroEN = useRef()
  const IntroEN1 = useRef()
  const IntroEN2 = useRef()
  const IntroEN3 = useRef()
  const IntroEN4 = useRef()
  const IntroEN5 = useRef()
  const IntroEN6 = useRef()
  const IntroEN7 = useRef()
  const IntroEN8 = useRef()
  const IntroEN9 = useRef()
  const IntroEN10 = useRef()
  const IntroEN11 = useRef()
  const IntroEN12 = useRef()
  const IntroEN13 = useRef()
  const IntroEN14 = useRef()
  const IntroEN15 = useRef()
  const IntroEN16 = useRef()
  const IntroEN17 = useRef()

  const logo = useRef()
  const logoMove = useRef()
  const logoKO = useRef()
  const logoEN = useRef()

  const TopArcHalf = useRef()
  const TopArcHalfS = useRef()
  const BtmArcHalfS = useRef()
  const BtmArcHalf = useRef()

  const soon = useRef()
  const soon1 = useRef()
  const eoTop = useRef()
  const eoBtm = useRef()
  const eo1 = useRef()
  const youngArcTop = useRef()
  const youngArcBtm = useRef()

  const o1ArcTop = useRef()
  const o1ArcBtm = useRef()
  const o2ArcTop = useRef()
  const o2ArcBtm = useRef()
  const o3ArcTop = useRef()
  const o3ArcBtm = useRef()
  const n1Arc = useRef()
  const n1StemL = useRef()
  const n1StemR = useRef()
  const n2Arc = useRef()
  const n2StemL = useRef()
  const n2StemR = useRef()
  const yArcTop = useRef()
  const yArcBtm = useRef()
  const yStemL = useRef()
  const yStemR = useRef()
  const uArc = useRef()
  const uStemL = useRef()
  const uStemR = useRef()
  const enU = useRef()
  const enY = useRef()

  const posHello = param.diameter * 1.4
  const posIntro = -param.diameter * 1.9
  const posKO = -param.diameter / 2 - param.space
  const posEN = param.diameter * 4.3
  const posG = param.diameter / 2 + param.space
  const posU = -param.diameter * 1.5 - param.space * 3
  const posO1 = -param.diameter * 2.5 - param.space * 5
  const posY = -param.diameter * 3.5 - param.space * 7
  const posN = -param.diameter * 4.5 - param.space * 9
  const posO2 = -param.diameter * 5.5 - param.space * 11
  const posO3 = -param.diameter * 6.5 - param.space * 13
  const posS = posO3 + posKO
  const helloDelay = 0.4
  const helloTransfromY = 0.5
  const helloDuration = 0.5

  useEffect(() => {
    if (viewport.aspect < 1.2) { setRadius(param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20) }
    else { setRadius(param.diameter * 10) }
    setHc((2 * radius * Math.tan(Math.PI / 180 * camera.fov / 2)) * 0.5)
    setWc(viewport.aspect * hc)
  }, [viewport])

  useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

  useEffect(() => {
    setTransform(true)
    helloAnimation()
    if (lang) {
      IntroToKO()
      /****** KO transform ******/
      gsap.to(logo.current.position, {
        x: 0,
        duration: 2.2,
        ease: "sine.inOut",
      })
      gsap.to(logoMove.current.position, {
        x: 0,
        duration: 2.2,
        ease: "sine.inOut",
      })
      gsap.to(TopArcHalfS.current.rotation, {
        z: 0,
        duration: 1,
        ease: "power2.out",
      })
      gsap.to(BtmArcHalfS.current.rotation, {
        z: Math.PI,
        duration: 1,
        ease: "power2.out",
      })
    } else {
      IntroToEN()
      /****** EN transform ******/
      gsap.to(logo.current.position, {
        x: posEN,
        duration: 2,
        ease: "sine.inOut",
      })
      gsap.to(logoMove.current.position, {
        x: posS,
        duration: 2.5,
        ease: "sine.inOut",
      })
      gsap.to(soon.current.scale, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(soon1.current.scale, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      gsap.to(eoTop.current.scale, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      gsap.to(eoBtm.current.scale, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      gsap.to(eo1.current.position, {
        x: posG + param.diameter / 2,
        duration: 0.5,
        ease: "power2.out",
      })
      gsap.to(eo1.current.scale, {
        x: 1.35,
        duration: 0.5,
        ease: "power2.out",
      })
      gsap.to(youngArcTop.current.rotation, {
        z: Math.PI,
        duration: 0.5,
        ease: "power2.out",
      })
      gsap.to(youngArcTop.current.position, {
        x: posG,
        duration: 0.5,
        ease: "power2.out",
      })
      gsap.to(youngArcBtm.current.position, {
        x: posG,
        duration: 0.5,
        ease: "power2.out",
      })

      gsap.to(n1StemL.current.scale, {
        x: 1,
        duration: 0.5,
        ease: "power2.out",
      })
      gsap.to(n1StemR.current.scale, {
        x: 1,
        duration: 0.5,
        ease: "power2.out",
      })
    }
  }, [lang])

  useFrame(() => {
    if (logo.current && transforming) {
      if (lang) {
        /****** KO transform ******/
        if (logoMove.current.position.x >= -param.space) {
          soon1.current.visible = true
          soon.current.visible = true
          gsap.to(soon.current.scale, {
            x: 1,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(soon1.current.scale, {
            x: 1,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(eoTop.current.scale, {
            x: 1,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(eoBtm.current.scale, {
            x: 1,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(eo1.current.scale, {
            x: 1,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(eo1.current.position, {
            x: posG + param.outerRadius + param.space * 1.5,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(youngArcTop.current.rotation, {
            z: 0,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(youngArcTop.current.position, {
            x: posG + param.space * 2,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(youngArcBtm.current.position, {
            x: posG + param.space * 2,
            duration: 0.5,
            ease: "power2.out",
          })

          gsap.to(n1StemL.current.scale, {
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(n1StemR.current.scale, {
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          })
          setTransform(false)
        }

        if (logoMove.current.position.x >= posU - posKO) {
          uArc.current.visible = false
          uStemL.current.visible = false
          uStemR.current.visible = false
        }
        if (logoMove.current.position.x >= posO1 - posKO) {
          gsap.to(enU.current.rotation, {
            z: 0,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(uStemL.current.scale, {
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(uStemR.current.scale, {
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          })
        }

        if (logoMove.current.position.x >= posO1 - posKO) {
          o1ArcBtm.current.visible = false
          o1ArcTop.current.visible = false
        }
        if (logoMove.current.position.x >= posY - posKO) {
          gsap.to(o1ArcBtm.current.rotation, {
            z: 0,
            duration: 0.5,
            ease: "power2.out",
          })
        }

        if (logoMove.current.position.x >= posO2 - posKO) {
          o2ArcBtm.current.visible = false
          o2ArcTop.current.visible = false
        }
        if (logoMove.current.position.x >= posO3 - posKO) {
          gsap.to(o2ArcBtm.current.rotation, {
            z: 0,
            duration: 0.5,
            ease: "power2.out",
          })
        }

        if (logoMove.current.position.x >= posO3 - posKO) {
          o3ArcBtm.current.visible = false
          o3ArcTop.current.visible = false
        }
        if (logoMove.current.position.x >= posS - posKO) {
          gsap.to(o3ArcBtm.current.rotation, {
            z: 0,
            duration: 0.5,
            ease: "power2.out",
          })
        }

        if (logoMove.current.position.x >= posY - posKO) {
          yArcTop.current.visible = false
          yArcBtm.current.visible = false
          yStemR.current.visible = false
          yStemL.current.visible = false
        }
        if (logoMove.current.position.x >= posN - posKO) {
          gsap.to(enY.current.rotation, {
            z: 0,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(yStemL.current.scale, {
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(yStemR.current.scale, {
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          })
        }

        if (logoMove.current.position.x >= posN - posKO) {
          n2Arc.current.visible = false
          n2StemR.current.visible = false
          n2StemL.current.visible = false
        }
        if (logoMove.current.position.x >= posO2 - posKO) {
          gsap.to(n2StemL.current.scale, {
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(n2StemR.current.scale, {
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          })
        }
      } else {
        /****** EN transform ******/
        if (logoMove.current.position.x <= posU * 0.5) {
          uArc.current.visible = true
          uStemL.current.visible = true
          uStemR.current.visible = true
          soon1.current.visible = false
          soon.current.visible = false
          gsap.to(enU.current.rotation, {
            z: Math.PI,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(uStemL.current.scale, {
            x: 1,
            duration: 1,
            ease: "power2.out",
          })
          gsap.to(uStemR.current.scale, {
            x: 1,
            duration: 1,
            ease: "power2.out",
          })
        }

        if (logoMove.current.position.x <= posO1) {
          o1ArcTop.current.visible = true
          o1ArcBtm.current.visible = true
          gsap.to(o1ArcBtm.current.rotation, {
            z: Math.PI,
            duration: 1,
            ease: "power2.out",
          })
        }

        if (logoMove.current.position.x <= posO2) {
          o2ArcTop.current.visible = true
          o2ArcBtm.current.visible = true
          gsap.to(o2ArcBtm.current.rotation, {
            z: Math.PI,
            duration: 1,
            ease: "power2.out",
          })
        }

        if (logoMove.current.position.x <= posO3) {
          o3ArcTop.current.visible = true
          o3ArcBtm.current.visible = true
          gsap.to(o3ArcBtm.current.rotation, {
            z: Math.PI,
            duration: 1,
            ease: "power2.out",
          })
        }

        if (logoMove.current.position.x <= posY) {
          yArcTop.current.visible = true
          yArcBtm.current.visible = true
          yStemR.current.visible = true
          yStemL.current.visible = true
          gsap.to(enY.current.rotation, {
            z: Math.PI,
            duration: 0.5,
            ease: "power2.out",
          })
          gsap.to(yStemL.current.scale, {
            x: 1,
            duration: 1,
            ease: "power2.out",
          })
          gsap.to(yStemR.current.scale, {
            x: 2.8,
            duration: 0.5,
            ease: "power2.out",
          })
        }

        if (logoMove.current.position.x <= posN) {
          n2Arc.current.visible = true
          n2StemL.current.visible = true
          n2StemR.current.visible = true
          gsap.to(n2StemL.current.scale, {
            x: 1,
            duration: 1,
            ease: "power2.out",
          })
          gsap.to(n2StemR.current.scale, {
            x: 1,
            duration: 1,
            ease: "power2.out",
          })
        }

        if (logoMove.current.position.x <= posO3 + posKO / 2) {
          gsap.to(TopArcHalfS.current.rotation, {
            z: Math.PI / 2,
            duration: 1,
            ease: "power2.out",
          })
          gsap.to(BtmArcHalfS.current.rotation, {
            z: Math.PI / 2,
            duration: 1,
            ease: "power2.out",
          })
          setTransform(false)
        }

        if (logoMove.current.position.x <= posS) {
          setTransform(false)
        }
      }
    }
  })

  const helloAnimation = () => {
    /****** HELLO transform ******/
    gsap.to(Hello1.current.position, { y: helloTransfromY, duration: helloDuration, ease: "power2.in", delay: 0 })
    gsap.to(Hello2.current.position, { y: helloTransfromY, duration: helloDuration, ease: "power2.in", delay: 0.1 })
    gsap.to(Hello3.current.position, { y: helloTransfromY, duration: helloDuration, ease: "power2.in", delay: 0.2 })
    gsap.to(Hello4.current.position, { y: helloTransfromY, duration: helloDuration, ease: "power2.in", delay: 0.3 })
    gsap.to(Hello5.current.position, { y: helloTransfromY, duration: helloDuration, ease: "power2.in", delay: 0.4 })
    gsap.to(Hello6.current.position, { y: helloTransfromY, duration: helloDuration, ease: "power2.in", delay: 0.5 })
    gsap.to(Hello7.current.position, { y: helloTransfromY, duration: helloDuration, ease: "power2.in", delay: 0.6 })
    gsap.to(Hello8.current.position, { y: helloTransfromY, duration: helloDuration, ease: "power2.in", delay: 0.7 })
    gsap.to(Hello9.current.position, { y: helloTransfromY, duration: helloDuration, ease: "power2.in", delay: 0.8 })

    gsap.to(Hello1.current.position, { y: -helloTransfromY / 2, duration: helloDuration, ease: "power2.out", delay: 0 + helloDelay })
    gsap.to(Hello2.current.position, { y: -helloTransfromY / 2, duration: helloDuration, ease: "power2.out", delay: 0.1 + helloDelay })
    gsap.to(Hello3.current.position, { y: -helloTransfromY / 2, duration: helloDuration, ease: "power2.out", delay: 0.2 + helloDelay })
    gsap.to(Hello4.current.position, { y: -helloTransfromY / 2, duration: helloDuration, ease: "power2.out", delay: 0.3 + helloDelay })
    gsap.to(Hello5.current.position, { y: -helloTransfromY / 2, duration: helloDuration, ease: "power2.out", delay: 0.4 + helloDelay })
    gsap.to(Hello6.current.position, { y: -helloTransfromY / 2, duration: helloDuration, ease: "power2.out", delay: 0.5 + helloDelay })
    gsap.to(Hello7.current.position, { y: -helloTransfromY / 2, duration: helloDuration, ease: "power2.out", delay: 0.6 + helloDelay })
    gsap.to(Hello8.current.position, { y: -helloTransfromY / 2, duration: helloDuration, ease: "power2.out", delay: 0.7 + helloDelay })
    gsap.to(Hello9.current.position, { y: -helloTransfromY / 2, duration: helloDuration, ease: "power2.out", delay: 0.8 + helloDelay })

    gsap.to(Hello1.current.position, { y: 0, duration: helloDuration, ease: "power4.out", delay: 0 + helloDelay * 2 })
    gsap.to(Hello2.current.position, { y: 0, duration: helloDuration, ease: "power4.out", delay: 0.1 + helloDelay * 2 })
    gsap.to(Hello3.current.position, { y: 0, duration: helloDuration, ease: "power4.out", delay: 0.2 + helloDelay * 2 })
    gsap.to(Hello4.current.position, { y: 0, duration: helloDuration, ease: "power4.out", delay: 0.3 + helloDelay * 2 })
    gsap.to(Hello5.current.position, { y: 0, duration: helloDuration, ease: "power4.out", delay: 0.4 + helloDelay * 2 })
    gsap.to(Hello6.current.position, { y: 0, duration: helloDuration, ease: "power4.out", delay: 0.5 + helloDelay * 2 })
    gsap.to(Hello7.current.position, { y: 0, duration: helloDuration, ease: "power4.out", delay: 0.6 + helloDelay * 2 })
    gsap.to(Hello8.current.position, { y: 0, duration: helloDuration, ease: "power4.out", delay: 0.7 + helloDelay * 2 })
    gsap.to(Hello9.current.position, { y: 0, duration: helloDuration, ease: "power4.out", delay: 0.8 + helloDelay * 2 })
  }

  const IntroToEN = () => {
    gsap.to(IntroKO1.current.rotation, { x: -Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0 })
    gsap.to(IntroKO2.current.rotation, { x: -Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.1 })
    gsap.to(IntroKO3.current.rotation, { x: -Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.2 })
    gsap.to(IntroKO4.current.rotation, { x: -Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.3 })
    gsap.to(IntroKO5.current.rotation, { x: -Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.4 })
    gsap.to(IntroKO6.current.rotation, { x: -Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.5 })
    gsap.to(IntroKO7.current.rotation, { x: -Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.6 })
    gsap.to(IntroKO8.current.rotation, { x: -Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.7 })
    gsap.to(IntroKO9.current.rotation, { x: -Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.8 })
    gsap.to(IntroKO10.current.rotation, { x: -Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.9 })
    gsap.to(IntroKO11.current.rotation, { x: -Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 1.0 })
    gsap.to(IntroKO12.current.rotation, { x: -Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 1.1 })
    gsap.to(IntroKO13.current.rotation, { x: -Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 1.2 })
    gsap.to(IntroKO14.current.rotation, { x: -Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 1.3 })

    gsap.to(IntroKO1.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0 })
    gsap.to(IntroKO2.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.1 })
    gsap.to(IntroKO3.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.2 })
    gsap.to(IntroKO4.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.3 })
    gsap.to(IntroKO5.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.4 })
    gsap.to(IntroKO5.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.4 })
    gsap.to(IntroKO6.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.5 })
    gsap.to(IntroKO7.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.6 })
    gsap.to(IntroKO8.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.7 })
    gsap.to(IntroKO9.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.8 })
    gsap.to(IntroKO10.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.9 })
    gsap.to(IntroKO11.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 1.0 })
    gsap.to(IntroKO12.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 1.1 })
    gsap.to(IntroKO13.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 1.2 })
    gsap.to(IntroKO14.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 1.3 })

    gsap.to(IntroEN1.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0 + helloDelay })
    gsap.to(IntroEN2.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.1 + helloDelay })
    gsap.to(IntroEN3.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.2 + helloDelay })
    gsap.to(IntroEN4.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.3 + helloDelay })
    gsap.to(IntroEN5.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.4 + helloDelay })
    gsap.to(IntroEN6.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.5 + helloDelay })
    gsap.to(IntroEN7.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.6 + helloDelay })
    gsap.to(IntroEN8.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.7 + helloDelay })
    gsap.to(IntroEN9.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.8 + helloDelay })
    gsap.to(IntroEN10.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.9 + helloDelay })
    gsap.to(IntroEN11.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 1.0 + helloDelay })
    gsap.to(IntroEN12.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 1.1 + helloDelay })
    gsap.to(IntroEN13.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 1.2 + helloDelay })
    gsap.to(IntroEN14.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 1.3 + helloDelay })
    gsap.to(IntroEN15.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 1.4 + helloDelay })
    gsap.to(IntroEN16.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 1.5 + helloDelay })
    gsap.to(IntroEN17.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 1.6 + helloDelay })

    gsap.to(IntroEN1.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0 + helloDelay })
    gsap.to(IntroEN2.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.1 + helloDelay })
    gsap.to(IntroEN3.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.2 + helloDelay })
    gsap.to(IntroEN4.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.3 + helloDelay })
    gsap.to(IntroEN5.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.4 + helloDelay })
    gsap.to(IntroEN6.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.5 + helloDelay })
    gsap.to(IntroEN7.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.6 + helloDelay })
    gsap.to(IntroEN8.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.7 + helloDelay })
    gsap.to(IntroEN9.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.8 + helloDelay })
    gsap.to(IntroEN10.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.9 + helloDelay })
    gsap.to(IntroEN11.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 1.0 + helloDelay })
    gsap.to(IntroEN12.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 1.1 + helloDelay })
    gsap.to(IntroEN13.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 1.2 + helloDelay })
    gsap.to(IntroEN14.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 1.3 + helloDelay })
    gsap.to(IntroEN15.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 1.4 + helloDelay })
    gsap.to(IntroEN16.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 1.5 + helloDelay })
    gsap.to(IntroEN17.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 1.6 + helloDelay })
  }

  const IntroToKO = () => {
    gsap.to(IntroKO1.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0 + helloDelay })
    gsap.to(IntroKO2.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.1 + helloDelay })
    gsap.to(IntroKO3.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.2 + helloDelay })
    gsap.to(IntroKO4.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.3 + helloDelay })
    gsap.to(IntroKO5.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.4 + helloDelay })
    gsap.to(IntroKO6.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.5 + helloDelay })
    gsap.to(IntroKO7.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.6 + helloDelay })
    gsap.to(IntroKO8.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.7 + helloDelay })
    gsap.to(IntroKO9.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.8 + helloDelay })
    gsap.to(IntroKO10.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 0.9 + helloDelay })
    gsap.to(IntroKO11.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 1.0 + helloDelay })
    gsap.to(IntroKO12.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 1.1 + helloDelay })
    gsap.to(IntroKO13.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 1.2 + helloDelay })
    gsap.to(IntroKO14.current.rotation, { x: 0, duration: helloDuration, ease: "power2.in", delay: 1.3 + helloDelay })

    gsap.to(IntroKO1.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0 + helloDelay })
    gsap.to(IntroKO2.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.1 + helloDelay })
    gsap.to(IntroKO3.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.2 + helloDelay })
    gsap.to(IntroKO4.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.3 + helloDelay })
    gsap.to(IntroKO5.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.4 + helloDelay })
    gsap.to(IntroKO6.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.5 + helloDelay })
    gsap.to(IntroKO7.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.6 + helloDelay })
    gsap.to(IntroKO8.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.7 + helloDelay })
    gsap.to(IntroKO9.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.8 + helloDelay })
    gsap.to(IntroKO10.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 0.9 + helloDelay })
    gsap.to(IntroKO11.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 1.0 + helloDelay })
    gsap.to(IntroKO12.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 1.1 + helloDelay })
    gsap.to(IntroKO13.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 1.2 + helloDelay })
    gsap.to(IntroKO14.current.material, { opacity: 1, duration: helloDuration, ease: "power2.in", delay: 1.3 + helloDelay })

    gsap.to(IntroEN1.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0 })
    gsap.to(IntroEN2.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.1 })
    gsap.to(IntroEN3.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.2 })
    gsap.to(IntroEN4.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.3 })
    gsap.to(IntroEN5.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.4 })
    gsap.to(IntroEN6.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.5 })
    gsap.to(IntroEN7.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.6 })
    gsap.to(IntroEN8.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.7 })
    gsap.to(IntroEN9.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.8 })
    gsap.to(IntroEN10.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 0.9 })
    gsap.to(IntroEN11.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 1.0 })
    gsap.to(IntroEN12.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 1.1 })
    gsap.to(IntroEN13.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 1.2 })
    gsap.to(IntroEN14.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 1.3 })
    gsap.to(IntroEN15.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 1.4 })
    gsap.to(IntroEN16.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 1.5 })
    gsap.to(IntroEN17.current.rotation, { x: Math.PI / 2, duration: helloDuration, ease: "power2.in", delay: 1.6 })

    gsap.to(IntroEN1.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0 })
    gsap.to(IntroEN2.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.1 })
    gsap.to(IntroEN3.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.2 })
    gsap.to(IntroEN4.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.3 })
    gsap.to(IntroEN5.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.4 })
    gsap.to(IntroEN6.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.5 })
    gsap.to(IntroEN7.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.6 })
    gsap.to(IntroEN8.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.7 })
    gsap.to(IntroEN9.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.8 })
    gsap.to(IntroEN10.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 0.9 })
    gsap.to(IntroEN11.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 1.0 })
    gsap.to(IntroEN12.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 1.1 })
    gsap.to(IntroEN13.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 1.2 })
    gsap.to(IntroEN14.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 1.3 })
    gsap.to(IntroEN15.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 1.4 })
    gsap.to(IntroEN16.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 1.5 })
    gsap.to(IntroEN17.current.material, { opacity: 0, duration: helloDuration, ease: "power2.in", delay: 1.6 })
  }

  return (
    <>
      <Toggle
        position={[0, viewport.aspect < 1 ? hc - 2 : hc - 1, props.position[2]]}
        scale={viewport.aspect < 1 ? 0.9 : .5}
        onClick={() => setLang(!lang)}
        onPointerOut={() => setHover(false)}
        onPointerOver={() => setHover(true)}
      />
      <LinkedIn
        position={[viewport.aspect < 1 ? -wc + 2 : -wc + 1, viewport.aspect < 1 ? hc - 2 : hc - 0.8, props.position[2]]}
        scale={viewport.aspect < 1 ? 0.9 : .5}
      />

      <group {...props} dispose={null}
        scale={0.8}
        onPointerOut={() => setHover(false)}
        onPointerOver={() => setHover(true)}>
        <group ref={Hello} position={[0, posHello, 0]}>
          <Typo color={param.lila} font={"Poppins_Light"} ref={Hello1} size={param.diameter * 0.5} position={[-3.2, 0, 0]} text={"H"} />
          <Typo color={param.lila} font={"Poppins_Light"} ref={Hello2} size={param.diameter * 0.5} position={[-2.4, 0, 0]} text={"e"} />
          <Typo color={param.lila} font={"Poppins_Light"} ref={Hello3} size={param.diameter * 0.5} position={[-1.6, 0, 0]} text={"l"} />
          <Typo color={param.lila} font={"Poppins_Light"} ref={Hello4} size={param.diameter * 0.5} position={[-1.3, 0, 0]} text={"l"} />
          <Typo color={param.lila} font={"Poppins_Light"} ref={Hello5} size={param.diameter * 0.5} position={[-1, 0, 0]} text={"o"} />
          <Typo color={param.lila} font={"Poppins_Light"} ref={Hello6} size={param.diameter * 0.5} position={[-0.2, 0, 0]} text={"!"} />
          <Typo color={param.lila} font={"Poppins_Light"} ref={Hello7} size={param.diameter * 0.5} position={[0.6, 0, 0]} text={"I"} />
          <Typo color={param.lila} font={"Poppins_Light"} ref={Hello8} size={param.diameter * 0.5} position={[1.1, 0, 0]} text={"a"} />
          <Typo color={param.lila} font={"Poppins_Light"} ref={Hello9} size={param.diameter * 0.5} position={[2, 0, 0]} text={"m"} />
        </group>

        <group ref={Intro} position={[0, posIntro, 0]}>
          <group ref={IntroKO} visible={true}>
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroKO1} size={param.diameter * 0.5} position={[-6.3, 0, 0]} text={"f"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroKO2} size={param.diameter * 0.5} position={[-5.7, 0, 0]} text={"r"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroKO3} size={param.diameter * 0.5} position={[-5.05, 0, 0]} text={"o"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroKO4} size={param.diameter * 0.5} position={[-4.1, 0, 0]} text={"m"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroKO5} size={param.diameter * 0.5} position={[-2.2, 0, 0]} text={"S"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroKO6} size={param.diameter * 0.5} position={[-1.3, 0, 0]} text={"o"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroKO7} size={param.diameter * 0.5} position={[-0.3, 0, 0]} text={"u"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroKO8} size={param.diameter * 0.5} position={[0.65, 0, 0]} text={"t"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroKO9} size={param.diameter * 0.5} position={[1.3, 0, 0]} text={"h"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroKO10} size={param.diameter * 0.5} position={[2.7, 0, 0]} text={"K"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroKO11} size={param.diameter * 0.5} position={[3.55, 0, 0]} text={"o"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroKO12} size={param.diameter * 0.5} position={[4.5, 0, 0]} text={"r"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroKO13} size={param.diameter * 0.5} position={[5.2, 0, 0]} text={"e"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroKO14} size={param.diameter * 0.5} position={[6.2, 0, 0]} text={"a"} />
          </group>
          <group ref={IntroEN} visible={true}>
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN1} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[-7.2, 0, 0]} text={"c"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN2} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[-6.2, 0, 0]} text={"r"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN3} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[-5.5, 0, 0]} text={"e"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN4} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[-4.5, 0, 0]} text={"a"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN5} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[-3.4, 0, 0]} text={"t"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN6} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[-2.7, 0, 0]} text={"i"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN7} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[-2.2, 0, 0]} text={"v"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN8} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[-1.4, 0, 0]} text={"e"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN9} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[-0.1, 0, 0]} text={"d"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN10} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[0.9, 0, 0]} text={"e"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN11} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[1.8, 0, 0]} text={"v"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN12} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[2.7, 0, 0]} text={"e"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN13} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[3.7, 0, 0]} text={"l"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN14} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[4.2, 0, 0]} text={"o"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN15} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[5.1, 0, 0]} text={"p"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN16} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[6.2, 0, 0]} text={"e"} />
            <Typo color={param.lila} font={"Poppins_Light"} ref={IntroEN17} size={param.diameter * 0.5} rotation={[Math.PI / 2, 0, 0]} opacity={0} position={[7.2, 0, 0]} text={"r"} />
          </group>
        </group>

        <group ref={logo}>
          <group ref={logoMove}>
            <HalfArc color={param.lila} ref={TopArcHalf} position={[posKO, param.diameter / 2, 0]} />
            <HalfArc color={param.lila} ref={TopArcHalfS} position={[posKO, param.diameter / 2, 0]} />
            <HalfArc color={param.lila} ref={BtmArcHalfS} position={[posKO, -param.diameter / 2, param.height]} rotation={[0, Math.PI, Math.PI]} />
            <HalfArc color={param.lila} ref={BtmArcHalf} position={[posKO, -param.diameter / 2, 0]} rotation={[0, 0, Math.PI]} />
          </group>

          <group ref={logoKO}>
            <DiameterBox color={param.lila} ref={soon} position={[-param.diameter - param.space * 1.5, 0, 0]} scale={[1, 1, 1]} />
            <RadiusBox color={param.lila} ref={soon1} position={[posKO, param.space / 2, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 1, 1]} />

            <HalfArc color={param.lila} position={[posG, param.diameter / 2, 0]} />
            <HalfArc color={param.lila} position={[posG, param.diameter / 2, 0]} rotation={[0, 0, Math.PI]} />
            <SmallBox color={param.lila} ref={eoTop} position={[posG + param.innerRadius, param.outerRadius + param.space * 1.5, 0]} scale={[1, 1, 1]} />
            <SmallBox color={param.lila} ref={eoBtm} position={[posG + param.innerRadius, param.innerRadius - param.space * 1.5, 0]} scale={[1, 1, 1]} />
            <DiameterBox color={param.lila} ref={eo1} position={[posG + param.outerRadius + param.space * 1.5, param.diameter, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 1, 1]} />
            <HalfArc color={param.lila} ref={youngArcTop} position={[posG + param.space * 2, -param.diameter / 2, 0]} />
            <HalfArc color={param.lila} ref={youngArcBtm} position={[posG + param.space * 2, -param.diameter / 2, 0]} rotation={[0, 0, Math.PI]} />
          </group>

          <group ref={logoEN} >
            <HalfArc color={param.lila} ref={n1Arc} position={[posKO, param.diameter / 2, 0]} />
            <RadiusBox color={param.lila} ref={n1StemL} position={[-param.diameter - param.space, param.diameter / 2, 0]} scale={[0, 1, 1]} rotation={[0, 0, -Math.PI / 2]} />
            <RadiusBox color={param.lila} ref={n1StemR} position={[-param.space, param.diameter / 2, 0]} scale={[0, 1, 1]} rotation={[0, 0, -Math.PI / 2]} />

            <group ref={enU} position={[posU, param.diameter / 2, 0]} >
              <HalfArc color={param.lila} ref={uArc} position={[0, 0, 0]} rotation={[0, 0, 0]} visible={false} />
              <RadiusBox color={param.lila} ref={uStemL} position={[-param.diameter / 2, 0, 0]} scale={[0, 1, 1]} rotation={[0, 0, -Math.PI / 2]} visible={false} />
              <RadiusBox color={param.lila} ref={uStemR} position={[param.diameter / 2, 0, 0]} scale={[0, 1, 1]} rotation={[0, 0, -Math.PI / 2]} visible={false} />
            </group>

            <HalfArc color={param.lila} ref={n2Arc} position={[posN, param.diameter / 2, 0]} visible={false} />
            <RadiusBox color={param.lila} ref={n2StemL} position={[posN - param.diameter / 2, param.diameter / 2, 0]} scale={[0, 1, 1]} rotation={[0, 0, -Math.PI / 2]} visible={false} />
            <RadiusBox color={param.lila} ref={n2StemR} position={[posN + param.diameter / 2, param.diameter / 2, 0]} scale={[0, 1, 1]} rotation={[0, 0, -Math.PI / 2]} visible={false} />

            <HalfArc color={param.lila} ref={o1ArcTop} position={[posO1, param.diameter / 2, 0]} visible={false} />
            <HalfArc color={param.lila} ref={o1ArcBtm} position={[posO1, param.diameter / 2, 0]} rotation={[0, 0, 0]} visible={false} />

            <HalfArc color={param.lila} ref={o2ArcTop} position={[posO2, param.diameter / 2, 0]} visible={false} />
            <HalfArc color={param.lila} ref={o2ArcBtm} position={[posO2, param.diameter / 2, 0]} rotation={[0, 0, 0]} visible={false} />

            <HalfArc color={param.lila} ref={o3ArcTop} position={[posO3, param.diameter / 2, 0]} visible={false} />
            <HalfArc color={param.lila} ref={o3ArcBtm} position={[posO3, param.diameter / 2, 0]} rotation={[0, 0, 0]} visible={false} />

            <group ref={enY} position={[posY, param.diameter / 2, 0]}>
              <HalfArc color={param.lila} ref={yArcTop} position={[0, 0, 0]} rotation={[0, 0, 0]} visible={false} />
              <RadiusBox color={param.lila} ref={yStemL} position={[param.diameter / 2, 0, 0]} scale={[0, 1, 1]} rotation={[0, 0, -Math.PI / 2]} visible={false} />
            </group>
            <RadiusBox color={param.lila} ref={yStemR} position={[posY + param.diameter / 2, -param.diameter / 2, 0]} scale={[0, 1, 1]} rotation={[0, 0, Math.PI / 2]} visible={false} />
            <HalfArc color={param.lila} ref={yArcBtm} position={[posY, -param.diameter / 2, 0]} rotation={[0, 0, Math.PI]} visible={false} />
          </group>
        </group>
      </group>
    </>
  )
}

export default Logo
