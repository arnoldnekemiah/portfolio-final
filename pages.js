const ghpages = require("gh-pages");
const path = require("path");
const repoURL = "https://github.com/arnoldnekemiah/portfolio-final.git";

ghpages.publish(
  path.join(__dirname, "build"), // Use path.join to ensure the correct build path
  {
    branch: "gh-pages", // Use "gh-pages" branch for GitHub Pages
    repo: repoURL,
  },
  (err) => {
    if (err) console.error("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
