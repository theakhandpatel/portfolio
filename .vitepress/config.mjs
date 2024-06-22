import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Akhand Patel",
  description: "Backend Engineer, Golang, Javascript",
  head: [['link', { rel: 'icon', href: '/images/pp_icon.png' }]],
  themeConfig: {
    logo: '/images/pp_icon.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects' },
      // { text: 'Blog', link: '/blogs' }
    ],

    sidebar: [
      {
        text: 'About Me',
        link: '/about',
      },
      // {
      //   text: 'Blog',
      //   link: '/blogs',
      // },
      {
        text: 'Projects',
        link: '/projects',
        items: [
          { text: 'MonkeyLang Interpreter 🐵', link: '/projects/interpreter' },
          { text: 'CacheCow 🐄', link: '/projects/redis-server' },
          { text: 'Chopper ✂️', link: '/projects/chopper' },
          { text: 'MovieDB 🎬', link: '/projects/moviedb' },
          { text: 'Firegram 🖼️', link: '/projects/firegram' },
          { text: 'Word Count📊', link: '/projects/wcgo' },
          { text: 'SnippetBox 📝',link: '/projects/snippetbox' }
        ],
        collapsed: true
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/theakhandpatel' },
      { icon: 'twitter', link: 'https://twitter.com/theakhandpatel' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/theakhandpatel/' }
    ]
  }
})
