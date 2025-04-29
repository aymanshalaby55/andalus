// src/components/AnimatedLink.tsx
import { useLoading } from '../Context/LoadingContext';
import { Link, LinkProps } from 'react-router-dom';
import { motion } from 'framer-motion';

export function AnimatedLink({ to, children, ...props }: LinkProps) {
  const { startLoading } = useLoading();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={to}
        onClick={startLoading}
        className="text-white hover:text-[#ff6600] transition-colors duration-300 px-4 py-2"
        {...props}
      >
        {children}
      </Link>
    </motion.div>
  );
}