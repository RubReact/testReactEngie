import React from 'react';
//import Axios from 'axios';


//let agenceList =[];
/*const agenceList =[
{
  name : "Agence Paris",
  Supervisor : " Dupont",
  Activity :   "electric",
  objectId : 0,
},
{
  name : "Agence Marseille",
  Supervisor : " Durant",
  Activity :   "electric",
  objectId: 1,
},
{
  name : "Agence Nice",
  Supervisor : " Dupont",
  Activity :   "electric",
  objectId: 2,
},
{
  name : "Agence Lyon",
  Supervisor : " Dupont",
  Activity :   "electric",
  objectId: 3,

},

];
*/
class ToAgency extends React.Component{

  constructor(props){
  super(props);
  this.state ={
    agence :{},
    agenceList :[],
  };
  this.description= this.description.bind(this);
  }

  componentDidMount() {
      const apiUrl = 'http://localhost:3001/agencies';
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) =>{
          let agencyList =[];

          for(let val of Object.values(data)){
              agencyList.push(val);
          }
           this.setState ({agenceList : agencyList})
      });

    }



   description = (menu)=>{
      const  selectedObjectId = parseInt (menu.target.value);

      const agenceFound = this.state.agenceList.find((item)=>{
          return selectedObjectId === item.objectId ;
      });

    if( agenceFound !== undefined ){
       this.setState ({agence : agenceFound});
       localStorage.setItem('agence_name',agenceFound.name);
       localStorage.setItem('agence_supervisor',agenceFound.Supervisor);
       localStorage.setItem('agence_activity',agenceFound.Activity);
   }
  }


render(){

const agence_name = localStorage.getItem('agence_name');
const agence_supervisor = localStorage.getItem('agence_supervisor');
const agence_activity = localStorage.getItem('agence_activity');
const agence = {name: agence_name, Supervisor: agence_supervisor, Activity: agence_activity};
  let affiche;
  if(this.state.agence === undefined ){
    affiche = (<></>);
  }else{
    affiche=(
      <>
      <li>Name : {agence.name}</li>
      <li>Supervisor: {agence.Supervisor}</li>
      <li>Activity: {agence.Activity}</li>
      </>
    );
  }

return (

      <div>

      <center>

      <form name="myForm" id="myForm" method="post">
      < label htmlFor = "type-select">
        <span >Select Agency</span>
      </label >

      <select name="Agencies" id="Agencies"  onChange = {this.description}>
        <option value="" >Select an Agency:</option>
        {this.state.agenceList.map((item )=>{
          return(
              <option key ={item.objectId} value={item.objectId}>{item.name}</option>
          );
        } )
      }



      </select>

      <ul>
            {affiche}

     </ul>

      </form>

      </center>

     </div>
);

}
}
export default ToAgency;
