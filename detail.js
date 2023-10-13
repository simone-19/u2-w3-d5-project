const addressBarContent = new URLSearchParams(location.search);
const eventId = addressBarContent.get("eventId");
console.log(eventId);
fetch("https://striveschool-api.herokuapp.com/api/product/", {});
// funzione delete

const deleteDetail = function () {
  // funzione elimina
  fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4Zjk3ZTEzOWM0MzAwMTg4MTQ1NzUiLCJpYXQiOjE2OTcxODQxMjYsImV4cCI6MTY5ODM5MzcyNn0.bEdY3-X5GWJquRaqPFOQIO4MeBpxKWviRwwInCBmb34",
    },
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        alert("ELIMINATO");
        location.assign("./homepage.html"); // torna homepage
      } else {
        alert("Problema con l'eliminazione");
        throw new Error("Errore nella DELETE");
      }
    })
    .catch((err) => {
      console.log("ERRORE!", err);
    });
};
// delete

const generateDetails = function (details) {
  // prendo un riferimento alla row
  const row = document.getElementById("dettagli");
  row.innerHTML = `
          <div class="col col-12 col-lg-6">
              <h3 class="text-center text-white"">DETTAGLI PRODOTTO :</h3>
              <img
              src="${details.imageUrl}" class="card-img-top w-50" alt="prodotto"
              />
              <h5 class="text-center mt-4 text-white"">${details.name}</h5>
              <p class="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                exercitationem quisquam ut. Eos molestias officia a adipisci
                sapiente, impedit facere beatae corrupti iure dolore saepe, totam
                ut. Unde, labore delectus?
                ${details.description}
              </p>
              <p class="text-white">Prezzo: ${details.price}€</p>
              <a class="btn btn-dark" href="./backoffice.html?eventId=${details._id}">MODIFICA</a>
              <button class="btn btn-dark" onclick="deleteDetail()">ELIMINA</button>
          </div>
      `;
};
const getDetails = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4Zjk3ZTEzOWM0MzAwMTg4MTQ1NzUiLCJpYXQiOjE2OTcxODQxMjYsImV4cCI6MTY5ODM5MzcyNn0.bEdY3-X5GWJquRaqPFOQIO4MeBpxKWviRwwInCBmb34",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore ");
      }
    })
    .then((prod) => {
      generateDetails(prod);
    })
    .catch((err) => console.log("ERRORE", err));
};
getDetails();
