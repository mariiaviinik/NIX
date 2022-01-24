function showNotification(options){
    let {top, right, html, className} = options;
    let not = document.createElement("div");

    not.className = "notification";
    if (className) {
        not.classList.add(className);
    }
    
    not.style.top = top + "px";
    not.style.right = right + "px";
    
    not.innerText = html;
    document.body.appendChild(not);

    setTimeout(() => not.style.display = "none", 1500);
}

showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
});