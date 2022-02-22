import { Link, Outlet } from "react-router-dom";
const Header = (props) => {
  return (
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
          <h1
            style={{ fontamily: "Josefin Slab", fontWeight: "700" }}
          >{`< Rahul Pandey />`}</h1>
        </div>
        <button
          style={{ backgroundColor: "whitesmoke" }}
          class="navbar-toggler "
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
                to="/project"
              >
                PROJECT
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



export const HeaderTwo = ()=>(
  <div style={{backgroundColor:"",height:"10vh",width:"100vw",display:"flex",flexDirection:"row"}}
    >
<div style={{display:"flex",flex:2,backgroundColor:"",justifyContent:"center",alignItems:"center"}}>
<h1
            style={{ fontamily: "Josefin Slab", fontWeight: "700" }}
          >{`< Rahul Pandey />`}</h1>
</div>
<div style={{display:"flex",flex:5,backgroundColor:"",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>


            
<h4 style={{  }}>
              <Link
                style={{  textDecoration: "none" }}
                to="/home"
              >
                HOME
              </Link>
            </h4>

            
<h4 style={{  }}>
              <Link
                style={{  textDecoration: "none" }}
                to="/about"
              >
                ABOUT
              </Link>
            </h4>

            
<h4 style={{ }}>
              <Link
                style={{  textDecoration: "none" }}
                to="/project"
              >
                PROJECT
              </Link>
            </h4>

            
<h4 style={{  }}>
              <Link
                style={{  textDecoration: "none" }}
                to="/contact"
              >
                CONTACT
              </Link>
            </h4>

            
<h4 style={{ }}>
              <Link
                style={{  textDecoration: "none" }}
                to="/blog"
              >
                BLOG
              </Link>
            </h4>

            
</div>

    </div>
)