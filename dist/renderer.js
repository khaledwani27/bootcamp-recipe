class Renderer{
    render(data){
        const htmlTemp = $("#recipes-template")
        const source = htmlTemp.html()
        console.log(source);
        const template = Handlebars.compile(source);
        const newHtml = $(".result_container")
        newHtml.empty()
        newHtml.append(template(data))
    }
}