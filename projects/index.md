---
prev: false
next: false
---
# Projects

I try to build things that are fun and useful (possibly) or just something to satisfy my curiosity. There might be more on my GitHub. Here are some of the projects I've worked on (For more details on each project, click on the project name):

<div class="projects-grid">
  <ProjectCard 
    title="MonkeyLang Interpreter 🐵"
    description="Go implementation of the Monkey programming language Interpreter."
    subtext="Go · Interpreter · Programming Language"
    image="https://picsum.photos/300/150"
    link="/projects/interpreter"
    repo="https://github.com/theakhandpatel/monkeylang-go"
  />

  <ProjectCard 
    title="CacheCow 🐄"
    description="An in-memory key-value store server implementation written in Go."
    subtext="Go · Redis · Key-Value Store"
    image="https://picsum.photos/300/150"
    link="/projects/redis-server"
    repo="https://github.com/theakhandpatel/redis-server"
  />

  <ProjectCard 
    title="Chopper ✂️"
    description="An URL shortener API in golang."
    subtext="Go · API · URL Shortener"
    image="https://via.placeholder.com/600x150?text=Chopper"
    link="/projects/chopper"
    repo="https://github.com/theakhandpatel/Chopper"
    demo="https://chopper-url.herokuapp.com"
  />

  <ProjectCard 
    title="MovieDB 🎬"
    description="Manage Movie Data with the MovieDB API - Efficient, and Easy! 🍿🌟"
    subtext="API · Movie Database · Data Management"
    image="https://via.placeholder.com/300x150?text=MovieDB"
    link="/projects/moviedb"
    repo="https://github.com/theakhandpatel/MovieDB"
  />

  <ProjectCard 
    title="Firegram 🖼️"
    description="A React and Firebase-powered web app for seamless cloud-based image storage and organization."
    subtext="React · Firebase · Cloud Storage"
    image="https://via.placeholder.com/300x150?text=Firegram"
    link="/projects/firegram"
    repo="https://github.com/theakhandpatel/Firebase-gallery"
    demo="https://firegram-gallery.web.app"
  />

  <ProjectCard 
    title="Word Count 📊"
    description="A Go implementation of the Unix `wc` command, providing detailed statistics about files or input from the standard input (stdin)."
    subtext="Go · Unix · Command-line Tool"
    image="https://via.placeholder.com/300x150?text=Word+Count"
    link="/projects/wcgo"
    repo="https://github.com/theakhandpatel/wcgo"
  />
</div>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>