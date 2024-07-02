---
title: My Blog Posts
description: A collection of my blog posts
aside: false
---

# Blog Posts
Welcome to my abyss of thoughts! I haven't written any blog posts recently. But here are some of my older posts:


  <div class="blog-list">
    <BlogCard
      title="Git and GitHub: An Intro for Beginners"
      description="Most developers use GitHub or another Git client in their development cycle. Have you ever wondered what Git is and why they use it? This post covers the basics of Git and guides you through creating your first repo on GitHub."
      image="/images/git-and-github-a-intro-for-beginners-cover.webp"
      date=" May 3, 2020"
      readTime="4 min read"
      link="/blogs/git-and-github-a-intro-for-beginners"
    />

  </div>


<style>
.blog-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
  padding: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .blog-list {
    grid-template-columns: 1fr;
  }
}
</style>