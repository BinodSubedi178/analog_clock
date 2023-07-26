setInterval(() => {
  let time = new Date();

  let hour = String(time.getHours() % 12).padStart(2, "0");
    let a = hour * 30;
    document.getElementById("hour").style.transform = "rotate(" + a + "deg)";

  let minute = String(time.getMinutes()).padStart(2, "0");
    let b = minute * 6;
    document.getElementById("minute").style.transform = "rotate(" + b + "deg)";

  let second = String(time.getSeconds()).padStart(2, "0");
    let c = second * 6;
    document.getElementById("second").style.transform = "rotate(" + c + "deg)";

}, 1000);

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const d = new Date();
let abbDate = monthNames[d.getMonth()]
let dateNum = d.getDate()
console.log(dateNum)
document.getElementById("display-date").innerHTML = abbDate+" "+dateNum