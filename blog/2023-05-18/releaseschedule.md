---
slug: freecad-unpredictable-release-schedule-hurts-users-and-developers
title: "FreeCAD's unpredictable release schedule hurts users and developers"
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

There's a problem with running development FreeCAD builds for actual work and it's going to get uglier soon. Here's the deal.

## What's Wrong With The Dev Builds?

What users want from FreeCAD is a stable, reliable platform that is trustworthy for doing their work. What they also want are various new features and quality-of-life improvements.

But FreeCAD has a relatively long and unpredictable release cycle — [typically over a year](https://en.wikipedia.org/wiki/FreeCAD#Release_history) between major releases, and no one can put a date on a release in advance. This irregular release schedule has historical reasons (“it’s ready when it’s ready”), but also because over the last several years, contributors did a tremendous amount of work that wasn’t split into smaller chunks. And thus there were large gaps between releases when the team ported FreeCAD from Python2 to Python 3, and then from Qt4 to Qt5.

With the current effort to resolve topological naming, FreeCAD development is moving toward a more incremental approach. Large changes are merged incrementally rather than waiting until the whole thing is done. This should accelerate the pace of development and reduce the time between releases. It also implies that the development branch will experience more instability than it has in the past. 
There’s an obvious conflict between the need for stability and the desire for new features. You can get an increasingly reliable platform by sticking with point releases. Or you can get the latest and greatest by using development builds at the risk of experiencing more glitches or even losing your work due to a crash.

We encourage everyone doing “real work” to use a stable build and avoid the risk, but for people who accept the risk and run dev builds, things are likely to get even worse soon. Once the project releases version 0.21, the next batch of topo-naming issue fixes will start landing to the main development branch. Because of what these fixes do, FreeCAD is expected to [take a performance hit](https://github.com/FreeCAD/FreeCAD/issues/8432#issuecomment-1452672655) until optimizations follow at a later stage of development.  Bottom line: the development build is going to get slower for a while.

In our opinion, this is the perfect time for FreeCAD, as a project, to revisit its release policy.

## Time-Based Schedule

The first part of our proposal is for the FreeCAD project to have more frequent and predictable releases. Effectively — a time-based release schedule. This is common for projects with some kind of financial backing for the core team of developers, like [Blender](https://code.blender.org/2021/10/blender-3-x-roadmap/). But it also works for large projects that receive little-to-no funding on a regular basis, like [Kdenlive](https://kdenlive.org/) (3 releases a year, following the KDE’s release cycle) and [darktable](https://www.darktable.org/) (2 releases a year since 2020).

How often should FreeCAD be released? So far, the project has been struggling to do annual releases on time. So shooting for 2 releases a year and working from there seems like a good initial goal. There are existing release policies like [the one at OpenStack](https://www.openstack.org/software/roadmap/) that [have been studied](https://www.researchgate.net/publication/316357251_Release_Early_Release_Often_and_Release_on_Time_An_Empirical_Case_Study_of_Release_Management) and could be learned from.

Let's say we all agree on bi-annual releases. What does it really mean?

**We remove the element of uncertainty for users and developers alike.** Users can plan their upgrades and only use a dev build when they need to test a fix. Contributors can plan ahead and don't need to jeopardize their non-FreeCAD commitments.

**Much shorter development cycle.** This means more focused releases and less urge to include incomplete work, because the next window for merging will open very soon. This also means a much less exhausting period of work for testers and translators.

Especially in the latter case, contributors are typically expected to either follow development closely and update translations all the time or work like madmen during the strings freeze period because there's just so much work to do. Volunteered work should really be more manageable.

**More frequent point releases.** Once the release schedule is set, users will start counting on point releases happening regularly too (see below on another reason for that).

**More focus on building infrastructure and automation.** A time-based release schedule is going to require a more rigorous release process and a higher level of automation. Only a very small part of the C++ code is covered by unit tests at the moment, this really needs to change. And there is always, _always_ more work to be done on Conda builds. All that means more DevOps work.

## Feature Backports

The FreeCAD team already backports bug fixes and security patches from the master branch to the release branch. But we could be doing more. We could be backporting some features and improvements to point releases too. Projects like [GIMP](https://www.gimp.org/news/2019/01/02/gimp-and-gegl-in-2018/#version-210-release-and-point-releases) and Scribus have been doing this for years now because they have release cycles even longer than those of FreeCAD. For them, it helps keeping users engaged, but it still means that larger, much desired changes take a very long time to show up in a stable release, and that’s the part we would rather avoid.

This wouldn't render major releases pointless (pun intended). We are thinking primarily of changes that are typically safe and not too time-consuming to backport. If a new feature, however small, comes with an architectural change (API change, file format change etc.), it’s a no-go. But quick UX fixes and other quality-of-life improvements are often possible.

One way to simplify the process of making this decision is to add a checkbox to the pull request template: “Backportable patch”. The maintainer who does the merge then would see that the PR is supposed to be backportable, check the patch against the backporting criteria, and attempt to cherry-pick the commit(s). Naturally, this implies that the developer who submitted a patch explored how far their change goes and understands whether the fix or the feature can easily be ported to the release branch.

The net outcome is that users would have even less reasons to keep using development builds and risk their work.

## What's Next
So what are the actionable things for contributors to do?
First of all, we need to make the release process more regular.  Documenting the major and point release processes in the Developer Handbook should be a priority.  The current 0.20.3 and 0.21 releases are an excellent opportunity to do this.  

More conversation is needed about an appropriate release cadence.  Releases that are too frequent will distract from developing new features. Infrequent releases, as we have seen, will push users to the development builds. The goal should be to strike a proper balance between them and increase the value of the stable release with frequent maintenance releases. 

Our suggestion is to make major releases twice a year and point releases depending on the amount and severity of bugs we fix. As long as fixes come in small batches and aren’t fixing anything really bad, we can release them on a monthly basis. A fix for a severe bug like data loss would definitely call for an immediate release.

We also need to define a general timeframe within each release cycle: when we open the main development branch for new features, when we do a feature freeze, when we do a strings freeze, etc.

Beyond that, we will also need to revisit our patch inclusion policy to match a much shorter release cycle. This policy would also have to be updated for feature/improvement backports, which means we need criteria of what constitutes an easily portable change.

To discuss all these things, we created a [discussion topic](https://github.com/orgs/Ondsel-Development/discussions/4) on GitHub and invite you to provide your input.
