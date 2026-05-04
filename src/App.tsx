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
        NOT BURNING MAN
      </div>

      <div className="flex flex-col items-center">
        <div className="label-sm text-accent-pink mb-4 opacity-100">THIS IS NOT BURNING MAN</div>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="main-title text-center"
        >
          <span>BALI</span>
        </motion.h1>
      </div>

      <p className="mt-8 text-xs md:text-sm tracking-[0.4em] md:tracking-[0.8em] text-white text-center uppercase font-black max-w-lg md:max-w-none">
        A TRANCE PARTY IN A FOREST IN THE MIDDLE OF GOTHAM CITY
      </p>

      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-8 bg-border-dark" />
          <span className="text-[10px] tracking-[0.3em] text-white uppercase font-bold">VENUE: THE GRANADA</span>
          <div className="h-[1px] w-8 bg-border-dark" />
        </div>
        <div className="font-mono text-[9px] text-accent-pink tracking-[0.4em] uppercase animate-pulse">
          FUNDING_SECURED: $1,000,000,000.00_USD
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 z-[-1] opacity-10">
        <div className="w-full h-full [background:linear-gradient(90deg,#333_1px,transparent_1px),linear-gradient(#333_1px,transparent_1px)] [background-size:100px_100px]" />
      </div>
    </section>
  );
};

const Lineup = () => {
  const assets = [
    { label: 'Strategic Command', names: ['Swedish House Mafia', 'Bad Bunny', 'Nine Inch Nails'] },
    { label: 'Special Guest Recon', names: ['Britney Spears', 'Jennifer Lopez', 'Borg Queen'] },
    { label: 'System Audio Proxy', names: ['Drone Fleet', 'DJ Spotify'], sub: 'ENCRYPTED SIGNAL: 001-992-BK-2100' },
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

const BlockParty = () => {
  return (
    <section className="border-b border-border-dark p-10 md:p-24 bg-white text-black relative overflow-hidden">
      <div className="tech-decor-corner top-10 right-10 opacity-20" />
      <div className="absolute top-1/2 left-0 vertical-label !text-black/20 pointer-events-none md:block hidden">
        LOCAL_INTERCEPT_SUTTER_ST
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="label-sm !text-black/40">Active Deployment: San Francisco</div>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">
          SUTTER STREET<br/>BLOCK PARTY
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-8">
          <div className="text-left md:border-l-4 md:border-black md:pl-6">
            <div className="font-mono text-[10px] uppercase tracking-widest mb-1">Target_Audience</div>
            <div className="font-bold text-xl uppercase italic">Sutter Street Residents</div>
            <div className="text-[10px] font-bold text-accent-pink tracking-widest mt-1">++ MUSIC_INDUSTRY_INVITED</div>
          </div>
          <div className="text-left md:border-l-4 md:border-black md:pl-6">
            <div className="font-mono text-[10px] uppercase tracking-widest mb-1">Mission_Type</div>
            <div className="font-bold text-xl uppercase italic">Neighborhood Intercept</div>
          </div>
        </div>
        <p className="text-black/60 max-w-xl mx-auto text-sm leading-relaxed pt-8 font-bold">
          MISSION UPDATE: Strategic Command invites all Sutter Street inhabitants and Music Industry delegates to a high-decibel neighborhood gathering. Bring your own encryption keys and energy cells. 
        </p>
        
        <div className="pt-8">
          <button 
            onClick={() => {
              const btn = document.getElementById('ra-post-btn');
              if (btn) {
                btn.innerText = 'TRANSMITTING...';
                btn.classList.add('animate-pulse');
                setTimeout(() => {
                  btn.innerText = 'POSTED TO RESIDENT ADVISOR';
                  btn.classList.remove('animate-pulse');
                  btn.classList.replace('bg-black', 'bg-accent-pink');
                }, 2000);
              }
            }}
            id="ra-post-btn"
            className="px-8 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs transition-all hover:scale-105"
          >
            POST TO RESIDENT ADVISOR
          </button>
        </div>
      </div>
    </section>
  );
};

const RulesOfEngagement = () => {
  return (
    <section className="border-b border-border-dark bg-accent-pink text-black p-6 overflow-hidden">
      <motion.div 
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex gap-20 whitespace-nowrap text-xl font-black uppercase italic tracking-tighter"
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="flex items-center gap-8">
            <span>RULE_01: NO POLITICS</span>
            <X size={16} />
            <span>RULE_02: NO WAR</span>
            <X size={16} />
            <span>RULE_03: NO ENERGY VAMPIRES</span>
            <div className="w-4 h-4 bg-black rounded-full" />
          </span>
        ))}
      </motion.div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-border-dark">
      <div className="p-10 md:p-24 border-b lg:border-b-0 lg:border-r border-border-dark flex flex-col justify-center gap-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000')] bg-cover grayscale" />
        </div>
        <Shield className="w-12 h-12 text-accent-pink z-10" />
        <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none z-10">GOTHAM FOREST SECURITY</h4>
        <p className="text-tech-gray leading-relaxed max-w-md text-sm md:text-base z-10">
          APEX Space & Defense handles the perimeter of the urban wild. Biometric canopy tracking, ultrasonic trance-sync, and Gotham-tier crowd suppression.
        </p>
      </div>
      <div className="p-10 md:p-24 flex flex-col justify-center gap-8 bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&q=80&w=1000')] bg-cover" />
        </div>
        <Globe className="w-12 h-12 text-black z-10" />
        <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none z-10">TRANCE INTERCEPT</h4>
        <p className="text-black/60 leading-relaxed max-w-md text-sm md:text-base z-10">
          High-frequency sonic immersion in the heart of the metropolis. A total sensory override where nature meets the neon abyss of Gotham City.
        </p>
        <button className="self-start mt-4 px-10 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-accent-pink transition-colors text-sm z-10">
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
        FUNDED WITH <span className="text-white font-bold">$1B SPONSORSHIP</span>
      </div>
      <div className="text-tech-gray">
        PRESENTED BY <span className="text-spotify-green font-bold">SPOTIFY</span>
      </div>
      <div className="text-tech-gray/60 ml-auto">
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
            <RulesOfEngagement />
            <BlockParty />
            <Features />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
