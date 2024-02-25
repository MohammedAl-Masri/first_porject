let mainCo = localStorage.getItem("color_option");

if (mainCo !== null) {
  document.documentElement.style.setProperty("--main-color", mainCo);

  document.querySelectorAll(".color-list li").forEach((el) => {
    el.classList.remove("active");

    if (el.dataset.color === mainCo) {
      el.classList.add("active");
      document.querySelector(".gear").classList.add("active");
    }
  });
}

// ################
let page = document.querySelectorAll("header ul");
page.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.target.parentElement.parentElement
      .querySelectorAll(".active")
      .forEach((el) => {
        el.classList.remove("active");
      });
    e.target.classList.add("active");
  });
});
// ################

let gear = document.querySelector(".gear");
gear.addEventListener("click", () => {
  document.querySelector(".setting").classList.toggle("open");
  gear.classList.toggle("fa-spin");
});
// #########

let colors = document.querySelectorAll(".color-list li");
colors.forEach((li) => {
  li.addEventListener("click", (e) => {
    let a = e.target.dataset.color;

    document.documentElement.style.setProperty("--main-color", a);

    gear.style.color = a;

    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    localStorage.setItem("color_option", e.target.dataset.color);

    e.target.parentElement.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
// ########

let backgroundOp = true;
let backgroundInterval;

let backgrondLocalT = localStorage.getItem("Background_option");

if (backgrondLocalT !== null) {
  if (backgrondLocalT === "yes") {
    backgroundOp = true;
  } else {
    backgroundOp = false;
  }
  document.querySelectorAll(".box-op span").forEach((span) => {
    span.classList.remove("active");
  });
  if (backgrondLocalT === "true") {
    document.querySelector(".yes").classList.add("active");
  } else {
    document.querySelector(".no").classList.add("active");
  }
}

let BackgroundRandom = document.querySelectorAll(".box-op span");
BackgroundRandom.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.dataset.backgrond === "yes") {
      backgroundOp = true;
      ramdomImqs();
      localStorage.setItem("Background_option", true);
    } else {
      backgroundOp = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("Background_option", false);
    }
  });
});
// ########
let home = document.querySelector(".home");
let colorBackContainer = document.querySelector(".colorBackContainer");

let arryImg = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

function ramdomImqs() {
  if (backgroundOp === true) {
    backgroundInterval = setInterval(() => {
      let randomnum = Math.floor(Math.random() * arryImg.length);
      home.style.backgroundImage = `url("../img/${arryImg[randomnum]}")`;
      colorBackContainer.style.backgroundImage = `url("../img/${arryImg[randomnum]}")`;
    }, 5000);
  }
}
ramdomImqs();

// ###################
document.querySelector(".reset").onclick = function () {
  localStorage.clear();
  window.location.reload();
};

// #################

let bar = document.querySelector(".bar");
let links = document.querySelector("header ul");

bar.onclick = function (e) {
  e.stopPropagation();
  links.classList.toggle("open");
};

document.addEventListener("click", (e) => {
  if (e.target !== bar && e.target !== links) {
    if (links.classList.contains("open")) {
      links.classList.remove("open");
    }
  }
});

links.onclick = function (e) {
  e.stopPropagation();
};
