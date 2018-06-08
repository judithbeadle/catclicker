window.addEventListener('load',function(){

    const container = document.querySelector('.container');
    const catImage = container.querySelector('img');
    
    let numClicks = 0;

	catImage.addEventListener('click', function () {
	    numClicks ++;
	    console.log(numClicks)
	}, false);
});
