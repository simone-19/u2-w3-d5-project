fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4Zjk3ZTEzOWM0MzAwMTg4MTQ1NzUiLCJpYXQiOjE2OTcxODQxMjYsImV4cCI6MTY5ODM5MzcyNn0.bEdY3-X5GWJquRaqPFOQIO4MeBpxKWviRwwInCBmb34",
  },
});
const cardProd = function (arrayOfcard) {
  const row = document.getElementById("rowApp");
  arrayOfcard.forEach((event) => {
    const col = document.createElement("div");
    col.classList.add("col", "col-3", "col-sm-6", "col-md-3");

    col.innerHTML = `
    <div class="card m-3">
        <img src="${event.imageUrl}" class="card-img-top" alt="prodotto">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <p class="card-text">${event.brand} - Prezzo: ${event.price}€</p>
            <a href="./detail.html?eventId=${event._id}" class="btn btn-primary">Dettagli</a>
        </div>
    </div>
    `;
    // creato div col e appendo alla row
    row.appendChild(col);
  });
};
const getCard = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4Zjk3ZTEzOWM0MzAwMTg4MTQ1NzUiLCJpYXQiOjE2OTcxODQxMjYsImV4cCI6MTY5ODM5MzcyNn0.bEdY3-X5GWJquRaqPFOQIO4MeBpxKWviRwwInCBmb34",
    },
  })
    .then((res) => {
      //   console.log("andato", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore");
      }
    })
    .then((events) => {
      console.log("eccolo", events);
      // creo card con funzione cardProd
      cardProd(events);
    })
    .catch((err) => {
      console.log("Si è verificato un errore:", err);
    });
};
getCard();
