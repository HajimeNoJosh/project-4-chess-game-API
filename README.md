# Project-4-chess-game-API

[API](https://stark-citadel-18124.herokuapp.com)

[Website]( https://hajimenojosh.github.io/project-4-chess-game-client/)

[API Github](https://github.com/HajimeNoJosh/project-4-chess-game-API)

This Api is used for my chess game app

I only use a one to one relationship between a user and game. In my game I store
coordinates as an array. My Chess client sends those coordinates from a created
game that they play.

I began by writing my relationship schema. It was initally a string that I was
going to store as an array but I realized I could call it an array in the backend.
I moved on to my routes. I did run a snag for a bit when I neglected to update
 my server.js. I eventually realized this was the issue and promptly fixed it.
 I found this out with my curl scripts as I was testing my code. At this point my
 backend was done and has more or less stayed the same since.

In the future I would like to implement a currentState of the game which will also
be an array. This currentState will be used to show a snapshot of the game. I would
also like to implement playersTurn (string), gameOver(boolean). These will be useful
as my client develops. At the moment though, the API does what the client needs.


## MVP Catalog of Routes

| Verb | URI Pattern | Controller#Action |
|------|-------------|-------------------|
| GET  | /games    | games#index     |
| GET  | /games/:id  | games#show      |
| POST  | /game | game#create      |
| PATCH  | /game/:id  | game#update      |
| DELETE  | /games/:id  | games#destroy      |


![ERD](https://media.git.generalassemb.ly/user/23013/files/f98ba900-14e4-11ea-841f-abb20e389863)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

#### Prerequisites

Install dependencies with npm install.

## Built With

* [Express](https://expressjs.com/) - The framework used


## Authors
* **Joshuah Martin** - [HajimeNoJosh](https://github.com/HajimeNoJosh)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
