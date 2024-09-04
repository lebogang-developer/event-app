// import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link className='text-primary-500' href='/'>
          Sthiba Events..
        </Link>
        <Link
          href='https://lebogang-developer.netlify.app/'
          target='_blank'
        >
          Lebo Sekaleli
        </Link>
        <p>2024 Sthiba Events. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
