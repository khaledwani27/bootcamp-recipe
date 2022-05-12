
const express = require('express')
const path = require('path')
const urllib = require('urllib')
const app = express()
const port = 8080

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function (request, res) {
    res.send("ok")
})


app.get('/recipes/:ingredient', function (request, res) {
    const ingredient=request.params.ingredient
    let recipes=[]
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, response) {
        if (err) {
            throw err
        }
        let data = JSON.parse(response)
        
        recipes=data.results.map(recipe => {
            return {
                ingredients:recipe.ingredients.map(r=>{return{text:r}}),
                title:recipe.title, 
                thumbnail:recipe.thumbnail,
                href:recipe.href
            } 
        })
        res.send(recipes)
    })
    
})

app.listen(port, function () {
    console.log("Server up an running on port " + port)
})