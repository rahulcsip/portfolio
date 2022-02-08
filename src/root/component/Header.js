import { Link, Outlet } from "react-router-dom";
const Header = (props) => {
  // DO through MAP()
  // const data = ['HOME','ABOUT','CONTACT','BLOG']

  return (
    // <div
    //   style={{
    //     height: "8vh",
    //     backgroundColor: "black",
    //     display: "flex",
    //     flexDirection: "row",
    //     opacity: 0.9,
    //     borderRadius: 10,
    //   }}
    // >
    //   <div
    //     style={{
    //       flex: 2,
    //       alignItems: "center",
    //       display: "flex",
    //       color: "whitesmoke",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <h1>RAHUL PANDEY</h1>
    //   </div>

    //   <div
    //     style={{
    //       flex: 3,
    //       display: "flex",
    //       flexDirection: "row",
    //       color: "whitesmoke",
    //       justifyContent: "space-around",
    //       alignItems: "center",
    //     }}
    //   >
    //     <h3>
    //       <Link
    //         style={{ color: "whitesmoke", textDecoration: "none" }}
    //         to="/portfolio/"
    //       >
    //         HOME
    //       </Link>
    //     </h3>
    //     <h3>
    //       <Link
    //         style={{ color: "whitesmoke", textDecoration: "none" }}
    //         to="/about"
    //       >
    //         ABOUT
    //       </Link>
    //     </h3>
    //     <h3>
    //       <Link
    //         style={{ color: "whitesmoke", textDecoration: "none" }}
    //         to="/contact"
    //       >
    //         CONTACT
    //       </Link>
    //     </h3>
    //     <h3>
    //       <Link
    //         style={{ color: "whitesmoke", textDecoration: "none" }}
    //         to="/blog"
    //       >
    //         BLOG
    //       </Link>
    //     </h3>
    //   </div>
    //   <Outlet />
    // </div>
    <nav
      class={
        props.dark
          ? "navbar navbar-expand-lg  navbar-light bg-dark "
          : "navbar navbar-expand-lg  navbar-light "
      }
    >
      <div class="container">
        <div
          style={{
            alignItems: "center",
            display: "flex",
            color: "whitesmoke",
            justifyContent: "center",
          }}
        >
          <h1 style={{fontamily: 'Josefin Slab'}}>{`< Rahul Pandey />`}</h1>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              color: "whitesmoke",
              justifyContent: "space-around",
              alignItems: "center",
              paddingLeft: "40%",
            }}
          >
            <h3 style={{ paddingRight: "20%" }}>
              <Link
                style={{ color: "whitesmoke", textDecoration: "none" }}
                to="/portfolio/"
              >
                HOME
              </Link>
            </h3>
            <h3 style={{ paddingRight: "20%" }}>
              <Link
                style={{ color: "whitesmoke", textDecoration: "none" }}
                to="/about"
              >
                ABOUT
              </Link>
            </h3>
            <h3 style={{ paddingRight: "20%" }}>
              <Link
                style={{ color: "whitesmoke", textDecoration: "none" }}
                to="/contact"
              >
                CONTACT
              </Link>
            </h3>
            <h3 style={{ paddingRight: "20%" }}>
              <Link
                style={{ color: "whitesmoke", textDecoration: "none" }}
                to="/blog"
              >
                BLOG
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
