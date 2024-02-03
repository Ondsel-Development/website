---
slug: software-bounties-are-a-dumb-idea
title: "Software bounties are a dumb idea"
description: "There are many ideas how to help FOSS developer earn a living. Bounties are a common solution, but they barely ever work, while better alternatives exist."
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

## Bounties don’t help users fund FOSS projects

Funding free/libre software projects is difficult. For the last 5+ years, the knee jerk reaction has been to say “just do what Blender Foundation does, they got everything right”. But contributors come with different backgrounds. Some are perfectly fine about thinking like entrepreneurs, others would rather stick to programming, or designing interfaces, or bug triaging, or writing documentation etc.

So there are various ideas on how to work around that and still help teams earn a living. One idea we come across really often is bounties. The general idea of a bounty is this: someone identifies an issue and offers some money to fix it, other people can bring more money, then someone implements a fix or a feature and takes the money.

FreeCAD has a mixed history with bounties. People absolutely mean well when they suggest bounties as a way to foster development of free and open-source software (FOSS), but bounties fail way too often. Nevertheless, there's a popular notion that they are actually great. And thus bounties distract people from trying more realistic solutions.

Let's talk about why bounties fail and what approaches to funding FOSS developers are better and why.

## What are the bounties and where do they actually work?

First and foremost, let’s clarify that the bounties we are referring here to are the bounties typically proposed by users. The bounties paid by corporations for finding e.g. security vulnerabilities in their products are a whole different topic.

The unsophisticated look at bounties, that you can find on forums and elsewhere, is basically this: we think there’s a great feature to implement, we are willing to pay what we think is a fair amount of money to cover the cost of its development, someone will absolutely volunteer, because, well, here is our money for the taking.

As far as these simple agreements go, it works in a limited amount of scenarios:

- **Small bug fixes.** Many large software projects have hundreds of small issues that the core team just never has the time to fix. It could be incomplete file format support or a number of sorely missing settings. In other words, nothing that requires digging a ten thousand feet deep hole into the source code just to find out that half of the application needs to be rewritten, possibly in a new fancy programming language.
- **Small features.** Similarly, a new feature that doesn’t affect workflows in any major way and doesn’t impose major internal redesign, could be subject to a bounty.
- **3rd party add-ons.** Developing an add-on or a macro that automates a daunting task could be a bounty material, especially if the use case in question is not a typical one and thus would likely not be covered by what a program does by default.

Everything else typically becomes a problem with bounties. Here is why.

## What’s a more realistic scenario?

When you start treating anything as a bounty material, in a large project like FreeCAD, the bounty scenario needs to be more like this:

1. Someone singles out an issue that could be fixed with a bounty.
2. The stakeholders agree that it is indeed a bounty material.
3. Someone spends time to evaluate the cost of a project, with a realistic error margin.
4. The evaluation is then adjusted for the time spent on the preliminary evaluation before any real work starts.
5. Both the stakeholders and the community agree that the evaluation is ok.
6. The community puts their money where their mouth is.
7. Work gets done.
8. The community accepts the results after some or no development iterations.
9.  The evaluation is then adjusted for actual development expenses, and the community accepts that and pays for it too, because the developer shouldn't be punished for things out of their control.

You’ll notice that in this scenario, real-life expenses are taken into account (and paid in full), because figuring out the right solution is often 80% of the entire work. Moreover, everyone seems to agree on everything, which is so often not the case. An even more unthinkable thing happens: the bounty is adjusted for actual expenses — most bounty platforms don’t even handle that, and the protocol of the adjustment is pretty much unheard of.

## So why do bounties fail exactly?

There are so many reasons. Let’s dig into some of them.

### Financial reasons

Things start to break at the very beginning. When a bounty is initiated by a user, their idea of development cost will likely be way off. **It takes a certain amount of familiarity with the source code** in question to be able to make a fair estimation, and even then there’s no guarantee that larger underlying issues won’t be discovered.

