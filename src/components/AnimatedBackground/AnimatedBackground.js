import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const pointsRef = useRef([]);
  const targetRef = useRef({ x: 0, y: 0 });
  const animateHeaderRef = useRef(true);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size with proper device pixel ratio
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();

    // Initialize points
    const points = [];
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + Math.random() * width / 20;
        const py = y + Math.random() * height / 20;
        const p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    // Find closest points for each point
    for (let i = 0; i < points.length; i++) {
      const closest = [];
      const p1 = points[i];
      for (let j = 0; j < points.length; j++) {
        const p2 = points[j];
        if (p1 !== p2) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // Create circles for each point
    points.forEach(point => {
      const circle = new Circle(point, 2 + Math.random() * 2, 'rgba(156,217,249,0.3)');
      point.circle = circle;
    });

    pointsRef.current = points;
    targetRef.current = { x: width / 2, y: height / 2 };

    // Animation function
    const animate = () => {
      if (animateHeaderRef.current) {
        ctx.clearRect(0, 0, width, height);
        
        points.forEach(point => {
          // Detect points in range
          const distance = getDistance(targetRef.current, point);
          if (Math.abs(distance) < 4000) {
            point.active = 0.3;
            point.circle.active = 0.6;
          } else if (Math.abs(distance) < 20000) {
            point.active = 0.1;
            point.circle.active = 0.3;
          } else if (Math.abs(distance) < 40000) {
            point.active = 0.02;
            point.circle.active = 0.1;
          } else {
            point.active = 0;
            point.circle.active = 0;
          }

          drawLines(ctx, point, isDarkMode);
          point.circle.draw(ctx, isDarkMode);
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Start point shifting
    points.forEach(point => {
      shiftPoint(point);
    });

    // Event listeners
    const handleMouseMove = (e) => {
      // Get mouse position relative to the canvas
      const rect = canvas.getBoundingClientRect();
      const scaleX = width / rect.width;
      const scaleY = height / rect.height;
      
      targetRef.current.x = (e.clientX - rect.left) * scaleX;
      targetRef.current.y = (e.clientY - rect.top) * scaleY;
    };

    const handleScroll = () => {
      animateHeaderRef.current = document.body.scrollTop <= height;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      setCanvasSize();
      
      // Recreate points for new dimensions
      const newPoints = [];
      for (let x = 0; x < width; x += width / 20) {
        for (let y = 0; y < height; y += height / 20) {
          const px = x + Math.random() * width / 20;
          const py = y + Math.random() * height / 20;
          const p = { x: px, originX: px, y: py, originY: py };
          newPoints.push(p);
        }
      }

      // Find closest points for new points
      for (let i = 0; i < newPoints.length; i++) {
        const closest = [];
        const p1 = newPoints[i];
        for (let j = 0; j < newPoints.length; j++) {
          const p2 = newPoints[j];
          if (p1 !== p2) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] === undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      // Create circles for new points
      newPoints.forEach(point => {
        const circle = new Circle(point, 2 + Math.random() * 2, 'rgba(156,217,249,0.3)');
        point.circle = circle;
      });

      pointsRef.current = newPoints;
      targetRef.current = { x: width / 2, y: height / 2 };
    };

    // Add event listeners
    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  return (
    <div className="animated-background">
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1, // Changed from -2 to -1
          background: isDarkMode ? '#1a1a1a' : '#ffffff',
          display: 'block'
        }}
      />
    </div>
  );
};

// Helper functions remain the same...
function getDistance(p1, p2) {
  return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
}

function drawLines(ctx, point, isDarkMode) {
  if (!point.active) return;
  
  const color = isDarkMode ? 'rgba(156,217,249,' : 'rgba(0,100,200,';
  
  point.closest.forEach(closestPoint => {
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    ctx.lineTo(closestPoint.x, closestPoint.y);
    ctx.strokeStyle = color + point.active + ')';
    ctx.stroke();
  });
}

function Circle(pos, rad, color) {
  this.pos = pos || null;
  this.radius = rad || null;
  this.color = color || null;
  this.active = 0;

  this.draw = function(ctx, isDarkMode) {
    if (!this.active) return;
    
    const color = isDarkMode ? 'rgba(156,217,249,' : 'rgba(0,100,200,';
    
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color + this.active + ')';
    ctx.fill();
  };
}

function shiftPoint(p) {
  const newX = p.originX - 50 + Math.random() * 100;
  const newY = p.originY - 50 + Math.random() * 100;
  
  // Simple animation without TweenLite
  const startX = p.x;
  const startY = p.y;
  const duration = 1000 + Math.random() * 1000;
  const startTime = Date.now();
  
  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (easeInOut)
    const easeProgress = progress < 0.5 
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    
    p.x = startX + (newX - startX) * easeProgress;
    p.y = startY + (newY - startY) * easeProgress;
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // Start next animation
      setTimeout(() => shiftPoint(p), 100);
    }
  };
  
  animate();
}

export default AnimatedBackground;