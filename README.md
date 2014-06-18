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

### Remedy
#### Input
```css
.remedy(font-size, 1em);
.remedy(font-size, 16px);
.remedy(font-size, 100%);
.remedy(font-size, 1em);
.remedy(font-size, 2ex);
```
#### Output
```css
font-size: 16px;
font-size: 1rem;
```

### RGB Kind

#### Input
```css
.rgb-kind(background-color, fade(red, 50%));
```
#### Output
```css
background-color: red;
background-color: rgb(255,0,0,0.5);

```
