import React from "react";
import TeamMember from "@site/src/components/TeamMember"

const frontmatter = {
  name: "Aik-Siong Koh, PhD",
  title: "Senior Software Engineer",
  photo: "aik-siong-koh.webp",
  social: {
    location: {
      label: 'USA'
    }
  }
}


export default function Member(){

  return (

<TeamMember frontmatter={frontmatter}>

{`
 - Passionate about solving real-life problems with mathematics and engineering
 - Developed 3D motion simulation for Autodesk Inventor (IN-Motion), Ansys SpaceClaim (SC-Motion), Alibre Design CAD
 - Made his original kinematic and multi-body dynamics solver available for FreeCAD’s integrated assembly workbench.
`}

</TeamMember>

  )
}
