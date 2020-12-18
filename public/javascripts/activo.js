window.addEventListener('scroll', function(){
    let videos = document.getElementById('videos'); //asigno la seccion a una variable
    let posicion_videos = videos.getBoundingClientRect().top; //indica la posicion cercana a la seccion
    //console.log(posicion_videos);
    let nav_videos = document.getElementById('nav_videos') //asigno lo que quiero modificar 

    if(posicion_videos < 250 && posicion_videos > -600){
        nav_videos.style.backgroundColor = " rgba(224,138,39,1)";
        nav_videos.style.color = "black";
    }
    else{
        nav_videos.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        nav_videos.style.color = "#e08a27";
    }

    // Activo fotos

    let fotos = document.getElementById('fotos');
    let posicion_fotos = fotos.getBoundingClientRect().top;
    let nav_fotos = document.getElementById('nav_fotos');

    if(posicion_fotos < 300 && posicion_fotos > -300){
        nav_fotos.style.backgroundColor = " rgba(224,138,39,1)";
        nav_fotos.style.color = "black";
    }
    else{
        nav_fotos.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        nav_fotos.style.color = "#e08a27";
    }

    // Activo novedades

    let novedades = document.getElementById('novedades');
    let posicion_novedades = novedades.getBoundingClientRect().top;
    let nav_novedades = document.getElementById('nav_novedades');

    if(posicion_novedades < 300 && posicion_novedades > -400){
        nav_novedades.style.backgroundColor = " rgba(224,138,39,1)";
        nav_novedades.style.color = "black";
    }
    else{
        nav_novedades.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        nav_novedades.style.color = "#e08a27";
    }

    // Activo biografia

    let biografia = document.getElementById('biografia');
    let posicion_biografia = biografia.getBoundingClientRect().top;
    let nav_biografia = document.getElementById('nav_biografia');

    if(posicion_biografia < 200 && posicion_biografia > -400){
        nav_biografia.style.backgroundColor = " rgba(224,138,39,1)";
        nav_biografia.style.color = "black";
    }
    else{
        nav_biografia.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        nav_biografia.style.color = "#e08a27";
    }

    // Activo discografia

    let discografia = document.getElementById('discografia');
    let posicion_discografia = discografia.getBoundingClientRect().top;
    let nav_discografia = document.getElementById('nav_discografia');

    if(posicion_discografia < 200 && posicion_discografia > -700){
        nav_discografia.style.backgroundColor = " rgba(224,138,39,1)";
        nav_discografia.style.color = "black";
    }
    else{
        nav_discografia.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        nav_discografia.style.color = "#e08a27";
    }

    // Activo contacto

    let contacto = document.getElementById('contacto');
    let posicion_contacto = contacto.getBoundingClientRect().top;
    let nav_contacto = document.getElementById('nav_contacto');

    if(posicion_contacto < 200){
        nav_contacto.style.backgroundColor = " rgba(224,138,39,1)";
        nav_contacto.style.color = "black";
    }
    else{
        nav_contacto.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        nav_contacto.style.color = "#e08a27";
    }
});


