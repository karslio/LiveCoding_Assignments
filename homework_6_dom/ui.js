class UI {
   static addThToUI(newBookTh) {
        const th = tr.appendChild(document.createElement("th"));
        th.textContent = newBookTh.title;
        th.setAttribute("scope", "col");
    };

    static addTrToUI(newBookTr) {
        var tr = tbody.appendChild(document.createElement("tr"));
        var td1 = tr.appendChild(document.createElement("td"));
        td1.textContent = newBookTr.title;
        var td2 = tr.appendChild(document.createElement("td"));
        td2.textContent = newBookTr.author;
        var td3 = tr.appendChild(document.createElement("td"));
        var img = td3.appendChild(document.createElement("img"));
        img.setAttribute("src", newBookTr.link);
        img.setAttribute("class", "img-fluid img-thumbnail");
    };
}
