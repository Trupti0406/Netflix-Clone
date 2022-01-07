function unique(){
    let btn = document.querySelector(".unique").addEventListener('click',function(e){
        let bg = e.currentTarget.parentNode.parentNode.parentNode.style.backgroundImage.split('"')[1]
        // console.log(e.currentTarget.parentNode.parentNode.parentNode.style.backgroundImage.split('"')[1])
        localStorage.setItem("back",bg)

        let logoImage = e.currentTarget.parentNode.parentNode.children[0].children[0].src;
        localStorage.setItem("logo",logoImage);

        let name = e.currentTarget.parentNode.parentNode.innerText.split("\n")[1]
        localStorage.setItem("Name",name)

        let year = e.currentTarget.parentNode.parentNode.innerText.split("\n")[2]
        localStorage.setItem("yearLine",year)

        let season = e.currentTarget.parentNode.parentNode.innerText.split("\n")[3]
        localStorage.setItem("season",season)

        let info = e.currentTarget.parentNode.parentNode.innerText.split("\n")[4]
        localStorage.setItem("Information",info)

    })
}

function imageClick(){
    let divs = document.querySelectorAll(".imageClick")
    divs.forEach((div)=>{
        div.addEventListener("click",function(e){
            let first = e.currentTarget.parentNode.children[1].children[0].innerText
            localStorage.setItem("Title",first)

            let second = e.currentTarget.parentNode.children[1].children[1].innerText
            localStorage.setItem("Year",second)

            let third = e.currentTarget.parentNode.children[1].children[2].innerText
            localStorage.setItem("Description",third)

            let fourth = e.currentTarget.children[0].src
            localStorage.setItem("Background",fourth)

            let fifth = e.currentTarget.parentNode.children[1].children[4].innerText
            localStorage.setItem("Logo",fifth)
        })
    })
}

function myfunction(){
    var x = localStorage.getItem("Title");
    var y = localStorage.getItem("Year")
    var z = localStorage.getItem("Description")
    var bg = localStorage.getItem("Background")
    var lg = localStorage.getItem("Logo")

    var bodyData = document.body.children[0];

    bodyData.children[1].children[1].children[0].children[0].innerText = x

    bodyData.children[1].children[1].children[1].innerText = y

    bodyData.children[1].children[1].children[2].innerText = z

    bodyData.style.backgroundImage = "url("+bg+")"

    bodyData.children[1].children[0].children[0].src = lg

}

function myList(){
    let btn = document.querySelector(".myWatchList").addEventListener('click',function(e){
        localStorage.setItem("url",movie);
    })

    let movie = document.querySelector(".myWatchList").addEventListener('click',function(e){
        var image = localStorage.getItem("Background")

        let oldData = localStorage.getItem("favourite");

        let newData = JSON.parse(oldData || "[]")
        for(let i = 0; i < newData.length; i++){
            if(image == newData[i]){
                return
            }
        }

        newData.push(image)
        localStorage.setItem("favourite",JSON.stringify(newData))
    })
}

function getItems(){
    var div = document.querySelector(".addWatchList");
    let list = JSON.parse(localStorage.getItem("favourite"));

    let imageDiv = ""

    list.forEach((image)=>{
        imageDiv = imageDiv + `<img src = ${image} class = "watchImage" alt = "watchList">`
    })
    div.innerHTML = imageDiv
}