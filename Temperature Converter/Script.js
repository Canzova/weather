var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");

cel.addEventListener('input', function(){
    let c = this.value; // In place of this we can  also write cel

    // Formula celcious to fah
    let f = parseFloat(((c * 9/5) + 32).toFixed(2));

    // Formula Cel to kel
    let k =  parseFloat((parseInt(c)+ 273.15).toFixed(2));

   
    if (c !== '') {
        kel.value = k;
        fah.value = f;
    }
    else{
        kel.value = 32;
        fah.value = 32;
    }
})


fah.addEventListener('input', function(){
    let fh = this.value; // In place of this we can  also write fah

    // Formula  fah to cel
    let c = parseFloat(((fh-32)*5/9).toFixed(2));

    // Formula fah to kel
    let k = parseFloat(((5/9)*(parseInt(fh) + 459.67)).toFixed(2));

    
    if (fh !== '') {
        kel.value = k;
        cel.value = c;
    }
    else{
        kel.value = 32;
        fah.value = 32;
    }
})

kel.addEventListener('input', function(){
    let kelvin = this.value; // In place of this we can  also write fah

    // Formula  kel to cel
    let celcious = parseFloat((kelvin-273.15).toFixed(2));

    // Formula fah to kel
    let farenhite = parseFloat((((kelvin-273.15)*9/5) + 32).toFixed(2));

    // parseFloat will convert it into float and .tofixed(2) will gwta precision of 2

    if(kelvin != '')
    {
        cel.value = celcious;
        fah.value = farenhite;
    }
    else{
        kel.value = 32;
        fah.value = 32;
    }
    
})