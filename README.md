# HW03B
## 1.I made circles of the same size and spaced apart.

![DT7M9M.png](https://imgpile.com/images/DT7M9M.png)

## 2.Changing the size of a circle.

I give the diameter of the circles a random number so that each circle looks differently sized.

![DT7J84.png](https://imgpile.com/images/DT7J84.png)

## 3.Changing the position of the circle.

I want to give a random number to the position of the circles, but not have the circles touching each other, the idea is to have each circle stay in its own grid, with the maximum diameter not exceeding the grid size, and each circle is free to move around in its own grid.

![DT7lIh.jpg](https://imgpile.com/images/DT7lIh.jpg)

![DT7mKE.jpg](https://imgpile.com/images/DT7mKE.jpg)

![DT7r2r.jpg](https://imgpile.com/images/DT7r2r.jpg)

I set xOffset and yOffset as global variables at first and it didn't work. Then I moved them into a for loop and it worked, I'm still a little confused as to why global variables don't work.

![DT7q5W.png](https://imgpile.com/images/DT7q5W.png)

The end result does this by having multiple circles of different sizes, non-overlapping shapes, and not straight lines.

![DT7FCC.png](https://imgpile.com/images/DT7FCC.png)

Although I think I accomplished the required three points, my circle still looks regular and not as irregular as in the example. I figured out that when offsetRange is less than or equal to zero it's not completely untenable, and in some cases the circles can still be out of contact with each other, but that's completely ruled out in my work. 

![DT72cP.jpg](https://imgpile.com/images/DT72cP.jpg)

If you want to count both of the above and the circles don't collide with each other, I can only think of using collision detection, but I haven't learned that part yet, maybe you have a better idea? Looking forward to the teacher can email me or reply to my question, thanks!