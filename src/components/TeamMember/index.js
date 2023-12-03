import React from "react";
import styles from "./styles.module.css";


export default function TeamMember({children, frontMatter}) {
  const photo = require( '@site/src/pages/team/' + frontMatter.photo ).default;

  let socialEntries = [];
  if( frontMatter.social ){
    let social = frontMatter.social;
    Object.values(social).forEach( entry => {
      socialEntries.push( 
        <a href={entry.url} className={'margin-right--md ' + styles.member_social} title={entry.title}>
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

        <h2 className={'margin-bottom--xs '+ styles.member_name }>{frontMatter.name}</h2>

    { frontMatter.title
        && <h3 className={'margin-bottom--sm ' + styles.member_title }>{frontMatter.title}</h3> }

          <div className={styles.member_contact}>
          { frontMatter.social && socialEntries }
          </div>

          <div className={ styles.member_text }>
          {children}
          </div>

        </div>
      </div>

    </div>
  )
}
