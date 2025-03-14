
import React from 'react';
import { motion } from 'framer-motion';

interface AppBadgeProps {
  platform: 'android' | 'ios';
  className?: string;
}

const AppBadge: React.FC<AppBadgeProps> = ({ platform, className = '' }) => {
  const googlePlayContent = (
    <>
      <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.60127 20.5003C4.2998 20.5003 4.02979 20.3803 3.79124 20.1403C3.55269 19.9003 3.43342 19.6303 3.43342 19.3303V4.67033C3.43342 4.37033 3.55269 4.10033 3.79124 3.86033C4.02979 3.62033 4.2998 3.50033 4.60127 3.50033L16.1334 12.0003L4.60127 20.5003Z" fill="white" />
        <path d="M16.1333 12.0003L4.60117 20.5003L18.4438 12.0003L4.60117 3.50033L16.1333 12.0003Z" fill="white" />
        <path d="M16.1333 12.0003L18.4438 12.0003L21.4329 13.7503C21.705 13.9103 21.8411 14.1203 21.8411 14.3803C21.8411 14.6403 21.705 14.8503 21.4329 15.0103L18.4438 16.7603L16.1333 12.0003Z" fill="white" />
        <path d="M18.4437 16.7603L16.1332 12.0003L18.4437 7.24033L21.4328 8.99033C21.7049 9.15033 21.841 9.36033 21.841 9.62033C21.841 9.88033 21.7049 10.0903 21.4328 10.2503L18.4437 12.0003V16.7603Z" fill="white" />
      </svg>
      <div className="text-left">
        <div className="text-xs">DISPONÍVEL NO</div>
        <div className="text-xl font-semibold -mt-1">Google Play</div>
      </div>
    </>
  );

  const appStoreContent = (
    <>
      <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5556 12.4444C17.5556 9.77778 19.7778 7.66667 22.4444 7.55556C22.3333 4.66667 20 2.11111 16.8889 2.11111C14.7778 2.11111 13.5556 3.11111 12.4444 3.11111C11.3333 3.11111 9.88889 2.11111 8.11111 2.11111C5.44444 2.11111 2.11111 4.33333 2.11111 8.66667C2.11111 11.3333 3 14.1111 4.33333 16.4444C5.44444 18.3333 6.77778 20.1111 8.55556 20.1111C9.77778 20.1111 10.5556 19.2222 12.1111 19.2222C13.6667 19.2222 14.3333 20.1111 15.6667 20.1111C17.4444 20.1111 18.7778 18.1111 19.8889 16.2222C20.5556 15 21 13.8889 21.3333 12.6667C19.1111 11.6667 17.5556 10 17.5556 12.4444Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.7778 7.11111C13.3333 6.44444 14 5.66667 15 5.44444C15.2222 4.22222 14.7778 3 14.1111 2.11111" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="text-left">
        <div className="text-xs">BAIXE NA</div>
        <div className="text-xl font-semibold -mt-1">App Store</div>
      </div>
    </>
  );

  return (
    <motion.a
      href={platform === 'android' ? '#android' : '#ios'}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center py-2 px-4 bg-burger-black text-white rounded-xl border border-burger-white/20 hover:border-burger-white/40 ${className}`}
    >
      {platform === 'android' ? googlePlayContent : appStoreContent}
    </motion.a>
  );
};

export default AppBadge;
