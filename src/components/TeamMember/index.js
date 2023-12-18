import React from "react";
import styles from "./styles.module.css";
import Markdown from 'react-markdown';


export default function TeamMember({children, frontmatter}) {

  const photo = require( '@site/src/pages/team/' + frontmatter.photo ).default;

  let socialEntries = [];
  if( frontmatter.social ){
    let social = frontmatter.social;
    Object.values(social).forEach( entry => {
      socialEntries.push( 
        <a key={entry.label} href={entry.url} className={'margin-right--md ' + styles.member_social} title={entry.title}>
          {entry.label}
        </a> 
      );
    })
  }


  return (
    <div className={'col col--4 margin-bottom--none padding-vert--md padding-horiz--sm'}>

      <div className={'padding-vert--md '+styles.team_member}>
        <div className='col '>
          <img className={ styles.member_photo } src={ photo } />
        </div>

        <div className={ 'col '+ styles.member_info }>

        <h2 className={'margin-bottom--xs '+ styles.member_name }>{frontmatter.name}</h2>

          { frontmatter.title && 
          <h3 className={'margin-bottom--sm ' + styles.member_title }>{frontmatter.title}</h3> 
          }

          <div className={styles.member_contact}>
          { frontmatter.social && socialEntries }
          </div>

          <div className={ styles.member_text }>
          <Markdown>{children}</Markdown>
          </div>

        </div>
      </div>

    </div>
  )
}
