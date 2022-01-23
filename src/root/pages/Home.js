import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";

import Header from "../component/Header";
import { Audio ,Watch } from  'react-loader-spinner'
const skills = [
  {
  id:1,
  tech:'React Native',
    description:"React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.",
  icon:'https://icts.io/wp-content/uploads/2020/04/react-native.png'
  },
  {
    id:2,
    tech:'Javascript',
      description:"JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.",
      icon:'https://icons-for-free.com/iconfiles/png/512/javascript+js+node+icon-1320184811019773066.png'
    },
    {
      id:3,
      tech:'React Js',
        description:"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications",
        icon:'https://res.cloudinary.com/practicaldev/image/fetch/s--4I6BM-mT--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/lubr9bb4d2obyx9lb3px.png'
      },
      {
        id:4,
        tech:'Redux',
          description:"Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
          icon:'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png'
        },
]

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
  {id:1,
    number:"01",
    method:"Explore",
    description:"I put myself in the place of your users in order to understand their needs",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU",
    number:1
},
{
  id:2,
  number:"02",
  method:"Imagin",
  description:"I think of several ideas that can be utilized to solve our problems.",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU",
  

},
{
  id:3,
  number:"03",
  method:"Frame",
  description:"I pick a framework that suits well with the project and will begin to formalize the user journey",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU"
},
{
  id:4,
  number:"04",
  method:"Design",
  description:"I will then design and create an interactive prototype",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU"
},
{
  id:5,
  number:"05",
  method:"Test",
  description:"I analyze the prototype with real users in order to optimize and validate the solution",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU"
},
{
  id:6,
  number:"06",
  method:"Deploy",
  description:"Once the prototype has been validated. I can develop, launch and promote the product",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU"
},
  
]



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
          flexDirection:"column"
          
        }}
      >
        <h1 style={{ textAlign:"center" }}>Skills</h1>
        
<div style={{display:"flex",flexDirection:"row" }}>

<div style={{flex:1,justifyContent:"center",alignItems:"center",display:"flex", flexDirection:"column"}}>
{
  skills.map((item, index)=>{
const {id, tech, description,icon } = item
    return  id%2 == 0 &&  <div  style={{display:"flex", flexDirection:"row",width:"70%",justifyContent:"center" , alignItems:"center"}}>
<div style={{flex:1,display:"flex", flexDirection:"column",padding:10,alignItems:"center"}}>
<img src={icon} style={{height:25,width:25}} alt="Tech logo"/>
<h5>{tech}</h5> 
</div>
<div style={{flex:3,justifyContent:"center"}}><h5 style={{paddingLeft:10}}>{description}</h5> </div>

    </div>
  })
}
</div>


<div style={{flex:1,justifyContent:"center",alignItems:"center",display:"flex", flexDirection:"column"}}>
{
  skills.map((item, index)=>{
const {id, tech, description,icon } = item
    return  id%2 !== 0 &&  <div  style={{display:"flex", flexDirection:"row",width:"70%",justifyContent:"center" , alignItems:"center"}}>
<div style={{flex:1,display:"flex", flexDirection:"column",padding:10}}>
<img src={icon} style={{height:25,width:25}} alt="Tech logo"/>
<h5>{tech}</h5> 
</div>
<div style={{flex:3,justifyContent:"center"}}><h5 style={{paddingLeft:10}}>{description}</h5> </div>

    </div>
  })
}
</div>

</div>


      </div>
    );
  };



const myMethodology = ()=>{


return <div style={{padding:50,marginTop:20, backgroundColor:"white",display:"flex",color:"whitesmoke", flexDirection:"column", marginBottom:30}}>

<h1 style={{textAlign:"center", marginTop:-10, color:"black"}}>My Methodology </h1>

<div style={{display:"flex", flexDirection:"row" , justifyContent:"center"}}>

{
  methodology.map((item, index)=>{
const {id, image, description,method, number} = item
return index < 3  && <div style={{backgroundColor:"#00aaee",display:"flex", flexDirection:"column" , justifyContent:"space-evenly", alignItems:"center" , width:"25%", borderRadius:8 , marginRight:30, paddingTop:10,  
boxShadow: "10px 5px 10px steelblue"
}}>

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU" alt= "methodology Image" height={100} width = {150} />
<div style={{display:"flex", flexDirection:"row",alignItems:"center"}}>
<h1 style={{ fontWeight:"bold", paddingRight:10}} >{ id ===0 ? `0${number}` : number}</h1>
  <h3 style={{}}> {method}</h3>
</div>

<h5 style={{textAlign:"center"}} >{description}</h5>

</div>


  })
}





</div>
<div style={{display:"flex", flexDirection:"row" , justifyContent:"center", marginTop:30}}>

{
  methodology.map((item, index)=>{
const {id, image, description,method, number} = item
return index > 2  && <div style={{backgroundColor:"slategray",display:"flex", flexDirection:"column" , justifyContent:"space-evenly", alignItems:"center" , width:"25%", borderRadius:8 , marginRight:30,paddingTop:10,  boxShadow: "10px 5px 10px steelblue",}}>

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNG_bGBoDCAq0qIP92LzvTm4ZSeflr9bf2A&usqp=CAU" alt= "methodology Image" height={100} width = {150} />
<div style={{display:"flex", flexDirection:"row",alignItems:"center"}}>
<h1 style={{ fontWeight:"bold", paddingRight:10}} >{number}</h1>
  <h3 style={{}}> {method}</h3>
</div>

<h5 style={{textAlign:"center"}} >{description}</h5>

</div>


  })
}





</div>



</div>

}

  return (
    <>
      <div style={{ backgroundColor: "white", padding: 10 }}>
        {/* Header */}
        <Header />
        
        {projectDeliverInfo()}

        {skillsInfo()}

        {myMethodology()}

        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
