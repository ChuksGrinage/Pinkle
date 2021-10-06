import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Input,
  Flex,
  Avatar,
  Heading,
  Center,
} from "@chakra-ui/react";

import { useGetAllPostsQuery } from "generated";
import { useAuth } from "shared/components";
import { useRouter } from "next/router";
import { PostCard } from "shared/components";

export default function Index() {
  const { user: { firstName = "Partner" } = {} } = useAuth();
  const { data: { posts } = {} } = useGetAllPostsQuery();
  const [userInput, setUserInput] = React.useState("");
  const { push } = useRouter();
  const handleInputChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSearchClick = () => {
    console.log({ userInput });
  };

  return (
    <Box bg={"Gainsboro"}>
      <Box h={200} bg={"Cultured"} boxShadow={"md"}>
        <Container maxW="container.xl">
          <Flex>
            <Center h={200}>
              <Avatar size="2xl" />
            </Center>
            <Center h={200}>
              <Box marginLeft="32px">
                <Heading opacity={0.8}>Howdy, {firstName}</Heading>
                <Heading as="h6" size="xs" opacity={0.8}>
                  Good to see you again!
                </Heading>
              </Box>
            </Center>
          </Flex>
        </Container>
      </Box>
      <Container minH="100vh" maxW="container.xl">
        <Flex justifyContent="space-between" marginTop="24px">
          <Heading as="h3" color="darkjunglegreen" opacity={0.8}>
            Trending Topics
          </Heading>
          <Box>
            <Input
              value={userInput}
              onChange={handleInputChange}
              w={400}
              borderColor="darkjunglegreen"
            />
            <Button
              colorScheme="teal"
              marginRight="12px"
              marginLeft="12px"
              onClick={handleSearchClick}
            >
              Search
            </Button>
            <Button colorScheme="teal" onClick={() => push("/create-post")}>
              Create Post
            </Button>
          </Box>
        </Flex>
        <Grid templateRows="repeat(3, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem align="start" rowSpan={3} colSpan={3}>
            {posts?.map((post) => (
              <Box h={150} key={post.id} w="100%">
                <PostCard
                  title={post.title}
                  name={post.author.firstName}
                  id={post.id}
                  truncatedBody={post.truncatedBody}
                />
              </Box>
            ))}
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

Index.requireAuth = true;
