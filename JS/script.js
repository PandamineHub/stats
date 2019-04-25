//coinmarketcap 100        
{
    var xmlhttp = new XMLHttpRequest(); 
    var url = "https://api.coinmarketcap.com/v2/ticker/?start=1&limit=100";
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4  &&  this.status == 200) {
            var json = JSON.parse(this.responseText);
            parseJson(json);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function parseJson(json) {
        var usdValueBTC = json["data"]["1"]["quotes"]["USD"]["price"];
        var change_1hBTC = json["data"]["1"]["quotes"]["USD"]["percent_change_1h"] + " " + "%";
        var change_24hBTC = json["data"]["1"]["quotes"]["USD"]["percent_change_24h"] + " " + "%";
        var usdValueETH = json["data"]["1027"]["quotes"]["USD"]["price"];
        var change_1hETH = json["data"]["1027"]["quotes"]["USD"]["percent_change_1h"] + " " + "%";
        var change_24hETH = json["data"]["1027"]["quotes"]["USD"]["percent_change_24h"] + " " + "%";
        


    document.getElementById("data0").innerHTML =  "$" + " " + usdValueBTC.toFixed(2);
    document.getElementById("data1").innerHTML =  change_1hBTC;
    document.getElementById("data2").innerHTML =  change_24hBTC;
    document.getElementById("data3").innerHTML =  "$" + " " + usdValueETH.toFixed(2);
    document.getElementById("data4").innerHTML =  change_1hETH;
    document.getElementById("data5").innerHTML =  change_24hETH;
}}
//coinmarketcap 100-200 
{
    var xmlhttp = new XMLHttpRequest();    
    var url = "https://api.coinmarketcap.com/v2/ticker/?start=101&limit=100";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4  &&  this.status == 200) {
            var json = JSON.parse(this.responseText);
            parseJson(json);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function parseJson(json) {
        var usdValueZEN = json["data"]["1698"]["quotes"]["USD"]["price"];
        var change_1hZEN = json["data"]["1698"]["quotes"]["USD"]["percent_change_1h"] + " " + "%";
        var change_24hZEN = json["data"]["1698"]["quotes"]["USD"]["percent_change_24h"] + " " + "%";

    
    
    document.getElementById("data6").innerHTML =  "$" + " " + usdValueZEN.toFixed(2);
    document.getElementById("data7").innerHTML =  change_1hZEN;
    document.getElementById("data8").innerHTML =  change_24hZEN;
}}