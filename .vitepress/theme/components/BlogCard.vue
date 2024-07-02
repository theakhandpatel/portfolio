<!-- BlogCard.vue -->
<template>
  <div class="blog-card">
    <a :href="link" class="blog-card-link">
      <div class="blog-card-image" :style="{ backgroundImage: `url(${image})` }"></div>
      <div class="blog-card-content">
        <h3 class="blog-card-title">{{ title }}</h3>
        <p class="blog-card-description">{{ description }}</p>
        <div class="blog-card-meta">
          <span class="blog-card-date">{{ date }}</span>
          <span class="blog-card-readtime">{{ readTime }}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    image: String,
    date: String,
    readTime: String,
    link: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style scoped>
.blog-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
}

.blog-card:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.blog-card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-card-image {
  height: 200px; /* Increased height for better proportion */
  background-size: cover;
  background-position: center;
}

.blog-card-content {
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.blog-card-title {
  font-size: 1.1em;
  margin: 0 0 5px 0;
  color: #333;
  line-height: 1.2;
}

.blog-card-description {
  font-size: 0.85em;
  color: #666;
  margin: 0 0 8px 0;
  flex-grow: 1;
  line-height: 1.4;
}

.blog-card-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75em;
  color: #888;
}
</style>