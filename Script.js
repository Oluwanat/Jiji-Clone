

//Browser Object Model (BOM)

   /*const ref =  window.open("https://nairaland.com")
   
   function handleClick(){
    //    clearTimeout()
        window.close(ref)
    }*/
    
     //alert(window.screen.availWidth)

     /*function moveBackward(){
       //window.history.back()
       //window.location.reload()
     }*/

     /*function moveForward(){
        window.history.go()
     }*/

     //console.log(window.location)

     //alert(window.location.origin)

     //console.log(window.navigator)

    //alert(window.navigator.onLine)

    //window.navigator.geolocation.getCurrentPosition(onsuccess, onerror)

    /*function onsuccess(position){
        console.log(position.coords)
    }

    function onerror(e){
        console.log(e)
    }*/

    
    //document.head.children[3].innerHTML = "Hello World"
    //console.log(document)


//Selectors in JQuery
    /* 
    $(document).ready(function(){
    $("input[type='text']").change(function(){
        alert("You clicked me")
    })
    })
     

    $("#btn").mouseover(function(){
        $("#btn").css("background-color", "grey")
    })
    */

//Effects in Jquery

/*$("#btn").click(function(){
    $("#test").animate({
    minHeight: "20px",
    maxWidth: "20px",
    marginLeft:"+=10"

    }, 2000)
})

$("#btn2").click(function(){
    $("#test").animate({
    minHeight: "20px",
    maxWidth: "20px",
    marginLeft:"-=10"
    }, 2000)
})

/*window.onload = (function(){
    $(".banner").fadeIn(10000)
})*/

/*$("#btn").click(function(){
    alert($("#input").val())
})
*/


//$(document).ready(function(){
  //  $("#btn").click(function(){
    //    $("#img").attr("src", "./Images/images/car1.jpg").hide(5000)

//    })
//})

//$("#btn").click(function(){
  //  $("#header").toggleClass("toggler")
//})

/*
Transversing
This is the same as complex selector also known as DOM tree

Common methods for transversing
1. Ancestor method
   Parent
   Parents
    parentsUntil

2. Descendant selector
    children
    find

3. sibling selector
    sibling
    next
    nextAll
    nextUntil
    prev
    prevAll
    prevUntil

*/

$(".fa-eye").click(function(){
    $("#input").attr("type", "text")
    $("#show").show()
    $("#hide").hide()
})



$("#btn").click(function(){
    $("#test").load("readme.txt")
})


