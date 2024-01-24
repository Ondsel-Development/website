import React from "react";
import TeamMember from "@site/src/components/TeamMember"

const frontmatter = {
  name: "Adrián Insaurralde Avalos",
  title: "DevOps Engineer",
  photo: "adrian-insaurralde.webp",
  social: {
    location: {
      label: 'Paraguay'
    }
  }
}


export default function Member(){

  return (
<TeamMember frontmatter={frontmatter}>

{`
 - Has been contributing patches to FreeCAD since 2020
 - FreeCAD release manager since 2022
 - Maintains Ondsel’s CI and helps building the Ondsel version of FreeCAD
`}

</TeamMember>
  )
}
