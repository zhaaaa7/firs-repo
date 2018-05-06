## Basic concepts
### Grid Container
1. The grid can be used to lay out entire web pages. Whereas Flexbox is mostly useful for positioning items in a one-dimensional layout, CSS grid is most useful for two-dimensional layouts, providing many tools for aligning and moving elements across both rows and columns.

2. To set up a grid, you need to have both a **grid container** and **grid items**. 
3. If you don't specify the number of rows or columns in our grid, every item is sitting on a new row. 
<img src="https://github.com/zhaaaa7/css/blob/master/grid/grid1.png" alt="grid1" width="800px">

4. define the number of rows and columns in our grid.

<img src="https://github.com/zhaaaa7/css/blob/master/grid/grid2.png" alt="grid2" width="800px">

You can use number or % to set the column width.


shorthand: row / column

```
grid-template: 40% 50% 50px / 100px 50% 200px;
```


5. Fraction

You may already be familiar with several types of responsive units such as percentages (%), ems and rems. CSS Grid introduced a new relative sizing unit — fr, like fraction.

By using the fr unit, we can define the size of columns and rows as a fraction of the grid's length and width. **This unit was specifically created for use in CSS Grid**. Using fr makes it easier to prevent grid items from **overflowing** the boundaries of the grid.

It is possible to use fr with other units as well. When this happens, each fr represents a fraction of the **available space**.

<img src="https://github.com/zhaaaa7/css/blob/master/grid/grid3.png" alt="grid3" width="800px">

6. Repeat

The properties that define the number of rows and columns in a grid can take a function as a value. repeat() is one of these functions. 

```
grid-template: repeat(3,1fr) / 3fr 50% 1fr;
```


7. minmax

So far, all of the grids that we have worked with have been a fixed size. The grid in our example has been 400 pixels wide and 500 pixels tall. But sometimes you might want a grid to resize based on the size of your web browser.

In these situations, you might want to prevent a row or column from getting too big or too small. For example, if you have a 100-pixel wide image in your grid, you probably don't want its column to get thinner than 100 pixels! The minmax() function can help us solve this problem.

```
.grid {
  display: grid;
  border: 2px blue solid;
  height: 500px;
  grid-template: repeat(3,1fr)/ 3fr minmax(50px,300px) 1fr;
}
```
You don't set the width of the grid. The width of the grid items in the second line can't be greater than 300px and less than 5 0px.

8. Grid Gap

In all of our grids so far, there hasn't been any space between the items in our grid. The CSS properties grid-row-gap and grid-column-gap will put blank space between every row and column in the grid.

It is important to note that grid-gap does not add space at the beginning or end of the grid. 

`grid-gap: 20px 10px;`. If only one value is given, it will set the column gap and the row gap to that value.

<img src="https://github.com/zhaaaa7/css/blob/master/grid/grid4.png" alt="grid4" width="800px">

### Grid Items
1. we can drastically change the look of our grid by making grid items take up more than one row and one column. 

2. Multiple Row Items

Using the CSS properties grid-row-start and grid-row-end, we can make single grid items take up multiple rows.

<img src="https://github.com/zhaaaa7/css/blob/master/grid/grid5.png" alt="grid5" width="800px">

3. shorthand

```
.a {
  grid-row: 5 / 7;
}
```

4. span

When using these properties, we can use the **keyword span** to start or end a column or row relative to its other end. 
```
// All the three are the same.
.item {
  grid-column: 4 / 6;
}

.item {
  grid-column-start: 4;
  grid-column-end: span 2;
}

.item {
  grid-column-start: span 2;
  grid-column-end: 6;
}
```
<img src="https://github.com/zhaaaa7/css/blob/master/grid/grid6.png" alt="grid6" width="800px">

5. Grid Area

We've already been able to use grid-row and grid-column as shorthand for properties like grid-row-start and grid-row-end. We can refactor even more using the property grid-area. 
```
grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end
```

<img src="https://github.com/zhaaaa7/css/blob/master/grid/grid7.png" alt="grid7" width="800px">

