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
    image="/images/monkeylang.png"
    link="/projects/interpreter"
    repo="https://github.com/theakhandpatel/monkeylang-go"
  />

  <ProjectCard 
    title="CacheCow 🐄"
    description="An in-memory key-value store server implementation written in Go."
    subtext="Go · Redis · Key-Value Store"
    image="/images/cachecow.png"
    link="/projects/redis-server"
    repo="https://github.com/theakhandpatel/redis-server"
  />

  <ProjectCard 
    title="Chopper ✂️"
    description="An URL shortener API in golang."
    subtext="Go · API · URL Shortener"
    image="/images/chopper.png"
    link="/projects/chopper"
    repo="https://github.com/theakhandpatel/Chopper"
    demo="https://chopper-url.herokuapp.com"
  />

  <ProjectCard 
    title="MovieDB 🎬"
    description="Manage Movie Data with the MovieDB API - Efficient, and Easy! 🍿🌟"
    subtext="API · Movie Database · Data Management"
    image="/images/moviedb.png"
    link="/projects/moviedb"
    repo="https://github.com/theakhandpatel/MovieDB"
  />

  <ProjectCard 
    title="Firegram 🖼️"
    description="A React and Firebase-powered web app for seamless cloud-based image storage and organization."
    subtext="React · Firebase · Cloud Storage"
    image="/images/firegram.png"
    link="/projects/firegram"
    repo="https://github.com/theakhandpatel/Firebase-gallery"
    demo="https://firegram-gallery.web.app"
  />

  <ProjectCard 
    title="Word Count 📊"
    description="A Go implementation of the Unix `wc` command, providing detailed statistics about files or input from the standard input (stdin)."
    subtext="Go · Unix · Command-line Tool"
    image="/images/wcgo.png"
    link="/projects/wcgo"
    repo="https://github.com/theakhandpatel/wcgo"
  />

  <ProjectCard 
    title="SnippetBox 📝"
    description="A web application that allows users to create and share text snippets with an expiration time."
    subtext="Go · MySQL · HTML · CSS · JavaScript"
    image="/images/snippetbox.png"
    link="/projects/snippetbox"
    repo="https://github.com/theakhandpatel/snippetbox"
  />
</div>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>