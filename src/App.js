import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {

  // const [firstName,setFirstName] = useState("");
  // const [email, setEmail] = useState("");
     const [people,setPeople] = useState({firstname:"",email:"",age:""})
     const [user,setUser] = useState([]);
     
     const handleChange = (e)=>{
       const name = e.target.name;
       const value = e.target.value;
       setPeople({...people,[name]:value})

     }
     const handleSubmit = (e) =>{
       e.preventDefault();
       if(people.firstname && people.email && people.age){
         const newPeople = {...people,id: new Date().getTime().toString()};
         setUser([...user,newPeople]);
         setPeople({firstname:"",email:"",age:""});
       }
     }
  return (
  <>  
    <form>
      <div className = "form-group">
       <input  
        type="text" 
        name="firstname" 
        value={people.firstName} 
        onChange={handleChange} 
        placeholder='First Name'/>
      </div>  
      <div className = "form-group">
        <input 
        type="text" 
        name="email" 
        placeholder='EMAIL' 
        value={people.email} 
        onChange={handleChange}/>
      </div>
      <div className = "form-group">
        <input 
        type="text" 
        name="age" 
        placeholder='AGE' 
        value={people.age} 
        onChange={handleChange}/>
      </div>
      <div className ="form-group">
        <button type="submit"  className='btn' onClick={handleSubmit}>enter</button>
      </div>
    </form>
    {
      user.map((item)=>{
        const{firstname,email,id,age} = item;
        return(
        <div className='users' key={id}>
          <h2>{firstname}</h2>
          <h2>{email}</h2>
          <h2>{age}</h2>
        </div> 
        ) 
      })
    }
  </>  
  );
}
