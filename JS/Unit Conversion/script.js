function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    let c = document.getElementById("celsius").value;
    let f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f;
}

function weight(){
    //To convert KGs to Pounds
    // KG * 2.2
    let kg = document.getElementById("kilo").value;
    let p = kg * 2.2;
    document.getElementById("pounds").value = p;
}

function distance(){
    //To convert KMs to Miles
    // KM * 0.62137
    let km = document.getElementById("km").value;
    let m = km * 0.62137;
    document.getElementById("miles").value = m;
}