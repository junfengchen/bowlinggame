# Bowling Game
A bowling game written with NodeJS

How to run:
```
git clone https://github.com/junfengchen/bowlinggame.git
cd bowlinggame
npm install
npm test
```

The idea:

1) The code was created with TDD practices with continous code refactoring leading by pre-defined use cases.

2) The core algorithm comes with a Queue structure which keep the data for all pending/unfinalized frames. With each time a new number fed in, the Queue will try to grow itself by adding new node (depending on the scenario) to its end. At the same time a 'clear' process is triggered to remove the mature (ready for score calculation) nodes at the front.
When the game goes over 10 frames, a flag is set to call on the Queue to dump the new added nodes so that iteractions will be stopped.

The following are the examples of node structure:
1) one try 
```
[ 5, EMPTY ]
```
2) SPARE
```
[4, 6] // to remove 
[10, EMPTY]  // to create
```
3) STRIKE
```
[10, EMPTY, EMPTY]
```

(Set "DEBUG" in "CalQueue.js" to 'true' to see how the structure is evolved.)

There should be simpler way to solve the problem, but this algorithm has the potential to be expanded to fit in more complex use cases.

If given more time, I will try to do complete functional programming and the new ES6 features like generator to solve the problem.

The code was deployed and tested with Azure DevOps.
