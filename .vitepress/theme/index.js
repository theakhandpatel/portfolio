import DefaultTheme from 'vitepress/theme'
import ProjectCard from './components/ProjectCard.vue'
import BlogCard from './components/BlogCard.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('ProjectCard', ProjectCard)
    ctx.app.component('BlogCard', BlogCard)
  }
}
