import React from 'react';

import {
  Flex,
  Text,
  Box,
  useColorModeValue,
  Divider,
  ListItem,
  UnorderedList,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import { csCourses, statsCourses } from '../data/education_data';

// Collapsed by default so the section leads with the degree rather than a
// screen of course names.
const Coursework = ({ label, courses, bg }) => {
  const half = Math.ceil(courses.length / 2);
  const column = (items, side) => (
    <UnorderedList styleType="square">
      {items.map((item, index) => (
        <ListItem key={`${label}-${side}${index}`}>
          <Text textStyle="education">{item}</Text>
        </ListItem>
      ))}
    </UnorderedList>
  );

  return (
    <AccordionItem bg={bg} borderRadius="sm" border="none" mt="4">
      <AccordionButton px={4} py={3} _hover={{ opacity: 0.8 }}>
        <Box flex="1" textAlign="left">
          <Text textStyle="body">{label}</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel px={4} pt={0} pb={4}>
        <Grid
          templateColumns={['1fr', null, 'repeat(2, 1fr)']}
          px={['0', null, '2']}
          gap={['0', null, '2']}
        >
          {column(courses.slice(0, half), 'a')}
          {column(courses.slice(half), 'b')}
        </Grid>
      </AccordionPanel>
    </AccordionItem>
  );
};

const Education = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const borderColor = useColorModeValue('black', 'white');
  const courseworkColor = useColorModeValue('gray.300', 'gray.600');
  const carolinaBlue = '#4B9CD3';

  return (
    <Flex
      id="education"
      minH={['auto', null, '100vh']}
      px="8"
      width="100%"
      mt={[10, 16, 0]}
    >
      <Flex
        pt="8"
        direction="column"
        justify="left"
        textAlign="left"
        width="100%"
      >
        <Box borderTop="2px" bg={bgColor} w="100%" p={6} borderRadius="sm">
          <Flex direction="column" justify="center" textAlign="left">
            <Text textStyle="h1">Education</Text>
            <Divider borderColor={borderColor} />

            <Text textStyle="h3" mt="6" color={carolinaBlue}>
              University Of North Carolina at Chapel Hill
            </Text>

            <Text textStyle="body" mt="1" opacity={0.8}>
              Computer Science B.S. + Statistics and Analytics B.S.
            </Text>
            <Text
              // as="span"
              mt={1}
              opacity={0.6}
              display="inline-block"
              fontSize="sm"
            >
              Highest Distinction
            </Text>
            <Text textStyle="body" mt="4">
              Relevant Coursework:
            </Text>

            <Accordion allowMultiple>
              <Coursework
                label="Computer Science"
                courses={csCourses}
                bg={courseworkColor}
              />
              <Coursework
                label="Statistics and Analytics"
                courses={statsCourses}
                bg={courseworkColor}
              />
            </Accordion>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Education;
