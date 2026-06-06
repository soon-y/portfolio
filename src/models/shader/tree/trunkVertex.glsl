float windStrength = smoothstep(0.0, 50.0, uWindSpeed);

float branchWind = sin(uTime * (1.5 +
  windStrength) +
  position.y * 0.25) * 0.1 * windStrength * weight * weight;

vec2 windDir = vec2(cos(uWindDir), -sin(uWindDir));

transformed.x += windDir.x * branchWind;

transformed.z += windDir.y * branchWind;