const pAsides = document.getElementsByClassName('pAside');
function changeAside() {
    document.getElementById('nav').classList.toggle('padleft-10');
    document.getElementById('main').classList.toggle('padleft-10');
    document.getElementById('nav').classList.toggle('padleft-5');
    document.getElementById('main').classList.toggle('padleft-5');
    document.getElementById('aside').classList.toggle('w-aside-10');
    document.getElementById('aside').classList.toggle('w-aside-5');
    document.getElementById('aside-search').classList.toggle('d-none');
    for (const pAside of pAsides) {
        pAside.classList.toggle('d-none');
    }
}
function clickSearch() {
    document.getElementById('searchButton').classList.toggle('d-none')
}

 function dropDown(n) {
    document.getElementById(n).classList.toggle('d-none')
 }