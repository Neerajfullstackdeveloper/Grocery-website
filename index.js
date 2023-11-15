// let main = document.querySelector(".main");
// let crsr = document.querySelector(".cursor");

// main.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x+"px";
//     crsr.style.top = dets.y+"px";
    
// })

const imageContainer = document.getElementById('image-container');
const rotateContainer = document.getElementById('rotate-container');
const rotateFront = document.querySelector('.rotate-front');

let rotated = false;

imageContainer.addEventListener('click', () => {
    if (!rotated) {
        // Rotate the image to the backside (180 degrees)
        rotateFront.style.transform = 'rotateY(180deg)';
        
        // Create and append content for the backside
        const backContent = document.createElement('div');
        backContent.classList.add('rotate-back');
        backContent.innerHTML = "<b> Our Polices </b>";
        rotateContainer.appendChild(backContent);
        
        rotateFront.style.display = 'none';

        rotated = true;
    } else {
        // Rotate the image back to the front (0 degrees)
        rotateFront.style.transform = 'rotateY(0deg)';
        
        // Remove the back content
        const backContent = document.querySelector('.rotate-back');
        if (backContent) {
            rotateContainer.removeChild(backContent);
        }
        
        rotated = false;
    }
});
