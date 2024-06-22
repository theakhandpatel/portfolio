# Word Count 📊

![GitHub last commit](https://img.shields.io/github/last-commit/theakhandpatel/wcgo)

**Repository:** <Badge type="info">  [GitHub <img src="/images/github.svg" alt="GitHub" style="height: 20px; width: 20px; vertical-align: middle; padding-bottom: 3px; display: inline" />](https://github.com/theakhandpatel/wcgo) </Badge>

**Stack:** <Badge type="tip" text="Golang" /> <Badge type="tip" text="CLI" /> 

## Description
**WCGO** is a Go implementation of the Unix `wc` command. It provides detailed statistics about a file or input from the standard input (stdin), including the number of bytes, lines, words, and characters.

## Features

- **Count Statistics:** 
  - **Bytes** (`-c`)
  - **Lines** (`-l`)
  - **Words** (`-w`)
  - **Characters** (`-m`)
- **Standard Input:** If no file is specified, the utility reads from stdin.
- **Multiple Files Support:** Outputs statistics for each file and a total count if more than one file is specified.

## Inspiration
This project was inspired by the [Coding Challenge: Word Count](https://codingchallenges.fyi/challenges/challenge-wc/).

## License
This project is licensed under the MIT License.