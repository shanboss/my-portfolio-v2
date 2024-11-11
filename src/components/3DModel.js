"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

const AnimatedModelScene = () => {
  const mountRef = useRef(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Initial aspect ratio of 1
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    mountRef.current.appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load(
      "/webCarModel.glb",
      (gltf) => {
        const loadedModel = gltf.scene;
        setModel(loadedModel);
        scene.add(loadedModel);
        loadedModel.position.set(0, 0, 0);
        loadedModel.scale.set(1, 1, 1);
      },
      undefined,
      (error) => {
        console.error("An error happened while loading the model", error);
      }
    );

    // Animation loop with model rotation
    const animate = () => {
      if (model) {
        // Rotate model on each frame
        model.rotation.y += 0.01; // Adjust rotation speed as needed
        model.rotation.x += 0.005;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (mountRef.current) {
        const { clientWidth, clientHeight } = mountRef.current;
        renderer.setSize(clientWidth, clientHeight);
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
      }
    };

    // Initial size setup and resize event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, [model]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%", // Set width of the container
        height: "500px", // Set height of the container or make it flexible
        overflow: "hidden", // Prevent overflow
      }}
    />
  );
};

export default AnimatedModelScene;
