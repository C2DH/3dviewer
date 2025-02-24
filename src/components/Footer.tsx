import LogoUni from "./LogoUni";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content fixed flex flex-col-reverse md:flex-row justify-between items-center w-full bottom-5 z-1">
        <span className="ml-5 mr-5 mt-3 text-center md:text-left">
          Copyright © Université du Luxembourg {new Date().getFullYear()}. All
          rights reserved
        </span>
        <LogoUni width={200} className="mr-0 md:mr-5" />
      </div>
    </footer>
  );
};

export default Footer;
