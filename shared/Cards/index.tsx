import { Box, Card, Badge, Text, Group, Button, Flex } from "@mantine/core";
import Image from "next/image";
import classes from "./style.module.css";
import RussailProjects from "@/public/Russail.png";
import ElardProjects from "@/public/Elard.png";
import Premitto from "@/public/Premitto.png";
import IBS from "@/public/IBS.png";
import Najah from "@/public/Najah.png";

export default function Cards() {
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
      {/* First Card */}

      <Card
        w="45%"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        className={classes.card}
      >
        <Card.Section>
          <Image
            src={Premitto}
            className={classes.imgProjects}
            alt="Premitto Projects"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500} lineClamp={1}>
            Premitto
          </Text>
          <Badge color="teal" variant="light">
            Done
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Website offers a variety of deals and discounts in the United Arab
          Emirates
        </Text>

        <a
          target="_blank"
          href="https://www.premitto.com/"
          className={classes.linkDemo}
        >
          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            View
          </Button>
        </a>
      </Card>

      {/* Second Card */}

      <Card
        w="45%"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        className={classes.card}
      >
        <Card.Section>
          <Image
            src={Najah}
            className={classes.imgProjects}
            alt="Al Najah Projects"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500} lineClamp={1}>
            Al Najah Sponge Machines
          </Text>
          <Badge color="teal" variant="light">
            Done
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Sponge Machinery Industry Company
        </Text>

        <a
          target="_blank"
          href="https://alnajahspongemachines.com/"
          className={classes.linkDemo}
        >
          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            View
          </Button>
        </a>
      </Card>

      {/* Third Card */}
      <Card
        w="45%"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        className={classes.card}
      >
        <Card.Section>
          <Image
            src={RussailProjects}
            className={classes.imgProjects}
            alt="Russail Projects"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>RUSSAIL WATER</Text>
          <Badge color="teal" variant="light">
            Done
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Russail Water is a product that sells clean water in the United Arab
          Emirates
        </Text>

        <a
          target="_blank"
          href="https://russailwater.ae/en"
          className={classes.linkDemo}
        >
          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            View
          </Button>
        </a>
      </Card>

      {/* Fourth Card */}
      <Card
        w="45%"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        className={classes.card}
      >
        <Card.Section>
          <Image src={IBS} className={classes.imgProjects} alt="IBS Project" />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500} lineClamp={1}>
            University in Germany
          </Text>
          <Badge color="teal" variant="light">
            Done
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          German university website
        </Text>

        <a
          target="_blank"
          href="https://folioibsweb.meta-itech.com/"
          className={classes.linkDemo}
        >
          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            View
          </Button>
        </a>
      </Card>

      {/* Fifth Card */}
      <Card
        w="45%"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        className={classes.card}
      >
        <Card.Section>
          <Image
            src={ElardProjects}
            className={classes.imgProjects}
            alt="Elard Projects"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500} lineClamp={1}>
            ELARD Group
          </Text>
          <Badge color="teal" variant="light">
            Done
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          Website for renewable energy solutions in the Middle East
        </Text>

        <a
          target="_blank"
          href="https://elardweb.meta-itech.com/en"
          className={classes.linkDemo}
        >
          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            View
          </Button>
        </a>
      </Card>
    </Flex>
  );
}
