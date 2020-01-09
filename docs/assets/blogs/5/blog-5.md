Principles of Responsive Design: Mobile First Design
====================================================

You may have heard of "Responsive Design", or "Mobile", but what does that mean? Are they just buzzwords? Yes, they are buzzwords, but they do mean something.

When was the first time you used the internet? It was probably on a desktop or maybe a laptop. 
Back then, every computer had roughly the same screen size, and resolution. Some displays were better than others, but they all had a 4:3 aspect ration.

Today, handheld devices are the primary means people view websites. And for a time most handheld devices were phones, and generally the same size and aspect ration. But now, there are tablets and phones of almost any size. Smart TVs and game consoles all have web browsers too. This means websites need to support displays both smaller, and larger than before. 

**Mobile First** means your websites are designed first for mobile devices, both from a target audience perspective, and literally the css for mobile comes first in your code.

The snippet of css if from Bootstrap. Because CSS rules *cascade*, .container's `max-width` is defined larger as long as the display's width matches @media(min-width)    



```css
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
```