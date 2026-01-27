const BASE_URL = "http://localhost:8080/userData";

// fetching data from api -> start
const allDataFetch = async () => {
  try {
    let res = await fetch(BASE_URL);
    let data = await res.json();
    Render_UI(data);
  } catch (error) {
    console.log("❌ ~ error:", error);
  }
};
// fetching data from api -> end


const EditUI = (elValue, e) => {
  e.preventDefault();
  console.log("✏️ ~ elValue:", elValue);

  const form = document.createElement("form");

  form.innerHTML = `
    <input placeholder="enter your email" type="text" value="${elValue.email}" />
    <input placeholder="enter your pass" type="text" value="${elValue.pass}" />
    <input placeholder="enter your country" type="text" value="${elValue.country}" />
    <input placeholder="enter your gender" type="text" value="${elValue.gender}" />
    <input placeholder="enter your name" type="text" value="${elValue.name}" />
  `;

  return form;
};


const Render_UI = (value) => {
  const infoMainDiv = document.querySelector("#information");

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  thead.innerHTML = `
    <tr>
      <th>sr no</th>
      <th>email</th>
      <th>pass</th>
      <th>country</th>
      <th>gender</th>
      <th>actions</th>
    </tr>
  `;

  value.map((el) => {
    console.log("📦 ~ el:", el);

    const tr_row = document.createElement("tr");
    const sr_no = document.createElement("td");
    const email = document.createElement("td");
    const pass = document.createElement("td");
    const gender = document.createElement("td");
    const country = document.createElement("td");
    const btn_content = document.createElement("td");
    const edit_btn = document.createElement("button");
    const delete_btn = document.createElement("button");

    sr_no.innerText = el.id;
    email.innerText = el.email;
    pass.innerText = el.pass;
    gender.innerText = el.gender;
    country.innerText = el.country;

    edit_btn.textContent = "edit";
    delete_btn.textContent = "delete";

    btn_content.className = "btn_content";

    edit_btn.addEventListener("click", async (e) => {
      e.preventDefault();

      // patch -> will do change in one element of the object
      // put -> will change the hole object

      fetch(`${BASE_URL}/${el.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({...el,isEdit:true}),
      });
    });

    delete_btn_btn.addEventListener("click", async (e) => {
      e.preventDefault();

      fetch(`${BASE_URL}/${el.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    });

    btn_content.append(edit_btn, delete_btn);
    tr_row.append(sr_no, email, pass, country, gender, btn_content);
    tbody.append(tr_row);
  });

  table.append(thead, tbody);
  infoMainDiv.append(table);
};