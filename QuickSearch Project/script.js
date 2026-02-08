const users = [
  {
    name: "amisha rathore",
    pic: "profile_pic1.jfif",
    bio: "silent chaos in a loud world | not for everyone",
  },
  {
    name: "rohan mehta",
    pic: "profile_pic2.jfif",
    bio: "late replies, early dreams, constant overthinking",
  },
  {
    name: "neha sharma",
    pic: "profile_pic3.jfif",
    bio: "collecting moments, not things",
  },
  {
    name: "arjun kapoor",
    pic: "profile_pic4.jfif",
    bio: "building myself one mistake at a time",
  },
  {
    name: "kavya singh",
    pic: "profile_pic5.jfif",
    bio: "soft heart, sharp mind",
  },
  {
    name: "ishaan verma",
    pic: "profile_pic6.jfif",
    bio: "lost in code, found in music",
  },
  {
    name: "riya malhotra",
    pic: "profile_pic7.jfif",
    bio: "minimal words, maximum meaning",
  },
];

const container = document.getElementById("card-container");

function showUsers(arr) {
  container.innerHTML = "";

  arr.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = user.pic;
    img.alt = user.name;
    img.className = "bg-img";
    img.loading = "lazy";

    const blurredLayer = document.createElement("div");
    blurredLayer.className = "blurred-layer";
    blurredLayer.style.backgroundImage = `url(${user.pic})`;

    const content = document.createElement("div");
    content.className = "content";

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    content.append(h3, p);
    card.append(img, blurredLayer, content);
    container.appendChild(card);
  });
}

showUsers(users);
let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  let newUsers = users.filter((user) => {
    return user.name.startsWith(inp.value);
  });

  showUsers(newUsers);
});
