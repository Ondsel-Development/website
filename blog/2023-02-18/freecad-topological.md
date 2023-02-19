---
slug: freecad-topological-naming
title: "Don't hold your breath for FreeCAD's topological naming fix"
authors:
  - name: Brad Collette
    title: Ondsel Core Team
    url: https://github.com/sliptonic
    image_url: https://avatars.githubusercontent.com/u/538057?v=4

  - name: Rebecca Dodd
    title: Contributing Writer
    url: https://www.thebasementoffice.co.uk
    image_url: https://media.licdn.com/dms/image/C4D03AQGTVXyi5Pa-xg/profile-displayphoto-shrink_800_800/0/1596530840324?e=1681344000&v=beta&t=PjdEzZGYbqOsAqVWUE1bsjNuVxMsknVkZfStHx863-s

tags: [freecad, development]
image: ./titlecard.png
draft: false
---


FreeCAD's '[topological naming problem](https://wiki.freecad.org/Topological_naming_problem)' is legendary. It's frequently cited as the number one reason holding back widespread adoption of FreeCAD for commercial use.

Developer [RealThunder](https://github.com/realthunder) introduced [a fix to the problem](https://forum.freecad.org/viewtopic.php?t=27278) years ago, but it has never been fully incorporated into the core product.

Will FreeCAD _ever_ have a solution? Yes. But it’s going to take time.

Let’s back up a bit.

# What is topological naming, and why is it a problem in FreeCAD?

Topological naming is the process of giving persistent names to elements of a solid model, such as faces, edges, and vertices. By naming these elements, we can attach features, dimensions, and other attributes to them.

The hard part of topological naming is making the names persistent even if the model is modified. Modern parametric designs are built up through a series of modifications which change the elements in the model. Faces may merge or be split. Edges may be chamfered, turning into multiple edges. If the computer is unable to maintain correct persistence of the naming—even when the underlying topology changes—the model breaks and recovery is difficult. [Maker Tales has a good explanation here](https://youtu.be/QSsVFu929jo?t=33).

The problem is ubiquitous in CAD. All applications suffer from it to some extent. The problem cannot be _solved_ in the traditional sense. It can only be mitigated and most applications do a good job of avoiding the problem by either limiting the user’s actions or algorithmically tracking changes to the named features.

The current state of FreeCAD is weak in this regard. For simple models, the problem is fairly easy to avoid and a broken model is easy to repair. As models get more complicated, only a very disciplined approach to design will keep models intact. This requires experience that many new and casual users don’t have. That is why the problem is so frustrating—it bites you when you’ve already invested a lot of time learning the tool and building the design.

# RealThunder’s fix works. Why not use it?

It seems obvious. We have a working branch of FreeCAD that isn’t plagued by the topological naming problem. Why wouldn’t we just merge it in and be done with it?

“The fact that this solvable topology naming problem is so serious yet so long-standing, tells me that this is really a people problem in the FreeCAD project. Because of this, as much as I want to use it, I simply can not afford this "free" software. The community needs to push out whomever is standing in the way of progress. And crowd-source some funds to hire a pro to fix the topology-naming issue as well as do some much-needed integration work.” — [agnichatian on YouTube](https://www.youtube.com/watch?v=QSsVFu929jo&lc=UgzY-2eximqNDrWgxkF4AaABAg)

This opinion is understandable and certainly not unusual. As much as we relate to the frustrations expressed here, it’s not as simple as just merging in RealThunder’s branch or bringing in one paid developer to do it once and for all. Why?

It’s important to appreciate how pervasive feature naming is within FreeCAD—or _any_ CAD. Identifying features and attaching attributes to them is what modern parametric design is all about. Implementing a solution is not a straightforward task and implementing it incorrectly would cause user models to break irreparably. Even a _properly_ implemented solution is guaranteed to have bugs and border-cases for a long time.

For all these reasons, the project leaders have chosen to move cautiously and to allow the solution to stabilize and be proven before merging it into the main branch.

## Why is it so hard to merge?

There are two factors:

First is the sheer size and number of code changes necessary to implement this solution. Many, if not most, files in FreeCAD need to be modified to incorporate the solution.
Second is the pace of other development work. The rest of FreeCAD’s development has only accelerated in recent years. Work is being done by many developers in many parts of the application.

Before new code can be merged, it has to be rebased onto the current version of source code. If there are conflicts, they have to be resolved manually. With a large, pervasive change like this, there are _always_ conflicts. By the time rebasing is complete, the master branch has moved ahead and the process has to start again.

One solution could be to freeze the master branch and block any further changes until the topological naming solution is merged, but this might take many months to accomplish and just isn’t practical. There are many more features other developers are working on, and, more importantly, problems they are fixing. If we were to freeze the master branch in favor of one fix, other features will again have the same rebasing issue.

Of course, users could switch to using RealThunder’s branch exclusively. Some users who are particularly sensitive to the problem have done so successfully. For commercial users this may be hard to sell to leadership because RealThunder’s branch isn’t able to keep pace with the development of new features in the upstream FreeCAD application. They have to make a choice between relatively stable models and having access to the new and advanced features being developed throughout the rest of FreeCAD.

# What’s the path forward?

At the FreeCAD Day meetup in Brussels in February 2023, Ondsel and other project leaders [proposed a different strategy for resolving the issue](https://forum.freecad.org/viewtopic.php?p=658250#p658250): Instead of attempting to merge RealThunder’s solution as a monolithic unit, we would, instead, consider it a proof-of-concept. The solution has been running in RealThunder’s LinksStage3 branch for two years and can be considered proven. Now we need to treat it as a roadmap to guide us towards implementing the solution in FreeCAD itself without disrupting current functionality or slowing down development.

## Progress without regression

Rather than merging the code directly, our proposal is to break the code into functional pieces, each of which can be merged directly into the master branch without breaking the current functionality. This will require additional testing at each step and might require additional code to permit the merging without regression.

With this approach, each piece will be merged directly to master along with the relevant unit tests. This will avoid the need for a long-lived feature branch that requires constant rebasing.  There will be no single point where suddenly the problem is ‘fixed.’ Instead the necessary changes will be merged gradually and model stability will increase over time.

## Laying the foundation for long-term change

The first pieces to be merged may not provide any value to the end-user but will provide a solid foundation that later pieces can build on. As each piece is added, additional unit tests can be developed and better code conventions adopted for implementing the actual name resolution.

This path isn’t fast. It will take time and the collective expertise of many developers. It will take cooperation throughout the community and patience from our users.

# What is Ondsel’s role in all this? Is Ondsel going to solve the toponaming problem?

Ondsel has already started a thorough survey of RealThunder’s solution in order to build a roadmap for integrating it.

Ondsel will help coordinate the change and will participate in delivering a resolution. We can bring professional engineering talent to the problem but we _cannot_ do it alone. It will take time and the expertise of many software engineers across the community.

There’s no “one and done” fix, which means the FreeCAD development community needs broad institutional knowledge of the solution. The toponaming problem belongs to FreeCAD and, therefore, so must the solution.

For more context and to follow developments as we work on breaking down and gradually merging RealThunder’s fix, subscribe to [the GitHub issue](https://github.com/FreeCAD/FreeCAD/issues/8432).

To help us make FreeCAD better and build the Ondsel product, consider [joining us](https://ondsel.com/careers/).

<details>
  <summary>Note...</summary>
  <div>
    <div>I’m Brad Collette, longtime FreeCAD contributor and CTO of Ondsel, a new open core company built on top of FreeCAD. Ondsel helps you share useful aspects of your solid models without giving away your designs. We’re working on improving collaboration and feature accessibility and integrating with your existing tools. You can read more about my vision for FreeCAD and Ondsel <a href="https://opencoreventures.com/blog/2023-01-ondsel-freecad-launch/">here</a>
    </div>
<br/>
  </div>
</details>


