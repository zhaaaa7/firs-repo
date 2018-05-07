## Cascading Order
What style will be used when there is more than one style specified for an HTML element?

Generally speaking we can say that all the styles will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

	1.	Inline style (inside an HTML element)
	2.	External and internal style sheets (in the head section) — last one has priority
	3.	Browser default
  
So, an inline style (inside a specific HTML element) has the highest priority, which means that it will override a style defined inside the <head> tag, or in an external style sheet, or a browser default value.


## background
1. By default the background image will repeat horizontally and vertically from the top left of the given element to fill up the element’s background.

2.The background-position property requires two values: a horizontal offset (the first value) and a vertical offset (the second value). If only one value is specified, that value is used for the horizontal offset and the vertical offset will **default to 50%**.

3.Within CSS, gradient backgrounds are treated as background images. We can create a gradient using the background or background-image properties, just like a regular background image.

4.The background image value that comes first will be the foremost background image, and the background image that’s listed last will be the rearmost background image.
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

## display

11. inline-block elements are displayed on the same line as one another, they **include a single space between them**. The first solution is to put each new <section> element’s opening tag on the same line as the previous <section> element’s closing tag.
Another way to remove the white space between inline-block elements is to open an HTML comment directly after an inline-block element’s closing tag.
  
## position
1. The position property identifies **how an element is positioned on a page and whether or not it will appear within the normal flow of a document**.

2. Absolutely positioned elements are moved in relation to their **closest relatively positioned parent element**. Should a relatively positioned parent element not exist, the absolutely positioned element will be positioned in relation to the <html> element.
  
  
## image 
1. It is important to identify the size of an image in order to tell the browser how large the image should be before the page even loads; thus the browser can reserve space for the image and render the page faster.
2. The <img> element is by default an **inline-level** element. Adding an image without any styles to a page will position that image within the same line as the content that surrounds it. Additionally, the **height of the line in which an image appears will be changed to match the height of the image**, which can create large vertical gaps within that line.

3. download attribute in a tag : `<a href="/images/myw3schoolsimage.jpg" download="w3logo">`

## iframe
1. One additional fallback option that could be used in place of a plain text fallback is to use a YouTube or Vimeo embedded video. These video hosting websites allow us to upload our videos, provide a standard video player, and enable us to embed our videos onto a page using an **inline frame**.

## figure
1. The <figure> block-level element is used to identify and wrap self-contained content, often in the form of media. It may surround images, audio clips, videos, blocks of code, diagrams, illustrations, or other self-contained media.
  
## self-closing elements
1. Remove the forward slash at the end of self-closing elements

## table
1. Using the <th> element, along with the scope attribute, tremendously helps screen readers and assistive technologies make sense of a table.
2. The <tbody> element should contain the primary data within a table, while the <tfoot> element contains data that outlines the contents of a table.
  
  
## responsive design
1. One of the recommended viewport values is outlined below, using both the width and initial-scale properties.<meta name="viewport" content="width=device-width, initial-scale=1"> 

2. One quick way to make media scalable is by using the max-width property with a value of 100%. (https://learn.shayhowe.com/advanced-html-css/responsive-web-design/S)



1. The translate value works a bit like that of relative positioning, pushing and pulling an element in different directions without interrupting the normal flow of the document.
2. for a transition to take place, an element must have a change in state, and different styles must be identified for each state.