6. example

```
.grid {
  border: 2px blue solid;
  height: 500px;
  width: 500px;
  display:grid;
  grid-template-columns:25% 25% 2fr 1fr;
  grid-template-rows: 200px 200px;
  grid-gap: 10px 15px;
}

.box {
  background-color: beige;
  color: black;
  border-radius: 5px;
  border: 2px dodgerblue solid;
}

.a {
  grid-column-start:1;
  grid-column-end:span 2;
  grid-row-start:1;
  grid-row-end:3;
}
```
<img src="https://github.com/zhaaaa7/css/blob/master/grid/grid8.png" alt="grid8" width="400px">

## Advanced concepts
1. Grid Template Areas

The grid-template-areas property allows you to name sections of your web page to use.
<img src="https://github.com/zhaaaa7/css/blob/master/grid/grid-adv1.png" alt="grid-adv1" width="800px">

2. Overlapping Elements

Another powerful feature of CSS Grid Layout is the ability to easily overlap elements.
<img src="https://github.com/zhaaaa7/css/blob/master/grid/grid-adv2.png" alt="grid-adv2" width="800px">

3. Justify Items
We have referred to "two-dimensional grid-based layout" several times throughout this course.

There are two axes in a grid layout — the column (or block) axis and the row (or inline) axis.


4. The row axis stretches from left to right across the web page. 

4-1. justify-items -- how to position elements within their columns
justify-itemsis a property that positions grid items along the inline, or row, axis. Without setting the justify-items property, these elements will **span the width of the column** they are in. By setting the justify-items property, they will only be as wide as necessary to contain their content 

justify-items accepts these values:
* start — aligns grid items to the left side of the grid area
* end — aligns grid items to the right side of the grid area
* center — aligns grid items to the center of the grid area
* stretch — stretches all items to fill the grid area

4-2. Justify Content -- how to position a grid (column) within its parent element.

5. The column axis stretches from top to bottom across the web page.

5-1. align-items is a property that positions grid items along the block, or column axis. This means that it positions items from top to bottom. Without setting the align-items property, these elements will span the height of the row they are in. By setting the align-items property, they will only be as tall as necessary to contain their content

5-2. align-content positions the rows along the column axis, or from top to bottom.

6. align-self and justify-self accept the same values as align-items and justify-items, however, they set the rule for individual grid item in their grid.

## Implicit vs. Explicit Grid
### why we need explicit grid
1. So far, we have been explicitly defining the dimensions and quantities of our grid elements using various properties. 
2. However, there are instances in which we don't know how much information we're going to display. What happens if the developer has specified a 3-column, 5-row grid (for a total of 15 items), but the search results return 30?

Something called the implicit grid takes over.
3. The implicit grid is an algorithm built into the specification for CSS Grid that determines default behavior for the placement of elements when there are more than fit into the grid specified by the CSS.
4. The default behavior of the implicit grid is as follows: items fill up rows first, adding new rows as necessary. New grid rows will only be tall enough to contain the content within them. 

### properties
1. CSS Grid provides two properties to specify the size of grid tracks added implicitly: grid-auto-rows and grid-auto-columns.
2. grid-auto-rows specifies the height of implicitly added grid rows. 

grid-auto-columns specifies the width of implicitly added grid columns.

grid-auto-rows and grid-auto-columns accept the same values as their explicit counterparts, grid-template-rows and grid-template-columns:
* pixels (px)
* percentages (%)
* fractions (fr)
* the repeat() function

3. Grid Auto Flow
grid-auto-flow specifies whether new elements should be added to **rows or columns**.

grid-auto-flow accepts these values:

* row — specifies the new elements should fill rows from left to right and create new rows when there are too many elements (default)
* column — specifies the new elements should fill columns from top to bottom and create new columns when there are too many elements
* dense — this keyword invokes an algorithm that attempts to fill holes earlier in the grid layout if smaller elements are added
You can pair row and column with dense, like this: grid-auto-flow: row dense;
