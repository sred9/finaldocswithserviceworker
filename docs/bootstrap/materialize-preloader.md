---
title: "Materialize Preloader"
path: "/bootstrap/preloader"
id: "/bootstrap/preloader"

description: "Breadcrumbs are a good way to display your current location. This is usually used when you have multiple layers of content."
---

If you have content that will take a long time to load, you should give the user feedback. For this reason we provide a number activity + progress indicators.

## Linear

### Determinate

Note: This is also touch compatible! Try swiping with your finger to scroll through the carousel.

```html
div class="progress">
	<div class="determinate" style="width: 70%"></div>
</div>        
 ``` 
 
### Indeterminate

 ```html
<div class="progress">
	<div class="indeterminate"></div>
</div>
```

## Circular

### Static Colors

Note: This is also touch compatible! Try swiping with your finger to scroll through the carousel.

```html
<div class="preloader-wrapper big active">
   <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
         <div class="circle"></div>
      </div>
      <div class="gap-patch">
         <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
         <div class="circle"></div>
      </div>
   </div>
</div>
<div class="preloader-wrapper active">
   <div class="spinner-layer spinner-red-only">
      <div class="circle-clipper left">
         <div class="circle"></div>
      </div>
      <div class="gap-patch">
         <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
         <div class="circle"></div>
      </div>
   </div>
</div>
<div class="preloader-wrapper small active">
   <div class="spinner-layer spinner-green-only">
      <div class="circle-clipper left">
         <div class="circle"></div>
      </div>
      <div class="gap-patch">
         <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
         <div class="circle"></div>
      </div>
   </div>
</div>       
 ``` 
 
### Flashing Colors

 ```html
<div class="preloader-wrapper big active">
   <div class="spinner-layer spinner-blue">
      <div class="circle-clipper left">
         <div class="circle"></div>
      </div>
      <div class="gap-patch">
         <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
         <div class="circle"></div>
      </div>
   </div>
   <div class="spinner-layer spinner-red">
      <div class="circle-clipper left">
         <div class="circle"></div>
      </div>
      <div class="gap-patch">
         <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
         <div class="circle"></div>
      </div>
   </div>
   <div class="spinner-layer spinner-yellow">
      <div class="circle-clipper left">
         <div class="circle"></div>
      </div>
      <div class="gap-patch">
         <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
         <div class="circle"></div>
      </div>
   </div>
   <div class="spinner-layer spinner-green">
      <div class="circle-clipper left">
         <div class="circle"></div>
      </div>
      <div class="gap-patch">
         <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
         <div class="circle"></div>
      </div>
   </div>
</div>
```

>See something that can be improved on the docs site? [Make a suggestion](/programs/edit-the-doc-site.html)!
