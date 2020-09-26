# ng-dark

Add a Dark for Angular apps

This library uses the CSS `invert(1) hue-rotate` to apply the dark to any of your websites.

## Features

- Custom area <ng-content> for apply dark .

## Demo

Check out the demo in these websites:

- https://danywalls.com
- https://rocioparedes.com

## 📖 How to use

ng-dark is easy to use, install the npm package and import it your modules, and use ng-dark

### 📦 Using NPM

```sh
npm install ng-dark
```

Then register the module:

```javascript
import { NgDark } from 'ng-dark';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgDarkModule],
```

## ⚙️ Options

Here are the option availables:

hideToggle: show the default toogle dark button.

### Examples

Use the default switcher.

```html
<div class="container">
  <ng-dark> </ng-dark>
</div>
```

Use a custom icon or button

```html
<ng-dark [hideToggle]="true">
  <span>dark</span>
</ng-dark>
```

If this project helped you, please star.

:)
