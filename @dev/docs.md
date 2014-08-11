#Get Started
----------------

To get started using PowerToCSS really quickly we have provided to you a quick start guide. See it bellow:

##Quick Start

### First, add PowerToCSS to your page
You can add PowerToCSS to your page in a easy way. Just add the following element into your page's `head` tag, before your project's stylesheets.

	<link rel="stylesheet" href="http://powertoweb.com/powertocss/powertocss.css">

Or You can Download the <a href="#">Starter Kit here</a>

###Make it responsive (Optional)
If you plan to make it responsive, add the Viewport Meta Element  inside your `head` tag:

	<meta name="viewport" content="width=device-width, initial-scale=1">


###Add the Grid
Add the `grid-960` and the `row` class to your `div` tag. Just like the example bellow:
<br>
<small><i><b>PS:</b> You have 5 grid alternatives, (**grid-1200**, **grid-full**, **grid-960**, **grid-640** and **grid-320**). Just add the one you prefer. All them have different widths</i></small>

	<body>
		<div class="grid-960">
		   <row>
		      Your Body Content
		   </row>
		</div>
	</body>
	
####Get your elements in place
Now that you have added the grid class to your div, it's time to get to know our classes to position the elements in the page: the **columns**.

We have provided Twelve columns, **column1, column2, column3, column4, column5, column6, column7, column8, column9, column10, column11, column12**


<div class="grid-960 demo text-center bold">
 <h5 class="big">Example grid - 960 Grid:</h5>
	<div class="row">
		<div class="column2"><span class="demo">.column2</span></div>
		<div class="column2"><span class="demo">.column2</span></div>
		<div class="column2"><span class="demo">.column2</span></div>
		<div class="column2"><span class="demo">.column2</span></div>
		<div class="column2"><span class="demo">.column2</span></div>
		<div class="column2 end"><span class="demo">.column2</span></div>
	</div>
	<div class="row">
		<div class="column3"><span class="demo">.column3</span></div>
		<div class="column3"><span class="demo">.column3</span></div>
		<div class="column3"><span class="demo">.column3</span></div>
		<div class="column3 end"><span class="demo">.column3</span></div>
	</div>
	<div class="row">
		<div class="column4"><span class="demo">.column4</span></div>
		<div class="column4"><span class="demo">.column4</span></div>
		<div class="column4 end"><span class="demo">.column4</span></div>
	</div>
	<div class="row">
		<div class="column5"><span class="demo">.column5</span></div>
		<div class="column2"><span class="demo">.column2</span></div>
		<div class="column5 end"><span class="demo">.column5</span></div>
	</div>
	<div class="row">
		<div class="column3"><span class="demo">.column3</span></div>
		<div class="column6"><span class="demo">.column6</span></div>
		<div class="column3 end"><span class="demo">.column3</span></div>
	</div>
</div>



<mark>
**PS:** *If you don't want the responsive capability, just don't add de <b>meta viewport content</b> above and also prefix the columns **column1, column2, column3, etc** with the **non-responsive-** text. For example: use **class="non-responsive-column8"**, instead of <b>class="column8"**</b>
</mark>


> **TIP:** To mastery the PowerToCSS Grids, just memorize these self explanatory elements: 
> <br>1) The  **grid-1200**, **grid-full**, **grid-960**, **grid-640** and **grid-320**
> <br>2) The **row** after the grid class
> <br>3) And the **column1, column2, column3, column4, column5, column6, column7, column8, column9, column10, column11, column12**











----------

----------

----------










##The components
---------------------
PowerToCSS Framework is composed by different components mixed together:

- **Normalize** (Global Styles)
- **Lists** (Unordered Lists, Ordered Lists and Navigation)
- **Blockquotes** (Blockquotes)
- **Code** (Code)
- -------------
- **Menu** (Menu styles)
- **Forms** (Forms, Input Types and Buttons)
- **Buttons** (PowerToWeb Buttons)
- **Helpers** (PowerToWeb Helpers)
- **Grid** (PowerToWeb Grid)
- **Print** (Print Page Styles)

### Normalize Styles
ToDo (Write BETTER description of the elements and how tos)

Here we Resets some browsers default styles to fit ours and to keep things consistent across browsers. We'll highlight bellow the relevant ones:

- Body
- Links (a, hover, focus, active)
- Paragraph (p)
- Headings (h1,h2,h3,h4,h5,h6)
- Horizontal Rule

### Lists
ToDo (Write the Description and how to)

### Blockquotes
...

### Code
...

### Menu
...

###Forms
<div>
<div><input form="text" placeholder="Text Box" name="text" type="text"></div>
<div><input form="text" placeholder="Text Box Disabled" disabled="disabled" name="text" type="text"></div>
<div><input name="email" placeholder="e-mail@example.com" type="email"></div>
<div><textarea name="text area" placeholder="text area"></textarea></div>
</div>

###The Buttons

<button>Default</button>
<button class="button-blue">Blue</button>
<button class="button-red">Red</button>
<button class="button-orange">Orange</button>
<button class="button-green">Green</button>
<button class="button-black">Black</button>
<button class="button-disabled">Disabled</button>

Here is the respective code for the buttons work:


    <button>Default</button>
    <button class="button-blue">Blue</button>
    <button class="button-red">Red</button>
    <button class="button-orange">Orange</button>
	<button class="button-green">Green</button>
	<button class="button-black">Black</button>
	<button class="button-disabled">Disabled</button>

### Helpers

### Grid

### Print




.