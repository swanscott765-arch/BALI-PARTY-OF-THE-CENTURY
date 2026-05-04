import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Globe, 
  Menu,
  X,
  Satellite
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  return (
    <header className="tech-header sticky top-0 bg-black/90 backdrop-blur-md z-50">
      <div className="flex items-center gap-4">
        <span>APEX SPACE & DEFENSE</span>
      </div>
      <div className="font-black text-white hidden md:block">OPERATIONAL BRIEFING</div>
      <div className="flex items-center gap-4">
        <div className="y21k-tag">Y21K UNIFIED COMMAND</div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex flex-col justify-center items-center px-10 border-b border-border-dark overflow-hidden">
      <div className="tech-decor-corner top-20 left-10" />
      
      <div className="absolute top-28 right-10 text-[10px] text-tech-gray transform rotate-90 origin-right transition-all hidden md:block">
        LAT: 8.4095° S // LONG: 115.1889° E
      </div>
      
      <div className="absolute top-[40%] right-0 md:right-10 vertical-label hidden md:block">
        THE PARTY OF THE DECADE
      </div>

      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="main-title text-center"
      >
        <span>BALI</span>
      </motion.h1>

      <p className="mt-8 text-xs md:text-sm tracking-[0.4em] md:tracking-[0.8em] text-tech-gray text-center uppercase font-light max-w-sm md:max-w-none">
        A BAY AREA CLASSIC // GLOBAL INTERCEPT
      </p>

      {/* Background decoration */}
      <div className="absolute inset-0 z-[-1] opacity-10">
        <div className="w-full h-full [background:linear-gradient(90deg,#333_1px,transparent_1px),linear-gradient(#333_1px,transparent_1px)] [background-size:100px_100px]" />
      </div>
    </section>
  );
};

const Lineup = () => {
  const assets = [
    { label: 'Strategic Command', names: ['Swedish House Mafia', 'Bad Bunny'] },
    { label: 'Special Guest Recon', names: ['Britney Spears', 'Jennifer Lopez'] },
    { label: 'System Audio Proxy', names: ['DJ Spotify'], sub: 'ENCRYPTED SIGNAL: 001-992-BK-2100' },
  ];

  return (
    <section id="lineup" className="grid grid-cols-1 md:grid-cols-3 border-b border-border-dark">
      {assets.map((item, i) => (
        <div key={i} className="lineup-item border-b md:border-b-0 md:border-r last:border-r-0 border-border-dark group hover:bg-white/5 transition-colors">
          <div className="label-sm">{item.label}</div>
          {item.names.map(name => (
            <motion.div 
              key={name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="artist-name"
            >
              {name}
            </motion.div>
          ))}
          {item.sub && (
            <div className="text-[11px] mt-4 text-[#555] font-mono tracking-wider">{item.sub}</div>
          )}
        </div>
      ))}
    </section>
  );
};

const Features = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-border-dark">
      <div className="p-10 md:p-24 border-b lg:border-b-0 lg:border-r border-border-dark flex flex-col justify-center gap-8">
        <Shield className="w-12 h-12 text-accent-pink" />
        <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">DEFENSE LEVEL SECURITY</h4>
        <p className="text-tech-gray leading-relaxed max-w-md text-sm md:text-base">
          APEX Space & Defense provides the perimeter. Biometric entry, zero-gravity dance floors, and orbital beverage delivery protocols are standard.
        </p>
      </div>
      <div className="p-10 md:p-24 flex flex-col justify-center gap-8 bg-white text-black">
        <Globe className="w-12 h-12 text-black" />
        <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">GLOBAL INTERCEPT</h4>
        <p className="text-black/60 leading-relaxed max-w-md text-sm md:text-base">
          Holographic synchronization between the Bali beachhead and the lunar outpost. Experience the party across multiple dimensions.
        </p>
        <button className="self-start mt-4 px-10 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-accent-pink transition-colors text-sm">
          REQUEST ACCESS
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="tech-header !h-auto py-10 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
      <div>SYSTEM STATUS: <span className="text-white">OPTIMAL</span></div>
      <div className="text-tech-gray">
        SPONSORED BY <span className="text-spotify-green font-bold">SPOTIFY</span>
      </div>
      <div className="text-tech-gray/60">
        © 2100 APEX DEFENSE CORP
      </div>
    </footer>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-bg-black flex flex-col font-sans">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6"
          >
            <div className="y21k-tag text-2xl py-2 px-6 mb-8 animate-pulse">
              LOADING PROTOCOL
            </div>
            <div className="font-mono text-[10px] text-tech-gray tracking-[0.5em]">
              SYST_BOOT_V0.8.21
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 flex flex-col"
        >
          <Header />
          <main className="flex-1">
            <Hero />
            <Lineup />
            <Features />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
