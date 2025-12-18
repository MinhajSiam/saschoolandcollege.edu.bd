function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}// পরিসংখ্যান কাউন্টার এনিমেশন
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target'); // data-target এর ভ্যালু নেওয়া
        const c = +counter.innerText; // বর্তমান ভ্যালু

        const increment = target / 200; // স্পিড কন্ট্রোল

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 20); // প্রতি ২০ মিলিসেকেন্ডে আপডেট হবে
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});
// js/main.js

document.addEventListener("DOMContentLoaded", function () {

    // ১. হেডার লোড করা
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;

            // হেডার লোড হওয়ার পর একটিভ মেনু সেট করা
            setActiveMenu();
        });

    // ২. ফুটার লোড করা
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
});

// ৩. একটিভ মেনু হাইলাইট করার ফাংশন
function setActiveMenu() {
    // বর্তমান পেজের নাম বের করা (যেমন: index.html বা about.html)
    let currentPage = window.location.pathname.split("/").pop();

    // যদি পেজের নাম খালি থাকে (রুট ফোল্ডার), তাহলে index.html ধরবে
    if (currentPage === "") currentPage = "index.html";

    // সব মেনু লিঙ্ক সিলেক্ট করা
    const navLinks = document.querySelectorAll('.nav-links li a');

    navLinks.forEach(link => {
        // লিঙ্কের href এর সাথে বর্তমান পেজের নাম মিললে active ক্লাস যোগ হবে
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active'); // CSS এ .active এর স্টাইল থাকতে হবে
        }
    });
}

// মোবাইল মেনু টগল (আগের কোড)
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}