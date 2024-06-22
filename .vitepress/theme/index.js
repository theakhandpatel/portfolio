import DefaultTheme from 'vitepress/theme'
import ProjectCard from './components/ProjectCard.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('ProjectCard', ProjectCard)
  }
}
