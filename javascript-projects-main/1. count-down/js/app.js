
const endDate = "3 september 2023 02:40:00 AM";

document.getElementById("end-date").innerText = endDate;
 
function clock() {
    const now = new Date();
    const end = new Date(endDate);
    const diff = (now - end) / 1000;

    const inputs = document.querySelectorAll("input");
    if (diff < 0)
        return;
    //Convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff % 60);
 
}

// initial call
clock()


setInterval(() => {
    clock()
}, 1000);
















 