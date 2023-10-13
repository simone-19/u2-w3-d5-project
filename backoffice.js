fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4Zjk3ZTEzOWM0MzAwMTg4MTQ1NzUiLCJpYXQiOjE2OTcxODQxMjYsImV4cCI6MTY5ODM5MzcyNn0.bEdY3-X5GWJquRaqPFOQIO4MeBpxKWviRwwInCBmb34",
  },
});

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const brandInput = document.getElementById("brand");
  const UrlImgInput = document.getElementById("imageUrl");
  const priceInput = document.getElementById("price");

  const newProduct = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    imageUrl: UrlImgInput.value,
    price: priceInput.value,
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4Zjk3ZTEzOWM0MzAwMTg4MTQ1NzUiLCJpYXQiOjE2OTcxODQxMjYsImV4cCI6MTY5ODM5MzcyNn0.bEdY3-X5GWJquRaqPFOQIO4MeBpxKWviRwwInCBmb34",
    },
  })
    .then((res) => {
      console.log("andato", res);

      if (res.ok) {
        console.log("ok", res);
      } else {
        throw new Error();
      }
    })
    .catch((err) => {
      console.log("errore", err);
    });
});
