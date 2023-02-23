import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
    Box, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Card, CardBody, Text
} from "@chakra-ui/react";

export default function Search() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box pt="35px">
                <Card p="10px">
                    <CardBody>
                        <TableContainer>
                            <Table variant='simple'>

                                <Tbody>
                                    <Tr>
                                        <Td> ดึงข้อมูล <b>getServerSideProps</b></Td>
                                        <Td isNumeric>
                                            <Link href="/getSSP">
                                                Go
                                            </Link>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> ดึงข้อมูล <b>getStaticProps</b></Td>
                                        <Td isNumeric>
                                            <Link href="/getSTP">
                                                Go
                                            </Link>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> ดึงข้อมูล <b>Incremental Static Regeneration</b></Td>
                                        <Td isNumeric>
                                            <Link href="/getISR">
                                                Go
                                            </Link>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> การทำ Dynamic Routes</Td>
                                        <Td isNumeric>
                                            <Link href="/blog">
                                                Go
                                            </Link>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td> การทำ Infinite Scroll</Td>
                                        <Td isNumeric>
                                            <Link href="/inFinite">
                                                Go
                                            </Link>
                                        </Td>
                                    </Tr>
                                </Tbody>

                            </Table>
                        </TableContainer>
                    </CardBody>
                </Card>
            </Box>
        </>
    )
}