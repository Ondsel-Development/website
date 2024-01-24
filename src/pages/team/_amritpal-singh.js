import React from "react";
import TeamMember from "@site/src/components/TeamMember"

const frontmatter = {
  name: "Amritpal Singh",
  title: "Senior Software Engineer",
  photo: "amritpal-singh.webp",
  social: {
    location: {
      label: 'India'
    }
  }
}


export default function Member(){

  return (

<TeamMember frontmatter={frontmatter}>

{`
 - Full-stack developer who loves making web applications for the real world.
 - Contributed the [Reinforcement workbench](https://github.com/amrit3701/FreeCAD-Reinforcement) as a Google Summer of Code student
 - Mentored other GSoC students in subsequent runs of the programme
 - Developed much of the back-end and the front-end of Ondsel Lens
`}

</TeamMember>
  )
}
