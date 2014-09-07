##Basic Setup
Once you have downloaded the starter kit, follow these instructions to make things fit the needs of your project.

###Configuring everything
First make sure you have have a good code editor. We recommend [Atom.io](https://atom.io "Atom.io") because it's an awesome code editor and it's free. Open Atom.io and make sure your HTML5 has Powertocss loaded:

	<!DOCTYPE html>
	<html>
	    <head>
	        <title>...</title>

		    <!-- POWERTOCSS Styles and YOUR THEME styles -->
		    <link rel="stylesheet" type="text/css" href="PATH_TO/powertocss.min.css">
		    <link rel="stylesheet" type="text/css" href="PATH_TO/your-theme.css">

	    </head>
	    <body>
			...
	    </body>
	</html>

<small><b>PS:</b> Make sure you load `powertocss.min.css` before `your-theme.css` so your-theme is able to override powertocss.</small>

###Responsive Utility (Optional)
Make it responsive by adding this in your 'head' tag:

	<meta name="viewport" content="width=device-width, initial-scale=1">
<small><b>NOTE:</b> By default, in the Starter Kit we have added the Viewport Meta Element  inside your `head` tag to make it responsive. If you plan to make a non-responsive site, just remove it and also see the Non-responsive Columns Description to see how to configure it</small>


###Add the Grid
Add the grid* and the row class to your `div` tag. Just like the example bellow:
<br>
<small><i><b>PS:</b> You have 5 grid alternatives, (<b>grid-1200, grid-full, grid-960, grid-640 and grid-320</b>). Just add the one you prefer. All them have different widths</i></small>

	<body>
		<div class="grid-960">
		   <div class="row">
		      Your Body Content
		   </div>
		</div>
	</body>

###Get your elements in place
####Responsive Columns
Now that you have added the grid class to your div, it's time to get to know our classes to position the elements in the page: the **columns**.

	<div class="row">
		<div class="column4 padding0_8">
			<span class="demo">.column4</span>
		</div>
		<div class="column8 padding0_8">
			<span class="demo">.column8</span>
		</div>
	</div>
**OBS:** Replace the spans with your own contend 

**Will Produce this:**
<div class="row">
  <div class="column4 padding0_8"><span class="demo">.column4</span></div>
  <div class="column8 padding0_8"><span class="demo">.column8</span></div>
</div>


####Non-responsive Columns
<i>*If you don't want the responsive capability, just don't add de <b>meta viewport content</b> and also prefix the columns **column1, column2, column3, etc** with the **non-responsive-** text. For example: use **class="non-responsive-column8"**, instead of <b>class="column8"**</b>
</i>


> **TIP:** To mastery the PowerToCSS Grids, just memorize these self explanatory elements:
> <br>1) The  **grid-1200**, **grid-full**, **grid-960**, **grid-640** and **grid-320**
> <br>2) The **row** after the grid class
> <br>3) And the **column1, column2, column3, column4, column5, column6, column7, column8, column9, column10, column11, column12** to structure your page by putting your elements in place

Now that you know how to configure your project it's time to check the components, starting with the <a class="button button-red" href="./docs-global">Global Component</a>