/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const About: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>About Tiny Dino Builder</title>
            </Head>
            <h1 className={styles.Title}>Tiny Dino Builder</h1>
            <main className={styles.aboutme}>
                <h2>Hi Tiny Dino Community!</h2>
                <p>Created by <a style={{color: '#00CCFF'}} target="_blank" rel="noreferrer" href='https://twitter.com/eight_oo_eight'>@eight_oo_eight</a></p>
                <p>This is just a little project I created after seeing <a style={{color: '#00CCFF'}} target="_blank" rel="noreferrer" href='https://twitter.com/tinydinosnft'>@tinydinosnft</a>&apos;s tweet about such an idea</p>
                <p>Feel free to give suggestions if you believe that something can be made even better.</p>
                <Link href={'/'}><a style={{color: '#00CCFF'}}>Back to Builder</a></Link>
            </main>
        </div>
    )
}

export default About
