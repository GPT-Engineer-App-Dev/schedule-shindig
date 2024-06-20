import { Container, Text, VStack, Heading, Box, Button, Flex, IconButton } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlus, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Event Management Platform</Heading>
        <Text fontSize="lg" textAlign="center">Manage your events efficiently and effortlessly.</Text>
        <Flex direction="column" align="center" justify="center" width="100%">
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" size="lg" width="100%" mb={4}>
            View Events
          </Button>
          <Button leftIcon={<FaPlus />} colorScheme="teal" size="lg" width="100%" mb={4}>
            Create Event
          </Button>
          <Button leftIcon={<FaUsers />} colorScheme="teal" size="lg" width="100%">
            Manage Attendees
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;