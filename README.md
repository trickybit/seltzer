## seltzer

LESS mix-ins

### Ratio

#### Input
```css
.ratio(width, 100%, 1 of 4);
```
#### Output
```css
width: 25%;
```

### Measured
#### Input
```css
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
