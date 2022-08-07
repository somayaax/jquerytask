$(".open").click(function () {
    $(".sidebar").animate({ width: "250px" }, 500)
    $(".open").animate({ marginLeft: "250px" }, 500)
})
$(".close").click(function () {
    $(".sidebar").animate({ width: "0px" }, 500)
    $(".open").animate({ marginLeft: "0px" }, 500)
})

$("#singer h3").click(function () {
    $(this).next().slideToggle(500)
    $(this).next().siblings("p").slideUp(500)
})

let countDown = setInterval(function () {
    let eventDate = new Date("Dec 2, 2022 12:30:00").getTime()
    let today = new Date().getTime()
    let remainingTime = eventDate - today;
    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    if(days<10){days="0"+days}
    if(hours<10){hours="0"+hours}
    if(minutes<10){minutes="0"+minutes}
    if(seconds<10){seconds="0"+seconds}
    
    $(".days h3").text(days + " D")
    $(".hours h3").text(hours + " H")
    $(".minutes h3").text(minutes + " M")
    $(".seconds h3").text(seconds + " S")
}, 1000)

$("#msg").keyup(function countChar(){
    let charLength = this.value.length;
    console.log(charLength)
    if(charLength<=100){
        $("#char").text(100-charLength)
    }else{
        $("#char").text("your available character finished")
    }
})