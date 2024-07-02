---

title: "Git and Github, An Intro for Beginners"
description: "Most of the developers use GitHub or any other Git Client in their development cycle. But have you always wondered what is git and why do they use it? In this post, let’s look at the basics of git and how easy it is to create your first repo on GitHub."

---

# Git and Github, An Intro for Beginners

Most developers use GitHub or another Git client in their development cycle. But have you always wondered what Git is and why they use it? In this post, let’s look at the basics of Git and how easy it is to create your first repo on GitHub.

## What is Git?

Git is an open-source project developed in 2005 by Linus Torvalds (Yes, you guessed it right, the famous creator of the Linux Operating System). It is a **Distributed Version Control System**. That sounded like a charm straight out of J. K. Rowling’s book. Let me explain it in muggles’ English.

### Version Control System (VCS)

VCS is a tool that allows users to track changes in the content. It keeps track of various changes made to the content as people and multiple teams collaborate. In layman's terms, think of the content as a book you and your friend are writing together. You both come up with different ideas for the arc of your character and make various versions of the story over time. As characters increase, so do multiple storylines. It would be a nightmare to keep everything in order. This is where VCS comes into play. It keeps track of the following things:
- What changes were made?
- Who made the changes?
- When were the changes made?

If you want to go back to the storyline where your protagonist doesn’t die, you can just revert to it. You can **merge** your friend’s ideas into your version. If someone screws up, they can compare it with the previous versions and rectify the mistake without disturbing the others.

**Repository** - It is like a folder for your project’s files. It contains all of your project files and their detailed history.

### Distributed Version Control System (DVCS)

DVCS means that the code isn’t just hosted on a single server or system but also distributed across various systems. This means that each developer has a copy of the code on their local system. Git has a remote repository stored on a server and a local repository stored on the developer’s computer. Developers don’t need a constant central connection to the remote repository and can collaborate according to their timetable. Each developer has a transparent history of changes, who made the changes, and when.

So now we have the basic introduction of Git, let’s look at GitHub.

## What is GitHub?

I read the following line somewhere on the internet and to me, it is one of the best definitions for GitHub.

> “*What Pornhub is to Porn, GitHub is to Git*”

Jokes apart, think of it this way: when you use Git locally you can only manage your local code, but that is rarely the case. Mostly you have to collaborate with other people or teams and for that, you need to have a remote repository setup on the cloud. Here GitHub fits in.

GitHub is a git hosting repository service, but it adds many of its features to the core Git. Git is a command-line tool but GitHub is an interactive website that also allows some unique features on top of Git like GitHub Flow (sounds like an excellent idea for the next post). There is a community of over 15 million developers on GitHub.

## How to Create your First Repo

Are you excited to create your first repository from scratch? But first, install Git on your system from [here](https://git-scm.com/downloads) and create a GitHub account if you haven’t.

Let’s begin now!!

Important: *The following instructions are for the bash terminal*

1. Create a directory for your project using the `mkdir` command:
   ```bash
   mkdir firstProject
   ```
2. Go into the new directory:
   ```bash
   cd ./firstProject/
   ```
3. Initialize the Git repo using `git init`:
   ```bash
   git init
   ```
4. Create a file now:
   ```bash
   echo "This is my first line of text in the file" > readme.md
   ```
5. Add the files to Git. After this command, Git will keep track of the changes made to the file:
   ```bash
   git add readme.md
   ```
6. Commit (save) the changes to Git. The command tells to save the changes along with the message “initial commit”:
   ```bash
   git commit -m "initial commit"
   ```

You now have a local Git repository. You can use it locally, but I would rather host it on my GitHub.

### Connecting it to GitHub

1. Go to GitHub,
2. Sign in to your account,
3. Click on the new repository button (Hint: It has a green background),
4. Enter the repo’s name "*firstProject*",
5. Click Create Repository.

You would see sets of instructions on the page, follow the second one -*or push an existing repository...*:
```bash
git remote add origin https://github.com/yourUsername/firstProject.git
git push -u origin master
```

The first command adds the remote address of the repository to Git and the second command tells the system to push (send) the local repo to the remote origin repo.

Voila!! You have successfully hosted your first repo on GitHub. Give yourself a treat today, you deserve it.
