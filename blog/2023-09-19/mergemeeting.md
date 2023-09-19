---
slug: merge-meeting
title: "Live merge meetings: What we learned from merging 75 Pull Requests in 30 days"
authors:

  - name: Brad Collette
    title: Ondsel Core Team
    url: https://github.com/sliptonic
    image_url: https://avatars.githubusercontent.com/u/538057?v=4

  - name: Rebecca Dodd
    title: Contributing Writer
    url: https://www.thebasementoffice.co.uk
    image_url: /img/Rebecca-Dodd-profile.JPEG

tags: [freecad, development]
image: ./titlecard.png
draft: false
---

Pull request rot is a quick way to turn off first-time and long-time contributors. The merge meeting is one way to get PRs moving again.

> “It isn’t just about the license, but the way that Hashicorp has maintained the Terraform project. … there are open issues and pull requests that just get ignored as Hashicorp clearly doesn’t see value in open source contributors.” – [tedivm on Hacker News](https://news.ycombinator.com/item?id=37135553)

Tensions around the application of open source philosophy have been discussed a lot in recent weeks, and I want to touch on one of the objections to the recent [Hashicorp news](https://news.ycombinator.com/item?id=37081306) here. We’ve talked about [stale issues](https://ondsel.com/blog/better-github-issues) on this blog before, and we can see in the above quote that ignored issues and PRs do have a real impact on contributor motivation and sentiment towards a project. There are a lot of reasons why some PRs slip through the cracks, but there are things you can do to catch them.

## Why some PRs fail to get merged

PRs can suffer death by neglect or by a thousand cuts. Maintainers that ignore PRs or let them get tangled up in dozens of comments (debating the right way to address a problem or implement a feature) can expect one-time or burned-out contributors, slower releases, and a lot of wasted effort on rebasing.

### The PR is too large to effectively review

PRs that do too many things or touch too much of the codebase at once pose a risk of unforeseen side effects. They’re just too unwieldy to review thoroughly (sometimes even [GitHub won’t render the entire diff in the PR](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories#diff-limits)), so the reviewer doesn’t feel comfortable taking responsibility for merging.

### The goals of the PR are too obscure

Some PRs don’t explain the original problem sufficiently for someone to be able to test their behavior. That’s one end of the spectrum—at the other, not everyone contributing to a project has the same use cases, goals, or needs. Once the project evolves beyond its initial purpose and scope, you can end up with PRs that touch or implement an obscure feature that maintainers don’t understand or feel confident in reviewing.

### Competing solutions exist

There are usually multiple ways to solve a problem. A PR that implements one solution can devolve into a debate about the merits of that approach over others, because no consensus on direction was reached ahead of time. Sometimes there is no precedent for the reviewer to fall back on, or they lack the institutional knowledge or context to make the call.

There’s a lot of overlap with our discussion of [why RealThunder’s branch with a topological naming fix for FreeCAD hasn’t been merged yet](https://ondsel.com/blog/freecad-topological-naming/).

## Solutions

### Bring alignment forward

[Better issues](https://ondsel.com/blog/better-github-issues) → better PRs. If you can find alignment (if not consensus) at the issue stage, you avoid a lot of the agonizing over philosophy and implementation in PRs. Documenting best practices and approaches in a project charter or requiring design documents upfront can help with alignment that preempts endless debate.

### Set realistic expectations

Maintainers—even of small projects—need to communicate the expectations and process for successful contribution.

> “If you have no plans to maintain hobby code, you should discourage usage. Say it right up front:
‘TagTree is unsupported and not meant for use in a production Dart application, unless you're willing to fork the code and fix any bugs you find yourself.’

> Or if a project is widely used but difficult to contribute to, you should say so up front, like this:
‘Contributing code is one of the more difficult ways to contribute to Guava, and is almost never what the project really needs most [...] We know it's tempting to submit code before the feature is accepted, but this is not always a good use of your time.’” - [skybrian on Hacker News](https://news.ycombinator.com/item?id=8713694)

A [contributing policy](https://github.com/FreeCAD/FreeCAD/blob/master/CONTRIBUTING.md) should, at the very least, tell contributors when to expect reviews and how to give their PR the best chance of getting merged.

### Reduce the burden of reviewing

You want reviewers to be able to focus on big-picture factors like the performance impact of a PR or alignment with project direction, not spending time on undifferentiated gruntwork. You can do this by ensuring you have extensive test coverage and automation wherever possible.

### Communication

The PR (and related issue) is an act of communication. Both the contributor and the maintainers have a responsibility to communicate effectively.

Contributors should make very few assumptions about what the maintainers already know, and make it extremely easy to understand the context of the PR, the original problem, how the solution works, and any concerns.
Maintainers should ensure that communication is ongoing. Using bots to bump PRs for updates helps to remind reviewers that a PR is outstanding, but also reassures the PR author that it hasn’t been forgotten ([for example](https://github.com/GoogleCloudPlatform/magic-modules/pull/8671#issuecomment-1681197585)).

### Progress over perfection

You can always iterate after merging. If you spend too much time trying to get the PR perfect, a new contributor may get discouraged and never come back.

### The merge meeting

Even if you implement all of the above tactics successfully, sometimes knowing whether or not to merge a PR is hard. When people are uncertain, they will defer to others. Everyone can end up differing and nobody takes action.

To combat PR stagnation, FreeCAD has started having synchronous merge meetings including maintainers and contributors to discuss next steps on outstanding PRs. This live session is important and serves a number of purposes:

- Teasing out concerns and unspoken worry
- Multiple contributors share the risk of merging a PR
- Multiple perspectives put concerns into proper context
- Multiple perspectives offer novel and productive outcomes

Maintainers are referees in the meeting, making sure each contribution is evaluated according to the process. Did it start with an issue? Was there some consensus on the solution? Is the code passing CI?

We won’t hesitate to kick something back if a contributor blatantly ignores the process, but we try not to be militant and will merge good-faith contributions. Sometimes this means merging things we are (mildly) uncomfortable with because the contributor did everything by the book. When that happens, process says you merge.

What does this look like in practice?

- “Let’s ask [another contributor] for a code review, she knows about this module”
- “This PR is really doing two different things. Let’s ask the author to split”
- “This PR and that other one are in conflict. Let’s get those two people talking”
- “This is low risk. Let’s merge it and see if anyone complains”
- “This is a major feature and we’re close to a release. Let’s push this to the next milestone”

### Merge meetings help us move faster now and in the future

The value of these meetings is multifold. We clear a lot of our PR backlog quickly, avoiding the bystander effect that sometimes arises from having multiple reviewers assigned to a PR. We rely on early issues and the contributing policy to ‘push back’ on poorly implemented fixes and rushed code.

Apart from the immediate effects of getting more PRs merged faster, there are longer-term effects.

The merge meeting naturally encourages more discussion of milestone and release goals. We learn which maintainers have a ‘bigger picture’ of the project and community, and the ones who don’t get coaching by participating in the process. As you build consensus as a group, you expose and codify the implicit rules and standards that more experienced reviewers use in their assessment of PRs. By working together to agree on standards of what is acceptable, everyone builds their confidence.

The merge meeting is a good place for maintainers to learn:
- About the codebase
- About the project’s policies and why they exist
- To take appropriate risks
- How to think about a contribution (maintainers learn from each other how to be better at evaluating code)
- About the tools available in the platform

It’s also a good place for contributors to learn about how merge decisions get made and to weigh in on others’ PRs (not just advocate for their own).

## Join us!

The merge meetings are listed on [FreeCAD community calendar](https://www.freecad.org/events.php) and are open to anyone.
Join the next merge meeting.
