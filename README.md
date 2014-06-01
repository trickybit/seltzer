## seltzer

LESS mix-ins

### Ghost crosshatch
#### Input
```css
.ghost-crosshatch(blue); 
```
#### Output
&#9641;


### Ghost hatch
#### Input
```css
.ghost-hatch(blue, 1); 
```
#### Output
&#9640;

#### Input
```css
.ghost-hatch(blue, -1); 
```
#### Output
&#9639;

### Ghost rule
```css
.ghost-rule(blue, 0);
```
#### Output
&#9636;

#### Input
```css
.ghost-rule(blue, 1);
```
#### Output
&#9637;

### Ghost grid
#### Input
```css
.ghost-grid(blue, dotted);
```
#### Output
&#11820;

#### Input
```css
.ghost-grid(blue, ruled);
```
#### Output
&#9638;

### Ghost face
#### Input
```css
.ghost-face(magenta);
```
#### Output
&#9712;

### Ratio

#### Input
```css
.ratio(1 of 4, width, 100%);
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
