window.addEventListener('load',function(){

    const container = document.querySelector('.container');
    const catImage = container.querySelector('img');
    const clickCounter = document.createElement('p');
    container.append(clickCounter);
    let numClicks = 0;

	catImage.addEventListener('click', function () {
	    numClicks ++;
		updateCounter(numClicks);
	}, false);

	function updateCounter(numClicks){
		let counterText = 'you clicked that cat ' + numClicks + ' times!'
		clickCounter.innerHTML = counterText;
	}
});
