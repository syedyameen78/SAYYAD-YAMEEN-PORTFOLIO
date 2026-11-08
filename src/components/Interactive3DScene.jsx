import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export default function Interactive3DScene({ className = "" }) {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Dimensions
    const width = container.clientWidth || 380;
    const height = container.clientHeight || 380;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Luxury Sculptural Geometry: A refined Minimalist Torus Knot
    const geometry = new THREE.TorusKnotGeometry(1.05, 0.32, 128, 32, 2, 3);

    // Material with physical luxury reflection properties
    const isDark = themeRef.current === 'dark';
    const material = new THREE.MeshPhysicalMaterial({
      color: isDark ? new THREE.Color('#e0dfd5') : new THREE.Color('#383734'),
      metalness: 0.88,
      roughness: 0.18,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
      reflectivity: 0.9,
    });

    const sculpture = new THREE.Mesh(geometry, material);
    scene.add(sculpture);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.9 : 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff8ee, isDark ? 2.2 : 2.6);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe8f0fe, isDark ? 1.4 : 1.6);
    fillLight.position.set(-4, -2, -2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffffff, isDark ? 1.5 : 1.0, 10);
    rimLight.position.set(0, -3, 3);
    scene.add(rimLight);

    // Mouse Parallax
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / height) * 2 - 1);
      targetX = x * 0.7;
      targetY = y * 0.7;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll parallax
    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 380;
      const newHeight = container.clientHeight || 380;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Dynamic theme color update
      const currentDark = themeRef.current === 'dark';
      material.color.lerp(
        currentDark ? new THREE.Color('#dfded7') : new THREE.Color('#383734'),
        0.05
      );

      if (!prefersReducedMotion) {
        // Smooth lerp mouse tracking
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        // Autonomous kinetic breathing rotation
        sculpture.rotation.x = Math.sin(elapsedTime * 0.4) * 0.2 + mouseY * 0.8 + scrollY * 0.0006;
        sculpture.rotation.y = elapsedTime * 0.25 + mouseX * 0.8;
        sculpture.rotation.z = Math.cos(elapsedTime * 0.3) * 0.15;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-full flex items-center justify-center canvas-3d-container ${className}`}
      aria-label="Interactive 3D Kinetic Sculpture"
    >
      {/* Subtle coordinate label in luxury editorial style */}
      <div className="absolute bottom-2 right-2 text-[9px] font-mono tracking-widest text-neutral-500 uppercase pointer-events-none select-none opacity-60">
        3D &bull; SCULPTURAL STUDY
      </div>
    </div>
  );
}
