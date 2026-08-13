import React from 'react';

import {
  Flex,
  Text,
  Box,
  useColorModeValue,
  Divider,
  Badge,
  Link,
} from '@chakra-ui/react';

import { skills_data } from '../data/skills_data';

const Skills = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const borderColor = useColorModeValue('black', 'white');
  // Same badge treatment as the per-role badges in Experience.
  const badgeColor = useColorModeValue('#A0AEC080', '#71809680');

  return (
    <Flex
      id="skills"
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
            <Text as="h2" textStyle="h1">
              Skills
            </Text>
            <Divider borderColor={borderColor} />

            {Object.keys(skills_data).map(group => (
              <Box key={group} mt="6">
                <Text as="h3" textStyle="body" opacity={0.6} mb="2">
                  {group}
                </Text>
                <Flex direction="row" wrap="wrap" gridGap="2">
                  {skills_data[group].map(([href, label]) => (
                    <Badge
                      key={label}
                      bg={badgeColor}
                      px="2"
                      py="1"
                      as={Link}
                      href={href}
                      isExternal
                    >
                      {label}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Skills;
