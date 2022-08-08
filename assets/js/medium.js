let blogs = document.getElementById("blogs");
fetch(
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akamran2001"
)
  .then((response) => response.json())
  .then((data) =>
    data.items.forEach((item) => {
      blogs.innerHTML += `<div class="col">
        <div class="card bg-dark w-100">
          <img
            id="${item.guid}-img"
            class="card-img-top"
            src="${item.thumbnail}"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title font-weight-bold">
              <u id=${item.guid}-title>${item.title}</u>
            </h5>

            <a
              href="${item.guid}"
              class="btn btn-success"
              >Read More</a
            >
          </div>
        </div>
      </div>`;
      //Give the i/p article a smaller thumbnail
      if (item.guid == "https://medium.com/p/a40f2b9ee900") {
        document.getElementById("https://medium.com/p/a40f2b9ee900-img").src =
          "https://i0.wp.com/jcpa.org/wp-content/uploads/2017/11/un_general_assembly_nov_29_1947.jpg?fit=3066%2C2052&ssl=1&resize=900%2C506.25";
        document.getElementById(
          "https://medium.com/p/a40f2b9ee900-title"
        ).innerText = "Brief history and aftermath of UN Resolution 181";
      }
      //Give the Weimar article a different title
      if (item.guid == "https://medium.com/p/2323b3d9b6bf") {
        document.getElementById(
          "https://medium.com/p/2323b3d9b6bf-title"
        ).innerText =
          "The KPD and SPD during the final years of the Weimar Republic";
      }
      //Give the 2016 election article a different thumbnail and title
      if (item.guid == "https://medium.com/p/32373fad77b2") {
        document.getElementById("https://medium.com/p/32373fad77b2-img").src =
          "https://s.abcnews.com/images/Politics/RTR_Trump_clinton_debate_01_jrl_161017_16x9_1600.jpg";
        document.getElementById(
          "https://medium.com/p/32373fad77b2-title"
        ).innerText =
          "Analysis of voting factors in the 2016 US Presidential election";
      }
    })
  );
