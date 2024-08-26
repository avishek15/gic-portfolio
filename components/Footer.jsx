import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-black-200 border-l-transparent border-r-transparent text-white">
      <div className="container p-4 flex justify-between">
        <Image src="/images/GIC-Logo.jpg" alt="Home" width={125} height={125} />
        <p className="text-slate-600">&copy; 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
