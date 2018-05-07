## Cascading Order
What style will be used when there is more than one style specified for an HTML element?

Generally speaking we can say that all the styles will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

	1.	Inline style (inside an HTML element)
	2.	External and internal style sheets (in the head section) — last one has priority
	3.	Browser default
  
So, an inline style (inside a specific HTML element) has the highest priority, which means that it will override a style defined inside the <head> tag, or in an external style sheet, or a browser default value.

## combinator
A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

There are four different combinators in CSS:

* descendant selector (space)
* child selector (>)
* adjacent sibling selector (+)
* general sibling selector (~)

## background
1. By default the background image will repeat horizontally and vertically from the top left of the given element to fill up the element’s background.

2. The background-position property requires two values: a horizontal offset (the first value) and a vertical offset (the second value). If only one value is specified, that value is used for the horizontal offset and the vertical offset will **default to 50%**.

3. Within CSS, gradient backgrounds are treated as background images. We can create a gradient using the background or background-image properties, just like a regular background image.

4. The background image value that comes first will be the foremost background image, and the background image that’s listed last will be the rearmost background image.
```
div {
  background:  url("foreground.png") 0 0 no-repeat, 
               url("middle-ground.png") 0 0 no-repeat, 
               url("background.png") 0 0 no-repeat;
}
```

5. CSS cascades from the top of a file to the bottom of a file; thus, we can use two background-color properties within a single rule set. The first background-color property will use a “safe” background color, such as a hexadecimal value, and the second background-color property will use an RGBa or HSLa value.
```
div {
  background-color: #b2b2b2;
  background-color: rgba(0, 0, 0, .3);
}
```

6. When using the shorthand property the order of the property values is:
* background-color
* background-image
* background-repeat
* background-attachment
* background-position

## float
1. Essentially, the float property allows us to take an element, remove it from the normal flow of a page, and position it to the left or right of its parent element.

2. The float property relies on an element having a display value of **block**, and may alter an element’s default display value if it is not already displayed as a block-level element.

3. Using inline-block elements allows us to take full advantage of the box model without having to worry about clearing any floats because inline level element can recognize floating element.

4. The most popular problem involves a parent element that contains numerous floated elements. Content on the page will respect the size and placement of the floated children element, but these floated elements no longer impact the outer edges of the parent container. In this event the parent element **loses context of exactly what it contains and collapses, thus giving the parent element a height of 0 and ignoring various other properties**.

5. The CSS `float` property specifies how an element should float. The CSS `clear` property specifies what elements can float beside the cleared element and on which side.
The most common way to use the clear property is after you have used a float property on an element.

6. https://www.w3schools.com/css/tryit.asp?filename=trycss_layout_clearfix2
```
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
```


## display
1. Setting the display property of an element only changes how the element is displayed, **NOT what kind of element it is. So, an inline element with display: block; is not allowed to have other block elements inside it.**

2. element with `display: none`; does not take up any space 

`visibility:hidden`; also hides an element. However, the element will still take up the same space as before. The element will be hidden, but still affect the layout

3. inline-block elements are displayed on the same line as one another, they **include a single space between them**. The first solution is to put each new <section> element’s opening tag on the same line as the previous <section> element’s closing tag. Another way to remove the white space between inline-block elements is to open an HTML comment directly after an inline-block element’s closing tag.
  
## position
1. The position property identifies **how an element is positioned on a page and whether or not it will appear within the normal flow of a document**.

2. HTML elements are positioned **static by default.
Static positioned elements are not affected by the top, bottom, left, and right properties.**

3. Absolutely positioned elements are moved in relation to their **closest relatively positioned parent element**. Should a relatively positioned parent element not exist, the absolutely positioned element will be positioned in relation to the <html> element.
  
## box model
1. All the margin properties can have the following values:
* auto - the browser calculates the margin
* length - specifies a margin in px, pt, cm, etc.
* % - specifies a margin in % of the width of the containing element
* inherit - specifies that the margin should be inherited from the parent element

2. All the padding properties can have the following values:
* length - specifies a padding in px, pt, cm, etc.
* % - specifies a padding in % of the width of the containing element
* inherit - specifies that the padding should be inherited from the parent element
**Note: Negative values are not allowed.**


3. The height and width can be set to **auto (this is default. Means that the browser calculates the height and width)**, or be specified in length values, like px, cm, etc., or in percent (%) of the containing block.
**Note**: The height and width properties do not include padding, borders, or margins; they set the height/width of the area inside the padding, border, and margin of the element!

**Important**: When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the full size of an element, you must also add padding, borders and margins.
  
## image 
1. It is important to identify the size of an image in order to tell the browser how large the image should be before the page even loads; thus the browser can reserve space for the image and render the page faster.
2. The <img> element is by default an **inline-level** element. Adding an image without any styles to a page will position that image within the same line as the content that surrounds it. Additionally, the **height of the line in which an image appears will be changed to match the height of the image**, which can create large vertical gaps within that line.

