import { OrbitControls } from "./OrbitControls.js";

import * as THREE from './three.module.js'
//crear escena 

let scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2a3b4c);

        //add camera
        let camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth/window.innerHeight
        );

        //renderer
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        //add geometry
        let geometry = new THREE.BoxGeometry(2,2,2,3,3,3);
        let material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
        let cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        let circle = new THREE.Mesh(new THREE.CircleGeometry(2, 32, 0, Math.PI), material);
        circle.position.x = 5
        scene.add(circle)

        let cone = new THREE.Mesh(new THREE.ConeGeometry(2, 4, 32, 5, true, 0), material);
        cone.position.x = -5
        scene.add(cone)

        let cylinder = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 3, 32, 5, true), material);
        cylinder.position.y = 5
        scene.add(cylinder)

        
        let plane = new THREE.Mesh(new THREE.PlaneGeometry(3, 3, 4, 5), material);
        plane.position.y = -5
        scene.add(plane)
        
        let tetra = new THREE.Mesh(new THREE.TetrahedronGeometry(2, 1), material);
        tetra.position.x = -5
        tetra.position.y = 5
        scene.add(tetra)

        let sphera = new THREE.Mesh(new THREE.SphereGeometry(2, 16, 16), material);
        sphera.position.x = 5
        sphera.position.y = 5
        scene.add(sphera)

        let torus = new THREE.Mesh(new THREE.TorusGeometry(2, 1, 32, 16, Math.PI), material);
        torus.position.x = -5
        torus.position.y = -5
        scene.add(torus)

        let ring = new THREE.Mesh(new THREE.RingGeometry(2, 3, 32, 5), material);
        ring.position.x = 5
        ring.position.y = -5
        scene.add(ring)

        camera.position.z = 15;

        let controls = new OrbitControls(camera, renderer.domElement);

        controls.minDistance = 3;
        controls.maxDistance = 10;
            
        // deshabilitar zoom

        //controls.enableZoom = false

        // deshabilitar rotacion

        //controls.enableRotate = false

        // habilitar damping

        //controls.enableDamping = true; 

        // rotar angulo de camara 

        //controls.maxPolarAngle = Math.PI;

        window.addEventListener('resize', redimensionar)

        function redimensionar(){
            camera.aspect = window.innerWidth/window.innerHeight;
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
        }

        //animation
        let animate = function(){
            requestAnimationFrame(animate);

            scene.traverse(function(object){
                if(object.isMesh === true){
                    object.rotation.x += 0.01
                    object.rotation.y += 0.01
                }
            });

            


            //cube.rotation.x += 0.01;
            //cube.rotation.y += 0.01;

            renderer.render(scene, camera);

        }

        animate();