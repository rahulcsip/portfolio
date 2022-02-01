import { Link, Outlet } from "react-router-dom";
const Header = () => {
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
          // <Link
          //   style={{ color: "whitesmoke", textDecoration: "none" }}
          //   to="/portfolio/"
          // >
          //   HOME
          // </Link>
    //     </h3>
    //     <h3>
          // <Link
          //   style={{ color: "whitesmoke", textDecoration: "none" }}
          //   to="/about"
          // >
          //   ABOUT
          // </Link>
    //     </h3>
    //     <h3>
          // <Link
          //   style={{ color: "whitesmoke", textDecoration: "none" }}
          //   to="/contact"
          // >
          //   CONTACT
          // </Link>
    //     </h3>
    //     <h3>
          // <Link
          //   style={{ color: "whitesmoke", textDecoration: "none" }}
          //   to="/blog"
          // >
          //   BLOG
          // </Link>
    //     </h3>
    //   </div>
    //   <Outlet />
    // </div>
    <nav class="navbar navbar-expand-lg    navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">RAHUL PANDEY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ">
        <Link
            style={{ color: "whitesmoke", textDecoration: "none" }}  to="/portfolio/"
          >
            HOME
          </Link>
        </li>
        <li class="nav-item">
        <Link
            style={{ color: "whitesmoke", textDecoration: "none" }}
            to="/about"
          >
            ABOUT
          </Link>
        </li>
        <li class="nav-item dropdown">
        <Link
            style={{ color: "whitesmoke", textDecoration: "none" }}
            to="/blog"
          >
            BLOG
          </Link>
         
        </li>
        <li class="nav-item">
        <Link
            style={{ color: "whitesmoke", textDecoration: "none" }}
            to="/contact"
          >
            CONTACT
          </Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
  );
};

export default Header;
