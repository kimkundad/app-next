
import {
    Box, Heading,
    Avatar,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Grid,
    GridItem,
    SimpleGrid,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Card
} from "@chakra-ui/react";
import Link from 'next/link'
import Head from 'next/head'


function BlogDetail({ post }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box pt="35px">
                <Text fontSize='xl'>{post.title}</Text>
                <Text fontSize='md'>{post.body}</Text>
            </Box>
        </>
    )
}

export async function getStaticProps({ params }) {

    const id = params.id

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()

    return {
        props: {
          post,
        },
      }

}

export async function getStaticPaths() {
    const url = `https://jsonplaceholder.typicode.com/posts`
    const res = await fetch(url)
    const posts = await res.json()
  
    const paths = posts.map((post) => {
      return {
        params: { id: String(post.id) },
      }
    })
  
    return {
      paths,
      fallback: false,
    }
  }

export default BlogDetail