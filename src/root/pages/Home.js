import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";

import Header from "../component/Header";
import { Audio, Watch } from "react-loader-spinner";
const skills = [
  {
    id: 1,
    tech: "React Native",
    description:
      "React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.",
    icon: "https://icts.io/wp-content/uploads/2020/04/react-native.png",
  },
  {
    id: 2,
    tech: "Javascript",
    description:
      "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.",
    icon: "https://icons-for-free.com/iconfiles/png/512/javascript+js+node+icon-1320184811019773066.png",
  },
  {
    id: 3,
    tech: "React Js",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications",
    icon: "https://res.cloudinary.com/practicaldev/image/fetch/s--4I6BM-mT--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/lubr9bb4d2obyx9lb3px.png",
  },
  {
    id: 4,
    tech: "Redux",
    description:
      "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
    icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
  },
];

const problemStack = [
  {
    id: 1,
    platform: "React native",
    number: 3,
  },
  {
    id: 2,
    platform: "React js",
    number: 2,
  },
  {
    id: 3,
    platform: "Php",
    number: 1,
  },
  {
    id: 4,
    platform: "Node",
    number: 0,
  },
];

const methodology = [
  {
    id: 1,
    number: "01",
    method: "Explore",
    description:
      "I put myself in the place of your users in order to understand their needs",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU",
    number: 1,
  },
  {
    id: 2,
    number: "02",
    method: "Imagin",
    description:
      "I think of several ideas that can be utilized to solve our problems.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU",
  },
  {
    id: 3,
    number: "03",
    method: "Frame",
    description:
      "I pick a framework that suits well with the project and will begin to formalize the user journey",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU",
  },
  {
    id: 4,
    number: "04",
    method: "Design",
    description: "I will then design and create an interactive prototype",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU",
  },
  {
    id: 5,
    number: "05",
    method: "Test",
    description:
      "I analyze the prototype with real users in order to optimize and validate the solution",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU",
  },
  {
    id: 6,
    number: "06",
    method: "Deploy",
    description:
      "Once the prototype has been validated. I can develop, launch and promote the product",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU",
  },
];

const Home = (props) => {
  const [problems, setProblemSolved] = useState([]);

  const projectDeliverInfo = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 20,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontWeight: "bold" }}> 5+</h1>
          <h3 style={{}}>Project Deliverd</h3>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {problemStack.map((item, index) => {
            const { id, platform, number } = item;

            return (
              <>
                <div
                  key={id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",

                    height: "5vh",
                    alignItems: "center",
                    width: "40%",
                  }}
                >
                  <p>{platform}</p>
                  <p>{number}+</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  };

  const skillsInfo = () => {
    return (
      <div
        style={{
          display: "flex",
          // backgroundColor:"wheat",
          padding: 10,
          flexDirection: "column",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Skills</h1>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {skills.map((item, index) => {
              const { id, tech, description, icon } = item;
              return (
                id % 2 == 0 && (
                  <div
                    style={{
                      margin: "5%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    class="card"
                  >
                    <img
                      src={icon}
                      class="card-img-top "
                      style={{ height: "35%", width: "35%" }}
                      alt="..."
                    />
                    <div class="card-body" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:
                  "column"}}>
                      <h5 class="card-title">{tech}</h5>
                      <p style={{textAlign:"justify"}} class="card-text">{description}</p>
                    </div>
                  </div>
                )
              );
            })}
          </div>

          <div
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {skills.map((item, index) => {
              const { id, tech, description, icon } = item;
              return (
                id % 2 !== 0 && (
                  <div
                    style={{
                      margin: "5%",
                      display: "flex",
                      alignItems: "center",
                    }}
                    class="card"
                  >
                    <img src={icon} class="card-img-top " style={{height:"45%",width:"45%"}} alt="..." />
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:
                  "column"}} class="card-body">
                      <h5 class="card-title">{tech}</h5>
                      <p  style={{textAlign:"justify"}} class="card-text">{description}</p>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const myMethodology = () => {
    return (
      <div
        style={{
          padding: 50,
          marginTop: 20,
          backgroundColor: "white",
          display: "flex",
          color: "whitesmoke",
          flexDirection: "column",
          marginBottom: 30,
        }}
      >
        <h1 style={{ textAlign: "center", marginTop: -10, color: "black" }}>
          My Methodology{" "}
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {methodology.map((item, index) => {
            const { id, image, description, method, number } = item;
            return (
              index < 3 && (
                <div
                  style={{
                    backgroundColor: "#00aaee",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "25%",
                    borderRadius: 8,
                    marginRight: 30,
                    paddingTop: 10,
                    boxShadow: "10px 5px 10px steelblue",
                  }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU"
                    class="img-fluid"
                    alt="..."
                  />
                  {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU" alt= "methodology Image" height={100} width = {150} /> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <h1 style={{ fontWeight: "bold", paddingRight: 10 }}>
                      {id === 0 ? `0${number}` : number}
                    </h1>
                    <h3 style={{}}> {method}</h3>
                  </div>

                  <h5 style={{ textAlign: "center" }}>{description}</h5>
                </div>
              )
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          {methodology.map((item, index) => {
            const { id, image, description, method, number } = item;
            return (
              index > 2 && (
                <div
                  style={{
                    backgroundColor: "slategray",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "25%",
                    borderRadius: 8,
                    marginRight: 30,
                    paddingTop: 10,
                    boxShadow: "10px 5px 10px steelblue",
                  }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU"
                    class="img-fluid"
                    alt="..."
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <h1 style={{ fontWeight: "bold", paddingRight: 10 }}>
                      {number}
                    </h1>
                    <h3 style={{}}> {method}</h3>
                  </div>

                  <h5 style={{ textAlign: "center" }}>{description}</h5>
                </div>
              )
            );
          })}
        </div>
      </div>
    );
  };

  const carsoulFirst = () => {
    return (
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.businessinsider.in/photo/81769906/how-to-reverse-image-search-on-google-to-find-information-related-to-a-specific-photo.jpg?imgsize=297676"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORTPEsrDChxLWrduIC7hUaxUAUe6oXiaCRA&usqp=CAU"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://free4kwallpapers.com/uploads/originals/2021/02/04/future-tech-city-wallpaper.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
  };

  const quoteView = () => {
    return (
      <figure class="text-center">
        <blockquote class="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    );
  };

  return (
    <>
      <div
        class="container-fluid"
        style={{ backgroundColor: "white", padding: 10 }}
      >
        {/* Header */}
        <Header  dark/>

        {carsoulFirst()}

        {projectDeliverInfo()}

        {skillsInfo()}

        {myMethodology()}

        {quoteView()}
        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
