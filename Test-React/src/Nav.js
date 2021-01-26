
import React  from 'react';
import {Link} from 'react-router-dom';



//export default class  Nav extends React.Component{

function Nav(){

//render(){
const navStyle ={

  color : 'white'
};

return (

<nav>


<div>

<ul className="nav-links">


<li>

<Link style = {navStyle} to = "/Lists">Select Agency</Link>
</li>


</ul>

</div>

</nav>

);

//}

}



export default Nav;
