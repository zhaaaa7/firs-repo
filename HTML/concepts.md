## basics
1. The `<head>` element contains meta information about the document, thus invisible. The 
  
  `<title>` element is required in HTML5. Make the title as meaningful as possible:
  ```
<title>HTML5 Syntax and Coding Style</title>
```
To ensure proper interpretation, and correct search engine indexing, both the language and the character encoding should be defined as early as possible in a document:
```
<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <title>HTML5 Syntax and Coding Style</title>
</head>
```
2. The <meta> element is used to specify which character set is used, page description, keywords, author, and other metadata.

Metadata is used by browsers (how to display content), by search engines (keywords), and other web services.

3. Setting The Viewport
HTML5 introduced a method to let web designers take control over the viewport, through the <meta> tag.
**The viewport is the user's visible area of a web page**. It varies with the device, and will be smaller on a mobile phone than on a computer screen.

You should include the following <meta> viewport element in all your web pages:
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
A <meta> viewport element gives the browser instructions on how to control the page's dimensions and scaling.
The `width=device-width` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).
`The initial-scale=1.0` part sets the initial zoom level when the page is first loaded by the browser.


4. The <!DOCTYPE> declaration is not case sensitive.
5. Element content can  be element or plain text
6. HTML elements with no content are called empty elements.
  
  <br> is an empty element without a closing tag. Empty elements can be "closed" in the opening tag like this: <br />. HTML5 does not require empty elements to be closed. But if you want stricter validation, or if you need to make your document readable by XML parsers, you must close all HTML elements properly. 	
  
7. the browser will remove any extra spaces and extra lines when the page is displayed
8. Conditional omments
```
<!--[if IE 9]>
    .... some HTML here ....
<![endif]—>
```

9. CSS can be added to HTML elements in 3 ways:
*	Inline - by using the style attribute in HTML elements
*	Internal - by using a <style> element in the <head> section
*	External - by using an external CSS file
  
## attribute
1. The HTML5 standard does not require quotes around attribute values. Omitting quotes can produce errors when there are spaces. **Double quotes** around attribute values are the most common in HTML

2. All HTML elements can have attributes. **Attributes provide additional information about an element. **
The style attribute is used to specify the styling of an element, like color, font, size etc. 

## Formatting elements:
* <b> - Bold text
*	<strong> - Important text
*	<i> - Italic text
*	<em> - Emphasized text
*	<mark> - Marked text: highlighted
*	<small> - Small text
*	<del> - Deleted text
*	<ins> - Inserted text
*	<sub> - Subscript text
*	<sup> - Superscript text
  
## tags
  
### p
title attribute is added to the <p> element. The value of the title attribute will be displayed as a tooltip when you mouse over the paragraph: <p title="I'm a tooltip”> 

### hr
The <hr> tag defines a **thematic break** in an HTML page, and is most often displayed as a horizontal rule. The <hr> element is used to separate content (or define a change) in an HTML page:
```
	<h1>This is heading 1</h1>
	<p>This is some text.</p>
	<hr>
	<h2>This is heading 2</h2>
	<p>This is some other text.</p>
	<hr>
```

### pre
The HTML `<pre>` element defines preformatted text. The text inside a `<pre>` element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks


### HTML Quotation and Citation Elements
1. The HTML `<q>` element defines a short quotation.
2. The HTML `<blockquote>` element defines a section that is **quoted from another source**. Browsers usually indent `<blockquote>` elements:
```
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature.
The world's leading conservation organization,
WWF works in 100 countries and is supported by
1.2 million members in the United States and
close to 5 million globally.
</blockquote>
```

### abbr
The HTML `<abbr>` element defines an abbreviation or an acronym: 
```
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
```

### address
The HTML `<address>` element defines contact information (author/owner) of a document or an article. The `<address>` element is usually displayed in **italic**. Most browsers will add a line break before and after the element.
  
### cite
The HTML `<cite>` element defines the title of a work. Browsers usually display `<cite>` elements in italic:
```
<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>
```
### bdo
he HTML `<bdo>` element defines bi-directional override. The `<bdo>` element is used to override the current text direction: 
```
<bdo dir="rtl">This text will be written from right to left</bdo>
```
### base
```
The <base> element specifies the base URL and base target for all relative URLs in a page
```

