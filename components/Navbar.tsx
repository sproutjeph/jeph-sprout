import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavItem from './NavItem';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { pathname } = useRouter();

  const [active, setActive] = useState('');

  //later
  useEffect(() => {
    if (pathname === '/') setActive('About');
    else if (pathname === '/projects') setActive('Projects');
    else if (pathname === '/resume') setActive('Resume');
  }, [active, pathname]);

  const { setTheme, theme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 md:text-2xl border-green">
        {active}
      </span>

      <div className="text-base font-normal md:text-xl">
        <NavItem active={active} setActive={setActive} name="About" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/projects"
        />
      </div>
      <div
        className="invisible lg:visible h-[50px] w-[50px] absolute  left-[55%] dark:bg-[#1c1c1e] bg-[#59f9b7] rounded-full p-[10px] cursor-pointer"
        onClick={changeTheme}
      >
        <Image
          src="/images/theme-switch.png"
          height={100}
          width={100}
          alt="theme switch"
          className="object-cover w-[40px] h-[40px] mx-auto  rounded-full "
        />
      </div>
    </div>
  );
};

export default Navbar;
