---
slug: how-to-build-3rd-party-addons-for-freecad-that-don’t-suck
title: "How to build 3rd-party addons for FreeCAD that don’t suck"
description: "Many great addon ideas die because the implementation suffers from common and avoidable mistakes. Let's discuss how to avoid some of them."
authors:
  - name: Brad Collette
    title: Ondsel Core Team
    url: https://github.com/sliptonic
    image_url: https://avatars.githubusercontent.com/u/538057?v=4

  - name: Aleksandr Prokudin
    title: Contributing Writer
    url: https://github.com/prokoudine
    image_url: https://avatars.githubusercontent.com/u/57467?v=4

tags: [freecad, development, addons]
image: ./titlecard.png
draft: false
---

There’s well over 200 various addons for FreeCAD available just in the official add-on manager. Many more possibly flew under the radar or simply never have been shared with anybody.

For some developers, creating an add-on is a way to test ideas and see if they resonate with a larger audience. For others, it’s the first step towards contributing to FreeCAD itself. The add-on ecosystem is hugely important for the community at large.

<!-- truncate -->

But many great ideas die because the add-on implementation suffers from one or more common and avoidable mistakes:

- Not designed to make contributions from other developers easy.
- Built with implementations of things that are core FreeCAD features.
- Not built with good software practices in mind, think modular code, unit tests, separation of UI and non-UI logic.

This isn’t a criticism of the addon developers. Nobody is expert in everything for many open-source contributors, writing an Add-on is their first experience contributing to a large project.

Over the last decade, I patched other people’s add-ons and wrote some of my own. In this post, I’d like to share what I think are best practices of developing 3rd-party add-ons for FreeCAD. There’s a technical and a design aspect to this.

## Technical advice

### Design the UI with QT Creator and use the .ui files directly.

There are several reasons why this is a great idea. First off, this makes the code simpler. Hundreds of lines of Qt code are replaced with a single line to load the .ui file like:

```Form = FreeCADGui.PySideUic.loadUi(dialog.ui)```

