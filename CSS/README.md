# css
css




### myth of css

1. `* {}` target all the elements directly
`body {}` uses inheritance

2. css variable is a property
```
.component {
  --text-color: #080;
}
```
```javascript
document.getElementById('component').style.setProperty('--text-color','#fff');
```

3. ways of set an element invisible
* display: none。
* input:   type="hidden"
* width=0, height=0;
* visibility:hidden
* opacity: 0
