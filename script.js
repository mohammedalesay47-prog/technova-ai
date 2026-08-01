// =====================================
// TECHNOVA AI SAAS WEBSITE
// JAVASCRIPT
// =====================================



// =====================================
// MOBILE MENU
// =====================================


const menuIcon = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav-links");


if(menuIcon){

    menuIcon.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}




// Close menu after clicking link

document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});





// =====================================
// HEADER SCROLL EFFECT
// =====================================


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){


        header.style.background =
        "rgba(7,11,24,.95)";


        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.3)";


    }

    else{


        header.style.background =
        "rgba(7,11,24,.75)";


        header.style.boxShadow =
        "none";


    }



});





// =====================================
// SCROLL REVEAL ANIMATION
// =====================================


const revealElements =
document.querySelectorAll(
".feature-card, .step-card, .stat-card, .price-card, .testimonial-card, .dashboard-content"
);



revealElements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform=
    "translateY(40px)";

    element.style.transition=
    "all .8s ease";


});





function reveal(){


revealElements.forEach(element=>{


    let position =
    element.getBoundingClientRect().top;


    if(position < window.innerHeight - 100){


        element.style.opacity="1";


        element.style.transform=
        "translateY(0)";


    }


});


}



window.addEventListener(
"scroll",
reveal
);


reveal();





// =====================================
// NUMBER COUNTER
// =====================================


const counters =
document.querySelectorAll(".stat-card h2");


let started=false;



function counterAnimation(){


if(started)
return;



let section =
document.querySelector(".statistics");


if(!section)
return;



let position =
section.getBoundingClientRect().top;



if(position < window.innerHeight - 100){


started=true;



counters.forEach(counter=>{


let target =
parseInt(counter.innerText);



let count=0;



let speed =
target / 100;



function update(){


count += speed;



if(count < target){


counter.innerText =
Math.floor(count)+"+";


requestAnimationFrame(update);


}

else{


counter.innerText =
target+"+";


}



}



update();



});



}


}




window.addEventListener(
"scroll",
counterAnimation
);





// =====================================
// FAQ TOGGLE
// =====================================


const faqItems =
document.querySelectorAll(".faq-item");



faqItems.forEach(item=>{


item.addEventListener("click",()=>{


item.classList.toggle("active");


});


});





// =====================================
// CONTACT FORM
// =====================================


const form =
document.querySelector(".contact-form");



if(form){


form.addEventListener(
"submit",
(e)=>{


e.preventDefault();



let inputs =
form.querySelectorAll("input, textarea");



let valid=true;



inputs.forEach(input=>{


if(input.value.trim()===""){


valid=false;


}



});





if(valid){


alert(
"Your message has been sent successfully!"
);


form.reset();



}

else{


alert(
"Please complete all fields."
);


}



});


}





// =====================================
// SMOOTH SCROLL
// =====================================


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


anchor.addEventListener(
"click",
function(e){



let target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});





// =====================================
// BACK TO TOP BUTTON
// =====================================


const topButton =
document.getElementById("topButton");



if(topButton){



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 500){


topButton.style.display="flex";


}


else{


topButton.style.display="none";


}



});





topButton.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};



}





// =====================================
// PAGE LOADED
// =====================================


window.addEventListener(
"load",
()=>{


console.log(
"TechNova AI Website Loaded Successfully 🚀"
);


});