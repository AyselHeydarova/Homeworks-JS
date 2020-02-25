

let tabs = document.getElementById('tabs');
let tabItem = document.getElementsByClassName('tabs-title');
let contentItem = document.getElementsByClassName('content-item');
let contentItemArray = [...contentItem];
let tabItemArray = [...tabItem];

tabs.addEventListener('click', event=> {

    let pressedItem = event.target;
    let openTabIndex = tabItemArray.indexOf(pressedItem);

    for (let i = 0; i < tabItemArray.length; i++) {
        if (i === openTabIndex) {
            tabItemArray[openTabIndex].classList.add('active');
            contentItemArray[openTabIndex].style.display = "block";
        } else {
            tabItemArray[i].classList.remove('active');
            contentItemArray[i].style.display = 'none';
        }
    }
});

