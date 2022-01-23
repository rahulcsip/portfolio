import { Link ,Outlet} from "react-router-dom"
const Header = ()=>{
// DO through MAP()
// const data = ['HOME','ABOUT','CONTACT','BLOG']



    return <div style={{height:'8vh',backgroundColor:"black",display:'flex',flexDirection:'row',opacity:.9,borderRadius:10}}>

<div style={{flex:2,alignItems:'center',display:'flex',color:"whitesmoke",justifyContent:"center"}}>
    <h1>RAHUL PANDEY</h1>
</div>


<div style={{flex:3,display:'flex',flexDirection:'row',color:'whitesmoke',justifyContent:'space-around',alignItems:"center"}}>
    <h3 ><Link style={{color:"whitesmoke", textDecoration:'none'}} to="/portfolio/">HOME</Link></h3>
    <h3><Link style={{color:"whitesmoke",textDecoration:'none'}} to="/about">ABOUT</Link></h3>
    <h3><Link style={{color:"whitesmoke" ,textDecoration:'none'}} to="/contact">CONTACT</Link></h3>
    <h3><Link style={{color:"whitesmoke", textDecoration:'none'}} to="/blog">BLOG</Link></h3>

</div>
<Outlet/>
    </div>
}






export default Header