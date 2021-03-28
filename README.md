## Inspiration
We wanted to combine a set of useful timers now that the majority of our lives are spent staring at computer screens doing work or other activities. 

## What it does
The app allows the user to select between four different timers: The Pomodoro Technique, The Animedoro Technique, The 20-20-20 Rule, and a custom timer. The Pomodoro Technique sets the timer to 25 minutes of focus and then 5 minutes of break time. The Animedoro Technique sets the timer to 60 minutes of focus time and then 20 minutes of break time. The 20-20-20 Rule sets the timer for 20 minutes of screen time, and then 20 seconds of time to look away at an object 20 feet away. The color of the background changes based on whether the countdown is on a focus timer or a break timer.

## How we built it
The app consists of HTML, CSS, and Javascript. In the Javascript file, the main functions are countdown() which handles the timer's primary functionality, submitHandler() which takes the user's entry from the HTML file as parameters for the countdown() function, and resetTimer() which sets the timer back to 00:00

## Challenges we ran into
The most difficult challenge we had was correctly changing the time's minutes as the countdown went from times like 2:00 to 1:59.

## Accomplishments that we're proud of
We are most proud of making the countdown correctly display, triggering the break timers  and background changes at the right time

## What we learned
We learned aspects of front and backend development through the primary functions of the Javascript and HTML

## What's next for Tuffy Pomodoro
We hope to allow multiple timers to run at the same time on a single page. Most importantly, the 20-20-20 Rule and either variation of the Pomodoro Technique. Doing so will allow the user to keep track of both timers in one place
