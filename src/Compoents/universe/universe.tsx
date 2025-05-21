import React, {  useEffect, CSSProperties } from 'react';

interface SolarSystemProps {
  mousePosition: {
    x: number;
    y: number;
  };
}


type Styles = {
  universe: CSSProperties;
  universeLines: CSSProperties;
  universeLines2: CSSProperties;
  solarSystem: CSSProperties;
  sun: CSSProperties;
  orbit: (radius: number) => CSSProperties;
  planet: (size: number, color: string) => CSSProperties;
  moonOrbit: CSSProperties;
  moon: CSSProperties;
};

const SolarSystem = ({mousePosition}:SolarSystemProps) => {
  

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const insertAnimation = (rule: string) => {
      if (!styleSheet.cssRules) return;
      styleSheet.insertRule(rule, styleSheet.cssRules.length);
    };

    insertAnimation(`
      @keyframes systemDrift {
        0% { transform: translate(-50%, -50%) translate3d(-100px, -50px, 0) rotateZ(0deg); }
        100% { transform: translate(-50%, -50%) translate3d(100px, 50px, 0) rotateZ(5deg); }
      }
    `);
  
    insertAnimation(`
      @keyframes drift {
        0% { transform: translate(0, 0); }
        100% { transform: translate(${window.innerWidth}px, ${window.innerHeight}px); }
      }
    `);
    

    insertAnimation(`
      @keyframes rotate {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
      }
    `);
  
    insertAnimation(`
      @keyframes moveLines {
        from { background-position: 0 0; }
        to { background-position: 100% 100%; }
      }
    `);
  
    insertAnimation(`
      @keyframes twinkle {
        0% { opacity: 0.2; }
        50% { opacity: 1; }
        100% { opacity: 0.2; }
      }
    `);
  }, []);


  
 const generateStars = () => {
    return Array.from({ length: 300 }).map((_, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          width: `${Math.random() * 3}px`,
          height: `${Math.random() * 3}px`,
          backgroundColor: 'white',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.8 + 0.2,
          animation: `
            twinkle ${2 + Math.random() * 5}s ease-in-out infinite,
            drift ${50 + Math.random() * 100}s linear infinite
          `,
          borderRadius: '50%',
          willChange: 'transform, opacity'
        }}
      />
    ));
  };

  return (
    <div 
      style={styles.universe} 
      
    >
      {generateStars()}
      <div style={styles.universeLines}></div>
      <div style={styles.universeLines2}></div>
      <div 
        style={{
          ...styles.solarSystem,
          transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
        }}
      >
        <div style={styles.sun}></div>
        
    
        <div style={styles.orbit(40)}>
          <div style={styles.planet(6, '#A0522D')}></div>
        </div>

      
        <div style={styles.orbit(70)}>
          <div style={styles.planet(10, '#DEB887')}></div>
        </div>

      
        <div style={styles.orbit(100)}>
          <div style={styles.planet(12, '#4169E1')}>
            <div style={styles.moonOrbit}>
              <div style={styles.moon}></div>
            </div>
          </div>
        </div>

        
        <div style={styles.orbit(130)}>
          <div style={styles.planet(8, '#CD5C5C')}></div>
        </div>

        
        <div style={styles.orbit(170)}>
          <div style={styles.planet(20, '#DAA520')}></div>
        </div>

      </div>

      <div 
        style={{
          ...styles.solarSystem,
          transform: `
            scale(0.8) // Scale down the solar system
            rotateX(${mousePosition.y}deg) 
            rotateY(${mousePosition.x}deg)
          `,
        }}
      ></div>
    </div>
  );
};


const styles: Styles = {
  universe: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(to bottom, #000000 0%, #160033 100%)',
    overflow: 'auto', // Allow scrolling
    transformStyle: 'preserve-3d',
    perspective: '2000px', // Increased perspective
  },
  solarSystem: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.1s',
    minHeight: '1200px', 
  },
  universeLines: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
    backgroundSize: '20px 100%',
    animation: 'moveLines 100s linear infinite',
  },
  universeLines2: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
    backgroundSize: '100% 20px',
    animation: 'moveLines 120s linear infinite',
  },
 
  sun: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    background: 'radial-gradient(#ffd700, #ff8c00)',
    borderRadius: '50%',
    boxShadow: '0 0 60px #ff8c00',
    transform: 'translate(-50%, -50%)',
  },
  orbit: (radius: number) => ({
    position: 'absolute',
    width: `${radius * 2}px`,
    height: `${radius * 2}px`,
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    animation: `rotate ${radius * 4}s linear infinite`,
  }),
  planet: (size: number, color: string) => ({
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    background: `radial-gradient(circle at 30% 30%, ${color}, #000)`,
    borderRadius: '50%',
    top: '50%',
    left: '0',
    transform: 'translate(-50%, -50%)',
  }),
  moonOrbit: {
    position: 'absolute',
    width: '30px',
    height: '30px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    animation: 'rotate 5s linear infinite',
  },
  moon: {
    position: 'absolute',
    width: '4px',
    height: '4px',
    background: '#888',
    borderRadius: '50%',
    top: '50%',
    left: '0',
    transform: 'translate(-50%, -50%)',
  },
};




export default SolarSystem;