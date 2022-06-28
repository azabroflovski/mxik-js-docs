import { defineConfig } from 'vitepress'

export default defineConfig({
   title: 'mxik-js',
   description: 'Documentation',
   lang: 'en-EN',
   lastUpdated: true,

   themeConfig: {
      editLink: {
         pattern: 'https://github.com/azabroflovski/mxik-js-docs/edit/master/docs/:path',
         text: 'Edit this page on GitHub'
      },

      sidebar: sidebarList(),

      nav: [
         { text: 'Introduction', link: '/guide/getting-started' },
         { text: 'API', link: '/api/introduction' },
         { text: 'Changelog', link: 'https://github.com/azabroflovski/mxik-js-docs/blob/main/CHANGELOG.md' }
      ],

      socialLinks: [
         { icon: 'github', link: 'https://github.com/azabroflovski/mxik-js' }
      ],

      footer: {
         message: 'Powered by tasnif.soliq.uz',
         copyright: 'Copyright © 2022 azabroflovski'
      }
   }
})

function sidebarList() {
   return [
      {
         text: 'Introduction',
         items: [
            { text: 'Getting started', link: '/guide/getting-started' }
         ]
      },
      {
         text: 'Examples',
         items: [
            { text: 'Search items', link: '/guide/search-items' },
            { text: 'Code details', link: '/guide/code-details' },
         ]
      },
      {
         text: 'API',
         items: [
            { text: 'MXIKSearch', link: '/api/import-service' },
            { text: 'MXIKSearchByCode', link: '/api/add-product' },
            { text: 'MXIKDetails', link: '/api/add-product' }
         ]
      }
   ]
}
