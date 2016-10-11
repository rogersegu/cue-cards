# cue-cards


CueCards is a simple jQuery plugin that allows you to fix and stack elements in the aside colum as the user scrolls down the page. By default, every fixed element get unfixed as it collapses vertically with another element. 

## How to use it

This pluggin is intended to use in a very specific manner, as it's aimed to achieve a sigular result. Once the plugin is installed (see instructions below), whenever you assign a ```<section>``` element a class of ```.cueCards``` , the element next to him will get fixed as the user scrolls down, and will unfix again when the scroll gets the end of that ```<section>```. 

Let's imagine you have written a paragraph and you added an element next to him (a highlighted quote, another paragraph, an image or anything else) in the aside column. If you wish to get that side element fixed for a while as the user scrolls down the page, you just need to install the cueCards plugin and do the following:

1. Create a new ```<section>``` element and assign it a class of ```.cueCards```.
2. At the end of this ```<section>``` element, create an ```<aside>``` element and place inside of it the text or image you want to get fixed.
3. Move inside the ```<section>``` you created the content of the main paragraph. It may consist of a single <div> or as many as you wish: the ```<aside>``` element will become pinned all along the ```<section class="cueCards">``` scroll height, so the more elements you add inside your ```<section>``` tag, the longer will the element remain fixed. 

We are assuming here that your layout has two columns. It doesn't matter the width each one takes (60-40%, 30-70%...) as long as there are two of them, no more and no less. In case you are not familiar with multi-column layouts, feel free to use the simple CSS sheet included in the plugin. 

<sup>*</sup> Note that there is nothing wrong with using ```<section>``` elements inside other ```<section>``` elements: it's a context that makes sense semantically speaking and it does not conflict the HTML5 specification. 

## Two ways to use the pluggin

You can use the plugin in two different ways, regarding the extent of your needs. There is a simple version which you simply add at the end of the body like the old good javascript snippets; and there is a more precise version that allows to add some settings through an options' object.

### Installing and using the simple version

  - Download the file ```jquery.cuecards_simple.js``` and move it into your ```js``` folder.
  - Add the file in a ```<script>``` tag at the bottom of the body; get sure it's placed after the jQuery:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="./dist/js/jquery.cuecards_simple.js"></script>
```

  - Add the class ```.cue_cards``` to those ```<section>``` elements you wish to apply the plugin effect to.

```html
<section class="cue_cards">
  <p>Lorem ipsum dolor sit amet, ut vis tritani dolorum recteque.<p>
</section>
  
<aside>
  <p>Has et etiam epicuri.</p>
</aside>
```

### Installing and using the complete version

  - Download the file ```jquery.cuecards.js``` and move it into your ```js``` folder.
  - Add the file in a ```<script>``` tag at the bottom of the body; get sure it's placed after the jQuery:
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="./dist/js/jquery.cuecards.js"></script>
```
  - Add the class ```.cue_cards``` to those ```<section>``` elements you wish to apply the plugin effect to.
```html
<section class="cue_cards">
  <p>Lorem ipsum dolor sit amet, ut vis tritani dolorum recteque.<p>
</section>
  
<aside>
  <p>Has et etiam epicuri.</p>
</aside>
```

  - In your main javascript file, assign the ```.cueCards()``` function to the ```.cue_cards```class, as follows:

```js
$(document).ready(function(){

  $(".cue_cards").cueCards({});
  
  $(window).resize(function(){
    $(".cue_cards").cueCards();
  }).scroll(function() {
    $(".cue_cards").cueCards();
  });
});
```
  - Add the options inside the ```.cueCards()``` function, as follows:

```js
$(document).ready(function(){
  $(".cue_cards").cueCards({
    bottomOffset : 20,
    complete     : function() {alert('Taking off!')}
  });
```  

Only two options are available by now: 
  - ```bottomOffset``` allows you modify the distance between the affected aside element and the following. Its default is 20px.
  - ```complete``` is a callback that passes a function once the plugin's action has been executed.
