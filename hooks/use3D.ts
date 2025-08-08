import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for creating 3D interactive elements for luxury LRP cosmetics.
 * This hook utilizes Three.js to render high-end 3D visuals that enhance the user experience.
 * 
 * @returns {Object} - Contains the ref for the 3D canvas and a function to initialize the scene.
 */
const use3D = () => {
    const canvasRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Set up the scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasRef.current.appendChild(renderer.domElement);

        // Create a luxurious 3D object (e.g., a cosmetics bottle)
        const geometry = new THREE.CylinderGeometry(1, 1, 3, 32);
        const material = new THREE.MeshStandardMaterial({ color: 0xffa500, metalness: 0.8, roughness: 0.2 }); // Orange color
        const cylinder = new THREE.Mesh(geometry, material);
        scene.add(cylinder);

        // Add lighting for a luxury feel
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        camera.position.z = 5;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cylinder.rotation.y += 0.01; // Rotate for a dynamic effect
            renderer.render(scene, camera);
        };
        animate();

        // Clean up on component unmount
        return () => {
            renderer.dispose();
            canvasRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return { canvasRef };
};

export default use3D;