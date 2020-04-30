---
title: "Materialize Radio Buttons"
path: "/bootstrap/radio-buttons"
id: "/bootstrap/radio-buttons"

description: "Breadcrumbs are a good way to display your current location. This is usually used when you have multiple layers of content."
---

Radio Buttons are used when the user must make only one selection out of a group of items. The for attribute is necessary to bind our custom radio button with the input. Add the input's id as the value of the for attribute of the label.

Add radio buttons to a group by adding the name attribute along with the same corresponding value for each of the radio buttons in the group. Create disabled radio buttons by adding the disabled attribute as shown below.

Radio buttons are used when the user has to make one selection out of multiple items. 
```html
<form action="#">
   <p>
      <label>
      <input name="group1" type="radio" checked />
      <span>Red</span>
      </label>
   </p>
   <p>
      <label>
      <input name="group1" type="radio" />
      <span>Yellow</span>
      </label>
   </p>
   <p>
      <label>
      <input class="with-gap" name="group1" type="radio"  />
      <span>Green</span>
      </label>
   </p>
   <p>
      <label>
      <input name="group1" type="radio" disabled="disabled" />
      <span>Brown</span>
      </label>
   </p>
</form>
 ```

>See something that can be improved on the docs site? [Make a suggestion](/programs/edit-the-doc-site.html)!
