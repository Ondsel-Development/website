// ---
// name: "Pierre-Louis Boyer"
// title: "Software Engineer"
// social:
//   location:
//     label: 'Employee, France'
// photo: "pierre-louis-boyer.webp"
// ---
import React from "react";
import TeamMember from "@site/src/components/TeamMember"

const frontmatter = {
  name: "Pierre-Louis Boyer",
  title: "Software Engineer",
  photo: "pierre-louis-boyer.webp",
  social: {
    location: {
      label: 'Employee, France'
    }
  }
}



export default function Member(){

  return (

<TeamMember frontmatter={frontmatter}>

{`
 - Enjoys building things from scratch, whether it’s software or real-world products
 - Has been hacking on UX/UI improvements and the Sketcher workbench since 2022
 - Lead developer of the integrated assembly workbench
 - Lead developer and maintainer of the Ondsel Lens addon for FreeCAD
 - test
`}

</TeamMember>

  )
}
