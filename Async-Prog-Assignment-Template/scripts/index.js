var movie = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85kwzJ94kGRRqBn32xcRq2dvnNXKbVKz0NQ&usqp=CAU",
    "https://i.pinimg.com/550x/13/19/e7/1319e7922faffbfa43034a816126b97d.jpg",
    "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRZqYu4I_f2Beb7k1qABGcm8GwtFc7G-fDQ&usqp=CAU",
    "https://e7.pngegg.com/pngimages/96/298/png-clipart-shin-chan-illustration-crayon-shin-chan-shinnosuke-nohara-drawing-donald-duck-animated-film-donald-duck-comics-child-thumbnail.png",

]

localStorage.setItem("list",JSON.stringify(movie));

let i=0;
let id;
let image=document.createElement("img");
image.id="imagesize";

data=JSON.parse(localStorage.getItem("list"))||[];

setInterval(function(){
    document.getElementById("slideshow").innerHTML=null;
    if(i==data.length){
        i=0;
    }
    image.src=movie[i];
    i++;
    document.getElementById("slideshow").append(image)
},3000)




let Allmovies =[
    {
        URL:"https://img.fruugo.com/product/0/70/99799700_max.jpg",
        name:"Name:-  JOKER", relese_date:"Relese-date:- 4 October 2019",IMDV:"Ranting:-- 8.9",
    },
    {
        URL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbbgdHAFZOydDi9N2UUq2HFOacAV4zyla8oQ&usqp=CAU",
        name:"Name:- Avengers ", relese_date:"Relese-date:- 26 March 2019",IMDV:"Ranting:- 8.4",
    },
    {
        URL:"https://cdnb.artstation.com/p/assets/images/images/013/613/295/small/habib-ok-01.jpg?1540401177",
        name:"Name:- MR. HABIB OK", relese_date:"Relese-date:- 2008",IMDV:"Ranting:- 7.0",  
    },
    {
        URL:"https://cdn.shopify.com/s/files/1/0969/9128/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_dbc4d3cb-3d32-4adf-8702-b790c6835508.jpg?v=1577693650",
        name:"Name:- Dora", relese_date:"Relese-date:- August 2, 2019",IMDV:"Ranting:- 7.5",  
    },
    {
        URL:"https://resize.indiatvnews.com/en/resize/oldbucket/715_-/entertainmentbollywood/IndiaTv2ef20b_bollywood_posters.jpg",
        name:"Name:- PHANTOM", relese_date:"Relese-date:- 28 oct 2005",IMDV:"Ranting:- 6.5", 
    },
    {
        URL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstcs7difH_4pFi-0yjJAJR9ZMQ8RyrmKbZA&usqp=CAU",
        name:"Name:- TINTIN", relese_date:"Relese-date:- 01, Jan 1969",IMDV:"Ranting:- 5.4", 
    },
    {
        URL:"https://img.mensxp.com/media/content/2018/Aug/controversial-horror-movie-posters-that-were-banned-from-public-display-for-strange-reasons-500-3-new-1533819561.jpg",
        name:"Name:- HILLS HAVE EYES", relese_date:"Relese-date:- 8 aug 2006",IMDV:"Ranting:- 6.1", 
    },
    {
        URL:"https://www.ndtv.com/news/HP_Chamber-of-Secrets.jpg",
        name:" Name:-HARRY POTER", relese_date:"Relese-date:- aug 2013",IMDV:"Ranting:- 6.4", 
    },
    {
        URL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGc7DOApLC5htjBD1jOmyRXji1hCuFBVUQYw&usqp=CAU",
        name:"Name:- CHOICE", relese_date:"Relese-date:- 28 jun 2006",IMDV:"Ranting:- 8.1", 
    }
    ]
    localStorage.setItem("Allmovies",JSON.stringify(Allmovies));
    let list=JSON.parse(localStorage.getItem(Allmovies));
    
    
    displaymovies(Allmovies)
    
    function displaymovies(Allmovies)
    {
        document.querySelector("#movies").innerHTML=null;
        Allmovies.map(function(el){
            let box=document.createElement("div");
    
            let image=document.createElement("img");
            image.src=el.URL;
    
            let name = document.createElement("h2")
            name.innerText= el.name;
            name.setAttribute("id","name")
    
            let rele = document.createElement("h4")
            rele.innerText= el.relese_date;
    
            let imdb =document.createElement("h4")
            imdb.innerText=el.IMDV;
    
            box.append(image, name, rele, imdb)
            document.querySelector("#movies").append(box);
        })
    }
    let sort =()=>{
        let select=document.querySelector("#v_sort").value 
        if(select=="asd")
        {
            Allmovies.sort(function(a,b){
                return b.imdb-a.imdb 
            });
            displaymovies(Allmovies)
        }
        else
        {
           Allmovies.sort(function(a,b){
               return  a.imdb- b.imdb
           });
           displaymovies(Allmovies)
       }
   
    }
    
    
    
    