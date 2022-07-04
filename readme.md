## TailNode Task

---

Visit Deployed site [HERE](https://tailnode-task.netlify.app/).

---

### Documentation

Here is the landing page

![Landing page](https://i.ibb.co/sPCKs3Z/image.png)

Here We have an input with two button, one is for adding todos and one is for refresh,on clicking submit if the input is empty we would get an error but if it has some value, it will add it as todo, shown below.

![Todo](https://i.ibb.co/bXFBsTS/image.png)

This way we can add multiple todos and recent added todos will be added in front.Shown below

![Todos](https://i.ibb.co/X3RdG2m/image.png)

Now if we click on a card a new section completed todos will be generated, shown below

![Completed Todos](https://i.ibb.co/F48vBRP/image.png)

Here I have Clicked on play games todo, so it has been added to in the completed todos section and now if I click on some different card It will added in front,in order of completion.Shown below.

![Multiple completed todos](https://i.ibb.co/L0sgDWC/image.png)

Now coming to the Hashtag filter part:

Let's take a different example and try to understand it.If we click on any hashtag, it will be highlighted and todos which have the same hashtag will be filtered and if we click another one , we will filter based on both the tags but if we click on the already selected hashtag, it will remove filter for that particular hashtag.

Now, here we have 5 todos, 3 remaining and two completed and they have some same and some different hashtags(by default we will see all of them):

![filter](https://i.ibb.co/qF0NXQ4/image.png)

Now I am clicking on the ```#new``` then it will be something like this:

![#new](https://i.ibb.co/JnnGn9t/image.png)

As no completed todo has that tag we will only see the todos that are not completed, but now If I deselect ```#new``` and select ```#work```, something like this will happen

![#work](https://i.ibb.co/k68mpND/image.png)

No if we select something else , tat tag will be stacked for example:

![#multi1](https://i.ibb.co/Fm7Mb9g/image.png)
![#multi1](https://i.ibb.co/JHng6NC/image.png)

No If we refresh, the data won't go away as it is stored in localstorage but if we click refresh button, all data will be lost, shown below.

![empty](https://i.ibb.co/YcFNPfW/image.png)

---