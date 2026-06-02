#pragma glslify: snoise = require('glsl-noise/simplex/3d')

uniform float uTime;
uniform vec2 uWindDir;
uniform float uWindSpeed;

attribute float aRandom;

varying float vRandom;
varying vec2 vUv;
varying vec3 vWorldPos;
varying float vDepth;
varying vec3 vNormal;

void main() {
  vRandom = aRandom;
  vUv = uv;

  vec3 pos = position;

  float taper = pow(1.0 - pos.y, 2.0);
  pos.x *= taper;

  float bend = pow(pos.y, 1.5);
  pos.z += bend * 0.2;

  vec4 baseWorldPos = modelMatrix * (instanceMatrix * vec4(pos, 1.0));

  float windCoord = dot(baseWorldPos.xz, uWindDir);

  float wave = sin(windCoord * 2.0 -
    uTime * (1.0 + uWindSpeed * 0.1));

  float noise = snoise(vec3(baseWorldPos.xz * 0.3, uTime * (0.5 + uWindSpeed * 0.2)));

  float combined = wave + noise * 0.5;

  float heightFactor = pow(pos.y, 1.5);

  vec2 windOffset = uWindDir *
    combined *
    (0.1 + uWindSpeed * 0.01) *
    heightFactor;

  pos.x += windOffset.x;
  pos.z += windOffset.y;

  vec4 worldPos = modelMatrix * (instanceMatrix * vec4(pos, 1.0));
  vec4 viewPos = viewMatrix * worldPos;

  vWorldPos = worldPos.xyz;
  vDepth = -viewPos.z;
  vNormal = normalize(mat3(modelMatrix * instanceMatrix) * normal);

  gl_Position = projectionMatrix * viewPos;
}