## SELTZER

LESS mix-ins


### For
Iterates through a number range, putting a to, from and count variable in the scope of the ruleset--passed as the last argument.

#### Input
```less
.abc {
  .for(1, 3; {
    :nth-child(@{count}) { 
      left: @to - @count;
    };
  });
}
```
#### Output
```css
.abc :nth-child( 1) {
  left: 2;
}
.abc :nth-child( 2) {
  left: 1;
}
.abc :nth-child( 3) {
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

### MSIE
Mix in a ruleset for a specified version of Internet Explorer. This requires conditional compiler comments 
wrapping the root element

```html
<!--[if IE 6]><html class="msie6"><![endif]-->
<!--[if IE 7]><html class="msie7"><![endif]-->
<!--[if IE 8]><html class="msie8"><![endif]-->
<!--[if IE 9]><html class="msie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html><!--<![endif]-->
```

#### Input
```less
.context {
  .msie(9, 10; {
    ie: older;
  });
  .msie(11; {
    ie: newer;
  });
}
```
#### Output
```css
.msie9 .context {
  ie: older;
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .context {
    ie: older;
  }
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .context::-ms-backdrop,
  .context {
    ie: newer;
  }
}
```

### Ratio

#### Input
```less
main {
  article {
    .ratio(100%; 3 of 4; {
      width: @ratio;
    });
  }
  aside {
    .ratio(100%; 1 of 4; {
      width: @ratio;
    });
  }
}
```
#### Output
```css
main article {
  width: 75%;
}
main aside {
  width: 25%;
}
```

### Slice-off
Puts a slice-offset variable in the ruleset scope. Use the offset number to extract the correct value from a list.

#### Input
```less
:root {
  @row-alignments: top middle bottom;
  @col-alignments: left center right;
  
  .slice-off.col(3 x 3; 5; {
    text-align: extract(@col-alignments, @slice-offset);
  });
  
  .slice-off.row(3 x 3; 5; {
    vertical-align: extract(@row-alignments, @slice-offset);
  });
  
  .stem {
    .slice-off.col.flip(3 x 3; 1; {
      vertical-align: extract(@col-alignments, @slice-offset);
    });
  }
}
```
#### Output
```css
:root {
  text-align: center;
  vertical-align: middle;
}
:root .stem {
  text-align: right;
}
```
