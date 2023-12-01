import { Container, Group, ActionIcon, rem, Text } from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import classes from "./style.module.css";
import Link from "next/link";

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text fz="85%" className={classes.responsiveText}>
          Copyright 2023 @Jafar Ali
        </Text>
        <Text fz="85%" className={classes.responsiveText}>
          <Link
            className={classes.mailLink}
            href="mailto:Jafar-Ali.1@outlook.com"
          >
            ✉️ Jafar-Ali.1@outlook.com
          </Link>
        </Text>
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            onClick={() => window.open("https://t.me/JafarAli_1")}
            size="lg"
            color="gray"
            variant="subtle"
          >
            <IconBrandTelegram
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            onClick={() =>
              window.open("https://www.linkedin.com/in/jafar-ali-b4a8b9206/")
            }
            size="lg"
            color="gray"
            variant="subtle"
          >
            <IconBrandLinkedin
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            onClick={() => window.open("https://wa.me/963930460121")}
            size="lg"
            color="gray"
            variant="subtle"
          >
            <IconBrandWhatsapp
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
