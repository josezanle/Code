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
  {
    name: "Consigna R4",
    href: "/R4",
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <MenuBurger links={links} />
      <style jsx>{`
        .navbar {
          width: 100vw;
          height: 15vh;
          padding: 1em 2em;
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
