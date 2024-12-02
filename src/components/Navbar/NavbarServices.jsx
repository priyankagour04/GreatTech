import Navbar from "./Navbar";

const NavbarService = () => {
  return (
    <>
      <Navbar
        contactText={"Contact Us +"}
        links={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Services", path: "/services" },
          { name: "Our Team", path: "/team" },
          { name: "Blogs", path: "/blogs" },
          { name: "Contact", path: "/contact" },
        ]}
      />
    </>
  );
};

export default NavbarService;
