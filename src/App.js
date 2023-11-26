
import { useEffect } from 'react';
import './App.css';
import video  from './food.mp4'
import { useState } from 'react';
import Componnents from './Componnents';



function App() {
const MY_ID= "9d49cd7e";
const MY_KEY="6f97d57b7e16b6f180783c29d60bad1a	";
const [mySearch, setMySearch] = useState("");
const [recipes, setRecepies] =useState([]);
const [wordSubmitted, setWordSubmitted]=useState("");

useEffect(() => {
  const getRecipe= async()=>{
    const response =await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
    const data= await response.json();
    console.log(data)
    setRecepies(data.hits)
  }
getRecipe()
}, [wordSubmitted])

const myRecipe = (e) =>{
console.log(e.target.value)
setMySearch(e.target.value)
}
const finalSearch = (e)=>{
e.preventDefault()
setWordSubmitted(mySearch);
}

  return (
<div className="App">

<div className="container">
<video autoPlay muted loop>
 <source src={video} type="video/mp4" />
</video>
<h1>Find a Recipe</h1>
</div>

<div className='container'>
     <form onSubmit={finalSearch}>
         <input className='search' onChange={myRecipe} value={mySearch}/>
    </form>
</div>

<div className='container'>
     <button onClick={finalSearch}>
         <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </button>
</div>

{recipes.map((element, index)=>(
  <Componnents key={index}
  label={element.recipe.label} 
  image={element.recipe.image} 
  calories={element.recipe.calories} 
  ingredientLines={element.recipe.ingredientLines}
  cusine={element.recipe.cuisineType}/>
 
))}

</div>


  );
}

export default App;
