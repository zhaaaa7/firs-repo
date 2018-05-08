## what is % relative to?
*****

### position:
1. static: not applied
2. absolute: left and right is relative to width，top and bottom is relative to height of the nearest non-static parent
3. relative: to self's width and height
4. fixed: relative th viewport

### box-model
1. margin&padding: all relative to parent's width
2. border: not accept %
3. border-radius: relative to self's width and height


### background
1. background-size: relative to self's width and height
2. background-position: relative to self's height - background images' height, self's width - background images' width. To be specific
