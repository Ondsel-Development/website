---
title: Ondsel’s contributions to upstream FreeCAD and 3rd-party addons
id: freecad-contributions
---

This page lists major patches submitted to the upstream FreeCAD project. For a policy on collaborating with the upstream project, please see [this part of the handbook](https://ondsel.com/handbook/Operation/collaboration-with-freecad/).

## FreeCAD core

Variable sets, or VarSets — a new system for custom properties (data elements) that can be used to create customizable parametric models.

## General UI improvements

- TabBar workbench selector (idea loosely based on the SelectorToolbar addon by triplus)
- Quick Measure: displays useful data in the status bar about selected geometry features, e.g. lengths, angles, areas, etc.

## Assembly workbench

Developed a brand new integrated assembly workbench based on Ondsel’s own [kinematic solver](https://github.com/Ondsel-Development/OndselSolver) (LGPLv2.1). Features implemented by Ondsel:

* Inserting parts from existing files.
* Joint types: fixed, revolute, cylindrical, slider, ball, rack and pinion, screw, gears, belt, angle, parallel, purpendicular.
* Solving constraints imposed by various joint types.
* Testing motion by dragging parts in accordance with degrees of freedom defined by joints.
* Multiple exploded views.

## Sketcher workbench

- UI cleanup:
  - Improved grouping of toolbars
  - Reduce amount of tools by introducing tools with options in the Tasks panel
- Constraining improvements
  - Floating input widgets for drawing constrained sketches  
  - Smart dimensions tool
  - Automatic horizontal/vertical constraint tool
  - Automatic midpoint constraint
- Better design tools:
  - More sketching tools: Translate, Rotate, Scale, Offset
  - Continuous mode in the Trim tool
  - Symmetry tool rework
  - Fillet tool rework
  - New Chamfer tool
  - Copying and pasting in Sketcher
-  Geometry visualization improvements to help distinguishing features from each other

## TechDraw workbench

- Smart Dimension tool
- Snapping for dimensions
- Toolbars cleanup, incl. integration of multiple view insertion tools into one

## CAM workbench

- Improved sanity reports

## Sheet Metal workbench

- Code refactoring for cleaner logic and UI separation
- Task panel for the New Flange tool based on a proposal by the upstream design working group
