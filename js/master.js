fetch("https://muhammed-abdelaleam.github.io/me/js/main.json")
  .then((data) => data.json())
  .then((data) => {
    for (const key in data) {
      let pro = data[key];
      console.log(pro);
      let div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <div class="photo">
          <img src="${pro.photo}" alt="project photo" />
        </div>
        <div class="caption">
          <div class="title">${pro.name}</div>
          <div class="des">${pro.des}</div>
          <div class="btn" onclick="location.href='${pro.link}'">
          ${pro.btn_name}
          </div>
        </div>
      `;
      workE.appendChild(div);
    }
  });
