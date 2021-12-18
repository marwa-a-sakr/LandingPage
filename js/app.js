/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active






/* start My Code*/
window.addEventListener('DOMContentLoaded', (event) => {

    //add list for testing and add css style
    /*
    const navBarLinks = `
        <li><a href="#section1">Section1</a></li>
        <li><a href="#section2">Section2</a></li>
        <li><a href="#section3">Section3</a></li>
        <li><a href="#section4">Section4</a></li>
    `;
    const navBarList = document.getElementById('navbar__list');
    navBarList.innerHTML = navBarLinks;
    */
    //end style testing

    const navBarList = document.getElementById('navbar__list');
    const sections = document.querySelectorAll('section');


    for(let i=0; i<sections.length; i++){
        const navBarElement = document.createElement('li');
        const navBarLinks = document.createElement('a');
        
        // but li inside ul
        navBarList.appendChild(navBarElement);
        // but a inside li
        navBarElement.appendChild(navBarLinks);

        // add link to each section in body
        navBarLinks.setAttribute("href", "#" + sections[i].getAttribute("id"));
        // add style to links
        navBarLinks.setAttribute("class", "menu__link");
            
        // but name of links from section data-nav
        const sectionData = sections[i].getAttribute("data-nav");
        navBarLinks.innerHTML = sectionData;
    }

    // button collapes function
    const button = document.querySelector(".collapseButton");
    button.addEventListener("click", function(){
        navBarList.classList.toggle("show");
    });

    // function to add class active
    //bring all a element
    const links = document.querySelectorAll('a.menu__link');
    for(let i=0; i<links.length; i++){
        links[i].addEventListener('click',function(){
            for(let link of links){
                // if any link has class active => remove
                link.classList.remove('active');
                //add class active to link[index]
                links[i].classList.add('active');
            }
        });
    }


    // function go top of page when click button
    const scrollButton = document.getElementById('scroll_to_top');
    function scrollToTop (){
        if(window.scrollY > 0){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    } 
    scrollButton.addEventListener('click', scrollToTop);

    // function to display button when window scroll down
    function scrollFunction() {
        if (window.scrollY > 0 ){
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    }
    window.addEventListener('scroll' , scrollFunction);


    // function select section when scroll down

    let options = {
        root: null, // viewport
        rootMargin: '-50px', 
        threshold: 0.25
    };

    function callbackFunction(entries,observer){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => {
                    if(entry.target.getAttribute('data-nav')===link.innerHTML){
                        link.classList.add('active');
                    }else{
                        link.classList.remove('active');
                    }
                });     
            }
        });
    }

    const observer = new IntersectionObserver(callbackFunction , options);

    sections.forEach(section =>{

        observer.observe(section);
    });
});
/* end My Code */