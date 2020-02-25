


// let tabItem = document.getElementsByClassName('tabs-title');
// let tabsContent = document.getElementsByClassName('tabs-content');
//
// tabs.addEventListener('click', event=> {
//     let pressedTab = event.target;
//     pressedTab.classList.add('active');
//     // let contentIndex = tabs.indexOf(pressedTab);
//     let contentItem = document.getElementsByClassName('content-item');
//     contentItem.style.display = 'block'
//
// });

let tabs = document.getElementById('tabs');

tabs.addEventListener('click', event=> {
    let tabItem = document.getElementsByClassName('tabs-title');
    let tabsContent = document.getElementsByClassName('tabs-content');
    let pressedIndex = null;

    tabItem[pressedIndex] = event.target;

    if (tabItem[pressedIndex] === event.target) {
        tabItem[pressedIndex].classList.add('active');
        tabsContent[pressedIndex].style.display = "block";
    }
        for (let i = 0; i < tabsContent.length; i++){
        tabItem.classList.replace('active', '');
        tabsContent.style.display = "none";
    }

});


// pressedTab.classList.add('active');
//
//
// let tabsContent = document.getElementsByClassName('tabs-content');
// for (let i = 0; i < tabsContent.length; i++) {
//     tabsContent[i].style.display = "none";
// }
// let tabItem = document.getElementsByClassName('tabs-title');
// for (let i = 0; i < tabItem.length; i++) {
//     tabItem[i].className = tabItem[i].className.replace(" active", "");
// }
// // let contentIndex = tabs.indexOf(pressedTab);
// let contentItem = document.getElementsByClassName('content-item');
// contentItem.style.display = 'block'
// function openTabs(event, text) {
//     let tabsContent = document.getElementsByClassName('tabs-content');
//     for (let i = 0; i < tabsContent.length; i++) {
//         tabsContent[i].style.display = "none";
//     }
//
//     let tabItem = document.getElementsByClassName('tabs-title');
//     for (let i = 0; i < tabItem.length; i++) {
//         tabItem[i].className = tabItem[i].className.replace(" active", "");
// }
// //     // Show the current tab, and add an "active" class to the button that opened the tab
// //     document.getElementById(cityName).style.display = "block";
// //     evt.currentTarget.className += " active";
// // }
//
// }