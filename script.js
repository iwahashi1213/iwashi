// Strictモード
"use strict";

import { getDatabase, ref, push, onChildAdded } from "firebase/database";

let database = getDatabase();

let databasekey = document.querySelector("#database-key").value;

let myDatabase = ref(database, databasekey);

document.querySelector("#post").onclick = function(){
    let name = document.querySelector("#name").value;
    let comment = document.querySelector("#comment").value;

    let send = {
        name: name,
        comment: comment,
    };

    push(myDatabase, send);

};

onChildAdded(myDatabase, (data) => {
    console.log(data.val());

    const name = data.val().name;
    const comment = data.val().comment;

    let output = document.querySelector("#output");

    let div = document.createElement("div");
    div.classList = "send"

    let h2 = document.createElement("h2");
    h2.innerHTML = name;
    div.appendChild(h2);

    let p = document.createElement("p");
    p.innerHTML = comment;
    div.appendChild(p);

    output.prepend(div);

});



