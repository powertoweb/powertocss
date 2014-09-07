##<h2 class="bold">Global</h2>
Provides the base styles for all HTML elements inclusive the CSS resets styles. With the Global Styles we have defined these elements:

| Elements              | Description
|:----------------------|:--------------------
| Normalize             | Resets some browsers default styles
| Headings              | From `h1` to `h6`. We have styled them to better describe the documents structure and organization
| Font styles           | Default font-size, color, line-height, italics, abbreviations `abbr`, mark, etc
| Horizontal rule       | Reset the `hr` and then prettify it
| Paragraphs            | Line height and margin are defined here
| Links                 | Default link styles, `a:link`, `a:hover`, `a:focus` and `a:active`
| Tables***             | Minimal table style defined here
| Responsive images     | By default all the images are responsive

###<h3 class="bold">Normalize</h3>
Here we Resets some browsers default styles to fit ours needs and to keep things consistent across browsers. The Normalize component is based in the [Normalize.css](http://necolas.github.io/normalize.css/ "Normalize.css") with some modifications, so we provide below their UI Tests:

###<h3 class="bold">Headings</h3>

Usually used to structure and organize the information on the pages following some hierarchy. We try to keep that hierarchy. See the example bellow:

#This is Heading 1 (h1)
##This is Heading 2 (h2)
###This is Heading 3 (h3)
####This is Heading 4 (h4)
#####This is Heading 5 (h5)
######This is Heading 6 (h6)

<br>
###<h3 class="bold">Font Styles</h3>

This is a NORMAL font.

*This is an italic text and it's marked with `i` tag.*

The abbreviation is this <abbr title="PowerToCSS Abbreviation">PTCSS ABBR</abbr> and it's marked with `abbr` tag.

<mark>This is a text marked with `mark` tag</mark>

<small>This is a `small` text</small>

<sub>This is a `sub` text</sub> & <sup>this is a `sup` text</sup>

<dfn>This is a DEFINITION and it's marked with `dfn` tag</dfn>


###<h3 class="bold">Horizontal rule example</h3>
______________________________________________

###<h3 class="bold">Paragraphs example</h3>
<p>This is a PARAGRAPH and it's marked with `p` tag. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

###<h3 class="bold">Links</h3>

[This is a link example](#)


###<h3 class="bold">Tables</h3>

| Tables      |      Are      |  Cool |
|-------------|:-------------:|------:|
| column 1 is |  left-aligned | $1600 |
| column 2 is |    centered   |   $12 |
| column 3 is | right-aligned |    $1 |

###<h3 class="bold">Responsive Image</h3>

By default all the images are responsive. The tag for the image is `img`.

![Despicable me Image example](./img/despicable-me-2-minions.jpg)

