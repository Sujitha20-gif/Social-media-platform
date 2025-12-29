async function addPost() {
  const text = document.getElementById("postText").value;

  if (!text) return alert("Write something!");

  await fetch("http://localhost:5000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  document.getElementById("postText").value = "";
  loadPosts();
}

async function loadPosts() {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();

  const postsDiv = document.getElementById("posts");
  postsDiv.innerHTML = "";

  posts.forEach(post => {
    const p = document.createElement("p");
    p.textContent = post;
    postsDiv.appendChild(p);
  });
}

loadPosts();async function addPost() {
  const text = document.getElementById("postText").value;

  if (!text) return alert("Write something!");

  await fetch("http://localhost:5000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  document.getElementById("postText").value = "";
  loadPosts();
}

async function loadPosts() {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();

  const postsDiv = document.getElementById("posts");
  postsDiv.innerHTML = "";

  posts.forEach(post => {
    const p = document.createElement("p");
    p.textContent = post;
    postsDiv.appendChild(p);
  });
}

loadPosts();