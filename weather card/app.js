
//const fetch = require("node-fetch");
let cityname="NewYork"
let url=`http://api.weatherstack.com/current?access_key=96f79c8e762b658f23661891e7808796&query=New%20York`;
function getweather(b){
    let cityname=b.getElementsByClassName("city")[0].innerHTML;
    let date=b.getElementsByClassName("date")[0];
    let temp=b.getElementsByClassName("temp")[0].getElementsByClassName("nm")[0];
    let status=b.getElementsByClassName("status")[0];
    

    let url=`http://api.weatherstack.com/current?access_key=96f79c8e762b658f23661891e7808796&query=${cityname}`;
    console.log(url);
    fetch(url).then((res)=>{

     return res.json();

    })
    .then((res)=>{
        status.innerHTML=res.current.weather_descriptions[0];
        date.innerHTML=res.location.localtime;
        temp.innerHTML=res.current.temperature;
        let time=date.innerHTML.slice(10,13)+date.innerHTML.slice(14,16);
        if(time>0700 && time<1800){
          b.style.backgroundImage="url('https://images.unsplash.com/photo-1578947207572-266e8ebbd59c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";
        }
        
        
        
        
        
    })
    .catch((err)=>{
        console.log(err);
    });
}

var intial=()=>{
var x=document.getElementsByClassName("card");
console.log(x[0]);
console.log(x[0].getElementsByClassName("city")[0]);
for(let i=0;i<x.length;i++)
{
    getweather(x[i]);
}
var cu=document.getElementsByClassName("box")[0];
getweather(cu);
};
var first=()=>{
    var x=document.getElementsByClassName("card");
    console.log(x[0]);
    console.log(x[0].getElementsByClassName("city")[0]);
    for(let i=0;i<x.length;i++)
    {
        getweather(x[i]);
    }
    var cu=document.getElementsByClassName("box")[0];
    getweather(cu);
    };
var c=document.getElementById("in").addEventListener("keypress",(e)=>{
    if (e.key === 'Enter') {
        document.getElementsByClassName("box")[0]
        .getElementsByClassName("city")[0].innerHTML=
        document.getElementById("in").value;
        getweather(document.getElementsByClassName("box")[0])
      }
});
function add(){
    var b=document.createElement("div");
    b.className="card";
    b.innerHTML=document.getElementsByClassName("box")[0].innerHTML;
    document.getElementsByClassName("card-container")[0].appendChild(b);
    intial();
}
first();
   setInterval(() => {
    intial();
   }, 60000); 

