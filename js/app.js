function openModal() {
	document.getElementById('overlay').classList.add('open');

	const nav = document.querySelector('nav');
	const main = document.querySelector('main');

	if (nav) nav.classList.add('blurred');
	if (main) main.classList.add('blurred');
}

function closeModal() {
	document.getElementById('overlay').classList.remove('open');

	const nav = document.querySelector('nav');
	const main = document.querySelector('main');

	if (nav) nav.classList.remove('blurred');
	if (main) main.classList.remove('blurred');
}

function handleOverlayClick(e) {
	if (e.target === document.getElementById('overlay')) closeModal();
}

function handleKeyboardButtonClick(event) {
	// handle ENTER
	// handle BACK (🠰)
	const keyPressed = event.target.dataset['key'];
	
	// randomly assign correct place/letter or incorrect for debug purposes
	event.target.classList = `keyboard_key key_${keyPressed}`; //reset the classes for the key FOR DEBUG (maybe not the best plan for the full implementation)
	const debugColor = Math.random();
	if (debugColor < 0.3) {
		event.target.classList.add('correct_place');
		console.log('green')
	} else if (debugColor < 0.6 && debugColor > 0.3 ) {
		event.target.classList.add('incorrect'); 
		console.log('grey')
	} else {
		event.target.classList.add('correct_letter'); 
		console.log('yellow')
	}

	throw `${keyPressed} action not yet implemented`;
}

// Populate Keyboard
(() => {
	const keyboardContainer = document.getElementById('keyboard');

	const keyboardKeys = {
		top: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		middle: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
		bottom: ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '🠰']
	};

	Object.keys(keyboardKeys).forEach((row) => {
		const characters = keyboardKeys[row];
		const rowContainer = document.createElement('div');
		rowContainer.classList.add(`keyboard_row`);

		characters.forEach((c) => {
			const keyButton = document.createElement('button');
			keyButton.classList.add('keyboard_key');
			keyButton.classList.add(`key_${c.toLowerCase()}`);
			keyButton.type = 'button';
			keyButton.ariaLabel = `add ${c}`;
			keyButton.innerText = c;
			keyButton.onclick = handleKeyboardButtonClick;

			// Adds a "data-key" attribute to the html element. Might be useful later.
			keyButton.dataset.key = c;

			rowContainer.append(keyButton);
		});

		keyboardContainer.append(rowContainer);
	});
})();
