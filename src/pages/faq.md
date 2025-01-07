---
slug: faq
---

# Frequently Asked Questions

## Who was behind Ondsel Inc. and what was their relation to FreeCAD?

Ondsel Inc. was founded by [Open Core Ventures](https://opencoreventures.com/) and Brad Collette, a long-time contributor to FreeCAD, author of several books on FreeCAD, and maintainer of the Path (CAM) workbench. The company also employed several other coding and non-coding contributors to FreeCAD and its ecosystem.

## Ondsel is shutting down. What does it mean?

The company is getting closed and stopping all contracts with its employees and contractors. It will no longer do any development or maintain either the Lens server or its codebase.

## What does it mean for FreeCAD? Will its development slow down?

There is no reason for this to happen. FreeCAD has never been this strong before. The team is doing all the right things to fix some long-standing issues, they have great spirit and the right expertise to tackle the next big challenges.

The majority of the Ondsel team have been in and around the FreeCAD project for years. We'll find a way to do more FreeCAD development.

## Is the Lens online service available?

No, we shut it down on November 22, 2024.

## Will Lens users get refunds?

We have done our best to process as many refunds as possible.

## Will you contribute your changes in Ondsel ES back to FreeCAD?

There were four changes specific to Ondsel ES as of the last weekly build:

1. **The Lens addon**. It doesn't make sense to have that as part of FreeCAD now that Lens will go offline. The source code has been [publicly available](https://github.com/Ondsel-Development/Ondsel-Lens-Addon) from the start.
2. **OpenTheme** enabled by default. This is a 3rd-party project; we do not control it.
3. **Custom preference pack**. We customized FreeCAD defaults to our liking and automatically applied the preference pack when building Ondsel ES. The pack is public. We'll make a pull request if the FreeCAD community wants those defaults.
4. **Simulations in the Assembly workbench**. This change has already been [merged](https://github.com/FreeCAD/FreeCAD/pull/16414) to upstream FreeCAD and scheduled for v1.1.

We have already submitted the rest of our changes to FreeCAD, too. Most of them have been released as part of v1.0.

## Will you release the source code of the Lens server?

We have [already released](https://github.com/Ondsel-Development/Ondsel-Server) the source code of the Lens server.

## Will you release the source code of the MBD solver?

We are looking into that.