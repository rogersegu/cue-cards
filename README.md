# stack-aside


StackAside is a simple jQuery plugin that allows you to fix and stack elements in the aside colum as the user scrolls down the page. By default, every fixed element gets unfixed as it collapses vertically with another element. 

## How to use it

This pluggin is intended to use in a very specific manner, as it's aimed to achieve a sigular result. Once the plugin is installed (see instructions below), whenever you assign a ```<section>``` element a class of ```.stackAside``` , the element next to him will get fixed as the user scrolls down, and will unfix again when the scroll gets the end of that <section>. 

Let's imagine you have written a paragraph and you want to add an element (another paragraph, an image or anything else) next to him, in the aside column. You need to follow three simple steps:

1. Create a new ```<section>``` element and assignt it a class of ```.stackAside```.
2. At the end of this ```<section>``` element, create an ```<aside>``` element and place inside of it the text or image you want to get fixed (it may probably be a <div> or another block element).
3. Move inside the ```<section>``` you created the content of the main paragraph. It may consist of a single <div> or as many as you wish: the ```<aside>``` element will become pinned all along the ```<section class="stackAside">``` scroll height, so the more elements you add inside your ```<section>``` tag, the wider will be the extent of the pluggin's behavior. 

We are assuming here that your layout has two columns. It doesn't matter the width each one takes (60-40%, 30-70%...) as long as there are two of them, no more and no less. In case you are not familiar with multi-column layouts, feel free to use the simple CSS sheet included in the plugin. 

<sup>*</sup>Note that there is nothing wrong with using ```<section>``` elements inside other ```<section>``` elements: it's a context that makes sense semantically speaking and it does not conflict the HTML5 specification. 
