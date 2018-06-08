window.addEventListener('load',function(){

	// use dom elements
    const container = document.querySelector('.container');
    const catImage = container.querySelector('img');

    // add a paragraph for displaying clicks
    const clickCounter = document.createElement('p');
    container.append(clickCounter);

    // set up counter var
    let numClicks = 0;

    // display text
    let counterText = "click that cat!";
    clickCounter.innerHTML = counterText;

    // add event listener
	catImage.addEventListener('click', function () {
	    numClicks ++;
		updateCounter(numClicks);
	}, false);

	// function for counting clicks and updating text
	function updateCounter(numClicks){
		counterText = "You clicked that cat <b>" + numClicks + "</b> times!"
		clickCounter.innerHTML = counterText;
	}
});
