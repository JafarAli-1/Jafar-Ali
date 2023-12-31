import { Box, Card, Badge, Text, Group, Button, Flex } from "@mantine/core";
import Image from "next/image";
import classes from "./style.module.css";
import RussailProjects from "@/public/Russail.png";
import ElardProjects from "@/public/Elard.png";
import Premitto from "@/public/Premitto.png";
import IBS from "@/public/IBS.png";
import Najah from "@/public/Najah.png";

export default function Cards() {
  const cardData = [
    {
      image: Premitto,
      alt: "Premitto Projects",
      title: "Premitto",
      state: "Done",
      description:
        "Website offers a variety of deals and discounts in the United Arab Emirates",
      href: "https://www.premitto.com/",
    },
    {
      image: Najah,
      alt: "Al Najah Projects",
      title: " Al Najah Sponge Machines",
      state: "Done",
      description: "Sponge Machinery Industry Company",
      href: "https://alnajahspongemachines.com/",
    },
    {
      image: RussailProjects,
      alt: "Russail Projects",
      title: "RUSSAIL WATER",
      state: "Done",
      description:
        "Russail Water is a product that sells clean water in the United Arab Emirates",
      href: "https://russailwater.ae/en",
    },
    {
      image: IBS,
      alt: "IBS Project",
      title: "University in Germany",
      state: "Done",
      description: "German university website",
      href: "https://folioibsweb.meta-itech.com/",
    },
    {
      image: ElardProjects,
      alt: "Elard Projects",
      title: "ELARD Group",
      state: "Done",
      description: "Website for renewable energy solutions in the Middle East",
      href: "https://elardweb.meta-itech.com/en",
    },
  ];
  return (
    <Flex
      w="80%"
      justify="space-between"
      align="center"
      mt="5%"
      pl="20%"
      gap="20px"
      wrap="wrap"
      className={classes.flexBoxCards}
    >
      {cardData.map((data, index) => (
        <Card
          key={index}
          w="45%"
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className={classes.card}
        >
          <Card.Section>
            <Image
              src={data.image}
              className={classes.imgProjects}
              alt={data.alt}
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500} lineClamp={1}>
              {data.title}
            </Text>
            <Badge color="teal" variant="light">
              {data.state}
            </Badge>
          </Group>

          <Text size="sm" c="dimmed">
            {data.description}
          </Text>

          <a target="_blank" href={data.href} className={classes.linkDemo}>
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              View
            </Button>
          </a>
        </Card>
      ))}
    </Flex>
  );
}
