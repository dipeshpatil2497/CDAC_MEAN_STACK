let Callajax = () => {
    let Uservalue = document.querySelector("#Getvalue").value || "Mumbai";

    let url =
        "https://api.openweathermap.org/data/2.5/weather?appid=df81a4731dac39ab08c6b37024c61833&units=metric&q=" + Uservalue;

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onload = () => {
        console.log(xhr.responseText);
        let refdata = JSON.parse(xhr.responseText);
        SetdatatoEle(refdata);
        console.log(refdata);

    }

    xhr.send();

}


let SetdatatoEle = (refjson) => {
    const name = refjson.name;
    const maxTemp = refjson.main.temp_max;

    let Setcityname = document.querySelector("#cityName");
    let Settempcount = document.querySelector("#tempno");

    Setcityname.innerHTML = "City : " + name + ",  ";
    Settempcount.innerHTML = "Tempeature : " + maxTemp;

    document.querySelector("#Getvalue").value = "";
};