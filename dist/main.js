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

$(".result_container").on("click","img", function () {
    console.log("hi");
    let relevantItem = $(this).closest("div").find("ul.container_search > li:nth-child(1)").text()
    alert(relevantItem)
})




