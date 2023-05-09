window.addEventListener('load', (event) => {
  let currentColor1 = localStorage.getItem("bgcolor1") ? localStorage.getItem("bgcolor1") : "var(--light-gray)";
  document.querySelector("#color1").style.backgroundColor = currentColor1;
  document.querySelector("#color1value").value = currentColor1;
  let currentColor2 = localStorage.getItem("bgcolor2") ? localStorage.getItem("bgcolor2") : "var(--mid-gray)";
  document.querySelector("#color2").style.backgroundColor = currentColor2;
  document.querySelector("#color2value").value = currentColor2;
  let currentColor3 = localStorage.getItem("bgcolor3") ? localStorage.getItem("bgcolor3") : "var(--pale-purple)";
  document.querySelector("#color3").style.backgroundColor = currentColor3;
  document.querySelector("#color3value").value = currentColor3;
  let currentColor4 = localStorage.getItem("bgcolor4") ? localStorage.getItem("bgcolor4") : "var(--dark-green)";
  document.querySelector("#color4").style.backgroundColor = currentColor4;
  document.querySelector("#color4value").value = currentColor4;
  let currentColor5 = localStorage.getItem("bgcolor5") ? localStorage.getItem("bgcolor5") : "var(--pale-green)";
  document.querySelector("#color5").style.backgroundColor = currentColor5;
  document.querySelector("#color5value").value = currentColor5;
  let currentColor6 = localStorage.getItem("bgcolor6") ? localStorage.getItem("bgcolor6") : "var(--dark-blue)";
  document.querySelector("#color6").style.backgroundColor = currentColor6;
  document.querySelector("#color6value").value = currentColor6;

  //update colors for templates
  document.getElementById("container-d").style.backgroundColor = currentColor1;
  document.getElementById("container-m").style.backgroundColor = currentColor1;
  document.getElementById("container-cd").style.backgroundColor = currentColor1;
  document.getElementById("container-cm").style.backgroundColor = currentColor1;
  document.getElementById("container-ad").style.backgroundColor = currentColor1;
  document.getElementById("container-am").style.backgroundColor = currentColor1;

  document.getElementById("strip-d").style.backgroundColor = currentColor2;
  document.getElementById("strip-m").style.backgroundColor = currentColor2;
  document.getElementById("strip-cd").style.backgroundColor = currentColor2;
  document.getElementById("strip-cm").style.backgroundColor = currentColor2;

  document.getElementById("header-d").style.backgroundColor = currentColor3;
  document.getElementById("footer-d").style.backgroundColor = currentColor3;
  document.getElementById("header-m").style.backgroundColor = currentColor3;
  document.getElementById("footer-m").style.backgroundColor = currentColor3;
  document.getElementById("header-cd").style.backgroundColor = currentColor3;
  document.getElementById("footer-cd").style.backgroundColor = currentColor3;
  document.getElementById("header-cm").style.backgroundColor = currentColor3;
  document.getElementById("footer-cm").style.backgroundColor = currentColor3;
  document.getElementById("header-ad").style.backgroundColor = currentColor3;
  document.getElementById("footer-ad").style.backgroundColor = currentColor3;
  document.getElementById("header-am").style.backgroundColor = currentColor3;
  document.getElementById("footer-am").style.backgroundColor = currentColor3;

  if (currentColor4 = "var(--dark-green)") {
    document.getElementById("h1f1").style.color = "var(--dark-blue)";
    document.getElementById("h3f1").style.color = "var(--dark-blue)";
    document.getElementById("h5f1").style.color ="var(--dark-blue)";
    document.getElementById("smallest-font1").style.color = "var(--dark-blue)";
      // templates
    // homepage desktop
    document.getElementById("site-title-d").style.color = "var(--dark-blue)";
    document.getElementById("nav-menu").style.color = "var(--dark-blue)";
    document.getElementById("homepage-title-d").style.color = "var(--dark-blue)";
    document.getElementById("strip-title").style.color = "var(--dark-blue)";
    // homepage mobile
    document.getElementById("site-title-m").style.color = "var(--dark-blue)";
    document.getElementById("nav-menu-m").style.color = "var(--dark-blue)";
    document.getElementById("homepage-title-m").style.color = "var(--dark-blue)";
    document.getElementById("strip-title-m").style.color = "var(--dark-blue)";

    // contact desktop
    document.getElementById("site-title-cd").style.color = "var(--dark-blue)";
    document.getElementById("nav-menu-cd").style.color = "var(--dark-blue)";
    document.getElementById("homepage-title-cd").style.color = "var(--dark-blue)";
    document.getElementById("name-label-cd").style.color = "var(--dark-blue)";
    document.getElementById("email-label-cd").style.color = "var(--dark-blue)";
    document.getElementById("subject-label-cd").style.color = "var(--dark-blue)";
    // contact mobile
    document.getElementById("site-title-cm").style.color = "var(--dark-blue)";
    document.getElementById("nav-menu-cm").style.color = "var(--dark-blue)";
    document.getElementById("homepage-title-cm").style.color = "var(--dark-blue)";
    document.getElementById("name-label-cm").style.color = "var(--dark-blue)";
    document.getElementById("email-label-cm").style.color = "var(--dark-blue)";
    document.getElementById("subject-label-cm").style.color = "var(--dark-blue)";

    // article desktop
    document.getElementById("site-title-ad").style.color = "var(--dark-blue)";
    document.getElementById("nav-menu-ad").style.color = "var(--dark-blue)";
    document.getElementById("article-title-ad").style.color = "var(--dark-blue)";
    document.getElementById("article-info").style.color = "var(--dark-blue)";
    // article mobile
    document.getElementById("site-title-am").style.color = "var(--dark-blue)";
    document.getElementById("nav-menu-am").style.color = "var(--dark-blue)";
    document.getElementById("article-title-am").style.color = "var(--dark-blue)";
    document.getElementById("article-info-m").style.color = "var(--dark-blue)";
  }else{
    document.getElementById("h1f1").style.color = currentColor4;
    document.getElementById("h3f1").style.color = currentColor4;
    document.getElementById("h5f1").style.color = currentColor4;
    document.getElementById("smallest-font1").style.color = currentColor4;
    // templates
    // homepage desktop
    document.getElementById("site-title-d").style.color = currentColor4;
    document.getElementById("nav-menu").style.color = currentColor4;
    document.getElementById("homepage-title-d").style.color = currentColor4;
    document.getElementById("strip-title").style.color = currentColor4;
    // homepage mobile
    document.getElementById("site-title-m").style.color = currentColor4;
    document.getElementById("nav-menu-m").style.color = currentColor4;
    document.getElementById("homepage-title-m").style.color = currentColor4;
    document.getElementById("strip-title-m").style.color = currentColor4;

    // contact desktop
    document.getElementById("site-title-cd").style.color = currentColor4;
    document.getElementById("nav-menu-cd").style.color = currentColor4;
    document.getElementById("homepage-title-cd").style.color = currentColor4;
    document.getElementById("name-label-cd").style.color = currentColor4;
    document.getElementById("email-label-cd").style.color = currentColor4;
    document.getElementById("subject-label-cd").style.color = currentColor4;
    // contact mobile
    document.getElementById("site-title-cm").style.color = currentColor4;
    document.getElementById("nav-menu-cm").style.color = currentColor4;
    document.getElementById("homepage-title-cm").style.color = currentColor4;
    document.getElementById("name-label-cm").style.color = currentColor4;
    document.getElementById("email-label-cm").style.color = currentColor4;
    document.getElementById("subject-label-cm").style.color = currentColor4;

    // article desktop
    document.getElementById("site-title-ad").style.color = currentColor4;
    document.getElementById("nav-menu-ad").style.color = currentColor4;
    document.getElementById("article-title-ad").style.color = currentColor4;
    document.getElementById("article-info").style.color = currentColor4;
    // article mobile
    document.getElementById("site-title-am").style.color = currentColor4;
    document.getElementById("nav-menu-am").style.color = currentColor4;
    document.getElementById("article-title-am").style.color = currentColor4;
    document.getElementById("article-info-m").style.color = currentColor4;
  }

  if (currentColor5 = "var(--pale-green)"){
    document.getElementById("h1f2").style.color = "var(--dark-blue)";
    document.getElementById("h3f2").style.color = "var(--dark-blue)";
    document.getElementById("h5f2").style.color = "var(--dark-blue)";
    document.getElementById("smallest-font2").style.color = "var(--dark-blue)";
    // templates
    // homepage desktop
    document.getElementById("body-text01").style.color = "var(--dark-blue)";
    document.getElementById("strip-text01").style.color = "var(--dark-blue)";
    document.getElementById("btn01").style.color = "var(--off-white)";
    document.getElementById("figcaption-d").style.color = "var(--dark-blue)";
    // homepage mobile
    document.getElementById("body-text01-m").style.color = "var(--dark-blue)";
    document.getElementById("strip-text01-m").style.color = "var(--dark-blue)";
    document.getElementById("btn01-m").style.color = "var(--off-white)";
    document.getElementById("figcaption-m").style.color = "var(--dark-blue)";

    // contact desktop
    document.getElementById("name-cd").style.color = "var(--dark-blue)";
    document.getElementById("email-cd").style.color = "var(--dark-blue)";
    document.getElementById("subject-cd").style.color = "var(--dark-blue)";
    document.getElementById("submit-btn-cd").style.color = "--off-white";
    // contact mobile
    document.getElementById("name-cm").style.color = "var(--dark-blue)";
    document.getElementById("email-cm").style.color = "var(--dark-blue)";
    document.getElementById("subject-cm").style.color = "var(--dark-blue)";
    document.getElementById("submit-btn-cm").style.color = "--off-white";

    // article desktop
    document.getElementById("article-figcaption").style.color = "var(--dark-blue)";
    document.getElementById("body-text01-ad").style.color = "var(--dark-blue)";
    // artcile mobile
    document.getElementById("article-figcaption-m").style.color = "var(--dark-blue)";
    document.getElementById("body-text01-am").style.color = "var(--dark-blue)";
  }else{
    document.getElementById("h1f2").style.color = currentColor5;
    document.getElementById("h3f2").style.color = currentColor5;
    document.getElementById("h5f2").style.color = currentColor5;
    document.getElementById("smallest-font2").style.color = currentColor5;
    // templates
    // homepage desktop
    document.getElementById("body-text01").style.color = currentColor5;
    document.getElementById("strip-text01").style.color = currentColor5;
    document.getElementById("btn01").style.color = currentColor5;
    document.getElementById("figcaption-d").style.color = currentColor5;
    // homepage mobile
    document.getElementById("body-text01-m").style.color = currentColor5;
    document.getElementById("strip-text01-m").style.color = currentColor5;
    document.getElementById("btn01-m").style.color = currentColor5;
    document.getElementById("figcaption-m").style.color = currentColor5;

    // contact desktop
    document.getElementById("name-cd").style.color = currentColor5;
    document.getElementById("email-cd").style.color = currentColor5;
    document.getElementById("subject-cd").style.color = currentColor5;
    document.getElementById("submit-btn-cd").style.color = currentColor5;
    // contact mobile
    document.getElementById("name-cm").style.color = currentColor5;
    document.getElementById("email-cm").style.color = currentColor5;
    document.getElementById("subject-cm").style.color = currentColor5;
    document.getElementById("submit-btn-cm").style.color = currentColor5;

    // article desktop
    document.getElementById("article-figcaption").style.color = currentColor5;
    document.getElementById("body-text01-ad").style.color = currentColor5;
    // artcile mobile
    document.getElementById("article-figcaption-m").style.color = currentColor5;
    document.getElementById("body-text01-am").style.color = currentColor5;
  }
  document.getElementById("btn01").style.backgroundColor = currentColor6;
  document.getElementById("btn01-m").style.backgroundColor = currentColor6;
  document.getElementById("submit-btn-cd").style.backgroundColor = currentColor6;
  document.getElementById("submit-btn-cm").style.backgroundColor = currentColor6;
});

