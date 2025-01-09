import React from 'react';
import FooterList from './FooterList';
import { Link } from 'react-router-dom';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { MdFacebook, MdWhatsapp } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-[#1f5256] text-slate-200 text-sm mt-16">
      <div className="flex flex-col md:flex-row justify-between pt-16 pb-8 px-8">
        {/* Explore Courses Section */}
        <FooterList>
          <h3 className="text-base font-bold mb-2">Explore Courses</h3>
          <Link to="/courses" className='hover:text-yellow-500'>Science</Link>
          <Link to="/courses" className='hover:text-yellow-500'>Mathematics</Link>
          <Link to="/courses" className='hover:text-yellow-500'>Languages</Link>
          <Link to="/courses" className='hover:text-yellow-500'>Technology</Link>
          <Link to="/courses" className='hover:text-yellow-500'>Arts</Link>
          <Link to="/courses" className='hover:text-yellow-500'>Business Studies</Link>
        </FooterList>

        {/* Student Resources Section */}
        <FooterList>
          <h3 className="text-base font-bold mb-2">Student Resources</h3>
          <Link to="/contact" className='hover:text-yellow-500'>Help Center</Link>
          <Link to="/faq" className='hover:text-yellow-500'>FAQs</Link>
          <Link to="/contact" className='hover:text-yellow-500'>Contact Support</Link>
          <Link to="/how-it-works" className='hover:text-yellow-500'>Privacy Policy</Link>
          <Link to="/how-it-works" className='hover:text-yellow-500'>Terms & Conditions</Link>
        </FooterList>

        {/* About Maduyu Academy Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-base font-bold mb-2">About Maduyu Academy</h3>
          <p className="mb-2">
            At <span className="font-bold">Maduyu Academy</span>, we believe in the power of education to transform lives. Our interactive online school connects students with experienced educators, offering a wide range of courses tailored to help learners achieve their goals.
          </p>
          <p className="mb-2">
            Join us today and discover a world of learning opportunities, all from the comfort of your home.
          </p>
          <p>&copy;{new Date().getFullYear()} Maduyu Academy. All rights reserved</p>
        </div>

        {/* Follow Us Section */}
        <FooterList>
          <h3 className="text-base font-bold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-500'>
              <MdFacebook size={25} />
            </Link>
            <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-500'>
              <AiFillYoutube size={25} />
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-500'>
              <AiFillInstagram size={25} />
            </Link>
            <Link to="https://wa.me/whatsapplink" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-500'>
              <MdWhatsapp size={25} />
            </Link>
          </div>
        </FooterList>
      </div>
    </footer>
  );
};

export default Footer;