'use strict';

class Head {
	constructor() {
		console.log('this is blocking');
        if (!!('ontouchstart' in window)) {
            document.addEventListener("DOMContentLoaded", function(){
                // Handler when the DOM is fully loaded
                document.body.classList.add("touch");
            });
        }
	}
}

new Head();
