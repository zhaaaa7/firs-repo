### relative 
1. Relative behaves the same as static unless you add some extra properties.

2. Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

### absolute 
absolute behaves like fixed except relative to the nearest positioned ancestor instead of relative to the viewport. If an absolutely-positioned element has no positioned ancestors, it uses the document body, and still moves along with page scrolling.


### fixed
1. A fixed element does not leave a gap in the page where it would normally have been located.

### centering
```css
margin: 0 auto;
#main {
  width: 600px;
  margin: 0 auto; 
}
```
The only problem occurs when the browser window is narrower than the width of your element. The browser resolves this by creating a horizontal scrollbar on the page. 

Using max-width instead of width in this situation will improve the browser's handling of small windows. 
```css
#main {
  max-width: 600px;
  margin: 0 auto; 
}
```

### overflow: http://learnlayout.com/clearfix.html
1. Use 
```
overflow: auto  
```
to solve the floating images

```css
container.clearfix {
  overflow: auto;
}

img {
  float: right;
}
```
2. inline-block elements is an alternative for float position with no need to clear:left.
inline-block elements are affected by the vertical-align property, which you probably want set to top.
