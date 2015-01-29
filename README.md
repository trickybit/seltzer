## SELTZER

LESS mix-ins

### Importing
Import directly.
```
@import "seltzer/each";
.each(...);
```
Import with a namepsace.
```
@import "seltzer/seltzer";
.seltzer.each(...)
```

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
.measured(border; 1rem solid fade(red,50%));
.measured(margin; 10vmin auto);
```
#### Output
```css
font-size: 16px;
font-size: 1rem;
width: 100vm;
width: 100vmin;
color: #008000;
color: rgba(0, 128, 0, 0.5);
border: 16px solid #ff0000;
border: 1rem solid rgba(255, 0, 0, 0.5);
margin: 10vm auto;
margin: 10vmin auto;
```

### Oldie
Mix in a ruleset for a specified version of Internet Explorer. To support versions below 10 requires conditional compiler comments wrapping a parent element.

```html
<!--[if IE 6]><html class="ie6"><![endif]-->
<!--[if IE 7]><html class="ie7"><![endif]-->
<!--[if IE 8]><html class="ie8"><![endif]-->
<!--[if IE 9]><html class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html><!--<![endif]-->
```

#### Input
```less
.context {
  .oldie(9, 10; {
    old-fashioned: always;
  });
  .oldie(11; {
    old-fashioned: infinite;
  });
}
```
#### Output
```css
.ie9 .context {
  old-fashioned: always;
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .context {
    old-fashioned: always;
  }
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .context::-ms-backdrop,
  .context {
    old-fashioned: indeterminate;
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

### Slice.off
Puts a slice-offset variable in the ruleset scope. Use the offset number to extract the correct value from a list.

#### Input
```less
:root {
  @row-alignments: top middle bottom;
  @col-alignments: left center right;
  
  .slice.off.col(3 x 3; 5; {
    text-align: extract(@col-alignments, @slice-offset);
  });
  
  .slice.off.row(3 x 3; 5; {
    vertical-align: extract(@row-alignments, @slice-offset);
  });
  
  .stem {
    .slice.off.col.flip(3 x 3; 1; {
      text-align: extract(@col-alignments, @slice-offset);
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
##Unset
Unset css properties like the [keyword](//developer.mozilla.org/en-US/docs/Web/CSS/unset) does, but  in a way that also supports older browsers. This will not support CSS properties that are only available in browsers supporting the unset keyword.

### Input
```
.context {
  .unset(background);
}
```
### Output
```
.context {
  background: none;
}
```
