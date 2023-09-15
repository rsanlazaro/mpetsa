document.addEventListener("DOMContentLoaded", function () {
  validation();
  // displayMap();
  language();
  // crearGaleria();
  // burgerAnimate();
  // lazyLoad();
});

function validation() {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
}
d;

function displayMap() {
  var map = L.map("map").setView([19.447683, -99.063565], 14);

  // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //   attribution:
  //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  //   detectRetina: true,
  //   tileSize: 512,
  //   zoomOffset: -1,
  // }).addTo(map);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    detectRetina: true,
  }).addTo(map);

  L.marker([19.447683, -99.063565]).addTo(map);
}

function language() {
  var btnEnglish = document.querySelectorAll(".btn-english-img");
  var btnSpanish = document.querySelectorAll(".btn-spanish-img");
  var english = document.querySelectorAll(".english");
  var spanish = document.querySelectorAll(".spanish");
  console.log(english);
  console.log(spanish);

  btnEnglish.forEach(function (englishBtn) {
    englishBtn.addEventListener("click", function () {
      console.log("Inglés");
      english.forEach(function (englishElement) {
        englishElement.classList.add("display-block");
        englishElement.classList.remove("display-none");
      });
      spanish.forEach(function (spanishElement) {
        spanishElement.classList.remove("display-block");
        spanishElement.classList.add("display-none");
      });
      btnSpanish.forEach(function (spanishActive) {
        spanishActive.classList.remove("active");
      });
      btnEnglish.forEach(function (englishActive) {
        englishActive.classList.add("active");
      });
    });
  });

  btnSpanish.forEach(function (spanishBtn) {
    spanishBtn.addEventListener("click", function () {
      console.log("Español");
      spanish.forEach(function (spanishElement) {
        spanishElement.classList.add("display-block");
        spanishElement.classList.remove("display-none");
      });
      english.forEach(function (englishElement) {
        englishElement.classList.remove("display-block");
        englishElement.classList.add("display-none");
      });
      btnSpanish.forEach(function (spanishActive) {
        spanishActive.classList.add("active");
      });
      btnEnglish.forEach(function (englishActive) {
        englishActive.classList.remove("active");
      });
    });
  });
}

function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= 8; i++) {
    const imagen = document.createElement("div");
    imagen.innerHTML = `
          <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.webp" alt="imagen galeria">
      `;
    imagen.onclick = function () {
      mostrarImagen(i);
    };

    galeria.appendChild(imagen);
  }
}

function mostrarImagen(id) {
  const imagen = document.createElement("div");
  imagen.innerHTML = `
      <img loading="lazy" src="build/img/grande/${id}.webp" alt="imagen galeria">
  `;

  // Crea el Overlay con la imagen
  const overlay = document.createElement("DIV");
  overlay.appendChild(imagen);
  overlay.classList.add("overlay");
  overlay.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove();
  };

  // Boton para cerrar el Modal
  const cerrarModal = document.createElement("P");
  cerrarModal.textContent = "X";
  cerrarModal.classList.add("btn-cerrar");
  cerrarModal.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove();
  };
  overlay.appendChild(cerrarModal);

  // Añadirlo al HTML
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");
}

function burgerAnimate() {
  const navMenu = document.querySelector("#navMenu");
  const navBtn = document.querySelector(".navbar-toggler");
  navBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