function setColor() {
  let color1 = document.querySelector("#color1value").value;
  document.querySelector("#color1").style.backgroundColor = color1;
  window.localStorage.setItem("bgcolor1", color1);
}

function setColor2(){
  let color2 = document.querySelector("#color2value").value;
  document.querySelector("#color2").style.backgroundColor = color2;
  window.localStorage.setItem("bgcolor2", color2);
}
function setColor3(){
  let color3 = document.querySelector("#color3value").value;
  document.querySelector("#color3").style.backgroundColor = color3;
  window.localStorage.setItem("bgcolor3", color3);
}
function setColor4(){
  let color4 = document.querySelector("#color4value").value;
  document.querySelector("#color4").style.backgroundColor = color4;
  window.localStorage.setItem("bgcolor4", color4);
}
function setColor5(){
  let color5 = document.querySelector("#color5value").value;
  document.querySelector("#color5").style.backgroundColor = color5;
  window.localStorage.setItem("bgcolor5", color5);
}
function setColor6(){
  let color6 = document.querySelector("#color6value").value;
  document.querySelector("#color6").style.backgroundColor = color6;
  window.localStorage.setItem("bgcolor6", color6);
}

function deleteItems(){
  // clear localStorage 
  localStorage.removeItem("bgcolor1");
  localStorage.removeItem("bgcolor2");
  localStorage.removeItem("bgcolor3");
  localStorage.removeItem("bgcolor4");
  localStorage.removeItem("bgcolor5");
  localStorage.removeItem("bgcolor6");
  // reset with old values
  document.querySelector("#color1").style.backgroundColor =  "var(--light-gray)";
  document.querySelector("#color2").style.backgroundColor = "var(--mid-gray)";
  document.querySelector("#color3").style.backgroundColor = "var(--pale-purple)";
  document.querySelector("#color4").style.backgroundColor = "var(--dark-green)";
  document.querySelector("#color5").style.backgroundColor = "var(--pale-green)";
  document.querySelector("#color6").style.backgroundColor = "var(--dark-blue)";

  document.getElementById("h1f1").style.color = "var(--dark-blue)";
  document.getElementById("h3f1").style.color = "var(--dark-blue)";
  document.getElementById("h5f1").style.color ="var(--dark-blue)";
  document.getElementById("smallest-font1").style.color = "var(--dark-blue)";

  document.getElementById("h1f2").style.color = "var(--dark-blue)";
  document.getElementById("h3f2").style.color = "var(--dark-blue)";
  document.getElementById("h5f2").style.color = "var(--dark-blue)";
  document.getElementById("smallest-font2").style.color = "var(--dark-blue)";
}