3. download attribute in a tag : `<a href="/images/myw3schoolsimage.jpg" download="w3logo">`


## font
1. The font-style property is mostly used to specify italic text.
This property has three values:
* normal - The text is shown normally
* italic - The text is shown in italics
* oblique - The text is "leaning" (oblique is very similar to italic, but less supported)

**1em is equal to the current font size**. The default text size in browsers is 16px. So, the default size of 1em is 16px.

2. The font-variant property specifies whether or not a text should be displayed in a small-caps font.
In a small-caps font, all lowercase letters are converted to uppercase letters. However, the converted uppercase letters appears in a smaller font size than the original uppercase letters in the text.


## Overflow:
1. The overflow property specifies whether to clip content or to add scrollbars when the content of an element is too big to fit in a specified area.

The overflow property has the following values:
* visible - Default. The overflow is not clipped. It renders outside the element's box
* hidden - The overflow is clipped, and the rest of the content will be invisible
* scroll - The overflow is clipped, but a scrollbar is added to see the rest of the content
* auto - If overflow is clipped, a scrollbar should be added to see the rest of the content

Note: The overflow property only works for **block elements with a specified height**.

Note: In OS X Lion (on Mac), scrollbars are hidden by default and only shown when being used (even though "overflow:scroll" is set).

## a link 
1. When setting the style for several link states, there are some order rules:
* a:hover MUST come after a:link and a:visited
* a:active MUST come after a:hover

## List 
When using the shorthand property, the order of the property values are:
* list-style-type (if a list-style-image is specified, the value of this property will be displayed if the image for some reason cannot be displayed)
* list-style-position (specifies whether the list-item markers should appear inside or outside the content flow)
* list-style-image (specifies an image as the list item marker)
If one of the property values above are missing, the default value for the missing property will be inserted, if any.

## iframe
1. One additional fallback option that could be used in place of a plain text fallback is to use a YouTube or Vimeo embedded video. These video hosting websites allow us to upload our videos, provide a standard video player, and enable us to embed our videos onto a page using an **inline frame**.

## figure
1. The <figure> block-level element is used to identify and wrap self-contained content, often in the form of media. It may surround images, audio clips, videos, blocks of code, diagrams, illustrations, or other self-contained media.
  
## self-closing elements
1. Remove the forward slash at the end of self-closing elements

## table
1. Using the <th> element, along with the scope attribute, tremendously helps screen readers and assistive technologies make sense of a table.
	
2. The <tbody> element should contain the primary data within a table, while the <tfoot> element contains data that outlines the contents of a table.
	
3. Table collapse
https://www.w3schools.com/css/tryit.asp?filename=trycss_table_border-collapse
```
table {
    border-collapse: collapse;
}
table, th, td {
    border: 1px solid black;
}
```

4. To just center the text inside an element, use text-align: center;
The text-align property sets the horizontal alignment (like left, right, or center) of the content in <th> or <td>.
By default, the content of <th> elements are center-aligned and the content of <td> elements are left-aligned.

5. The vertical-align property sets the vertical alignment (like top, bottom, or middle) of the content in <th> or <td>.
By default, the vertical alignment of the content in a table is middle (for both <th> and <td> elements).

6. Stripped table
```
tr:nth-child(even) {
background-color: #f2f2f2;
}
```

7. Responsive table:
```
<div style="overflow-x:auto;">
```

## pseudo-*
1. A pseudo-class is used to define a special **state** of an element.
For example, it can be used to:
* Style an element when a user mouses over it
* Style visited and unvisited links differently
* Style an element when it gets focus

2. A CSS pseudo-element is used to style specified **parts** of an element.
For example, it can be used to:
* Style the first letter, or line, of an element
* Insert content before, or after, the content of an element

3. 
```
::selection {
    color: red; 
    background: yellow;
}
```

## text-*
1. The text-align property is used to set the horizontal alignment of a text. When the text-align property is set to "justify", each line is stretched so that every line has equal width, and the left and right margins are straight (like in magazines and newspapers)
2. text-decoration 
3. text-transform 
4. text-indent 
5. text-shadow

## opacity
1. When using the opacity property to add transparency to the background of an element, **all of its child elements inherit the same transparency**. This can make the text inside a fully transparent element hard to read.
  

## transition
1. How to Use CSS Transitions?
To create a transition effect, you must specify two things:
* the CSS property you want to add an effect to
* the duration of the effect

2. for a transition to take place, an element must have a change in state, and different styles must be identified for each state.




## translate
1. The translate value works a bit like that of relative positioning, pushing and pulling an element in different directions without interrupting the normal flow of the document.

## outline
1. outline: An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out”.

## Color:
1. Shades of gray are often defined using equal values for all the 3 light sources: #787878, #f0f0f0

Shades of gray are often defined by setting the hue and saturation to 0, and adjust the lightness from 0% to 100% to get darker/lighter shades: hsl(0, 0%, 0%)


