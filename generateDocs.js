const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Base URL of your Strapi API
const STRAPI_BASE_URL = 'http://localhost:1337/api/docs';

// Docusaurus 'docs' folder path
const DOCUSAURUS_DOCS_DIR = path.join(__dirname, 'docs');

// Fetch data from Strapi API
async function fetchDocs() {
  try {
    let allDocs = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const params = {
        populate: {
          Product: '*',
          Category: '*',
        },
        pagination: {
          page,
          pageSize: 25,
        },
      };

      console.log(`Fetching page ${page}...`);
      const response = await axios.get(STRAPI_BASE_URL, { params });
      allDocs = allDocs.concat(response.data.data);

      const { pageCount } = response.data.meta.pagination;
      hasMore = page < pageCount;
      page++;
    }

    return allDocs;
  } catch (error) {
    console.error('Error fetching data from Strapi:', error.response?.data || error.message);
    process.exit(1);
  }
}

// Generate the folder structure and markdown files
async function generateDocs() {
  console.log('Fetching data from Strapi...');
  const docs = await fetchDocs();

  docs.forEach((doc) => {
    // Log the raw entry if needed for debugging
    console.log(`Processing entry with ID ${doc.id}`);

    const { Title, Content, Product, Category, SidebarLabel, SidebarPosition } = doc;

    // Skip if required fields are missing
    if (!Title || !Content || !Product || !Category) {
      console.warn(
        `Skipping Doc "${Title || 'Untitled'}" (ID: ${doc.id}) - Missing Title, Content, Product, or Category`
      );
      console.log('Problematic Entry:', JSON.stringify(doc, null, 2));
      return;
    }

    const productName = Product.Product;
    const categoryName = Category.Category;
    const docFileName = `${Title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}.md`;

    const productDir = path.join(DOCUSAURUS_DOCS_DIR, productName);
    const categoryDir = path.join(productDir, categoryName);

    // Ensure directories exist
    fs.mkdirSync(categoryDir, { recursive: true });

    const filePath = path.join(categoryDir, docFileName);

    // Generate metadata (YAML front matter)
    const frontMatter = `---
title: "${Title}"
sidebar_label: '${SidebarLabel || Title}'
sidebar_position: ${SidebarPosition || 'null'}
---`;

    // Combine metadata and content
    const markdownContent = `${frontMatter}\n\n${Content}`;
    fs.writeFileSync(filePath, markdownContent);

    console.log(`Generated: ${filePath}`);
  });

  console.log('Docusaurus docs generation completed!');
}

// Run the script
generateDocs();

