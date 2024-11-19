"use strict";(self.webpackChunkgtechnadocs=self.webpackChunkgtechnadocs||[]).push([[9789],{8560:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2024/11/19/project-update","metadata":{"permalink":"/gtechnadocs/fr/blog/2024/11/19/project-update","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-11-19-project-update.md","source":"@site/blog/2024-11-19-project-update.md","title":"Project Update","description":"Current Setup","date":"2024-11-19T00:00:00.000Z","tags":[{"inline":false,"label":"update","permalink":"/gtechnadocs/fr/blog/tags/update","description":"update tag description"},{"inline":false,"label":"Docusaurus","permalink":"/gtechnadocs/fr/blog/tags/docusaurus","description":"Docusaurus tag description"},{"inline":false,"label":"strapi","permalink":"/gtechnadocs/fr/blog/tags/strapi","description":"strapi tag description"}],"readingTime":3.47,"hasTruncateMarker":true,"authors":[{"name":"Maryse Coziol","title":"Technical Writer","page":{"permalink":"/gtechnadocs/fr/blog/authors/all-maryse-coziol-articles"},"key":"maryse"}],"frontMatter":{"title":"Project Update","date":"2024-11-19T00:00:00.000Z","authors":"maryse","tags":["update","docusaurus","strapi"]},"unlisted":false,"nextItem":{"title":"Welcome","permalink":"/gtechnadocs/fr/blog/welcome"}},"content":"## Current Setup\\r\\n\\r\\n### Docusaurus on GitHub Pages\\r\\n- I successfully set up Docusaurus on GitHub Pages to test the platform online instead of just locally.\\r\\n- I chose GitHub Pages because it was easier than using our servers, especially since `devapp.gtechna.net` was often down when I tried working with it.\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\n### Strapi Installation\\r\\n- I installed Strapi locally to better understand how it integrates with Docusaurus.\\r\\n- Strapi runs as a local server on my machine, and I access its admin panel through a browser (`http://localhost:1337/admin`).\\r\\n- The project files are on GitHub to share the setup and ensure version control, but the application itself only works locally unless explicitly deployed to a remote server.\\r\\n\\r\\n#### Possible Future Deployment\\r\\n- While I\u2019m currently running Strapi locally, it can be deployed to a shared server or cloud platform (e.g., AWS, DigitalOcean) for team-wide access.\\r\\n- Considerations:\\r\\n  - Documentation for some clients will be hosted on-premise and for others on our AWS environment.\\r\\n  - This may introduce complexities depending on where Strapi is hosted.\\r\\n\\r\\n### Bridge Script\\r\\n- I wrote a JavaScript script that acts as a bridge between Strapi and Docusaurus.\\r\\n\\r\\n#### What the Script Does\\r\\n- **Fetches content**: It uses Strapi\u2019s API to retrieve the content I manage in Strapi.\\r\\n- **Converts content**: The script converts the data into Markdown files, complete with frontmatter metadata (e.g., title, slug).\\r\\n- **Saves to Docusaurus**: These Markdown files are saved into the appropriate folders in the Docusaurus project.\\r\\n- **Static Site Generation**: Once the files are in place, Docusaurus builds a static site for the documentation.\\r\\n\\r\\n---\\r\\n\\r\\n## Key Tools and Their Roles\\r\\n\\r\\n### Strapi\\r\\n- **What it is**: A headless CMS, meaning it\u2019s a back-end content manager with no direct connection to the front-end.\\r\\n- **Why I chose it**:\\r\\n  - Good solution for managing multiple versions of content (e.g., English/French) and assets (images, videos).\\r\\n  - Promised WYSIWYG content organization, though it doesn\u2019t fully meet that expectation.\\r\\n- **How it works**:\\r\\n  - You define content types (e.g., \\"documentation pages,\\" \\"blog posts\\") in Strapi.\\r\\n  - Map these content types to Docusaurus folders via the bridge script.\\r\\n\\r\\n#### Strapi Workflow\\r\\n1. Organize Docusaurus folders and scripts.\\r\\n2. Define content types in Strapi.\\r\\n3. Write and maintain the bridge script to connect the two.\\r\\n\\r\\n### Docusaurus\\r\\n- **What it is**: A static site generator that builds the front-end documentation site.\\r\\n- **Plugins**:\\r\\n  - **i18n (Internationalization)**:\\r\\n    - Handles translations by associating content with language-specific versions.\\r\\n    - Requires properly structured content.\\r\\n  - **Algolia Search**:\\r\\n    - Enhances search functionality by indexing your documentation and returning relevant results.\\r\\n    - Setup involves:\\r\\n      - Creating an account with Algolia.\\r\\n      - Configuring their crawler for your site.\\r\\n      - Adding API keys and configuration files.\\r\\n\\r\\n---\\r\\n\\r\\n## Challenges and Complexities\\r\\n\\r\\n- **Iterative Content Structure**:  \\r\\n  One challenge is that the content isn\u2019t fully developed yet, making it hard to plan the structure in advance. As the content evolves, the bridge script will likely need several iterations to accommodate changes.\\r\\n\\r\\n- **Managing Multiple Documentation Versions**:  \\r\\n  We discussed creating different versions of the documentation website for specific clients or internal use, rather than managing content display through roles.  \\r\\n  - **Strapi**: Needs a clear system to classify content (e.g., tags or fields for version or client).  \\r\\n  - **Bridge Script**: Must dynamically fetch and organize content for each version, increasing complexity.\\r\\n\\r\\n- **Sidebar Automation**:  \\r\\n  The content of the sidebars in Docusaurus isn\u2019t as automated as it could be. For now, I have to define the sidebar manually, which adds some extra overhead. I\u2019m sure this feels minor to a developer, but to me, writing scripts is not like breathing!\\r\\n\\r\\n- **Algolia Search Setup**:  \\r\\n  Setting up Algolia is an involved process. While I might be able to configure it on the current setup with GitHub Pages, it\u2019s complex enough that it should be done by someone with more expertise. Additionally, the setup would need to be redone when we move the site to our servers, making it a task better suited for later in the project timeline.\\r\\n\\r\\n- **Autonomy vs. Complexity**:  \\r\\n  I\u2019m aiming to stay as independent as possible to avoid delays, but there are limits to my technical capabilities."},{"id":"welcome","metadata":{"permalink":"/gtechnadocs/fr/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","tags":[{"inline":false,"label":"Facebook","permalink":"/gtechnadocs/fr/blog/tags/facebook","description":"Facebook tag description"},{"inline":false,"label":"Hello","permalink":"/gtechnadocs/fr/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/gtechnadocs/fr/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.465,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/gtechnadocs/fr/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/gtechnadocs/fr/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"Project Update","permalink":"/gtechnadocs/fr/blog/2024/11/19/project-update"},"nextItem":{"title":"MDX Blog Post","permalink":"/gtechnadocs/fr/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nHere are a few tips you might find useful.\\n\\n\x3c!-- truncate --\x3e\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/gtechnadocs/fr/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/gtechnadocs/fr/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.235,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/gtechnadocs/fr/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/gtechnadocs/fr/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/gtechnadocs/fr/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n:::\\n\\n{/* truncate */}\\n\\nFor example, use JSX to create an interactive button:\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>"},{"id":"long-blog-post","metadata":{"permalink":"/gtechnadocs/fr/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","tags":[{"inline":false,"label":"Hello","permalink":"/gtechnadocs/fr/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/gtechnadocs/fr/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":2.06,"hasTruncateMarker":true,"authors":[{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/gtechnadocs/fr/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"yangshun","tags":["hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/gtechnadocs/fr/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/gtechnadocs/fr/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!-- truncate --\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/gtechnadocs/fr/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet...","date":"2019-05-28T00:00:00.000Z","tags":[{"inline":false,"label":"Hola","permalink":"/gtechnadocs/fr/blog/tags/hola","description":"Hola tag description"},{"inline":false,"label":"Docusaurus","permalink":"/gtechnadocs/fr/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.135,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/gtechnadocs/fr/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/gtechnadocs/fr/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":["slorber","yangshun"],"tags":["hola","docusaurus"]},"unlisted":false,"prevItem":{"title":"Long Blog Post","permalink":"/gtechnadocs/fr/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet...\\n\\n\x3c!-- truncate --\x3e\\n\\n...consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}}')}}]);