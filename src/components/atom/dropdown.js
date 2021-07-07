import React from 'react'
import styles from './dropdown.module.css'
export default function dropdown(props) {
    const subTitles = props.subTitles
    const listItems = subTitles.map((subTitles) =>
  <a  className={styles.dropdownLink} href={'/' + props.slug}>{subTitles}</a>
);
    return (
        <div class={styles.dropdown}>
        <button class={styles.dropbtn}>{props.title}</button>
        <div class={styles.dropdownContent}>
            {listItems}
       
        </div>
      </div>
    )
}
