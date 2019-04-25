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
//Horizen pandamine stats 
{
    var xmlhttp = new XMLHttpRequest();    
    var url = "https://supernodes1.eu.zensystem.io/api/nodes/8074/detail?key=3ad73f4530d97657547c87404d1f022a78868be6";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4  &&  this.status == 200) {
            var json = JSON.parse(this.responseText);
            parseJson(json);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function parseJson(json) {
        var nodeID = json["id"];
        var nodename = json["fqdn"];
        var status = json["status"];
        
    
    
    document.getElementById("datazen0").innerHTML =  nodeID;
    document.getElementById("datazen1").innerHTML =  nodename;
    document.getElementById("datazen2").innerHTML =  status;
}}
//Horizen pandareserve stats 
{
    var xmlhttp = new XMLHttpRequest();    
    var url = "https://supernodes1.eu.zensystem.io/api/nodes/25504/detail?key=3ad73f4530d97657547c87404d1f022a78868be6";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4  &&  this.status == 200) {
            var json = JSON.parse(this.responseText);
            parseJson(json);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function parseJson(json) {
        var nodeID = json["id"];
        var nodename = json["fqdn"];
        var status = json["status"];
        
    
    
    document.getElementById("datazen3").innerHTML =  nodeID;
    document.getElementById("datazen4").innerHTML =  nodename;
    document.getElementById("datazen5").innerHTML =  status;
}}
//Horizen pandarender stats 
{
    var xmlhttp = new XMLHttpRequest();    
    var url = "https://supernodes1.eu.zensystem.io/api/nodes/25414/detail?key=3ad73f4530d97657547c87404d1f022a78868be6";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4  &&  this.status == 200) {
            var json = JSON.parse(this.responseText);
            parseJson(json);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function parseJson(json) {
        var nodeID = json["id"];
        var nodename = json["fqdn"];
        var status = json["status"];
        
    
    
    document.getElementById("datazen6").innerHTML =  nodeID;
    document.getElementById("datazen7").innerHTML =  nodename;
    document.getElementById("datazen8").innerHTML =  status;
}}
//Horizen pandagame stats 
{
    var xmlhttp = new XMLHttpRequest();    
    var url = "https://supernodes1.eu.zensystem.io/api/nodes/22324/detail?key=3ad73f4530d97657547c87404d1f022a78868be6";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4  &&  this.status == 200) {
            var json = JSON.parse(this.responseText);
            parseJson(json);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function parseJson(json) {
        var nodeID = json["id"];
        var nodename = json["fqdn"];
        var status = json["status"];
        
    
    
    document.getElementById("datazen9").innerHTML =  nodeID;
    document.getElementById("datazen10").innerHTML =  nodename;
    document.getElementById("datazen11").innerHTML =  status;
}}
//Horizen pandadraw stats 
{
    var xmlhttp = new XMLHttpRequest();    
    var url = "https://supernodes1.eu.zensystem.io/api/nodes/22330/detail?key=3ad73f4530d97657547c87404d1f022a78868be6";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4  &&  this.status == 200) {
            var json = JSON.parse(this.responseText);
            parseJson(json);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function parseJson(json) {
        var nodeID = json["id"];
        var nodename = json["fqdn"];
        var status = json["status"];
        
    
    
    document.getElementById("datazen12").innerHTML =  nodeID;
    document.getElementById("datazen13").innerHTML =  nodename;
    document.getElementById("datazen14").innerHTML =  status;
}}