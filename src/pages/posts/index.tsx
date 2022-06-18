import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic'; 

import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
        <Head>
            <title>Posts | Ignews </title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a>
                    <time>12 de março de 2022</time>
                    <strong>Creating a Monorepo with lerna & Yarn Workspaces</strong>
                    <p>Lorem ipsum d</p>
                </a>
                <a>
                    <time>12 de março de 2022</time>
                    <strong>Creating a Monorepo with lerna & Yarn Workspaces</strong>
                    <p>Lorem ipsum d</p>
                </a>
                <a>
                    <time>12 de março de 2022</time>
                    <strong>Creating a Monorepo with lerna & Yarn Workspaces</strong>
                    <p>Lorem ipsum d</p>
                </a>
            </div>
        </main>
        </>
    )
}

export const getStaticProps: GetStaticProps= async () => {
    const prismic = getPrismicClient()
    const response = await prismic.getByType('publication', {
        pageSize: 100,
    })
    

    console.log(response)

    return {
        props: {

        }
    }
}