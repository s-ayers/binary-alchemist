# What is CSS?
## What problem does it try to solve?



CSS separates the appearance of a tag from its meaning. Schema.org provides additional ways of conveying meaning.  Html is about meaning, and css is about appearance.

The internet is ruled by search engines, and web crawlers. They need to be able to accurately parse and categorize html. But, crawlers do not look at website.  People do, and appearance is important. By delegating appearance to css, html is free to convey meaning.



Lets examine how the different headers renders.  

<!-- <table>
<tbody>
<tr>

<td>
&lt;h1&gt;Hello World!&lt;/h1&gt;
</td>
<td>
<h1 style="display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;">Hello World!</h1>
</td>


</tr>
</tbody>
</table> -->

```html
<h1>Hello World!</h1>
<h2>Hello World!</h2>
<h3>Hello World!</h3>
<h4>Hello World!</h4>
<h5>Hello World!</h5>
<h6>Hello World!</h6>
```

<h1 style="display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;">Hello World!</h1>
<h2 style="display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;">Hello World!</h2>
<h3 style="display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;">Hello World!</h3>
<h4 style="display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;">Hello World!</h4>
<h5 style="display: block;
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;">Hello World!</h5>
<h6 style="display: block;
    font-size: 0.67em;
    margin-block-start: 2.33em;
    margin-block-end: 2.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;">Hello World!</h6>

Without css you would select the header has the best appearance for your design, not necessarily which header communicates how important the item is to the document.  Luckily with css, the appearance can be changed to service the design. This means the html tags communicates a structured document.  The html document should be able to be understood without the style sheets. 
