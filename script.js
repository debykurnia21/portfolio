const username = "your-github-username"; // Replace with your GitHub username
const repoList = document.getElementById("repo-list");

async function fetchRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    repos.forEach(repo => {
      const repoDiv = document.createElement("div");
      repoDiv.className = "repo";
      repoDiv.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available"}</p>
        <a href="${repo.html_url}" target="_blank">View Repository</a>
      `;
      repoList.appendChild(repoDiv);
    });
  } catch (error) {
    console.error("Error fetching repositories:", error);
  }
}

fetchRepos();
