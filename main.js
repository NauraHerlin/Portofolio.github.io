const navatas = document.getElementById("navigasiatas");
const navigasi = document.getElementById("navigasi");
const nav = navigasi.querySelectorAll("i");

const home = document.getElementById("home");
const about = document.getElementById("about");
const experience = document.getElementById("experience");
const contact = document.getElementById("contact");

// scroll background navigasi
window.addEventListener("scroll", () => {
  const scrollposition = window.scrollY;
  const homesection = home.offsetTop - 130;
  const aboutsection = about.offsetTop - 120;
  const experiencesection = experience.offsetTop - 200;
  const contactsection = contact.offsetTop - 220;

  if (scrollposition >= homesection && scrollposition < aboutsection) {
    setActiveNavLink(0);
  } else if (
    scrollposition >= aboutsection &&
    scrollposition < experiencesection
  ) {
    setActiveNavLink(1);
  } else if (
    scrollposition >= experiencesection &&
    scrollposition < contactsection
  ) {
    setActiveNavLink(2);
  } else if (scrollposition >= contactsection) {
    setActiveNavLink(3);
  }
});

function setActiveNavLink(index) {
  nav.forEach((link, i) => {
    if (i === index) {
      link.style.backgroundColor = "  rgba(152, 105, 39, 0.8) ";
      link.style.borderRadius = "40px";
      link.style.padding = "6px";
    } else {
      link.style.backgroundColor = " transparent";
      link.style.borderRadius = "none";
    }
  });
}

// click di navigasi
const homebtn = document.getElementById("homebtn");
const aboutbtn = document.getElementById("aboutbtn");
const experiencebtn = document.getElementById("experiencebtn");
const contactbtn = document.getElementById("contactbtn");

homebtn.addEventListener("click", function () {
  window.scrollTo({
    top: home.offsetTop - 130,
    behavior: "smooth",
  });
});
aboutbtn.addEventListener("click", function () {
  window.scrollTo({
    top: about.offsetTop - 56,
    behavior: "smooth",
  });
});
experiencebtn.addEventListener("click", function () {
  window.scrollTo({
    top: experience.offsetTop - 54,
    behavior: "smooth",
  });
});
contactbtn.addEventListener("click", function () {
  window.scrollTo({
    top: contact.offsetTop - 30,
    behavior: "smooth",
  });
});

const academybtn = document.getElementById("academybtn");
const skillbtn = document.getElementById("skillbtn");
const kontentombol1 = document.getElementById("kontentombol1");
const kontentombol2 = document.getElementById("kontentombol2");
const academyimg = document.getElementById("academyimg");
const skillimg = document.getElementById("skillimg");
// untuk dark mode
const darkmode = document.getElementById("dark");
const body = document.body;
const academybox = document.querySelectorAll(".academy");
const contactbox = document.querySelectorAll(".contactbox");
const darkmodetext = document.querySelectorAll(".darkmodetext");
const images = document.querySelectorAll(".darkmode");
var klikdark = 0;

