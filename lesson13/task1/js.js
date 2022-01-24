function  createCalendar(elem, year, month){
    let daysInMonth = new Date(year, month, 0).getDate();
    month--;
    let date = new Date(year, month);
    let days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    let weekday = date.getDay();
    let tr = document.createElement("tr");
    
    for(let i=0; i<days.length; i++){
        tr.innerHTML += `<th>${days[i]}</th>`;
    }
    elem.append(tr);
    
    tr = document.createElement("tr");
    
    for(let i=1; i<weekday; i++){
        tr.innerHTML += `<td></td>`;
    }
    elem.appendChild(tr);
    
    for(let i=1; i<daysInMonth+1; i++){
        if(weekday == 8 || weekday == 0){
            elem.appendChild(tr);
            tr = document.createElement("tr");
            weekday = 1;
        }
        tr.innerHTML += `<td>${i}</td>`;
        weekday++;
    }
    elem.appendChild(tr);

    if(weekday != 7){
        for(let i=weekday; i<8; i++){
            tr.innerHTML += `<td></td>`;
        }
    }
}

createCalendar(calendar, 2012, 9);