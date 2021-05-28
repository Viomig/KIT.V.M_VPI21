async function loading() {
  document.getElementById("lod").innerHTML = "Loading...";
  const response = await fetch("https://randomuser.me/api/?results=10");
  const results = await response.json();
  console.log(results);

  for (let i = 0; i < 10; i++) {
    document.getElementById("gender" + i).innerText = results.results[i].gender;
    document.getElementById("name" + i).innerText =
      results.results[i].name.first + " " + results.results[i].name.last;
    document.getElementById("email" + i).innerText = results.results[i].email;
    document.getElementById("addres" + i).innerText =
      results.results[i].location.state +
      ", " +
      results.results[i].location.city;
    document.getElementById("age" + i).innerText = results.results[i].dob.age;
    document.getElementById("phone" + i).innerText = results.results[i].phone;
    document.getElementById("avatar" + i).src =
      results.results[i].picture.large;
  }

  document.getElementById("lod").innerHTML = "success!";
  document.getElementById("disp").style.display = "";
}
