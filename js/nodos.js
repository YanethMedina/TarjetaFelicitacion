(function()
{
    document.getElementById("nodos").style.display = "block"; 
    document.getElementById("nodos").innerHTML = localStorage.getItem('mesa'); 

    let vAd = localStorage.getItem('vAdultos'); 
    let adultos = vAd.split(','); 
    console.log(vAd.length); 
    console.log(adultos); 

    for(let i = 0; i < adultos.length; i++)
    {
        document.getElementById('adultos'+(i)).value = adultos[i]; 
    }

    let vMe = localStorage.getItem('vMenores');  
    let menores = vMe.split(','); 

    for(let i = 0; i < menores.length; i++)
    {
        document.getElementById('menores'+i).value = menores[i]; 
    }
})();