# ngx-dark

Easy way to use dark theme in your apps, this library uses the CSS invert(1) hue-rotate to apply the dark to any of your websites.

## Features

Use custom icon or element for apply dark .
Toggle button, it can be deactive if use custom icon.

## Demo

Check out the demo in these websites
- [https://danywalls.com](https://danywalls.com)

## How to use
ngx-dark is easy to use, install the npm package and import it to your modules, and use ngx-dark.

```terminal
npm install ngx-dark
```
Then register the module.

```typescript
import { NgxDark } from 'ngx-dark';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxDarkModule],
```

## Options
Components properties available:

hideToggle: show the default toogle dark button.

## Examples
Use the default switcher.

```template
<div class="container">
  <ngx-dark> </ngx-dark>
</div>
`````
Use a custom icon or button.

```template
<ngx-dark [hideToggle]="true">
  <span>dark</span>
</ngx-dark>
```
If this project helped you, or like please share :)
