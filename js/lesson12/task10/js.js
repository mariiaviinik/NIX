while(true){
    let liText = prompt("Enter text for li");
    if(liText){
        let li = document.createElement("li");
        li.innerText = liText;
        ul.append(li);
    } else{
        break;
    }
}