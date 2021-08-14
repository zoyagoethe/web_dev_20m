const btn = document.querySelector('#btn'),
        filmInput = document.querySelector('#film-input'),
        filmUl = document.createElement('ul'),
        films = [];

document.querySelector('.container').append(filmUl);

filmInput.focus();

// -------first code iteration-------
//let counter = 1;
/* btn.onclick = () => {
    let title = filmInput.value.trim();
    //title = title.trim();
    if(!title){        //'one' -> true, '' -> false
        alert('Enter a title!');
        filmInput.value = '';
        filmInput.focus();
        //return
    }else{
    const li = document.createElement('li');
    li.innerHTML = `${counter++}. ${title}`;
    filmUl.append(li);
    filmInput.value = '';
    filmInput.focus();
    }
} */

//-------second code iteration-------
//let counter = 1;
/* btn.onclick = () => {
    let title = filmInput.value.trim();
    if(!title){        
        alert('Enter a title!');
        cleanInput(filmInput);
        }else {
            const li = createLi(counter, title);
            counter++;
            filmUl.append(li);
            cleanInput(filmInput);
        }
}

function createLi(number, title){
    const li = document.createElement('li');
    li.innerHTML = `${number}. ${title}`;
    li.onclick = () => {
        li.classList.toggle('line-through');
    }
    return li;
}

function cleanInput(element){
    element.value = '';
    element.focus();
} */

//-------third code iteration-------

/* btn.onclick = () => {
    let title = filmInput.value.trim();
    if(!title){        
        alert('Enter a title!');
        cleanInput(filmInput);
        }else {
            films.push(title);
            filmUl.innerHTML = '';
            renderUl();
            cleanInput(filmInput);
            //console.log(films);
        }
}

function renderUl(){
    for(let i = 0; i < films.length; i++){
        filmUl.innerHTML += `<li>${i + 1}. ${films[i]}</li>`;
    }
}

function cleanInput(element){
    element.value = '';
    element.focus();
} */

//-------fourth code iteration-------

btn.onclick = () => {
    let title = filmInput.value.trim();
    if(!title){        
        alert('Enter a title!');
        cleanInput(filmInput);
        }else {
            films.push(title);
            filmUl.innerHTML = '';
            renderUl();
            cleanInput(filmInput);
            //console.log(films);
        }
}

/* function renderUl(){
    const arr = films.map((film, index) => createFilmLi(film, index));
    arr.forEach(li => filmUl.append(li));
} */

function renderUl(){
    films.map((film, index) => createFilmLi(film, index)).forEach(li => filmUl.append(li));
}

function createFilmLi(title, index){
    const li = document.createElement('li');
    li.innerHTML = `${index + 1}. ${title}`;
    li.onclick = () => {
        li.classList.toggle('line-through');
    }
    return li;
}

function cleanInput(element){
    element.value = '';
    element.focus();
}

// const newArr = [1, 2, 3].map((num, i) => i%2!=0 ? num * 2 : num) -> [2, 2, 6]