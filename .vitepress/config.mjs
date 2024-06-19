import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Akhand Patel",
  description: "Backend Engineer, Golang, Javascript",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      // { text: 'Projects', link: '/projects' },
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
      // {
      //   text: 'Projects',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/theakhandpatel' },
      { icon: 'twitter', link: 'https://twitter.com/theakhandpatel' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/theakhandpatel/' }
    ]
  }
})
