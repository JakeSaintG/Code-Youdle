Below you will find the notes that the team made during their planning session. They are UNEDITED and may be missing context from the video recording.

---

"Guess a random 5 letter word" => from here let's ask some questions
- "word"
	- We know we need a giant list of 5 letter words ("dictionary")
		- use it to check user guesses
		- to pick the daily 5 letter word (the one user is guessing)
	- Consistent 
		- the same for me, Michael, and Quentin 
	- on screen keyboard
- "guess"
	- 6 guesses
	- just random guesses with no hints feels bad
		- use a color as a hint
			- yellow is correct letter in word, not in correct spot
			- green is correct letter in correct spot
	- Keyboard can track already guessed letters
		- darken out ones that aren't correct
		- green if correct
		- yellow if correct but not in correct spot
- "random"
	- use the aforementioned list to pick a word and check guesses
	- "Let it up to the devs to define how 'random' works"
		- examples
			- use the current date and to pick from the list
Let's "constrain" requirements: AKA make an MVP/Prototype
- <span style="color:red;font-weight:bold">no backend </span>
	- trade offs
		- both the "dictionary" and the word of the day are likely going to be easily discoverable via the dev tools 
			- anyone who wants to "cheat", can
		- cost
			- We don't need to pay for servers until we get VC money 
		- Users can't track progress, stats, or login 
- <span style="color:green;font-weight:bold">MAYBE: let's fight too hard with local storage? </span>
	- trade offs
		- refreshing will dump the users progress so far
		- We can, however, build in a way that PLANS to have it at some point
- <span style="color:green;font-weight:bold">Dark/light mode: yes</span>
	- stretch goal
	- Dark by default 
- <span style="color:yellow;font-weight:bold">Nav bar</span>
	- really simple
		- just dark/light mode
		- link to the github repo
	- Trade offs
		- No guide for users on how to play game
		- No "offloading" users to any other games that we have
		- No way to HARVEST THEIR DOLLARS 
