let form = document.getElementById("form");
let inputName = document.getElementById("input-name");
let inputEmail = document.getElementById("input-email");
const btn = document.getElementById("btn");
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");

let person = [];

function ls() {
    // ذخیره اطلاعات در localStorage به‌صورت string
    localStorage.setItem("Person", JSON.stringify(person));    
    
    // گرفتن اطلاعات از localStorage
    const stored = JSON.parse(localStorage.getItem("Person"));

    // نمایش آخرین فرد اضافه‌شده (اگر وجود داشته باشد)
    if (stored && stored.length > 0) {
        const last = stored[stored.length - 1];
        h1.innerText = last.Name;
        h2.innerText = last.Email;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = inputName.value.trim();
    const email = inputEmail.value.trim();

    if (!name || !email) return; // بررسی فیلدهای خالی

    person.push({ Name: name, Email: email });

    ls();

    // پاک کردن ورودی‌ها
    inputName.value = "";
    inputEmail.value = "";
});
