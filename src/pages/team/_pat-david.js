import React from "react";
import TeamMember from "@site/src/components/TeamMember"

const frontmatter = {
  name: "Pat David",
  title: "Web Helper",
  photo: "patdavid.jpg",
  social:
    {
      email:
        {
          url: 'mailto:patdavid@gmail.com',
          label: 'patdavid@gmail.com',
          title: 'Email me',
        },
      website:
        {
          url: 'https://patdavid.net',
          label: 'patdavid.net',
          title: 'Homepage',
        },
      twitter:
        {
          url: 'https://twitter.com/@patdavid',
          label: '@patdavid',
          title: 'Follow me on X',
        },
    },
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




