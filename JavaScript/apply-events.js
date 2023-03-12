import { showTopics } from "./using-DOM.js";

document.addEventListener('click', (e)=>{
    if(e.target.matches("#viewElements")){
        showTopics();
        console.log(true);
    }
})