

// function DateFun()
// {
//  const date
// }
// DateFun();

// function currentTime() {
//     let date = new Date(); 
//     const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();
//     let todate =date.getDate();
//     let month = months[date.getMonth()];
//     let session = "AM";


//     if(hh > 12){
//         session = "PM";
//      }

//      hh = (hh < 10) ? "0" + hh : hh;
//      mm = (mm < 10) ? "0" + mm : mm;
//      ss = (ss < 10) ? "0" + ss : ss;

//      let time = hh + ":" + mm + ":" + ss + " " + session;

//     document.getElementById("end-date").innerText =todate +" "+ month; 
//     document.getElementById("txtHour").value=hh;
//     var t = setTimeout(function(){ currentTime() }, 1000); 

//   }

"---------------------------------------------------------------------------------------------------------  "


const endDate = "13 august 2023 11:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");


function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;


}
clock()

setInterval(
    () => {
        clock()
    },
    1000
)