The UI logic becomes much cleaner and more testable. Secondly, UI designers are used to working with visual tools. They can often improve the look and feel of a dialog or task panel quickly. Using the UI files directly rather than hand-coding Qt or converting the .ui file to python makes it much easier for UI designers to contribute. The wiki has [lots of information](https://wiki.freecad.org/Manual:Creating_interface_tools) about designing and using .ui files.

### Separate the UI logic from the application logic.

From the beginning, FreeCAD was designed to run without the GUI at all. It’s amazing how much you can do with FreeCAD by calling it from external scripts. So it’s really frustrating to find a great piece of addon functionality that won’t work this way.

Ideally, the UI logic is separated from the rest of the application code. Designing software this way doesn’t come naturally to amateur programmers but it isn’t too difficult and is worth learning. Even a very simple addon or workbench should have at least two Python modules, one with the logic for managing the UI, getting input from the user, and displaying it. The second module does all the interesting stuff, and it should not import FreeCADGui.

### Stick with rules of thumb

There are some very simple rules that help keep the code clean, readable, and testable. Like all heuristics, they aren’t written in stone and there are times to ignore them. That said, take the time to understand why they exist.

**No function longer than 200 lines of code.** There are various recommendations regarding the length of a function, but 200 LOC seems like a reasonable maximum. The general idea is that a function should do just one logical thing and could be explained in one sentence. This [list of red flags](https://stackoverflow.com/posts/475762/revisions) for when a function is too long should serve you well (thanks to Ryan Delucchi).

**No module longer than 1K lines of code.** For pretty much the same reason — readability, maintainability etc. — Python modules shouldn’t be too long. Keeping python modules short has a subtle effect on code organization. It naturally encourages better encapsulation and separation of concerns, two key concepts in software development.

**Write pythonic code.** Unlike communities around other programming languages, the Python community, is very opinionated about code conventions. Adhering to these conventions makes Python code more readable and more efficient. Here is a [very good overview](https://towardsdatascience.com/how-to-write-pythonic-code-208ec1513c49) by Xiaoxu Gao of what makes code in Python “pythonic”.

**Use Black formatting.** Code formatting is sometimes a contentious issue. Part of being ‘pythonic’ is adhering to a community standard for formatting. The standard is formalized in [PEP 8](https://peps.python.org/pep-0008/) which asserts a number of code style conventions.  Pycodestyle will check your code against those standards (and complain when you break them). [Black](https://github.com/psf/black) automatically reformats your Python code to comply with those conventions.

**Write unit tests first.** Nobody likes writing unit tests but everyone likes having them. Regressions are easy to introduce and difficult to catch. Unit tests invert that by making regressions harder to introduce and easier to solve. They also have a subtle effect on how you program. When you have to write unit tests, you start to write more testable code. So write unit tests early on to stay on top of it.

**Make UI translatable from day 1.** Popular addons tend to get translated into other languages. Designing an addon with localization in mind from the beginning means you free yourself from redesigning it later on to introduce UI translation support.

**Make user-facing objects parametric.** If the addon adds document objects to the project and expects the user to interact with them after creation, the important attributes of the object should be exposed through properties. We’ve seen good ideas implemented in such a way that if the user makes an error during the creation of an object, the only recourse is to delete the object and restart. If the creation of an object involves a task panel, double-clicking on the object in the tree should re-open the same task panel and allow the user to change settings.  FreeCAD wiki has an [article](https://wiki.freecad.org/Create_a_FeaturePython_object_part_I) that explains how to write FeaturePython objects the right way.

### Be on the lookout for things that belong in the core

Occasionally features developed in a workbench really _should_ exist in the core. A good example of that is the [Sheetmetal workbench](https://github.com/shaise/FreeCAD_SheetMetal). There’s an interesting bit of logic that unfolds a shape to produce a flattened version. The unfolder is computationally intense and would benefit from being implemented in C++ rather than Python. A powerful and efficient unfolder might also have utility in other workbenches. It sure takes more time and effort to communicate with other developers, get these things written correctly and merged, but it makes addons simpler, faster, and more maintainable.

On the other hand, be on the lookout for things that already _are_ in the core. Inexperienced developers often reinvent the wheel and do it poorly. Experienced developers communicate a lot. So when you design an addon, talk to your peers and discuss your design. It could very well be the case that something you need or already exists and works just right for you.

## Design advice

FreeCAD has the [beginnings of a style book](https://freecad.github.io/DevelopersHandbook/stylebook/). While work on it is ongoing, here are some important considerations.

**Don't make the user think.** In free and open-source software, the concepts of usability and discoverability are often overlooked. Do your best to design an addon with a straightforward workflow that gets users from A to Z in the least possible amount of time. Give the user a result with the minimal amount of input and let them revise and improve the result incrementally. A feature that requires the user to do many things exactly right before outputting anything at all is confusing and will be ignored by most users.

**Chunking.** If there’s one thing you can do to make your user-interface and workflow better it is to group controls together so users can process them efficiently.

- Toolbars should have neither too many nor too few buttons. Seven, plus or minus two, is a guideline often invoked.
- The buttons should be grouped logically. Consider that the user may hide the toolbar or drag it to another part of the screen. Menus should use separators to make them easier to process.
- Dialogs should use group boxes, frames, and tabs to allow efficient recognition of controls.

**Don’t just gravitate to workbenches.** There seems to be a popular idea that a workbench is the right kind of addon for anything. And so there are some 3rd-party workbenches that should have been a non-workbench addon, an extension of an existing workbench, or even a core feature. But workbenches are destinations, if you build one, you should expect that people will park there for a while and will be unwilling to jump between workbenches all the time. So when you choose what type of an addon you are creating, think primarily of workflow and tasks.

## What to do next

If you are planning to write a new FreeCAD addon or improve one you have already created, I recommend paying close attention to [FreeCAD Developer Guide](https://freecad.github.io/DevelopersHandbook/). This is where the team formalizes both programming and design conventions, as well as provides actionable advice. If the guide is missing the information you need, I encourage you to [file an issue](https://github.com/FreeCAD/DevelopersHandbook/issues) against the guide on GitHub.