darkmode.addEventListener("click", () => {
  body.classList.toggle("active");
  klikdark++;
  // darkmode icons
  const darkmodeImg = [
    "img/light.png",
    "img/homeL.png",
    "img/userL.png",
    "img/graduationL (1).png",
    "img/contactL.png",
    "img/mailL.png",
    "img/instagramL.png",
  ];
  const lightImg = [
    "img/dark.png",
    "img/home.png",
    "img/user.png",
    "img/graduation.png",
    "img/contact.png",
    "img/mail.png",
    "img/instagram.png",
  ];

  images.forEach((image, index) => {
    if (body.classList.contains("active")) {
      image.src = darkmodeImg[index];
    } else {
      image.src = lightImg[index];
    }
  });

  // dark mode untuk Teks , nav atas & navigasi
  darkmodetext.forEach((text) => {
    if (body.classList.contains("active")) {
      navatas.style.backgroundColor = " rgb(20, 20, 19)";
      // text.style.color = "rgba(239,239,239, 1)";
      text.style.color = "rgba(217,217,217, 1)";
      navatas.style.boxShadow = " 0px 1px 1px 1px rgba(41, 41, 41, 0.3)";
      navigasi.style.backgroundColor = " rgba(23, 23, 23, 0.97 )";
    } else {
      navatas.style.backgroundColor = "rgb(255, 255, 255)";
      text.style.color = "initial";
      navatas.style.boxShadow = " 0px 1px 1px 1px rgba(218, 213, 213, 0.3)";
      navigasi.style.backgroundColor = " rgba(240, 240, 240, 0.96)";
    }
  });

  // darkmode untuk academy section
  if (
    body.classList.contains("active") &&
    (kontentombol1.style.display === "grid" ||
      getComputedStyle(kontentombol1).display === "grid")
  ) {
    skillbtn.style.color = "#efefef ";
    academybtn.style.color = " rgba(152, 105, 39, 0.8)";
  } else if (
    !body.classList.contains("active") &&
    (kontentombol1.style.display === "grid" ||
      getComputedStyle(kontentombol1).display === "grid")
  ) {
    skillbtn.style.color = "black ";
  }

  if (
    body.classList.contains("active") &&
    (kontentombol2.style.display === "grid" ||
      getComputedStyle(kontentombol2).display === "grid")
  ) {
    academybtn.style.color = " #efefef";
    skillbtn.style.color = " rgba(152, 105, 39, 0.8)";
  } else if (
    !body.classList.contains("active") &&
    (kontentombol2.style.display === "grid" ||
      getComputedStyle(kontentombol2).display === "grid")
  ) {
    academybtn.style.color = " black";
  }

  // dark mode untuk academy section bagian konten nya
  academybox.forEach((academyb) => {
    if (body.classList.contains("active")) {
      academyb.style.boxShadow = " 1px 1px 1px 1px rgba(239, 239, 239, 0.1)  ";
    } else {
      academyb.style.boxShadow = " 3px 3px 6px 0px rgba(0, 0, 0, 0.1) ";
    }
  });
  contactbox.forEach((contactb) => {
    if (body.classList.contains("active")) {
      contactb.style.boxShadow = "  1px 1px 1px 1px rgba(239, 239, 239, 0.1)  ";
    } else {
      contactb.style.boxShadow = " 3px 3px 6px 0px rgba(0, 0, 0, 0.1) ";
    }
  });

  academybtn.addEventListener("click", function () {
    academybtn.style.color = "rgba(152, 105, 39, 0.8)";
    if (body.classList.contains("active")) {
      academybtn.style.color = "rgba(152, 105, 39, 0.8)";
      skillbtn.style.color = "#efefef";
    }
    //  else {
    //   academybtn.style.color = "rgba(152, 105, 39, 0.8)";
    //   skillbtn.style.color = "black";
    // }
  });
  skillbtn.addEventListener("click", function () {
    skillbtn.style.color = " rgba(152, 105, 39, 0.8)";
    if (body.classList.contains("active")) {
      skillbtn.style.color = " rgba(152, 105, 39, 0.8)";
      academybtn.style.color = "#efefef";
    } else {
      skillbtn.style.color = " rgba(152, 105, 39, 0.8)";
      academybtn.style.color = "black";
    }
  });
});

// untuk experience section bagian academy dan skill click clickan

if (
  kontentombol1.style.display === "grid" ||
  getComputedStyle(kontentombol1).display === "grid"
) {
  academybtn.style.color = " rgba(152, 105, 39, 0.8)";
  skillbtn.style.color = " black ";
} else if (getComputedStyle(kontentombol2).display === "grid") {
  skillbtn.style.color = " rgba(152, 105, 39, 0.8)";
  academybtn.style.color = "black ";
}
academybtn.addEventListener("click", function () {
  kontentombol1.style.display = "grid";
  kontentombol2.style.display = "none";
  academybtn.style.color = "rgba(152, 105, 39, 0.8)";
  skillbtn.style.color = "black";
});
skillbtn.addEventListener("click", function () {
  kontentombol1.style.display = "none";
  kontentombol2.style.display = "grid";
  skillbtn.style.color = " rgba(152, 105, 39, 0.8)";
  academybtn.style.color = "black";
});
