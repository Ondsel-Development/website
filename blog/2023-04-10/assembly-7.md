---
slug: default-assembly-workbench-7
title: "Assembly Workbench: What We Learned and What's Coming Next"
authors:
  - name: Brad Collette
    title: Ondsel Core Team
    url: https://github.com/sliptonic
    image_url: https://avatars.githubusercontent.com/u/538057?v=4

  - name: Alexandre Prokoudine
    title: Contributing Writer
    url: https://github.com/prokoudine
    image_url: https://avatars.githubusercontent.com/u/57467?v=4

tags: [freecad, development, assembly]
image: ./titlecard.png
draft: false
---

We started this series with the [assumption](https://ondsel.com/blog/default-assembly-workbench-1) that there is a strong community demand for a default assembly workbench in FreeCAD. The community discussion that followed that article confirmed our belief. We then researched existing options — [Assembly 2](https://ondsel.com/blog/default-assembly-workbench-2), [A2plus](https://ondsel.com/blog/default-assembly-workbench-3), [Assembly 3](https://ondsel.com/blog/default-assembly-workbench-4), and [Assembly 4](https://ondsel.com/blog/default-assembly-workbench-5) — and even quickly studied [related workbenches and macros](https://ondsel.com/blog/default-assembly-workbench-6).

Our research had a number of limitations though. We avoided exploring the earliest solutions such as the [original workbench](https://forum.freecad.org/viewtopic.php?t=3828) by Jürgen Riegel and [FreeGCS](https://forum.freecad.org/viewtopic.php?t=1523) because they were incomplete. We also decided against studying both [Exploded Assembly](https://github.com/JMG1/ExplodedAssembly) and [Animation](https://github.com/microelly2/Animation) workbenches because this type of feature deserves dedicated attention.

From this research and the discussion that followed, we came away with a handful of important takeaways. We suggest that these ideas should influence the direction of the FreeCAD project.

In this article, we’ll describe what we learned. We’ve taken the liberty of making some specific recommendations for a way forward and we also discuss what we believe is Ondsel’s role.

## Key Insights

### The Long-Term Vision

We started this conversation by calling for a solution that covers 80% of use cases. Based on our research and community feedback, we conclude that there is strong consensus around the higher-level characteristics of this integrated assembly workbench:

* Both top-down and bottom-up approaches equally first-class citizens
* Simple enough to make quick alignments, but powerful enough for complex projects with nested sub-assemblies
* Ability to resolve assembly constraints automatically and eventually simulate multi-body dynamics
* An easy way to animate the assembly and detect collisions
* Built-in BOM generation
* PDM-ready
* Compatible with other parts of FreeCAD and alternative assembly workbenches
* Same license as FreeCAD (LGPL v2.1)

### The Need for a Common Data Structure

The existing assembly workbenches for FreeCAD are not mutually compatible. It isn’t possible for a user to switch between the options without losing data. This kind of compatibility is important and it starts with the data structure. Early in the forum discussion, Zolko noted the need for a standard, and we think he’s exactly right:

> …what we need is a default assembly DATA FORMAT that every assembly workbench can use. You can design solids in Part and PartDesign workbenches, where you begin with one, continue with the other, use Draft en-passant, and finish with some Part Booleans. You can even mix this with Curved Shape surfaces, Sheet Metal bending, and they all COOPERATE! Why should it be different for assemblies? What IS needed is to say: to be called a FreeCAD assembly workbench it needs to use the following data structure […] and then let people implement the best approaches for that.

We see the development of the common data structure as a priority requirement for an integrated solution. Users should be able to move between existing workbenches or migrate to newer ones without redoing an entire project.

A standardized data structure would also simplify developing in-house niche solutions where you need to run some extra simulations.

### Why We Should Talk About Solvers Separately

Past discussions about an assembly workbench have lumped the solver and the workbench into the same conversation. Separating the discussion has been helpful since these are, in fact, very different things. It is the solver which has been the most controversial part of previous discussions. Assembly 4 and Manipulator workbenches have demonstrated that, at least for some use cases, a solver isn’t even needed at all.

Among those who emphasize the need for a solver, agreement about requirements has been hard to find. The real world is messy and complex and full of unique problems that require custom solutions. One solver cannot possibly handle the variety of use cases that exist (think combined mechanical-thermal-electromagnetic simulations).

Some problems can be handled by 2D solvers, and we have some very nice options, including the one in the Sketcher workbench. 

Other problems _require_ a capable 3D solver and if we want FreeCAD to be competitive, it needs one. Unfortunately, we currently have no options at all. SolveSpace comes closest but its licensing (GPL v3+) makes it an unlikely choice for FreeCAD (LGPL v2.1). The development of solvers, both open and proprietary, is an area of rapid innovation. We have no way of knowing what will be available even five years from now.

Our insight is that the future integrated assembly workbench should have the following three essential characteristics with respect to a solver:

* Minimally functional and easy-to-use without any solver at all
* Capable of using a solver if one exists
* Solver-agnostic, with a possibility to use new solvers in the future

Building the assembly workbench to be solver-independent provides the greatest flexibility for the project as a whole, users, and partners like Ondsel. It also provides the most options in the future.

### Why People are Passionate About Existing Solutions

From past experience, we understood that this discussion might get emotional at times. Users are very passionate about the existing options. What we noticed was that their passion stems from two sources.

**Investment in climbing the learning curve.** With three actively developed assembly workbenches today, users first have to learn enough to make a choice. Having made that choice, they don’t want to revisit it. Some users refuse to invest in even making the choice. They give up and move on. Here are a few examples from discussions about our initial proposal:



* “As a fairly new freeCAD user I have spent an innumerable amount of time attempting to choose which assembly workbench to use and more importantly learn how to use” ([FC forum](https://forum.freecad.org/viewtopic.php?p=667457&sid=3bec9fb58279fa4feba78c322c3c6b43#p667457))
* “I tried switching to FreeCAD a couple of years ago and the plethora of conflicting assembly solutions prevented me from doing so” ([FC forum](https://forum.freecad.org/viewtopic.php?p=669635#p669635))
* “I haven’t explored any of the assembly benches as there is a big curve to even selecting one of them” ([Reddit](https://www.reddit.com/r/FreeCAD/comments/11r9j78/comment/jcajyiq/?utm_source=reddit&utm_medium=web2x&context=3))
* “It's painful to train anyone if there are four different assembly plugins and they all work slightly or drastically different” ([Reddit](https://www.reddit.com/r/FreeCAD/comments/11r9j78/comment/jc9j3tu/?utm_source=reddit&utm_medium=web2x&context=3))

Users who made a choice also made a significant investment to become proficient, because they saw the benefits of the tool they use. As a result, they often have little or no knowledge of the other options and no interest in learning if the current option meets their needs. At the risk of oversimplifying:

* A2plus users think it has a simple, natural, and straightforward workflow
* A3 users think it’s the most feature-complete workbench of all
* A4 users like how robust the LCS-based workflow is

**Investment in their current models and assemblies.** Users also have a large collection of projects that are built using one particular workbench. They are naturally reluctant to switch solutions if it means losing or redoing that work from scratch. Basically, they made a huge investment in their assembly WB of choice, and because of the lack of compatibility, they are now in an unintended vendor lock-in situation.

**What about features?** Surprisingly, one thing we didn’t hear much was users championing one solution or another because it offered specific features. While the different solutions had strengths and weaknesses, all of the options offer similar capabilities.

Our key insight is that protecting the investment users have made is extremely important. Change will be hard, but we believe users will be willing to adopt an integrated solution if it is robust, relatively easy to learn, well documented, and if existing models can be migrated to it with minimal rework. They shouldn’t be forced to make the change before they are ready or before an integrated solution is mature enough for their needs.

### What About the Workflow and UX/UI?

Once solvers and data format are removed from the discussion, what’s left to discuss is the workflow. Regardless of how passionate the users are, the reality is that none of the existing assembly workbenches has a perfect workflow or user interface:

* A2plus requires conversion of parts created with other WBs.
* A3 has so many constraint types that even experienced users get confused.
* A4 requires time to set up local coordinate systems for all features that should be attached.

There are ideas to borrow from all of them, but we don’t consider the workflow and UX/UI of any of the existing options, in their present form, to meet the long-term goals. Assembly 4, by virtue of its simplicity and solid design, would be a good starting point.

## Recommendations

### Integrated Assembly Workbench

We suggest that FreeCAD must commit itself to an integrated assembly workbench — with great UX, documentation, translations, and compatibility with the rest of FreeCAD. 

While the first iteration of the workbench can be feature-incomplete, this WB should support both simple and complex workflows. It should provide a solid foundation for future development of PDM integration, BOM extraction, collision detection, exploded assembly views, and animations.

**Ondsel’s role.** We can participate in the planning, help organize the work, contribute code, test, and refine the solution. We can also contribute to the documentation and other essential parts of the project.

### Standardized Data Structure

We already explained the importance of having a common data structure earlier. Our recommendation is simply that this should be the first step, and it should involve all key stakeholders: core developers, maintainers of the other Assembly workbenches (kbwbe, Realthunder, and Zolko), and Ondsel. This should be undertaken and completed early enough that other workbenches can either support the standard directly or provide migration tools.

The approach in Assembly 4 is a serious contender for a starting point. Zolko has some very sensible ideas like having only one root assembly element in the project, wrapped into a Part container, with parts and sub-assemblies available as child elements.

The working group should also investigate what ISO 10303 has to offer but regardless of what is found, the focus should be on providing the best solution for FreeCAD and its users.

**Ondsel’s role**. Again, we can participate but we can’t impose a standard unilaterally. In this case, we feel Ondsel’s participation not only represents our own interests but the interest of other future partners. 

### Powerful, Performant, 3D Solver

Let’s reiterate: a 3D solver is critical to make FreeCAD competitive for professional and commercial work. No viable solutions that are license-compatible currently exist.

The solver has to be written in C++ or another compiled language for acceptable performance. The development of a 3D solver is a massive, time consuming, and expensive endeavor. It is, by far, the hardest part of doing assembly right.

For ease of distribution, it’s best to make the solver part of the core FreeCAD. This also gives us a better shot at maintaining it and also makes it available for use in other workbenches (think Robot).

**Ondsel’s role.** We want a solution that is fast, powerful, and supports future functionality like multi-body dynamics. Ondsel intends to begin developing such a solution, release its code under an appropriately permissive license, and submit PRs to include it in the FreeCAD source. Based on our understanding of the [‘Buyer-Based’ Open Core Model](https://opencoreventures.notion.site/Open-Core-Business-Model-525879f382cb430e81274f669a026c15#764604b5c6db4107bb84bbc427d81b87), we think this is the right decision.

Having said that, it is essential to understand that Ondsel is a for-profit company and we are not profitable yet. We might fail before a solution is available. The project should not bet its future on our success. Moreover, the need to survive might force us to make the 3D solver or specific features available as paid options. This is also a risk area for the FreeCAD project. The community should prudently take steps to minimize the impact and ensure the viability of the integrated assembly workbench. 

This aligns with our recommendation that the assembly workbench should be solver-agnostic, usable in solverless mode, supporting less powerful 2D solvers, but also able to take advantage of more powerful technology — including commercial options — if and when they are available.

### Shipping the MVP

We believe that a minimum viable assembly workbench (proof-of-workbench, if you will) should be shipped as part of FreeCAD as soon as possible to become a platform for testing the new 3D solver. The goal shouldn’t be feature completeness. Rather, we should focus on simplicity and stability and then iterate upon that to improve the workflow and user experience.

**Ondsel’s role.** Once again, we can participate by providing leadership, organization, code, testing, and documentation but we cannot do it alone. We’re ready to start immediately.

## In Conclusion

We thank everyone who participated in the discussion. Being able to test our ideas and expectations against feedback from avid users of existing assembly workbenches is priceless. 

We know that the road to a world-class assembly system won’t be short and there will be plenty of bumps along the way. We also know we can’t do it alone. We look forward to collaborating with the FreeCAD community to bring this vision to life.

We are interested to hear your feedback on this plan. Please let us know what you think by commenting [in the forum](https://forum.freecad.org/viewtopic.php?t=76799) or [on GitHub](https://github.com/orgs/Ondsel-Development/discussions/2). We will create a project in the GitHub tracker to plan the work and coordinate the many people it will require. Please let us know if you want to contribute to this effort.

