# ngx-dark

Add a Dark for Angular apps

This library uses the CSS `invert(1) hue-rotate` to apply the dark to any of your websites.

## Features

- Custom area <ng-content> for apply dark .

## Demo

Check out the demo in these websites:

- https://danywalls.com

## 📖 How to use

ng-dark is easy to use, install the npm package and import it your modules, and use ng-dark

### 📦 Using NPM

```sh
npm install ngx-dark
```

Then register the module:

```javascript
import { NgxDark } from 'ngx-dark';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxDarkModule],
```

## ⚙️ Options

Here are the option availables:

hideToggle: show the default toogle dark button.

### Examples

Use the default switcher.

```html
<div class="container">
  <ngx-dark> </ngx-dark>
</div>
```

Use a custom icon or button

```html
<ngx-dark [hideToggle]="true">
  <span>dark</span>
</ngx-dark>
```

If this project helped you, please star.

:)
