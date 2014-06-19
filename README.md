## SELTZER

LESS mix-ins


### For
Iterates through a number range, putting a to, from and count variable in the scope of the ruleset--passed as the last argument.

#### Input
```less
.abc {
  .for(1,3; {
    :nth-child(@{count}) { 
      left: @to - @count;
    };
  });
}
```
#### Output
```css
.abc :nth-child(1) {
  left: 2;
}
.abc :nth-child(2) {
  left: 1;
}
.abc :nth-child(3) {
  left: 0;
}
```

### Each
Iterates over a list, putting an item and count variable in the scope of the ruleset--passed as the last argument.

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

### In
Iterates over a list, putting a key and value variable in the scope of the ruleset--passed as the last argument. 
The variables are extracted using the whitespace in each item.

#### Input
```less
.abc {
  .in(its 1, easy 2, as 3; {
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

