<template>
  <ClientOnly>
  <a :href="link" class="project-card">
    <div class="project-image-container">
      <img v-if="image" :src="image" :alt="title" class="project-image">
    </div>
    <div class="project-content">
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-description">{{ description }}</p>
      <p class="project-subtext">{{ subtext }}</p>
      <div class="project-links">
        <a v-if="repo" :href="repo" class="link-button" target="_blank" rel="noopener noreferrer" @click.stop>
          <img src="/images/github.svg" alt="GitHub" class="icon">
          Repo
        </a>
        <a v-if="demo" :href="demo" class="link-button" target="_blank" rel="noopener noreferrer" @click.stop>
          <img src="/images/link.svg" alt="Demo" class="icon">
          Demo
        </a>
      </div>
    </div>
  </a>
</ClientOnly>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    subtext: String,
    image: String,
    link: String,
    repo: String,
    demo: String
  }
}
</script>

<style>
.project-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  text-decoration: none;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
}

.project-card:hover {
  box-shadow: 0 4px 12px var(--vp-c-shadow);
  transform: translateY(-2px);
}

.project-image-container {
  background-color: var(--vp-c-bg-mute);
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.project-content {
  padding: 16px;
}

.project-title {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 1.2em;
  color: var(--vp-c-brand);
}

.project-description {
  font-size: 0.9em;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}

.project-subtext {
  font-size: 0.8em;
  color: var(--vp-c-text-2);
  margin-bottom: 12px;
}

.project-links {
  display: flex;
  gap: 12px;
}

.link-button {
  display: inline-flex;
  align-items: center;
  font-size: 0.8em;
  color: var(--vp-c-brand);
  text-decoration: none;
  padding: 4px 8px;
  border: 1px solid var(--vp-c-brand);
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.link-button:hover {
  background-color: var(--vp-c-brand);
  color: var(--vp-c-bg);
}

.icon {
  height: 16px;
  width: 16px;
  margin-right: 4px;
}
</style>