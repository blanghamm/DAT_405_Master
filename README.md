# DAT_405_Master

This generative piece will allow some basic forms of user interaction.

Instructions:

-Clicking the left mouse button will cause the central piece to begin rotating.

-Clicking the left mouse button again will reset this parameter and the piece will behave as it did to begin with.

-Hitting the spacebar will pause the animation.

-Hitting spacebar again after the animation has paused will restart from the state it was paused in.

I initially started this project with the creation of eight squares centered to the middle of the canvas, these eighter squares have seperate ellipses orbiting them. Initially the code would redraw the background for every frame which meant the squares and orbiting were static. The next stage was to introduce perlin noise. This would allow the the squares and orbiting ellipses to make random movements dependant on the value of the perlin noise. Once the objects began to move the next step was to remove the background, this would allow the objects to leave a trace behind them. This is why the object becomes some complex due to a trace being left behind.
