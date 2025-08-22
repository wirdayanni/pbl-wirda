import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Job Sheet. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;