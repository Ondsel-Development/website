import React from "react";
import TeamMember from "@site/src/components/TeamMember"

const frontmatter = {
  name: "John Dupuy",
  title: "Senior Software Engineer",
  photo: "john-dupuy.webp",
  social: {
    location: {
      label: 'Employee, USA'
    }
  }
}

export default function Member(){

  return (
<TeamMember frontmatter={frontmatter}>

{`
 - Researcher at heart, loves solving challenges
 - Provides code review and management for the project aiming to mitigate topology naming issues in FreeCAD
 - Lead developer working on Ondsel Lens and its API
 - Develops billing and internal admin services
`}

</TeamMember>
  )
}
