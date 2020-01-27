import view from '../utils/view.js';

export default function Item() {
    getStory();
    view.innerHTML = `<div>item</div>`;  
}

function getStory() {
    const storyId = window.location.hash.split('?id=')[1];
    console.log(storyId);
}