function Main() {
    return `<a class="btn" href="#home_first">테스트 시작하기</a>`;
}

function First() {
    return `<a class="btn" href="#home_second">fisrt함수실행</a>`;

}
function Second(){
    return `<a class="btn" href="#home_third">second함수실행</a>`;
}
function Third() {
    return `<a class="btn" href="#home_fourth">third함수실행</a>
<br><a class="btn" href="#home_fourth_2">third_2함수실행</a>`;
}
function Fourth(){
    return `<div>누구의 어쩌구</div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/7loLjL5nOHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
window.addEventListener('hashchange', () => {
    router();
});

const router = () => {
    const path = location.hash.substr(1);
    const app = document.querySelector('.app');
    const route = [{ '': Main }, { home_first: First } , {home_second : Second}, {home_third : Third}, {home_fourth : Fourth}, {home_fourth_2 : Fourth}];

    const target = route.filter(e => Object.keys(e)[0] === path);

    app.innerHTML = Object.values(target[0])[0]();
};

window.onload = function () {
    router();
};