##  Color
1. rgba(255,99,71,0.5):50% transparent
2. hsl(hue, saturation, lightness)
* Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.
* Saturation is a percentage value, 0% means a shade of gray, and 100% is the full color.
* Lightness is also a percentage, 0% is black, 50% is neither light or dark, 100% is white

## image
1. The alt attribute is required. A web page will not validate correctly without it.
```
<img src="html5.gif" alt="HTML5 Icon" width="128" height=“128">
<img src="html5.gif" alt="HTML5 Icon" style=“width:128px;height:128px;">
```

Always specify the width and height of an image. If width and height are not specified, the page will flicker while the image loads.

we suggest using the style attribute. It prevents internal or external styles sheets from changing the original size of image

2. Image Maps
```
<img src="workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
```
## Lists
1. The CSS list-style-type property is used to define the style of the list item marker: disc, circle, square, none
The type attribute of the <ol> tag, defines the type of the list item marker: 1,A,a,I,i

2. A **description list** is a list of terms, with a description of each term.
The `<dl>` tag defines the description list, 
  
the `<dt>` tag defines the term (name), 

and the `<dd>` tag describes each term: 
```
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

## table
If you want the borders to collapse into one border, add the CSS border-collapse property:
```
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
```
**Note**: If the table has collapsed borders, border-spacing has no effect.

2. To add a caption to a table, use the `<caption>` tag:
```
<table style="width:100%">
  <caption>Monthly savings</caption>
```
**Note**:The `<caption>` tag must be inserted immediately after the <table> tag.

3.
```
Add style to rows:
table#t01 tr:nth-child(even) {
    background-color: #eee;
}
table#t01 tr:nth-child(odd) {
    background-color: #fff;
}
table#t01 th {
    color: white;
    background-color: black;
}
```

## form
1. datalist
The `<datalist>` element specifies a list of pre-defined options for an **`<input>`** element.
Users will see a drop-down list of the pre-defined options as they input data.
**The list attribute of the` <input>` element, must refer to the id attribute of the `<datalist>` element.**
```
<form action="/action_page.php">
  <input list="browsers">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist> 
</form>
```

## Book mark
1. HTML bookmarks are used to allow readers to jump to specific parts of a Web page. Bookmarks can be useful if your webpage is very long.
2. To make a bookmark, you must first create the bookmark, and then add a link to it. When the link is clicked, the page will scroll to the location with the bookmark.
```
<h2 id="C4">Chapter 4</h2>
<a href="#C4">Jump to Chapter 4</a>

//From another page:
<a href="html_demo.html#C4">Jump to Chapter 4</a>
 ```

## Iframe
1. An iframe can be used as the target frame for a link.
The target attribute of the link must refer to the name attribute of the iframe:
```
<iframe src="demo_iframe.htm" name="iframe_a"></iframe>

<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>
```
https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe_target

2. One additional fallback option that could be used in place of a plain text fallback is to use a YouTube or Vimeo embedded video. These video hosting websites allow us to upload our videos, provide a standard video player, and enable us to embed our videos onto a page using an **inline frame**.

## Script
1. The `<noscript>` tag is used to provide an alternate content for users that have disabled scripts in their browser or have a browser that doesn't support client-side scripts:
```
<noscript>Sorry, your browser does not support JavaScript!</noscript>
 ```

## accessibility
1. The language is declared with the lang attribute. Declaring a language is important for accessibility applications (screen readers) and search engines: `<html lang=“en-US”> `


## responsive design
1. One of the recommended viewport values is outlined below, using both the width and initial-scale properties.<meta name="viewport" content="width=device-width, initial-scale=1"> 

2. One quick way to make media scalable is by using the max-width property with a value of 100%. (https://learn.shayhowe.com/advanced-html-css/responsive-web-design/S)


## Image Sprites
An image sprite is a collection of images put into a single image.
A web page with many images can take a long time to load and generates multiple server requests.
Using image sprites will reduce the number of server requests and save bandwidth.
