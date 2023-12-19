import React from "react";
import TeamMember from "@site/src/components/TeamMember"

const frontmatter = {
  name: "Brad Collette",
  title: "Founder and Chief Technology Officer",
  photo: "bradcollette.jpg",
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
* Loves building innovative and accessible solutions for the engineering community
* Principal Path workbench (CNC) developer and maintainer
* Author of two books on FreeCAD
* Co-founder and board member of the FreeCAD Project Association
`}

</TeamMember>
  )
}
