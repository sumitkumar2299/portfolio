import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-emerald-400 font-bold text-xl">Sumit Kumar</span>
        <div className="flex gap-8">
          {['Projects', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              className="text-slate-300 hover:text-emerald-400 cursor-pointer transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}