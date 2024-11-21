import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Explore Our Help Center',
  tagline: 'Simplify your gtechna experience with self-service support',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://coziolm.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/gtechnadocs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CoziolM', // Usually your GitHub org/user name.
  projectName: 'gtechnadocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false, // or true, depending on your preference

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
	i18n: {
	  defaultLocale: 'en',
	  locales: ['en', 'fr'],
	  localeConfigs: {
		en: {
		  label: 'English',
		  direction: 'ltr', // Left-to-right, optional if not needed
		},
		fr: {
		  label: 'Français',
		  direction: 'ltr', // Left-to-right, optional if not needed
		},
	  },
	},

  presets: [
    [
      'classic',
      {
        docs: {
		  path: 'docs', // Ensure this points to your 'docs' directory
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  
    plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true, // Enable hash for search results
        language: ['en'], // Specify the languages, e.g., ['en', 'fr']
		// Set these options to remove the shortcut and hint
        searchBarShortcut: true,
        searchBarShortcutHint: false,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/gtechnadocs_social-card.png',
	
	// Announcement Bar Configuration
	announcementBar: {
	  id: 'new-docs', // Change this ID to display the bar again for users who dismissed it
	  content:
		'📢 This page is a prototype, not all links function properly.',
	  //backgroundColor: 'var(--ifm-color-primary)', // Green background
	  //textColor: '#ffffff', // White text
	  isCloseable: true,
	},
	
	// Top Navigation Bar Configuration	
    navbar: {
      //title: 'My Site',
      logo: {
        alt: 'gtechnadocs',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg', // Dark mode logo
      },
      items: [
		
		{
          type: 'docSidebar',
          sidebarId: 'commandcenterSidebar',
          position: 'left',
          label: 'Command Center',
        },
		
		{
          type: 'dropdown',
          label: 'Modules',
          position: 'left',
          items: [
            {
              label: 'Module 1',
			  sidebarId: 'module1Sidebar',
              to: '/docs/command-center/modules/module1',
            },
            {
              label: 'Module 2',
			  sidebarId: 'module2Sidebar',
              to: '/docs/command-center/modules/module2',
            },
            // ... more items
          ],
        },
		
		{
          type: 'docSidebar',
          sidebarId: 'permitsSidebar',
          position: 'left',
          label: 'Permits',
        },
		
		{
          type: 'docSidebar',
          sidebarId: 'platesentrySidebar',
          position: 'left',
          label: 'PlateSentry',
        },

      {
        to: '/blog',
        label: 'Project Updates',
        position: 'left',
        className: 'custom-blog-link',
      },


  {
		type: 'search', // Add the search bar
		position: 'right', // Position it on the right
		className: 'searchbar',
		},
		{
		type: 'localeDropdown',
        position: 'right',
        },
		
      ],
    },


    // Footer
    footer: {
      style: 'dark',
      links: [
        {
          title: 'User Resources',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/platesentry/overview',
            },
            {
              label: 'Step-By-Step Guides',
              to: '/docs/platesentry/overview',
            },
            {
              label: 'Tips and Tricks',
              to: '/docs/platesentry/overview',
            },
          ],
        },
        {
          title: 'System Administration',
          items: [
            {
              label: 'Deployment Guides',
              to: '/docs/platesentry/overview',
            },
            {
              label: 'Configuration Manuals',
              to: '/docs/platesentry/overview',
            },
            {
              label: 'Security Policies',
              to: '/docs/platesentry/overview',
            },
          ],
        },
		{
          title: 'Developer Resources',
          items: [
            {
              label: 'API Documentation',
              to: '/docs/command-center/overview',
            },
			{
              label: 'Integration Guides',
              to: '/docs/permits/overview',
            },
          ],
        },
        {
          title: 'Release Information',
          items: [
            {
              label: 'Release Notes',
              href: '/docs/platesentry/overview',
            },
            {
              label: 'Version History',
              href: '/docs/platesentry/overview',
            },
            {
              label: 'Product Roadmap',
              href: '/docs/platesentry/overview',
            },
          ],
        },
		{
          title: 'Support',
          items: [
            {
              label: 'Contact Support',
              to: '/blog',
            },
            {
              label: 'Submit a Ticket',
              to: '/blog',
            },
			{
              label: 'Live Chat',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © gtechna ${new Date().getFullYear()} | Privacy Policy`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
