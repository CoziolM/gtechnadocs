# Project Update

## Current Setup

### Docusaurus on GitHub Pages
- I successfully set up Docusaurus on GitHub Pages to test the platform online instead of just locally.
- I chose GitHub Pages because it was easier than using our servers, especially since `devapp.gtechna.net` was often down when I tried working with it.

### Strapi Installation
- I installed Strapi locally to better understand how it integrates with Docusaurus.
- Strapi runs as a local server on my machine, and I access its admin panel through a browser (`http://localhost:1337/admin`).
- The project files are on GitHub to share the setup and ensure version control, but the application itself only works locally unless explicitly deployed to a remote server.

#### Possible Future Deployment
- While I’m currently running Strapi locally, it can be deployed to a shared server or cloud platform (e.g., AWS, DigitalOcean) for team-wide access.
- Considerations:
  - Documentation for some clients will be hosted on-premise and for others on our AWS environment.
  - This may introduce complexities depending on where Strapi is hosted.

### Bridge Script
- I wrote a JavaScript script that acts as a bridge between Strapi and Docusaurus.

#### What the Script Does
- **Fetches content**: It uses Strapi’s API to retrieve the content I manage in Strapi.
- **Converts content**: The script converts the data into Markdown files, complete with frontmatter metadata (e.g., title, slug).
- **Saves to Docusaurus**: These Markdown files are saved into the appropriate folders in the Docusaurus project.
- **Static Site Generation**: Once the files are in place, Docusaurus builds a static site for the documentation.

---

## Key Tools and Their Roles

### Strapi
- **What it is**: A headless CMS, meaning it’s a back-end content manager with no direct connection to the front-end.
- **Why I chose it**:
  - Good solution for managing multiple versions of content (e.g., English/French) and assets (images, videos).
  - Promised WYSIWYG content organization, though it doesn’t fully meet that expectation.
- **How it works**:
  - You define content types (e.g., "documentation pages," "blog posts") in Strapi.
  - Map these content types to Docusaurus folders via the bridge script.

#### Strapi Workflow
1. Organize Docusaurus folders and scripts.
2. Define content types in Strapi.
3. Write and maintain the bridge script to connect the two.

### Docusaurus
- **What it is**: A static site generator that builds the front-end documentation site.
- **Plugins**:
  - **i18n (Internationalization)**:
    - Handles translations by associating content with language-specific versions.
    - Requires properly structured content.
  - **Algolia Search**:
    - Enhances search functionality by indexing your documentation and returning relevant results.
    - Setup involves:
      - Creating an account with Algolia.
      - Configuring their crawler for your site.
      - Adding API keys and configuration files.

---

## Challenges and Complexities

- **Iterative Content Structure**:  
  One challenge is that the content isn’t fully developed yet, making it hard to plan the structure in advance. As the content evolves, the bridge script will likely need several iterations to accommodate changes.

- **Managing Multiple Documentation Versions**:  
  We discussed creating different versions of the documentation website for specific clients or internal use, rather than managing content display through roles.  
  - **Strapi**: Needs a clear system to classify content (e.g., tags or fields for version or client).  
  - **Bridge Script**: Must dynamically fetch and organize content for each version, increasing complexity.

- **Sidebar Automation**:  
  The content of the sidebars in Docusaurus isn’t as automated as it could be. For now, I have to define the sidebar manually, which adds some extra overhead. I’m sure this feels minor to a developer, but to me, writing scripts is not like breathing!

- **Algolia Search Setup**:  
  Setting up Algolia is an involved process. While I might be able to configure it on the current setup with GitHub Pages, it’s complex enough that it should be done by someone with more expertise. Additionally, the setup would need to be redone when we move the site to our servers, making it a task better suited for later in the project timeline.

- **Autonomy vs. Complexity**:  
  I’m aiming to stay as independent as possible to avoid delays, but there are limits to my technical capabilities.