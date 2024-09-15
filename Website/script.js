function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "YOUTUBER",
    "HACKER"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.querySelector(".marquee-inner");
    const speed = 1; // Scrolling speed
    let scrollAmount = 0;
    let isHovered = false;

    // Duplicates the content for seamless scrolling
    const marqueeContent = marquee.innerHTML;
    marquee.innerHTML += marqueeContent;

    const startScrolling = () => {
        if (!isHovered) {
            scrollAmount -= speed;
            // Reset scroll amount if it reaches half the content
            if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
                scrollAmount = 0;
            }
            marquee.style.transform = `translateX(${scrollAmount}px)`;
        }
        requestAnimationFrame(startScrolling);
    };

    marquee.addEventListener("mouseover", () => {
        isHovered = true; // Pause scrolling on hover
    });

    marquee.addEventListener("mouseout", () => {
        isHovered = false; // Resume scrolling on mouse out
    });

    startScrolling(); // Start the scrolling effect
});
// Optionally add some interactivity like animations if required
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = "scale(1.05)";
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = "scale(1)";
    });
});
