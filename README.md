## seltzer

LESS mix-ins


### Each
#### Input
```less
.abc {
  .each(its, easy, as; {
    @{item}: @count;
  });
}
```
#### Output
```css
.abc {
  its: 1;
  easy: 2;
  as: 3;
}
```

### Each-in
#### Input
```less
.abc {
  .each(its 1, easy 2, as 3; {
    @{key}: @value;
  });
}
```
#### Output
```css
.abc {
  its: 1;
  easy: 2;
  as: 3;
}
```

### Measured
#### Input
```less
.measured(font-size, 1rem);
.measured(width, 100vmin);
.measured(color, fade(green, 50%));
```
#### Output
```css
font-size: 16px;
font-size: 1rem;
width: 100vm;
width: 100vmin;
color: #008000;
color: rgba(0, 128, 0, 0.5);
```

### Ratio

#### Input
```less
.ratio(width, 100%, 1 of 4);
```
#### Output
```css
width: 25%;
```