One example here would be canvas rotation in [GIMP](https://www.gimp.org/). This feature was originally implemented in a fork called [GIMP-Painter](https://github.com/seagetch/gimp-painter). A popular online platform [BountySource](https://bountysource.com/) had a bounty for that exact feature, with close to EUR 75.00 waiting for someone to backport the patch. But when one of GIMP developers started looking into this, he found out he would have to pretty much write that feature from scratch — it was _that_ much easier than normalizing the patch. What looked like a ‘git cherry-pick’ material turned out to be a hack lasting several days and looking more like a EUR 750.00 job. So when he, an experienced developer, picked the bounty, it was less than minimum per-hour wage in his country of residence. That is simply not sustainable.


An even more staggering example of a financial failure of a bounty are MIDI tracks in [Ardour](https://ardour.org/). This essential feature was available as a bounty and was eventually developed over the course of two Google Summer of Code seasons, with multiple people participating (GSoC student, his mentor and lead developer of the project, a UX/UI designer). They spent close to 3 years working on this on and off. How much money was pledged? $1,380.

### Organizational reasons

**Bounties rarely scale.** While some patches only need understanding the source code and being able to design a solution, others require getting more people like UX/UI architects involved.

**Efforts can be duplicated.** With bounties, developers are asked to take all the risks. Several people can work on the same solution at once, only one of them will be paid.

**Payment is not guaranteed.** We already mentioned it above, but this is worth repeating: with bounties, a lot of the research work has to be done upfront. If you are willing to do that, you better be prepared to cover the research expenses somehow.

**Decision-making can be paralyzing.** Teams where decision-making among stakeholders is broken generally have a much bigger fish to fry. Still, with multiple stakeholders who rarely agree on anything, who will make the decision whether a bounty patch should be accepted?


### Communication issues

Part of the problem is also in **finding the right words**. Even when developers themselves set bounty ideas, they still tend to have a hard time communicating the amount of work it takes to do something and therefore the cost of it. Non-technical users have a very vague idea about the implications of writing new code or even reusing existing code. A very common request is to add a new feature by “just reusing” code written in Python in a program written in C++, because “it’s open source, so you already have everything you need”. This isn’t anyone’s fault, it’s just explaining technical intricacies to people with less or no programming experience takes some time and practice.

### Technical reasons

**Bounties typically start from one person's use case** and thus commonly don't take the big picture into account. The idea might work for this one person, but could it be done better? Or is it even an actual problem? The use case might be stupid, because the user is trying to do something in a non-orthogonal way while easier solutions already exist and would work just as well. Or the workaround that is requested in the bounty might have a better implementation as a core feature. And the list goes on.

**Bounties don’t encourage incremental solutions.** The very idea of bounties is that someone does the entire work in one go, as a quick solution, takes the money, and leaves. But when the feature implies digging into the architecture, this basically means two things: either the developer works on a deep fix for a very long time and thus has a hard time rebasing to changes in the upstream branch (think of RealThunder’s LinkStage branch), or they have to submit work in small batches over a long period of time, but that’s not what bounties are generally expected to be.

**Bounties favor outcomes that maximize bounty for minimum effort.** So they don’t encourage elegant, testable code or unit testing. In the end, this bites everyone in the neck — both users and developers.

## If not bounties, then what?

Finally, let’s talk about some of the better approaches at community funding of development. No single way is perfect, but that’s not the point. By trying things that actually work we all can come up with new, better solutions. We are not talking about the “paid support” model here though, plenty has already been said about that over the past few decades.

One of the very basic ideas here is that — especially in large projects — development ideas in any form should be verified by respective core teams. So it's best when the project has a process of idea verification between multiple stakeholders.

### Crowdfunding and stretch goals

One example of idea verification is what the Krita team does whenever they run a crowdfunding campaign ([it’s been a while though](https://www.kickstarter.com/projects/krita/krita-free-paint-app-lets-make-it-faster-than-phot/description)). They collect user requests, sit down, go through each of them, take the ones that make sense, figure out how much time each would take to implement, then take the ones that passed validation as relatively easy fixes/features and group them into stretch goals and set a price to it. That price is already adjusted for the time it took them to do the verification. So far, their estimations have been very close to actual expenses.

If they would not get sponsoring for stretch goals, the verification expenses would be covered by other sources of income like sales on [Steam](https://store.steampowered.com/app/280680/Krita/) and [Microsoft Store](https://apps.microsoft.com/store/detail/krita/9N6X57ZGRW96?hl=en-rs&gl=rs&rtc=1). This means that any team following in their footsteps better have a stable source of income to cover the expenses of the work they do upfront. This works best in teams that organized themselves into a non-commercial organization and have a diversified pool of income sources (think Blender Foundation and, well, FreeCAD now).

### Developer fund

A developer fund can be created and used in multiple ways. It can be very similar to crowdfunding, especially if you look at what the Kdenlive team [has been doing](https://kdenlive.org/en/fund/).

They chose who would be working on features and decided to hire people who are already active in the project and had the opportunity to devote part of their time to this work without jeopardizing their other obligations.

Then they came up with a short list of really useful features to implement. They balanced them between roadmap items and things that users requested in their discussion rooms. They also only chose tasks that they knew they would be able to solve based on their team’s expertise.

Then they estimated the price by decomposing proposed features into smaller tasks and deciding to fund 50% of the time that accomplishing that work would require.

The campaign was launched with KDE e.V. and their Donorbox-based system. Funds were collected within the first month of the campaign, while it was supposed to run for three months. Some of their 2023 goals outlined on the fund page have already been reached.

But a fund can also be used to hire full-time developers or issue part-time development grants. Blender Foundation famously [does both](https://fund.blender.org/grants/). Blender’s fund is also filled from [multiple sources](https://fund.blender.org/about/) — both corporate sponsorships and personal donations, one-time as well as recurring.

### Grants

The idea behind a grant is that an organization behind a FOSS project builds a relationship with one or more community members by hiring them to do a specific one-time job: implement a feature, modernize an aging part of the source code, write documentation, design new UI etc.

We’ve already mentioned Blender Foundation as one of the organizations that issue grants, but there’s obviously more. The Inkscape team has recently hired a full-time senior developer to work on the GTK4 port of the vector graphics editor for several months. And the FreeCAD Project Association is no stranger to grants either: [two grants](https://fpa.freecad.org/programs/fpadf-announcement) were issued last year, to RealThunder (the toponaming fix) and to Ajinkya Dahale (spline handling in Sketcher).

### Contract development

There’s a certain peace-of-mind element in doing contracted work as compared to working for a bounty. It’s easier to discuss scope, you can charge for the work in a [time-and-materials](https://en.wikipedia.org/wiki/Time_and_materials) fashion etc. You still have to wrangle stakeholders — there’s no way around that (and there likely shouldn’t be), but all your extra expenses will typically be covered by a clause in the contract.

If you want an example, look no further: the Path workbench in FreeCAD was originally the subject of a contracted job. This project involved a lot of upfront conversation with FreeCAD maintainers about changing the core to allow for rendering toolpaths. The core features were specifically implemented in a way that would allow 3rd-party workbenches and alternative user interfaces to be created for CNC-related use cases.

### The paid binaries model

To some extent, the Ardour project pioneered this approach to funding development: they came up with an idea that users who can’t build Ardour for themselves (it’s more difficult on Windows and macOS) can pay a small monthly fee that is a fraction of what users pay for proprietary digital audio workstations. This alone pays the bills of two full-time developers and some occasionally helpful contributors.

Two more similar projects, [Zrythm](https://www.zrythm.org/en/index.html) and [Radium](https://users.notam02.no/~kjetism/radium/), use the same funding model — most likely with less success. But this has more to do with oversaturation of the digital audio workstation market.

### The open-core model

Finally, core team members can start an LLC and provide a fork/modification of the original project with added value. 

Some of the very obvious if geeky examples here are [GitLab](https://about.gitlab.com/), [Redis](https://redis.io/), and [Docker](https://www.docker.com/). On a less technical side, that would definitely be the [MuseScore.com](https://musescore.com/) service built for the community of [MuseScore](https://musescore.org/) users, or the [audio.com](https://audio.com/) cloud storage service that has been integrated into Audacity. We are doing a very similar thing with Ondsel, except we don’t own FreeCAD but merely contribute to it.

## In conclusion

Bounties are a lousy foundation for sustainable development of large projects like FreeCAD. They typically represent a gross underestimation of real work required to solve a problem, commonly miss a bigger picture, and encourage worst software development practices.

Growing larger is fun but also really overwhelming. Most ambitious projects that aim to stay afloat will have to experiment with different approaches to getting funded on a regular basis and come up with their own mix of solutions. It’s that or perish.
