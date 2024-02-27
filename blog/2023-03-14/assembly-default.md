---
slug: default-assembly-workbench-1
title: "FreeCAD needs a default assembly workbench - Introduction"
description: "There are multiple 3rd-party assembly addons for FreeCAD. We are planning to evaluate existing options, and here is our methodology."
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

This is the first post in the series where we discuss the need for an integrated assembly workbench, review existing 3rd-party options, and discuss takeaways from our research.

<!-- truncate -->

Further posts:

- [Assembly 2 workbench](https://ondsel.com/blog/default-assembly-workbench-2/)
- [Exploring the A2plus workbench](https://ondsel.com/blog/default-assembly-workbench-3/)
- [Exploring the Assembly 3 workbench](https://ondsel.com/blog/default-assembly-workbench-4/)
- [Exploring the Assembly 4 workbench](https://ondsel.com/blog/default-assembly-workbench-5/)
- [Exploring BodyBuilder, Manipulator, and Part-o-magic](https://ondsel.com/blog/default-assembly-workbench-6/)
- [What we learned and what's coming next](https://ondsel.com/blog/default-assembly-workbench-7/)

FreeCAD is an inherently modular program where major features can be developed by 3rd parties as workbenches. This is great for creating a healthy ecosystem of [add-ons](https://wiki.freecad.org/Std_AddonMgr) and catering to a diverse group of users: tinkerers, professional mechanical engineers, architects, furniture designers etc. The obvious benefit of that is that creating and deploying a solution for a particular user group does not require syncing with FreeCAD’s release cycle that can be as long as a few years. Since v0.17, FreeCAD makes it very easy to install and update various workbenches developed by its passionate community.

### Why a Default Assembly Workbench?

The drawback of developing major features as 3rd party workbenches is that these features are not part of the out-of-box user experience and thus tend to be niche-oriented, less tested, have more bugs, lack documentation etc. Meanwhile users expect major features to be immediately available and be specialization-agnostic, easy to use, robust, performant, and well-documented.

Creating an [assembly](https://en.wikipedia.org/wiki/Assembly_modelling) is one of those essential features. It‘s commonly required when designing something more complex than a simple replacement part. However in FreeCAD, this feature is only available as a separately installed workbench. In fact, there are 3 competing workbenches and 1 more workbench that has been unmaintained for almost 4 years now. And then there are several more workbenches like [Manipulator](https://wiki.freecad.org/Manipulator_Workbench) or [Part-o-magic](https://github.com/DeepSOIC/Part-o-magic), that can be used to align parts in some way.

This effectively means that instead of launching FreeCAD, creating an assembly, and loading parts into it for aligning, users are expected to first explore at least half a dozen options by trial and error. The expectation that this much choice is good for them seems unrealistic.

Moreover, having this many competing solutions leads to development fragmentation, makes following tutorials confusing, and makes progress on the core slower as developers have to consider the impact on multiple approaches to assembly. Moreover, there is a strong demand for technical design tools where collaboration is easy. But collaboration implies using the same tools and standards. Having multiple competing assembly options is the opposite of that.

Our intention is to start a broad conversation. We want to highlight the need and build consensus that a single default workbench is in the best interest of our users. We're also proposing criteria for evaluating the current assembly workbenches. Our goal should be to identify the best foundation and feature set required for an assembly workbench to be included in the core FreeCAD distribution. Such a solution doesn't need to meet everyone's needs. Rather, it should strive to be a general-purpose solution for at least 80% of the use-cases.

We do understand the implications of carrying out and publishing this research and calling for a default. Whatever default assembly workbench FreeCAD gets, it automatically moves into focus and gets more tutorials, more testing, more bug reports, more improvements etc. And the non-default workbenches will automatically get less attention and their developers will likely have to cater to more niche areas. So this requires careful treatment. Part of that is being objective when evaluating the existing options.

### Methodology

To make a fair assessment, we need to settle on a set of evaluation criteria that cover most, if not all aspects. There is one important disclaimer we want to make here though: as much as maintenance and responsiveness of developers matter, we evaluate software, not people. Here is what we came up with.

**Ease of use** It’s difficult to design software that is compelling to both users who are new to solid parametric modeling and experienced users of competing products. However, it’s natural to expect a workbench that has a merit of its own and provides an obvious path to creating an assembly from start to finish, with as little friction as possible. We also expect the best workbench to be efficient in team work where parts can be submitted by different users and can be iterated upon.

**Consistency** This is a multifaceted topic. Because FreeCAD is highly modular, developers have a lot of freedom in how they implement features. Ideally, the assembly workbench should follow roughly the same UI conventions as the rest of FreeCAD. This means that a user who is already familiar with designing parts with FreeCAD should have little-to-no problems figuring out how to make assemblies. Additionally,  an assembly workbench should function well with other workbenches, including add-on workbenches. For example, it should be able to work with enclosures designed with the SheetMetal workbench. It should conform to the same standards for translation and macro scriptability as other core workbenches.

**Features** We are looking at the set of available constraints, how picking edges, faces and other features for alignment works, how imported parts can be managed in complex assemblies etc. However, having the most features doesn’t necessarily translate to the best user experience. A much better indication is how well a workbench serves the purpose it was designed for.

**Stability** There are multiple factors at play when you evaluate stability of software. First, there’s the severity of issues. You can stumble upon a warning that doesn’t prevent you from accomplishing a task but is a mild annoyance. Or you can run into a crasher that loses unsaved changes or corrupts the model, which is a really bad user experience. This is not a problem for our evaluation: we can easily separate minor issues from crashers in reports.

Then there’s the number of users. If one workbench has 100 users and 10 unresolved crash reports, and another workbench has 10,000 users and also 10 unresolved bug reports, this likely means that the latter is more thoroughly tested and has less undiscovered issues. However, we have no way of knowing how many users each assembly workbench has. The amount of stars for a GitHub repository doesn’t sound like a fair way to judge on popularity, especially since visiting a GitHub repository is not how you install a FreeCAD workbench these days. We can get some sense of the user base from looking at how many unique users participated in discussing this or that assembly workbench on the forum. But this should be taken with a grain of salt as this approach doesn’t account for the part of users who stay in the shadows.

Also, reporting a bug should be simple enough. If it’s too difficult to do, that’s how you get bugs that continue to be unresolved for years, outside of developers’ radar. Fortunately, all four assembly workbenches are hosted on GitHub and thus have the same fairly sensible UX/UI for reporting bugs. That gives us some baseline.
Thus, given the limitations, we draw conclusions from unresolved stability issues reported to GitHub and relevant posts to the [FreeCAD Forum](https://forum.freecadweb.org/).

**Speed** Just like with stability, it’s hard enough to be a good judge of performance. Hardware specs vary wildly between users, and so does the complexity of assemblies. But if there is a significant amount of complaints about the performance in case of fairly simple assemblies (let’s say, 10 to 20 parts), something is obviously wrong.

There is one more aspect that we considered as well and ultimately decided against — code quality and extensibility. It is important to focus on the code that needs as little effort as possible to extend the feature set and maintain it. However, all four existing workbenches are between 7,600 and 14,900 lines of code. This is perfectly manageable in terms of time spent on potential refactoring. That said, having an engaged community grown around a particular workbench and willing to take action is a lot more important. You can do anything with an experienced, passionate team.

### What Now
In the next installments, we will evaluate [Assembly2](https://wiki.freecad.org/Assembly2_Workbench), [A2plus](https://wiki.freecad.org/A2plus_Workbench), [Assembly 3](https://wiki.freecad.org/Assembly3_Workbench), and [Assembly 4](https://wiki.freecad.org/Assembly4_Workbench) by the criteria explained above. Then we will come up with a proposal and continue the discussion with the FreeCAD community.  We [invite feedback](https://github.com/orgs/Ondsel-Development/discussions/2) on this issue and our approach.

### [Part 2: Assembly 2](https://ondsel.com/blog/default-assembly-workbench-2/)


<details>
  <summary>Note...</summary>
  <div>
    <div>I’m Brad Collette, longtime FreeCAD contributor and CTO of Ondsel, a new open core company built on top of FreeCAD. Ondsel helps you share useful aspects of your solid models without giving away your designs. We’re working on improving collaboration and feature accessibility and integrating with your existing tools. You can read more about my vision for FreeCAD and Ondsel <a href="https://opencoreventures.com/blog/2023-01-ondsel-freecad-launch/">here</a>
    </div>
<br/>
  </div>
</details>


