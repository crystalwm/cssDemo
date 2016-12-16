# canvas

## source

<http://www.qdfuns.com/notes/31958/d27f2c2f953239a518c93748545944f0.html>

## desp

### shape

* (x,y)
* (offsetX,offsetY)
* radius

### canvas API

* create the ctx

  > element.getContext('2d');

* clear the canvas

    >ctx.clearRect(0, 0, innerWidth, innerHeight);

* creat the circle
    ```javascript
     ctx.beginPath();
     ctx.fillStyle = "#B200FF";
     ctx.arc(shapes[i].x, shapes[i].y, shapes[i].radius, 0, Math.PI * 2, false);
     ctx.fill();
    ```