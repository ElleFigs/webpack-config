import { useState } from 'react'

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 2
}

const elevenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 6
}

console.log(elvenShieldRecipe) 
console.log(elevenGauntletsRecipe)

const Recipes = () => {
    const [recipe, setRecipe] = useState({})
    return (
        <div>
            <h3>Current Recipe:</h3>
            <button onClick={()=>setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
            <button onClick={()=>setRecipe(elevenGauntletsRecipe)}>Elven Guantlet Recipe</button>

            <ul>
                {Object.keys(recipe).map((material) => (
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recipes