import React from "react";
import TeamMember from "@site/src/components/TeamMember"

const frontmatter = {
  name: "Pieter Hijma",
  title: "Software Engineer",
  photo: "pieter-hijma.webp",
  social:
    {
      location:
        {
          label: 'Independent Contractor, Netherlands',
        },
    },
}

export default function Member(){

  return (
    <TeamMember frontmatter={frontmatter}>
{`
 - Researcher, open source software and hardware enthusiast
 - Developed the [OSH Automated Documentation](https://osh-autodoc.org/) workbench for FreeCAD
 - Porting the Ondsel Lens addon to a new version of Lens
`}
    </TeamMember>
  )
}




