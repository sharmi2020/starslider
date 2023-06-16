const slider=document.createElement('input');
slider.type="range";
slider.max=10;
slider.value=0;
document.body.appendChild(slider);


const div=document.createElement("div");
document.body.appendChild(div);

slider.oninput=addStars;

function addStars(){
    div.innerText=""
        for(let i=0;i<this.value;i++){
            div.append("*");
    }
}