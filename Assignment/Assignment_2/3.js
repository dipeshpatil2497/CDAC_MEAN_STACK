let Setajaxjson = () => {

    let Dipesh = new XMLHttpRequest();

    Dipesh.onload = () => {
        console.log(Dipesh.responseText);
        let refdata = JSON.parse(Dipesh.responseText);

        Setnewvalue(refdata);
    };

    Dipesh.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");
    Dipesh.send();
};

let Setnewvalue = (Newdata) => {
    let Parent = document.querySelector("#ParentBox");

    for (let i = 0; i < Newdata.length; i++) {
        let item = Newdata[i];

        let NewElement = Parent.children[0].cloneNode(true);

        NewElement.innerHTML = item.ID + " " + item.FirstName + " " + item.LastName;
        NewElement.style.display = "flex";
        Parent.appendChild(NewElement);
    }
};


let Setajaxxml = () => {
    let Dipesh2 = new XMLHttpRequest();

    Dipesh2.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");


    Dipesh2.setRequestHeader("accept", "application/xml");


    Dipesh2.onload = () => {
        console.log(Dipesh2.responseText);
        let refdata2 = Dipesh2.responseXML;

        Setnewvaluexml(refdata2);
    };


    Dipesh2.send();
};



let Setnewvaluexml = (refdata2) => {
    console.log(refdata2);
    const authorList = refdata2.querySelectorAll("Author");
    console.log(authorList);

    for (let i = 0; i < authorList.length; i++) {
        let authorItem = authorList[i];

        let IDno = authorItem.children[1].innerHTML;
        let firstName = authorItem.children[0].innerHTML;
        let lastName = authorItem.children[3].innerHTML;

        // HTML DOM
        let parent = document.querySelector("#ParentBox");

        let newElement = parent.children[0].cloneNode(true);

        newElement.innerHTML = IDno + " " + firstName + " " + lastName;
        newElement.style.display = "flex";

        parent.insertBefore(newElement, parent.firstChild);
    }
};












