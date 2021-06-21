import "./styles/index.scss"

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