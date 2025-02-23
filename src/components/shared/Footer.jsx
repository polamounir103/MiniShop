import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="w-full">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 md:px-20">
          
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-300">
              Company
            </h2>
            <ul className="text-gray-400">
              <li className="mb-2 hover:text-white">
                <a href="#">About</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Careers</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Brand Center</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Help Center Section */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-300">
              Help Center
            </h2>
            <ul className="text-gray-400">
              <li className="mb-2 hover:text-white">
                <a href="#">Discord Server</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Twitter</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Facebook</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-300">
              Legal
            </h2>
            <ul className="text-gray-400">
              <li className="mb-2 hover:text-white">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Licensing</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>

          {/* Download Section */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-300">
              Download
            </h2>
            <ul className="text-gray-400">
              <li className="mb-2 hover:text-white">
                <a href="#">iOS</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Android</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">Windows</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="#">MacOS</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="px-4 md:px-20 py-4 bg-gray-900 text-gray-400 text-sm text-center">
          <span>
            © 2025 ,  SEF SHOP All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
