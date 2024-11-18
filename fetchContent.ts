const fs = require("fs");
const axios = require("axios");

const fetchContent = async () => {
  try {
    // Fetch data from Strapi
    const response = await axios.get("http://localhost:1337/api/articles");
    const articles = response.data.data;

    // Generate Markdown files for each entry
    articles.forEach((article) => {
      const markdownContent = `---
title: ${article.attributes.title}
slug: ${article.attributes.slug}
---

${article.attributes.content}
`;

      fs.writeFileSync(
        `./docs/${article.attributes.slug}.md`,
        markdownContent,
        "utf-8"
      );
    });

    console.log("Content fetched and Markdown files created!");
  } catch (error) {
    console.error("Error fetching content:", error);
  }
};

fetchContent();
