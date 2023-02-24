# Final Project for Edgemony's Coding Bootcamp, developed by 

<p align="center"> |
  <a href="https://github.com/AntonellaSchillaci"><img width="6%" height="6%" src="./public/antonella.png" alt="Antonella"> <strong>Antonella Schillaci</strong></a> |
  <a href="https://github.com/CarlottaKiri"><img width="6%" height="6%" src="./public/carlotta.png" alt="Carlotta"> <strong>Carlotta Patané</strong></a> | <br>
  | <a href="https://github.com/DavinGarozzo"><img width="6%" height="6%" src="./public/davin.png" alt="Davin"> <strong>Davin Garozzo</strong></a> |
  <a href="https://github.com/IFranc3sca"><img width="6%" height="6%" src="./public/francesca.png" alt="Francesca"> <strong>Francesca Leonardi</strong></a> |
  <a href="https://github.com/Martina-LP"><img width="6%" height="6%" src="./public/martina.png" alt="Martina"> <strong>Martina La Porta</strong></a> | 
</p>

<p align="center" width="100%">
<img width="40%" src="./public/logo-iniziale.gif" alt="Logo"> <br> 
  <a href="https://triviagame-eta.vercel.app"><strong>Click Here to Play</strong></a> <br>
  or Scan the following QR Code: <br><br>
  <img width="150px" src="https://thumbs2.imgbox.com/c3/61/2WaFJjFO_t.png" alt="QR Code"/>
</p>

## Introduction:

<p align="center">
As a team, we decided to develop something that might be technically interesting and a bit challenging, <br>
so we clearly chose to work on something we've never done before: a <strong>quiz game</strong>. <br> 
This project was created coding mainly in <strong>React + Vite</strong> and <strong>SASS</strong>, <br>
we also used <strong>Firebase</strong> to store user scores and <strong>Vercel</strong> to deploy it. <br>
Some of the graphic elements were designed using <strong>Canva</strong>. <br>
We took advantage of some packages available on <strong>npm</strong> to insert audio and visual effects, <br>
such as the sounds for each correct or wrong answer and the final fireworks. <br>
We managed the workflow using <strong>Visual Studio Code</strong>, <strong>Git</strong> and <strong>GitHub</strong>. <br><br>

<img width="50px" src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" style="padding-right:10px;" alt="React JS" />
<img width="50px" src="https://vitejs.dev/logo-with-shadow.png" style="padding-right:10px;" alt="Vite JS" />
<img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" style="padding-right:10px;" alt="SASS" />
<img width="50px" src="https://github.com/devicons/devicon/blob/master/icons/firebase/firebase-plain-wordmark.svg" style="padding-right:10px;" alt="Firebase" />
<img width="50px" src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" style="padding-right:10px;" alt="Vercel" />
<img width="50px" src="https://github.com/devicons/devicon/blob/master/icons/canva/canva-original.svg" style="padding-right:10px;" alt="Canva" />
<img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" style="padding-right:10px;" alt="NPM" />
<img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" style="padding-right:10px;" alt="Visual Studio Code" />
<img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style="padding-right:10px;" alt="Git" />
<img width="50px" src="https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png" alt="GitHub" /> <br><br>

We planned it starting from <strong>mobile first</strong> and then making it <strong>responsive</strong> for tablet and desktop. <br>
Moreover, we tried to take into account what a user can expect from a single-player game <br>
to offer a better <strong>user experience</strong>. <br><br>
<img width="33%" src="https://iili.io/HM5dzxt.png" style="height:600px;padding-right:10px;" alt="Mobile"/>
<img width="33%" src="https://iili.io/HM5KHYJ.png" alt="Tablet"/>
</p>

## Deep dive:

<p aling="center" width="100%">
<img width="49%" src="https://thumbs2.imgbox.com/08/99/iBF3atf8_t.png" alt="Homepage">
<img width="49%" src="https://thumbs2.imgbox.com/21/da/RbWF6QC0_t.png" alt="Leaderboard">
<img width="49%" src="https://thumbs2.imgbox.com/33/0e/wMgp9L9R_t.png" alt="Avatar">
<img width="49%" src="https://thumbs2.imgbox.com/ec/dd/31hXkoUB_t.png" alt="Nickname">
</p>

<p align="left">
On the main page the user can select a <strong>leaderboard</strong>, <br>
to take a look at the players who have already taken part in the quiz and have obtained the best scores. <br>
Below the leaderboard, it's possible to pick an <strong>avatar</strong> and type a <strong>nickname</strong>, <br>
to create a personal profile and then proceed to <strong>Login</strong>.
</p>

_______________________________________________________________________________________________________________________________________

<p align="center" width="100%">
<img width="32%" src="https://thumbs2.imgbox.com/fe/ac/hvATLWh9_t.png" alt="First manche">
<img width="32%" src="https://thumbs2.imgbox.com/50/5e/NYeIshxX_t.png" alt="Second manche">
<img width="32%" src="https://thumbs2.imgbox.com/a7/49/JRmK0lZB_t.png" alt="Third manche">
</p>

<p align="left">
Once logged in, the user will see the <strong>game page</strong>, where the player has multiple choice questions available. <br>
The quiz consists of <strong>three difficulty levels</strong>, which correspond to three rounds of a match: <br>
<strong>easy</strong>, <strong>medium</strong> and <strong>hard</strong>. <br>
Each correct question will earn the player 1 point, while each incorrect question will earn no points. <br>
Each round has a maximum duration of <strong>60 seconds</strong>, <br>
which is indicated by a bar that marks the passage of time and changes color when time is running out, <br>
so the user has to be careful and very quick to read both the question and the answers <br>
and try to select the exact answer. <br>
Each time a correct answer is given, it will be possible to see the <strong>count of points</strong> earned right on the screen. <br>
Within this page there are, at the top, also two options to return to the Homepage or refresh the current game page.
</p>

_______________________________________________________________________________________________________________________________________

<p align="center" width="100%">
<img width="33%" src="https://thumbs2.imgbox.com/c4/7e/3Ts18gTF_t.png" alt="Final score">
<img width="33%" src="https://thumbs2.imgbox.com/3e/26/8T6bpefq_t.png" alt="Final Leaderboard">
</p>

<p align="center">
At the end of the three rounds, the <strong>total score</strong> of the match will be shown on the screen <br>
and the user also has the option to return to the Homepage or take a look at the <strong>Leaderboard</strong> <br>
to see if the score was enough to compete with the best players.
</p>
