---
title: "Materialize Checkboxes"
path: "/bootstrap/checkboxes"
id: "/bootstrap/checkboxes"

description: "Breadcrumbs are a good way to display your current location. This is usually used when you have multiple layers of content."
---

Use checkboxes when looking for yes or no answers. The for attribute is necessary to bind our custom checkbox with the input. Add the input's id as the value of the for attribute of the label.

```html
 <form action="#">
    <p>
      <label>
        <input type="checkbox" />
        <span>Red</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" checked="checked" />
        <span>Yellow</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" class="filled-in" checked="checked" />
        <span>Filled in</span>
      </label>
    </p>
    <p>
      <label>
        <input id="indeterminate-checkbox" type="checkbox" />
        <span>Indeterminate Style</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" checked="checked" disabled="disabled" />
        <span>Green</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" disabled="disabled" />
        <span>Brown</span>
      </label>
    </p>
  </form>
 ``` 
 
 >See something that can be improved on the docs site? [Make a suggestion](/programs/edit-the-doc-site.html)!
