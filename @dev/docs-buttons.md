## Buttons

<p class="lead">Buttons are a good way to present links or submission buttons on forms. Powertocss provide the basis you need to create and tweak buttons easily</p>

###Simple button
By default Powertocss buttons has a grey background and a dark font color:

<button class="button">Button</button>

<br>
Markup:

	<button class="button">Button</button>
	<!-- Or -->
	<a class="button">Button</a>

###Composed button
Adding more predefined classes to the buttons you can extend the look of them:

<button class="button button-blue border-radius8">Button Blue Big Radius</button>

<br>
Markup:

	<button class="button button-blue border-radius8">Blue</button>

###Rounded corner buttons
We have provided different border radius to the buttons:

<button class="button border-radius4">Small Radius</button>

<button class="button border-radius8">Big Radius</button>

<button class="button border-radius16">XBig Radius</button>

<br>
Markup:

	<button class="button border-radius4">Small Radius</button>
	<button class="button border-radius8">Big Radius</button>
	<button class="button border-radius16">XBig Radius</button>




###Colored buttons

Rather than functional classes we decided to create more flexible classes. So, for example, instead of creating the traditional classes like this `button-success` we decided to `button-green` to be easy to memorize and to let you decide if you want to use it to a success message or to an other thing. For example you can use it as a login button. 

|                      Buttons                                     | Markup
|:-----------------------------------------------------------------|:--------
| <button class="button button-blue">Blue</button>                 | `<button class="button button-blue">Blue</button>`
| <button class="button button-red">red</button>                   | `<button class="button button-red">red</button>`
| <button class="button button-orange">orange</button>             | `<button class="button button-orange">orange</button>`
| <button class="button button-green">green</button>               | `<button class="button button-green">green</button>`
| <button class="button button-black">black</button>               | `<button class="button button-black">black</button>`


###Disabled status
Just add the `button button-disabled` class to create a disabled button

<button class="button button-disabled border-radius4">Disabled</button>

<br>
Markup:

	<button class="button button-disabled border-radius4">Disabled</button>