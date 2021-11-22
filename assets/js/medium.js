let blogs = document.getElementById("blogs");
fetch(
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akamran2001"
)
  .then((response) => response.json())
  .then((data) =>
      data.items.forEach((item) => {
        blogs.innerHTML += `<div class="col centered">
    <div class="card bg-dark w-100">
      <img
        class="card-img-top"
        src="${item.thumbnail}"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title font-weight-bold">
          <u id=${item.guid}>${item.guid=="https://medium.com/p/2323b3d9b6bf"?"Fall of the Weimar Republic":item.title}</u>
        </h5>

        <a
          href="${item.guid}"
          class="btn btn-success"
          >Read More</a
        >
      </div>
    </div>
  </div>`;
      })
  );
