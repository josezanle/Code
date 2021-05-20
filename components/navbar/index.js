import MenuBurger from "./c-menu-burger";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Consigna R2",
    href: "/R2",
  },
  {
    name: "Consigna R3",
    href: "/R3",
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <MenuBurger links={links} />
      <style jsx>{`
        .navbar {
          width: 100vw;
          position: fixed;
          top: 0;
          padding: 1em 2em;
          display: flex;
          justify-content: flex-end;
          background: transparent;
          z-index: 100;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
