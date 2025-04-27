let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; // Setting max date to today's date
let result = document.getElementById("result");

function calculateAge() {
    let birthDate = new Date(userInput.value);

    // Get the birthdate day, month, and year
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;  // Months are zero-indexed
    let y1 = birthDate.getFullYear();

    let today = new Date();

    // Get today's day, month, and year
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;  // Months are zero-indexed
    let y2 = today.getFullYear();

    let d3, m3, y3;

    // If the birthdate is exactly today's date
    if (birthDate.toISOString().split("T")[0] === today.toISOString().split("T")[0]) {
        result.innerHTML = "You were born today! Happy Birthday!";
        return;
    }

    // Calculate years
    y3 = y2 - y1;

    // Adjust months
    if (m2 > m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    // Adjust days
    if (d2 > d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    // Handle negative values for months or days
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days old.`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
