let title = document.querySelector('.title');
let images = document.getElementsByTagName('img');
let imagesArray = Array.from(images);
let next = document.querySelector('.next');
let previous = document.querySelector(".previous");
let lists = document.querySelectorAll('.menu li');
let listsArray = Array.from(lists);

title.textContent = `Slide #${1}`;

next.onclick = () => {
    for (let i = 0; i < imagesArray.length - 1; i++) {
        if (imagesArray[i].classList.contains('active')) {
            imagesArray[i].classList.remove('active');
            imagesArray[i + 1].classList.add('active');
            title.textContent = `Slide #${i+2}`;
            listsArray[i].classList.remove('check');
            listsArray[i + 1].classList.add('check');
            checkLastFirst(imagesArray, i + 1);
            return;
        }
    }
}

previous.onclick = () => {
    for (let i = 1; i < imagesArray.length; i++) {
        if (imagesArray[i].classList.contains('active')) {
            imagesArray[i].classList.remove('active');
            imagesArray[i - 1].classList.add('active');
            title.textContent = `Slide #${i }`;
            listsArray[i].classList.remove('check');
            listsArray[i - 1].classList.add('check');
            checkLastFirst(imagesArray, i - 1);
            return;
        }
    }
}

// disabled all 
function disabled() {
    imagesArray.forEach(e => {
        e.classList.remove('active');
    });
    listsArray.forEach(e => {
        e.classList.remove('check')
    });
}

// check next
function checkLastFirst(arr, i) {
    if (i == listsArray.length - 1) {
        next.classList.add('disabled');
    } else {
        next.classList.remove('disabled');
    }
    // check previous
    if (i == 0) {
        previous.classList.add('disabled');
    } else {
        previous.classList.remove('disabled');
    }
}
// choose one of the index
for (let i = 0; i < listsArray.length; i++) {
    listsArray[i].onclick = () => {
        disabled();
        listsArray[i].classList.add('check');
        imagesArray[i].classList.add('active');
        title.textContent = `Slide #${i+1}`;
        checkLastFirst(listsArray, i);
    }
}