const input = document.querySelector(".input");
const select = document.querySelector(".select");
const result = document.querySelector(".result");

result.style.display = "none";
let date = "";
let periods = 1;
const msInDay = 24 * 60 * 60 * 1000;
const months = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
];

input.onchange = (e) => {
    date = e.target.value;
    console.log(date);
    if (date) {
        calculateResult(date, periods);
    } else {
        result.style.display = "none";
    }
};

select.onchange = (e) => {
    periods = +e.target.value;
    if (date) {
        calculateResult(date, periods);
    } else {
        result.style.display = "none";
    }
};

function calculateResult(start, qantity) {
    const dateStart = new Date(start + "T00:00:00").getTime();
    const dateEnd = new Date(dateStart + qantity * 28 * msInDay);
    let month = dateEnd.getMonth();
    let day = dateEnd.getDate();
    let year = dateEnd.getFullYear();
    result.textContent = `${day} ${months[month]} ${year} року`;
    result.style.display = "block";
}
