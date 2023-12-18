import React from "react";
import TeamMember from "@site/src/components/TeamMember"

const frontmatter = {
  name: "Alexandre Prokoudine",
  title: "Researcher and Content Marketer",
  photo: "alexandre_prokoudine.webp",
  social: {
    location: {
      label: 'Independent Contractor, Serbia'
    }
  }
}


export default function Member(){

  return (

<TeamMember frontmatter={frontmatter}>

{`
 - Passionate about FOSS projects that help turn ideas into reality
 - Does planning, research, and writing/filming of new content
`}

</TeamMember>

  )
}
