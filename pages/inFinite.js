import Content from "./Content";
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
export default function inFinite(props) {
  return (
    <>
      <Box pt="35px">
        <Content data={props.data} />
      </Box>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=30"
  ).then((response) => response.json());
  return {
    props: { data }
  };
};