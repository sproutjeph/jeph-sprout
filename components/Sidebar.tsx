import Image from 'next/image';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { GiArrowDunk, GiTie } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { useTheme } from 'next-themes';
function Sidebar() {
  const { setTheme, theme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div>
      <div className="w-[130px] h-[130px] mx-auto img-container">
        <Image
          src="/images/jeph.jpg"
          height="150px"
          width="150px"
          alt="jephs photo"
          className="relative object-cover w-full h-full mx-auto rounded-full"
        />
      </div>

      <h3 className="my-4 text-3xl font-medium tracking-wider capitalize ">
        <span className="text-green">jephthah</span> mbah
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        web Developer
      </p>
      <a
        href="/assets/my-cv.pdf"
        // download="my-cv.pdf"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
      >
        <GiArrowDunk className="w-6 h-6 mr-1" />
        <span>download resume</span>
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a
          href="https://github.com/sproutjeph/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/jephthah-mbah-71244263/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://web.facebook.com/jephthah.mbah/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />{' '}
        </a>
        <a
          href="https://twitter.com/jephthah.mbah/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />{' '}
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Taraba,Nigeria </span>
        </div>
        <p className="my-2 "> donjeph@gmail.com </p>
        <p className="my-2"> +2347065406165&nbsp; / +2348122107647</p>
      </div>

      <button
        className="w-8/12 px-5 py-2   text-black font-bold rounded-full cursor-pointer bg-gradient-to-r from-green to-[#66feea] hover:scale-105 focus:outline-none"
        onClick={() => window.open('mailto:donjeph@gmail.com')}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-black font-bold rounded-full cursor-pointer bg-gradient-to-r from-green to-[#66feea] focus:outline-none hover:scale-105 "
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Sidebar;
