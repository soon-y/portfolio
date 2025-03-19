const outerRadius = 1
const thickness = 1 / 5
const height = 4 / 5
const innerRadius = outerRadius - thickness

const param = {
  count: 1,
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
    depth: height
  },
  matcapMain: '6C52AA_C9A6EA_A681D6_B494E2',
  matcapBlack: '2E2E2D_7D7C76_A3A39F_949C94',
  matcapRose: 'A48DA4_E8DDE8_C9B7C9_D4C2D4',
  matcapWhite: '9F9F9F_E4E4E4_D4D4D4_CCCCCC',
  matcapOrange: '9B4816_E8A138_CC7421_DC8827',
  matcapSky: '346088_6ABED7_56A0C5_4E91B8',
  matcapBlue: '254FB0_99AFF0_6587D8_1D3279',
};

export { param };