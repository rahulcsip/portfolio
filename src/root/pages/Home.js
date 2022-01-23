import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";

import Header from "../component/Header";

const problemStack = [
  {
    id: 1,
    platform: "Leetcode",
    number: 500,
  },
  {
    id: 2,
    platform: "GeeksforGeeks",
    number: 300,
  },
  {
    id: 3,
    platform: "Hacker Rank",
    number: 100,
  },
  {
    id: 4,
    platform: "CodeChef",
    number: 1000,
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
          <h1 style={{ fontWeight: "bold" }}> 1000+</h1>
          <h3 style={{}}>Coding Problems Solved</h3>
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
          backgroundColor: "green",
          padding: 10,
          alignItems: "center",
          justifyContent:"center"
        }}
      >
        <h1 style={{  }}>Skills</h1>
      </div>
    );
  };

  return (
    <>
      <div style={{ backgroundColor: "white", padding: 10 }}>
        {/* Header */}
        <Header />

        {projectDeliverInfo()}

        {skillsInfo()}

        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
