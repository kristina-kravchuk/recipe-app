function Componnents( {label,image, calories, ingredientLines, cusine }){
    return(<div >
        <div className="container">
        <h1>{label}</h1>
        </div>
        <div className="container">
        <img src={image} alt="food"/>
        </div>
            <ul className="list">
                {ingredientLines.map((ingridient, index) => (
                    <li key={index}> 
                        <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png " width="30px" alt="check"/>
                    {ingridient}</li>
                ))}
                </ul>
                
                <div className="container" >
        <p>{cusine} cusine</p>
        </div>
        <div className="container">
        <p>{calories.toFixed()}  calories</p>
        </div>
    </div>)

}
export default Componnents;