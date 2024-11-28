import Navbar from "./Navbar";

const NavbarService = () => {
  return (
    <>
      <Navbar
        contactText={"Contact Us +"}
        links={[
          { name: "Home" },
          { name: "About" },
          { name: "Services" },
          { name: "Pages" },
          { name: "Blogs" },
          { name: "Contact" },
        ]}
      />
    </>
  );
};

export default NavbarService;
