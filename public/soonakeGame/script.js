import * as THREE from "../moduleLibs/build/three.module.js";
import { OrbitControls } from "../moduleLibs/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from '../moduleLibs/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from '../moduleLibs/examples/jsm/loaders/DRACOLoader.js';

const nodeList = document.getElementsByTagName("button");
const springBtn = document.getElementById("spring");
const summerBtn = document.getElementById("summer");
const fallBtn = document.getElementById("fall");
const winterBtn = document.getElementById("winter");

// Initialize webGL
const canvas = document.getElementById("mycanvas");
const scene = new THREE.Scene();

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth <= 1024? window.innerWidth-window.innerWidth/5 : window.innerWidth-200-10,
	height: window.innerWidth <= 1024? window.innerHeight/3 : window.innerHeight/2
}
let ratio = sizes.width / sizes.height;

window.addEventListener('resize', () =>
{
	// Update sizes
	if( window.innerWidth <= 1024 ){
		sizes.width = window.innerWidth-window.innerWidth/5
		sizes.height = window.innerHeight/3
	}else {
		sizes.width = window.innerWidth-200-10
		sizes.height = window.innerHeight/2
	}

	// Update camera
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	// Update renderer
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
	
	ratio = sizes.width / sizes.height;

	food.position.x = window.innerWidth <= 1024? -0.6 : -0.8
	snake.position.x = window.innerWidth <= 1024? 0.6 : 0.8
})

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 500)
camera.position.set(0, 1.4, 3)
camera.lookAt(0, 0.5, 0)
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor('rgb(255,255,255)');
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 1;

/**
 * light
 */
const ambientLight = new THREE.AmbientLight('#404040');
scene.add(ambientLight);

const spotLight = new THREE.SpotLight('#aaaaaa');
spotLight.position.set( 15,15,15 );
scene.add(spotLight);

/**
 * envMap
 */
const cubeTextureLoader = new THREE.CubeTextureLoader()
const environmentMap = cubeTextureLoader.load([
    '../texture/environmentMap/px.jpg',
    '../texture/environmentMap/nx.jpg',
    '../texture/environmentMap/py.jpg',
    '../texture/environmentMap/ny.jpg',
    '../texture/environmentMap/pz.jpg',
    '../texture/environmentMap/nz.jpg'
])
scene.environment = environmentMap
scene.environmentIntensity = 0.5

/**
 * loading
 */
const manager = new THREE.LoadingManager();
manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
};

manager.onLoad = function ( ) {
	//console.log( 'Loading complete!');
};

manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
	//console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};

manager.onError = function ( url ) {
	console.log( 'There was an error loading ' + url );
};

/**
 * Models
 */
const loader = new GLTFLoader(manager);
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( '../moduleLibs/examples/jsm/draco/' );
loader.setDRACOLoader( dracoLoader );

let easterEgg, watermelon, jack, mug
let head, mouth, tongue, eyeR, eyeL, eyelidR, eyelidL
let bunny, sunglasses, Frank, santa
const food = new THREE.Group();
const snake = new THREE.Group();

// Load a glTF resource
loader.load("models/easterEgg.glb", (gltf) => {
	easterEgg = gltf.scene
});
loader.load("models/watermelon.glb",  (gltf) => {
	watermelon = gltf.scene
});
loader.load("models/jackOlantern.glb",  (gltf) => {
	jack = gltf.scene
});
loader.load("models/mug.glb",  (gltf) => {
	mug = gltf.scene
});

loader.load("models/eyelid.glb", (gltf) => {
	eyeR = gltf.scene
	eyeR.position.y = 0.45;
	eyeR.position.z = 0.08;
	eyeL = eyeR.clone();
	let eyePosX = 0.285;
	eyeR.position.x = eyePosX;
	eyeL.position.x = -eyePosX;
	eyelidR = eyeR.clone();
	eyelidL = eyeL.clone();
	eyelidR.rotation.x = Math.PI - Math.PI / 4;
	eyelidL.rotation.x = Math.PI - Math.PI / 4;
	eyeR.rotation.x = Math.PI / 4;
	eyeL.rotation.x = Math.PI / 4;
	snake.add( eyeR,eyeL,eyelidR,eyelidL )
	blinking()
});
loader.load("models/head.glb",(gltf) => {
	head = gltf.scene
	snake.add( head )
});
loader.load("models/mouth.glb", (gltf) => {
	mouth = gltf.scene
	snake.add( mouth )
	mouth.position.set(0,0.3,0.13)
	openMouth()
});
loader.load("models/tongue.glb", (gltf) => {
	tongue = gltf.scene
	snake.add( tongue )
	flicking()
});

