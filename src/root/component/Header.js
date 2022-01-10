import { Link ,Outlet} from "react-router-dom"
const Header = ()=>{
// DO through MAP()
// const data = ['HOME','ABOUT','CONTACT','BLOG']



    return <div style={{height:'8vh',backgroundColor:"black",display:'flex',flexDirection:'row'}}>

<div style={{flex:2,alignItems:'center',display:'flex',color:"whitesmoke",justifyContent:"center"}}>
    <h1>TITANIUM</h1>
</div>


<div style={{flex:3,display:'flex',flexDirection:'row',color:'whitesmoke',justifyContent:'space-around',alignItems:"center"}}>
    <h3><Link to="/">HOME</Link></h3>
    <h3><Link to="/about">ABOUT</Link></h3>
    <h3><Link to="/contact">CONTACT</Link></h3>
    <h3><Link to="/blog">BLOG</Link></h3>

</div>
<Outlet/>
    </div>
}






export default Header