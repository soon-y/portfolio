const outerRadius = 1
const thickness = 1 / 5
const height = 4 / 5
const innerRadius = outerRadius - thickness

export const param = {
  fonts: ['Poppins_Light', 'Neutra_Book', 'Courier_Prime_Regular'],
  pgNum: 1,
  index: 0,
  N: 100,
  height: height,
  angle: Math.PI / 2,
  space: 1 / 5,
  thickness: thickness,
  outerRadius: outerRadius,
  innerRadius: innerRadius,
  diameter: outerRadius + innerRadius,
  objectsDistance: 210,
  extrudeSetting: {
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.04,
    bevelOffset: 0,
    bevelSegments: 10,
    depth: height,
  },
  black: 0x424242,
  orange: 0xf89100,
  white: 0xffffff,
  lila: 0xc8a7f3,
  rose: 0xe1c6fc,
  sky: 0x9de5f4,
  yellow: 0xfff200,
  y1: 0xffc805,
  magenta: 0xec00bc,
  m1: 0xd91965,
  m2: 0x962f34,
  red: 0xed1c24,
  r1: 0xb8292f,
  r2: 0x743237,
  cyan: 0x00aeef,
  c1: 0x0089cf,
  c2: 0x35355c,
  green: 0x00a651,
  g1: 0x00854a,
  g2: 0x1b5a41,
  navy: 0x2e3192,
  n1: 0x333376,
  n2: 0x302e4b,
}

export const contents = [
  { title: 'Multicultural Museum', name: 'MMK', tag: ['UI/UX', 'E-commerce', 'React', 'Nest.js', 'TypeScript',] },
  { title: 'Dewy Days', name: 'dewyDays', tag: ['UI/UX', 'Next.js', 'TypeScript', 'Prototype'] },
  { title: 'Caregem', name: 'caregem', tag: ['UI/UX', 'Vue', 'TypeScript', 'Prototype'] },
  { title: 'art', name: 'art', tag: ['UI/UX', 'Next.js', 'TypeScript', 'Prototype'] },
  { title: 'autoMode', name: 'autoMode', tag: ['Java', 'DesignPattern', 'Prototype'] },
  { title: 'scheduleCleaning', name: 'scheduleCleaning', tag: ['Java', 'DesignPattern', 'Prototype'] },
  { title: 'A village', name: 'village', tag: ['Java', 'DesignPattern'] },
  { title: 'Soonake game', name: 'soonakeGame', tag: ['Three.js', 'JavaScript', 'Blender'] },
  { title: 'A billiard simulation', name: 'billiardSimulation', tag: ['Three.js', 'JavaScript', 'Blender'] },
]

export const getFirstTagByPathname = (pathname) => {
  const item = contents.find((content) =>
    pathname.includes(content.name)
  )
  return item ? item.tag[0] : null;
}

export const getRelatedProjects = (pathname) => {
  console.log(pathname )
  const pathSegments = pathname.split("/")

  const currentProject = contents.find((content) =>
    pathSegments.includes(content.name)
  )
  console.log(currentProject)

  if (!currentProject) return []

  return contents.filter(
    (content) =>
      content.name !== currentProject.name &&
      content.tag[0] === currentProject.tag[0]
  )
}