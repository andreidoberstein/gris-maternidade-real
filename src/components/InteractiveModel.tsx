
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const InteractiveModel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create heart shape
    const heartShape = new THREE.Shape();
    
    heartShape.moveTo(25, 25);
    heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0);
    heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
    heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95);
    heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35);
    heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0);
    heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25);
    
    const extrudeSettings = {
      depth: 8,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 2,
      bevelSize: 1,
      bevelThickness: 1
    };
    
    const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    geometry.scale(0.05, 0.05, 0.05);
    geometry.rotateZ(Math.PI);
    geometry.translate(0, 0, 0);
    
    // Create material
    const material = new THREE.MeshPhongMaterial({ 
      color: 0xffdee2,
      specular: 0x555555,
      shininess: 30
    });
    
    // Create mesh
    const heart = new THREE.Mesh(geometry, material);
    scene.add(heart);
    
    // Add lights
    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(0, 1, 1);
    scene.add(light1);
    
    const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
    light2.position.set(0, -1, -1);
    scene.add(light2);
    
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    // Position camera
    camera.position.z = 5;
    
    // Animation
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      mouseX = (event.clientX - rect.left) / rect.width * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      targetRotationX = mouseY * 0.5;
      targetRotationY = mouseX * 0.5;
    };
    
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        event.preventDefault();
        const touch = event.touches[0];
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        
        mouseX = (touch.clientX - rect.left) / rect.width * 2 - 1;
        mouseY = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
        
        targetRotationX = mouseY * 0.5;
        targetRotationY = mouseX * 0.5;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth rotation
      heart.rotation.x += (targetRotationX - heart.rotation.x) * 0.05;
      heart.rotation.y += (targetRotationY - heart.rotation.y) * 0.05;
      
      // Gentle floating animation
      heart.position.y = Math.sin(Date.now() * 0.001) * 0.1;
      
      // Pulse effect
      const scale = 1 + Math.sin(Date.now() * 0.002) * 0.05;
      heart.scale.set(scale, scale, scale);
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <div className="mt-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800">Interaja com o Coração Materno</h3>
        <p className="text-gray-600">Mova o cursor sobre o coração para interagir</p>
      </div>
      <div 
        ref={containerRef} 
        className="w-full h-[300px] md:h-[400px] rounded-xl bg-gradient-to-r from-pastel-pink/20 to-pastel-beige/20"
      />
    </div>
  );
};

export default InteractiveModel;
