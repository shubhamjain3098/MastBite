import { Link } from "react-router-dom";

// const Footer = () => {
//   return <h4>Footer</h4>;
// };

// export default Footer;

const Footer = () => (
  <footer className="bg-[#ff7a21] text-center text-white py-4 mt-8 w-full">
    <div className="text-gray-300 text-sm">
      © {new Date().getFullYear()} MastBite. All rights reserved.
    </div>
    <div className="mt-2 flex justify-center gap-4">
      <Link to="/about" className="hover:underline">
        About
      </Link>
      <Link to="/contact" className="hover:underline">
        Contact
      </Link>
      <Link to="/privacy" className="hover:underline">
        Privacy Policy
      </Link>
    </div>
  </footer>
);

export default Footer;
