<template>
  <ClientOnly>
    <div class="project-card">
      <div class="project-image-container">
        <img v-if="image" :src="image" :alt="title" class="project-image">
      </div>
      <div class="project-content">
        <h3 class="project-title"><a :href="link">{{ title }} </a></h3>
        <p class="project-description">{{ description }}</p>
        <p class="project-subtext">{{ subtext }}</p>
        <div class="project-links">
          <div class="links-container">
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
      </div>
    </div>
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

<style scoped>
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
  display: flex;
  flex-direction: column;
  flex: 1; /* This makes the content area flexible */
  padding: 0px 16px 8px 16px;
}

.project-title {
  margin-top: 0;
  font-size: 1.2em;
  color: var(--vp-c-brand);
  text-decoration: underline;
}

.project-description {
  font-size: 0.9em;
  color: var(--vp-c-text-1);
  margin: 0px;
}

.project-subtext {
  font-size: 0.8em;
  color: var(--vp-c-text-2);
  margin: 0px;
}

.project-links {
  display: flex;
  flex-grow: 1;
}

.links-container {
  display: flex;
  gap: 8px;
  align-items: end;
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
