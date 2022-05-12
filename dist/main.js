const render = new Renderer()

$("button").on("click", function () {
    const search = $("#search-box")
    const input = search.val().toLowerCase()
    $.get(`/recipes/${input}`, function (recipesData) {
        render.render({recipes:recipesData})
        $("img").on('error',function () {
            this.src="./default.png"
        })
    })
    search.val("")
})





