## SELTZER

LESS mix-ins


### Each
Iterates a number range, putting a count variable in the scope of the ruleset--passed as the last argument.

#### Input
```less
.abc {
  .each(1,3; {
    :nth-child(@{count}) { easy:  @count };
  });
}
```
#### Output
```css
.abc :nth-child(1) {
  easy: 1;
}
.abc :nth-child(2) {
  easy: 2;
}
.abc :nth-child(3) {
  easy: 3;
}
```

### Each-over
Iterates over a list, putting an item and count variable in the scope of the ruleset--passed as the last argument.

#### Input
```less
.abc {
  .each-over(its, easy, as; {
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
Iterates over a list, putting a key and value variable in the scope of the ruleset--passed as the last argument. 
The variables are extracted using the whitespace in each item.

#### Input
```less
.abc {
  .each-in(its 1, easy 2, as 3; {
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
Include fallback measures for CSS units.

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

