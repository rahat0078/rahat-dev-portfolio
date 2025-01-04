import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo1.png';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-neutral text-neutral-content p-10">
  <aside>
    <img className='max-w-xs w-full' src={logo} alt="" />
    <h2 className="text-2xl font-semibold mt-6">Ruhul Amin Rahat</h2>
    <p className="text-md">MERN Stack Developer | FrontEnd Focused</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a className='text-3xl' target='_blank' href="https://www.facebook.com/profile.php?id=100028041721537"><FaFacebookF/></a>
      <a className='text-3xl' target='_blank' href="https://github.com/rahat0078"><FaGithub/></a>
      <a className='text-3xl' target='_blank' href="https://www.linkedin.com/"><FaLinkedin/></a>
    </div>
  </nav>
</footer>
    );
};

export default Footer;