
# Add Dark theme for Angular apps easy.

This library uses the CSS invert(1) hue-rotate to apply the dark to any of your websites.

## Features
Use custom icon or element for apply dark .
Toggle button, it can be deactive if use custom icon.

Demo

Check out the demo in these websites:

https://danywalls.com
## How to use
ngx-dark is easy to use, install the npm package and import it your modules, and use ngx-dark

package Using NPM
npm install ngx-dark
Then register the module:

import { NgxDark } from 'ngx-dark';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxDarkModule],
gear Options
Here are the option availables:

hideToggle: show the default toogle dark button.

Examples
Use the default switcher.

<div class="container">
  <ngx-dark> </ngx-dark>
</div>
Use a custom icon or button

<ngx-dark [hideToggle]="true">
  <span>dark</span>
</ngx-dark>
If this project helped you, or like please share :)
