# My First Music Loop Machine

### I worked on this assignment and wrote everything from scratch!
### I had no prior knowledge of this programming language and learned a lot from this project.
<br>

## I deployed the loop machine on a server using Heroku - [Click Here](https://ortal-music-machine.herokuapp.com/)
Read more about [Heroku](https://www.heroku.com/) 

## Summary
I build this Loop Machine using [visual studio code](https://code.visualstudio.com/) with the Live Server extension.

My tools of choice for building this project were: 

JavaScript, using [React](https://reactjs.org/docs/cdn-links.html) and [Bootstrap](https://babeljs.io/en/setup#installation)

## Functionality and explanations
1. 9 pads squers with on and off states, which changes by mouse click/keyboard press and the square blinks in yellow.
2. Each square present a loop sample and named by the letters on the keyboard (Q W E A S D Z X C).
3. When a pad is turned on:
   - The recording starts automatically and displays the current recording list on the screen.
   - The machine starts playing it's loop on the next loop cycle and repeat the loop as long as the pad is on.
4. Buttons:
   - Play-session: plays the recorded session
   - Clear: clears the recorded list.
   - Play all & stop: controls of all active loops immediately.
5. The tempo of the music is determined by the BPM value (120 BPM TOP).
6. The volume can be changed by using the slide.
7. Switch between dark and light mode using toggle Switch.

## Run The Project
1. Download this project to your computer using cmd
```sh
git clone https://github.com/orti10/music-machine.git
cd music-machine
```
2. Install all dependencies
```sh
npm i
```
3. Run 
```sh
npm start
```

Enjoy!

![screenmusic](https://user-images.githubusercontent.com/44768171/144346382-78a15928-945f-4d74-9908-a5e2c7802950.jpg)
