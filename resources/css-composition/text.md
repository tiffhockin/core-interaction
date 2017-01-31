# CSS Composition Templates

The following CSS is present in all of the below examples:

	* { box-sizing: border-box; }

	body {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

`*`  
By using the universal selector (`*`), we are describing the box model for all elements on the page with the `box-sizing` property. `box-sizing` defines how we want the browser to calculate the size of each element on the page (refer to the [CSS Layout](/_resources/css-layout) reference for more details).

`body`  
Setting `margin` and `padding` to `0` on the `body` removes any default browser margin and padding. Setting `overflow: hidden` removes the scroll bars in case any element extends beyond the borders of the browser window.

## 50/50 Vertical Split

<iframe src="split_v_50-50.html"></iframe>

[View full-screen](split_v_50-50.html)

HTML

	<div id="left" class="side-by-side one-half"></div>
	<div id="right" class="side-by-side one-half"></div>

CSS

	.side-by-side {
		position: absolute;
		height: 100%;
		width: 50%;
	}

	#left { left: 0; }
	#right { right: 0; }

## 50/50 Horizontal Split

<iframe src="split_h_50-50.html"></iframe>

[View full-screen](split_h_50-50.html)

HTML

	<div id="top" class="stacked-vertically one-half"></div>
	<div id="bottom" class="stacked-vertically one-half"></div>

CSS

	.stacked-vertically {
		position: absolute;
		height: 50%;
		width: 100%;
	}

	#top { top: 0; }
	#bottom { bottom: 0; }

## 50/50 Horizontal Split Rotated

<iframe src="split_h_50-50-rotated.html"></iframe>

[View full-screen](split_h_50-50-rotated.html)

HTML


	<div id="container">
		<div id="top" class="stacked-vertically one-half"></div>
		<div id="bottom" class="stacked-vertically one-half"></div>
	</div>

CSS

	#container {
		position: absolute;
		width: 200%;
		height: 200%;
		left: -50%;
		top: -50%;
		/* 
		degrees of rotation can be anything from 0-360
		you could also rotate this container using JS 
		*/
		transform: rotate(45deg);
	}

	.stacked-vertically {
		position: absolute;
		height: 50%;
		width: 100%;
	}

	#top { top: 0; }
	#bottom { top: 50%; }

*What's going on here?* A diagram of how the above composition sits within the browser window: 

<iframe src="split_h_50-50-rotated-diagram.html"></iframe>

## Fully overlapping divs

<iframe src="full_overlapping.html"></iframe>

[View full-screen](full_overlapping.html)

HTML

	<div id="overlapper-1" class="overlapper">1</div>
	<div id="overlapper-2" class="overlapper">2</div>
	<div id="overlapper-3" class="overlapper">3</div>

CSS

	.overlapper {
		position: absolute;
		height: 100vh;
		width: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}


## Concentric overlapping divs

<iframe src="concentric_overlapping.html"></iframe>

[View full-screen](concentric_overlapping.html)

HTML

	<div id="overlapper-1" class="overlapper">1</div>
	<div id="overlapper-2" class="overlapper">2</div>
	<div id="overlapper-3" class="overlapper">3</div>
	<div id="overlapper-4" class="overlapper">4</div>

CSS

	.overlapper {
		position: absolute;
		height: 100vh;
		width: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	#overlapper-2 { 
		width: 80%; 
		height: 80vh;
		margin: 10vh 10%; /* (100 - 80)/2 */
		line-height: 80vh;
	}
	#overlapper-3 { 
		width: 60%; 
		height: 60vh;
		margin: 20vh 20%; /* (100 - 60)/2 */
		line-height: 60vh;
	}
	#overlapper-4 { 
		width: 40%; 
		height: 40vh;
		margin: 30vh 30%; /* (100 - 40)/2 */
		line-height: 40vh;
	}