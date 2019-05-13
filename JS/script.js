//coinmarketcap 100     https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=83e03939-2caf-4cd6-bbfb-6c155ef106c7&start=1&limit=800    
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
        var usdValueZEN = json["data"]["1698"]["quotes"]["USD"]["price"];
        var change_1hZEN = json["data"]["1698"]["quotes"]["USD"]["percent_change_1h"] + " " + "%";
        var change_24hZEN = json["data"]["1698"]["quotes"]["USD"]["percent_change_24h"] + " " + "%";

    
    
    document.getElementById("data6").innerHTML =  "$" + " " + usdValueZEN.toFixed(2);
    document.getElementById("data7").innerHTML =  change_1hZEN;
    document.getElementById("data8").innerHTML =  change_24hZEN;
}}
//coinmarketcap 400        
{
    var xmlhttp = new XMLHttpRequest(); 
    var url = "https://api.coinmarketcap.com/v2/ticker/?start=400&limit=100";
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4  &&  this.status == 200) {
            var json = JSON.parse(this.responseText);
            parseJson(json);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function parseJson(json) {
        var usdValueCLO = json["data"]["2757"]["quotes"]["USD"]["price"];
        var change_1hCLO = json["data"]["2757"]["quotes"]["USD"]["percent_change_1h"] + " " + "%";
        var change_24hCLO = json["data"]["2757"]["quotes"]["USD"]["percent_change_24h"] + " " + "%";
        


    document.getElementById("data9").innerHTML =  "$" + " " + usdValueCLO.toFixed(5);
    document.getElementById("data10").innerHTML =  change_1hCLO;
    document.getElementById("data11").innerHTML =  change_24hCLO;

}}
//Horizen stats 
{
    var xmlhttp = new XMLHttpRequest();    
    var url = "https://supernodes1.eu.zensystem.io/api/nodes/my/list?key=3ad73f4530d97657547c87404d1f022a78868be6";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4  &&  this.status == 200) {
            var json = JSON.parse(this.responseText);
            parseJson(json);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function parseJson(json) {
        var nodeID0 = json["nodes"]["0"]["id"];
        var nodename0 = json["nodes"]["0"]["fqdn"];
        var status0 = json["nodes"]["0"]["status"];
        var nodeID1 = json["nodes"]["5"]["id"];
        var nodename1 = json["nodes"]["5"]["fqdn"];
        var status1 = json["nodes"]["5"]["status"];
        var nodeID2 = json["nodes"]["2"]["id"];
        var nodename2 = json["nodes"]["2"]["fqdn"];
        var status2 = json["nodes"]["2"]["status"];
        var nodeID3 = json["nodes"]["3"]["id"];
        var nodename3 = json["nodes"]["3"]["fqdn"];
        var status3 = json["nodes"]["3"]["status"];
        var nodeID4 = json["nodes"]["4"]["id"];
        var nodename4 = json["nodes"]["4"]["fqdn"];
        var status4 = json["nodes"]["4"]["status"];
        
    
    
    document.getElementById("zen1").innerHTML =  nodeID0;
    document.getElementById("zen2").innerHTML =  nodename0;
    document.getElementById("zen3").innerHTML =  status0;
    document.getElementById("zen4").innerHTML =  nodeID1;
    document.getElementById("zen5").innerHTML =  nodename1;
    document.getElementById("zen6").innerHTML =  status1;
    document.getElementById("zen7").innerHTML =  nodeID2;
    document.getElementById("zen8").innerHTML =  nodename2;
    document.getElementById("zen9").innerHTML =  status2;
    document.getElementById("zen10").innerHTML =  nodeID3;
    document.getElementById("zen11").innerHTML =  nodename3;
    document.getElementById("zen12").innerHTML =  status3;
    document.getElementById("zen13").innerHTML =  nodeID4;
    document.getElementById("zen14").innerHTML =  nodename4;
    document.getElementById("zen15").innerHTML =  status4;
}}


//change price
{
function myFunction() {
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
var change_1hBTC = json["data"]["1"]["quotes"]["USD"]["percent_change_1h"]
var value = Number(change_1hBTC);
var x = document.createElement("IMG");
  x.setAttribute("src", "https://image.flaticon.com/icons/png/512/36/36669.png");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(x);
    var change;
    if (value > 0) {
        change = "UP";
    } else {
        change = "DOWN";
    } 
        document.getElementById("demo").innerHTML = change;
      }
  }}
//mining stats      
{
    var xmlhttp = new XMLHttpRequest(); 
    var url = "http://clopool.pro/api/accounts/0xA14490a3275c4627cB580CeBf191B1C4091D38C1";
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4  &&  this.status == 200) {
            var json = JSON.parse(this.responseText);
            parseJson(json);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function parseJson(json) {
        var worker1 = json["workers"]["Pandadraw"]["offline"];
        var worker2 = json["workers"]["Pandaraise"]["offline"];
        var worker3 = json["workers"]["Pandamine"]["offline"];
        var status1;
        if (worker1 == false) {
            status1 = "UP";
        } else {
            status1 = "DOWN";
        }
        document.getElementById("mine1").innerHTML =  status1;
        var status2;
        if (worker2 == false) {
            status2 = "UP";
        } else {
            status2 = "DOWN";
        }
        document.getElementById("mine2").innerHTML =  status2;
        var status3;
        if (worker3 == false) {
            status3 = "UP";
        } else {
            status3 = "DOWN";
        }
        document.getElementById("mine3").innerHTML =  status3;
        var hash1 = json["workers"]["Pandadraw"]["hr2"];
        var hash2 = json["workers"]["Pandaraise"]["hr2"];
        var hash3 = json["workers"]["Pandamine"]["hr2"];
        var hash4 = json["workers"]["Pandagame"]["hr2"];
        document.getElementById("mine5").innerHTML = (hash1/1000000).toFixed(2);
        document.getElementById("mine6").innerHTML = (hash2/1000000).toFixed(2);
        document.getElementById("mine7").innerHTML = (hash3/1000000).toFixed(2);
        document.getElementById("mine8").innerHTML = (hash4/1000000).toFixed(2);
        var all1 = json["sumrewards"]["2"]["reward"];
        document.getElementById("mine9").innerHTML = (all1/1000000000).toFixed(2);
}}
//mining stats      
{
    var xmlhttp = new XMLHttpRequest(); 
    var url = "http://clopool.pro/api/accounts/0xA14490a3275c4627cB580CeBf191B1C4091D38C1";
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4  &&  this.status == 200) {
            var json = JSON.parse(this.responseText);
            parseJson(json);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function parseJson(json) {
        var worker4 = json["workers"]["Pandagame"]["offline"];
        var status4;
        if (worker4 == false) {
            status4 = "UP";
        } else {
            status4 = "DOWN";
        }
        document.getElementById("mine4").innerHTML =  status4;
}}