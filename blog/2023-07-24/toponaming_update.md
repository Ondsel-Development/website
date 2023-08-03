---
slug: milestone-toponaming-fix-phase-2-done
title: "Milestone: Ondsel and FreeCAD team complete phase 2 of the toponaming fix"
authors:
  - name: Brad Collette
    title: Ondsel Core Team
    url: https://github.com/sliptonic
    image_url: https://avatars.githubusercontent.com/u/538057?v=4

  - name: Alexandre Prokoudine
    title: Contributing Writer
    url: https://github.com/prokoudine
    image_url: https://avatars.githubusercontent.com/u/57467?v=4

tags: [freecad, development]
image: ./titlecard.png
draft: false
---

Back in February, we [posted](https://ondsel.com/blog/freecad-topological-naming/) an explanation of the toponaming issue in FreeCAD and a proposal of getting this fixed in the upstream project, with RealThunder’s LinkStage3 fork as a guideline. Since then, we’ve made a lot of progress, but even more work is yet to be done.

In this post, we’d like to explain how we are separating this work into stages, why FreeCAD 0.21 is not going to be much different from previous releases in terms of toponaming, and what our plan for the next development cycle is.

While this progress is cause to celebrate, we also caution users to understand that models can (and will) break for reasons besides toponaming even after this project is done.

## What’s this toponaming thing anyway?

As models evolve, their geometry changes. Doing a boolean sum of the same object with a different object will create new faces and vertices. So if a feature is attached to an element that no longer exists, the model will break. Topological naming is a way to store all element names in a persistent manner to avoid that scenario. You can read a much more detailed explanation in the [previous post](https://ondsel.com/blog/freecad-topological-naming/). The important thing here is that making topology names persistent implies changing FreeCAD’s source code in many places and the changes are not trivial. This is not a fix you can do on a lazy Sunday afternoon.

## The TNP team

Before we go any further, let's introduce the team that has been working on the fix all year so far.

John Dupuy is an Ondsel employee. He’s project coordinator, does code review, as well as his own share of programming.

Chris Hennes is FreeCAD maintainer who also writes code and does code review from other contributors. He did a large part of programming in phases 1 and 2 of the TNP fix (more on that below).

Pesc0 is a new arrival to FreeCAD. When the call for participation at fixing the TNP issue was posted, he picked a few tasks he was interested in, started hacking and — most importantly — didn’t drop the ball. He also turned out to be really great at communication with the team.

Zheng Lei aka RealThunder (or RT) developed the fix for the toponaming issue in his fork of FreeCAD. His patchset made it possible for the upstream team to study the issue in much more detail, explore possible solutions, and come up with a roadmap. The TNP team uses a lot of his code and the classes he developed. RealThunder was involved in a consulting role and provided some really useful insight.

Ajinkya Dahale is an active contributor to the project, and employee at Ondsel. His involvement so far is creating the fix for sketch objects.

## Staging the fix

After studying the issue and the existing fix in RealThunder’s fork, we came up with a plan to introduce topological naming in five phases.

Phase 1: To begin, we need a way to store and manipulate short references names of elements and names serialized from the element mapping. We also need a way to handle element naming as a whole and store all descriptive elements in one place for easy reference. So this is where we wrote several classes — `IndexedName.cpp` (save the name of an element), `MappedName.cs` (store and manipulate the more-complex mapped-name used by elements and the toponaming algorithm), `MappedElement.cpp` class (save the name parts of an element), `ElementMap.h` (store all descriptive elements in one place for easy reference).

Phase 2: The main objective of this phase is to create a way to generatively express the history of an item, create new names and mappings, but not actually rely on them. This phase mainly touches Sketch and Part workbenches.

This is where we are now. Version 0.21 is coming out soon with stage 1 and stage 2 implemented. Some smaller items remain to be completed.

Phase 3: This is where we will start applying new names and mappings to geometry elements. We expect that at this point, until optimizations are done, FreeCAD will become somewhat slower. This expected performance regression is one of the main reasons we are not waiting for the entire work to be done to release a new FreeCAD version.

Phase 4: At this stage, we are planning to start using the new names when recalculating objects in all workbenches.

Phase 5: This final stage is where we do all the optimization to make FreeCAD fast and snappy while toponaming-safe.

The plan is to do phases 3 through 5 in the next development cycle leading up to releasing v1.0 some time next year.

## Will toponaming solve all the problems with models breaking? Nope.

There are multiple other opportunities for models to break even when toponaming is not involved. A common reason for that is using relative rather than absolute references when constraining elements of sketches. With relative references, FreeCAD will likely try to solve constraints in a different order, which will change geometry.

A certain combination of parameters can cause inversion of a part of a sketch. So when you e.g. change a parameter driven via spreadsheet, it will break your model forever, and you won't be able to undo and/or recompute.

FreeCAD also does no validation of user input by itself. It will obediently do whatever the user asks it to do, even if it makes the model explode. This can be worked around by using conditional expressions to normalize user-submitted values that don't make sense.

Brodie Fairhall covered these and a few other cases in a [video](https://www.youtube.com/watch?v=Yp6cIMA7LsI) for FreeCAD User Conference 2023. We highly recommend watching it!

## How work on the TNP fix changed the project

As a developers community, we’ve already made complex changes to FreeCAD in the past, like switching from Python 2.7 to Python 3, or porting the user interface from Qt 4 to Qt5. But the way we planned that work wasn’t great. Fixing the toponaming issue rivals past challenging projects in virtually every aspect, so it was time to change our approach to planning our work.
To do that, we decided to use GitHub’s projects feature, break the entire project into phases, and, most importantly, avoid trying to complete the entire project within one development cycle.

Another major change was making unit tests the norm. Until fairly recently, FreeCAD had zero unit tests. It was really bad, because it made discovering and fixing regressions quite a bit of a nightmare. Some work on that had started shortly before our work on TNP began, but we made it the rule that all new code should come with unit tests.

## In conclusion

Seeing a new contributor pick up rather complex tasks and work on them until the job is done has been one of the most rewarding experiences in this project so far. We would definitely appreciate more people following in the footsteps of Pesc0.

Here is what you can do. Most of the project conversation is taking place in a [dedicated Telegram group](https://t.me/toponamingchat). The group has be-weekly teleconferences discussing progress and issues. The task list is discussed and built in [GitHub issue 8432](https://github.com/FreeCAD/FreeCAD/issues/8432) and new issues are made for each task. You can volunteer for one of those, create a PR, copy in the code from the toponaming branch, then start writing tests to build your understanding of what the code is doing, and iteratively accomplish the task.

This isn’t the easiest project to accomplish, and as FreeCAD v1.0 release is directly dependent on finalizing the toponaming fix, we encourage all interested developers to join us!