loader.load("models/bunny.glb", (gltf) => {
	bunny = gltf.scene
});
loader.load("models/sunglasses.glb",(gltf) => {
	sunglasses = gltf.scene
});
loader.load("models/Frankenstein.glb", (gltf) => {
	Frank = gltf.scene
});
loader.load("models/santa.glb", (gltf) => {
	santa = gltf.scene
});

food.position.x = window.innerWidth <= 1024? -0.6 : -0.8
snake.position.x = window.innerWidth <= 1024? 0.6 : 0.8
scene.add(snake, food)

function render() {
  requestAnimationFrame(render);
  spotLight.position.copy(camera.position);

  renderer.render(scene, camera);
	food.rotation.y -= 0.001
	snake.rotation.y -= 0.001
}

function flicking() {
	let flick = gsap.timeline({ repeat: -1, repeatDelay: 3 });
	let duration = 0.2;
	flick.to(tongue.position, {
		z: 0.7,
		duration: duration,
	});
	flick.to(tongue.position, {
		z: 0,
		duration: duration,
	});
}

function blinking() {
	let duration = 0.2;
	let eyeR_blink = gsap.timeline({ repeat: -1, repeatDelay: 2 });
	let eyeL_blink = gsap.timeline({ repeat: -1, repeatDelay: 2 });
	let eyelidR_blink = gsap.timeline({ repeat: -1, repeatDelay: 2 });
	let eyelidL_blink = gsap.timeline({ repeat: -1, repeatDelay: 2 });

	eyeR_blink.to(eyeR.rotation, {
		x: 0,
		duration: duration,
	});

	eyeL_blink.to(eyeL.rotation, {
		x: 0,
		duration: duration,
	});

	eyelidR_blink.to(eyelidR.rotation, {
		x: Math.PI,
		duration: duration,
	});

	eyelidL_blink.to(eyelidL.rotation, {
		x: Math.PI,
		duration: duration,
	});

	eyeR_blink.to(eyeR.rotation, {
		x: Math.PI / 4,
		duration: duration,
	});

	eyeL_blink.to(eyeL.rotation, {
		x: Math.PI / 4,
		duration: duration,
	});

	eyelidR_blink.to(eyelidR.rotation, {
		x: Math.PI - Math.PI / 4,
		duration: duration,
	});

	eyelidL_blink.to(eyelidL.rotation, {
		x: Math.PI - Math.PI / 4,
		duration: duration,
	});
}

function openMouth() {
	let duration = 0.2;
	let mouth_open = gsap.timeline({ repeat: -1, repeatDelay: 10 });

	mouth_open.to(mouth.rotation, {
		x: -Math.PI / 3,
		duration: duration,
	});
	mouth_open.to(mouth.rotation, {
		x: 0,
		duration: duration,
		delay: duration,
	});
}

//season change
springBtn.addEventListener("click", () => {
	seasonChange(easterEgg, bunny, springBtn)
});

summerBtn.addEventListener("click", () => {
	seasonChange(watermelon, sunglasses, summerBtn)
});

fallBtn.addEventListener("click", () => {
	seasonChange(jack, Frank, fallBtn)
});

winterBtn.addEventListener("click", () => {
	seasonChange(mug, santa, winterBtn)
});

function seasonChange(essen, deco, btn){
	for (let i = 0; i < nodeList.length; i++){
		nodeList[i].style.filter = "opacity(50%)";
	}
	food.remove(food.children[0])
	snake.remove(snake.children[7])
	food.add(essen)
	snake.add(deco)
	btn.style.filter = "opacity(100%)";
}

render();