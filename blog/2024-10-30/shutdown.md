---
slug: goodbye
title: "We are shutting down Ondsel"
description: "After operating for almost two years, Ondsel has made the difficult decision to cease operations and close down."
authors:

  - name: Brad Collette
    title: Ondsel Core Team
    url: https://github.com/sliptonic
    image_url: https://avatars.githubusercontent.com/u/538057?v=4

tags: [ondsel, es, lens]
image: ./titlecard.jpg
draft: false
---

After operating for almost two years, Ondsel has made the difficult decision to cease operations and close down. We are incredibly thankful for the support we’ve received from the FreeCAD community and the larger engineering CAD communities.

<!-- truncate -->

## Why Ondsel is closing down

From the beginning, we knew competing with commercial CAD would be tough. Closed-source CAD is taught in schools and is deeply entrenched in established industry use. We knew that to be successful, we would have to find a way to provide real value and coexist in environments where other tools are already used.

While seeking a scalable and repeatable business model, we conducted numerous surveys and interviewed nearly a hundred mechanical engineers, service engineers, tinkerers, inventors, workshop owners, and other users. While we found support among independent and hobbyist users who genuinely wanted us to succeed, we failed to find commercial adoption to justify a venture-capitalized startup. Ultimately, we could not find a product-market fit and ran out of runway to continue the search.

## Things we are proud of

While we have failed to build a sustainable commercial business around FreeCAD, we have accomplished many things.

### A better FreeCAD application

* We contributed a new integrated assembly workbench that was sorely missing in the program and a 3D constraints solver on which the workbench relies.
* We also contributed significant improvements to the usability of Sketcher and TechDraw.
* We introduced VarSets — a brand-new custom properties system.
* We introduced new features to TechDraw and CAM workbenches.
* Beyond FreeCAD itself, we contributed to third-party addons like SheetMetal.

### Lens as a service for connected CAD

* We demonstrated what a connected CAD experience could look like with open source at its core.
* We built a service that enabled teams to organize iterated development of hardware products.
* We built a simple way to share your models publicly or privately, including PIN protection for share links.
* We made it possible to publish parametric models online that you can modify and download.

Between our May release (2024.2) and today alone, 145 pull requests by the Ondsel team have been merged into the upstream codebase, making FreeCAD 1.0 a more featureful and polished release than we all hoped it would be.

### Our relationship with the FreeCAD community

Having a commercial partner working on FreeCAD also meant that the project had to adapt. Our presence and cooperation affected how the FreeCAD project operates. Our blog brought attention to missing features and helped the project establish priorities. Working with the core maintainers, we improved the contribution process, sped up the merge process, and helped form the Design Working Group and the new CAD Advisory Group. These are significant advances that will benefit the community for a long time.  

Most of all, we showed that a commercial partner can be an asset to the project. We hope many more entrepreneurs will build around FreeCAD in the spirit of cooperation to establish a robust ecosystem that benefits the world and is profitable. 

## What happens to Ondsel ES

OES was designed to be our flavor of FreeCAD with more pleasing UX/UI, frequent releases, and added value.

Part of the better UX/UI was our improvements to Sketcher and TechDraw—all users of FreeCAD 1.0 will enjoy those. We owe much of the praise for the UI to Joe Sardos, who designed OpenTheme. We didn’t fund that project, but we pushed it on our users, and they loved it. So we think Joe did a spectacular job, and we cannot thank him enough for that. 

The added value we shipped as part of OES is all available as free and open-source code, and most of it will be part of FreeCAD.

As such, there is no point in releasing v2024.3. However, we are not abandoning the FreeCAD community. Brad will continue hacking in the CAM workbench, Pierre will likely continue working on Assembly and Sketcher, and Pieter will keep working on varsets and variant parts thanks to grants issued by the FreeCAD Project Association. All future contributions to FreeCAD by our former team members will now go directly to the upstream project.

We have yet to submit a few improvements to FreeCAD, namely the reloadable objects feature, which we strongly believe should be a core feature. We will submit this as a PR to upstream.

## What happens to the user base

We will notify customers and users of the shutdown. The server will continue running for a reasonable period to give users time to download their data. If you have any projects on Lens that you haven’t backed up anywhere else, please download them as soon as possible.

Paying customers will be reimbursed for any remaining time on their subscription.

For questions or comments please email us at [support@ondsel.com](mailto:support@ondsel.com).
