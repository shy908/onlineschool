import React from 'react';
import FooterList from './FooterList';
import { Link } from 'react-router-dom';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { MdFacebook, MdWhatsapp } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-slate-200 text-sm mt-16">
      <div className="flex flex-col md:flex-row justify-between pt-16 pb-8 px-8">
        {/* Explore Courses Section */}
        <FooterList>
          <h3 className="text-base font-bold mb-2">Explore Services</h3>
          <Link to="/service/home-schooling" className='hover:text-secondary'>Home Schooling</Link>
          <Link to="/service/primary-education" className='hover:text-secondary'>Primary Education</Link>
          <Link to="/secondary-education" className='hover:text-secondary'>Secondary Education</Link>
          <Link to="/service/high-school" className='hover:text-secondary'>High School Education</Link>
          <Link to="/service/adult-literacy" className='hover:text-secondary'>Adult Literacy</Link>
          <Link to="/service/professional-courses" className='hover:text-secondary'>Professional Courses</Link>
        </FooterList>

        {/* Student Resources Section */}
        <FooterList>
          <h3 className="text-base font-bold mb-2">Student Resources</h3>
          <Link to="/contact" className='hover:text-secondary'>Help Center</Link>
          <Link to="/faq" className='hover:text-secondary'>FAQs</Link>
          <Link to="/contact" className='hover:text-secondary'>Contact Support</Link>
          <Link to="/how-it-works" className='hover:text-secondary'>Privacy Policy</Link>
          <Link to="/how-it-works" className='hover:text-secondary'>Terms & Conditions</Link>
        </FooterList>

        {/* About Maduyu Academy Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-base font-bold mb-2">About Maduyu Academy</h3>
          <p className="mb-2">
            At <span className="font-bold">Maduyu Academy</span>, we believe in the power of education to transform lives. Our interactive online school connects students with experienced educators, offering a wide range of services tailored to help learners achieve their goals.
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
            <Link to="https://www.facebook.com/share/1XQxQqET9L/" target="_blank" rel="noopener noreferrer" className='hover:text-secondary'>
              <MdFacebook size={25} />
            </Link>
            <Link to="https://wa.me/message/GWB4QDNZVRUFL1" target="_blank" rel="noopener noreferrer" className='hover:text-secondary'>
              <AiFillYoutube size={25} />
            </Link>
            <Link to="https://wa.me/message/GWB4QDNZVRUFL1" target="_blank" rel="noopener noreferrer" className='hover:text-secondary'>
              <AiFillInstagram size={25} />
            </Link>
            <Link to="https://wa.me/message/GWB4QDNZVRUFL1" target="_blank" rel="noopener noreferrer" className='hover:text-secondary'>
              <MdWhatsapp size={25} />
            </Link>
          </div>
        </FooterList>
      </div>
    </footer>
  );
};

export default Footer;