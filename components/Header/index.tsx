"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Group,
  UnstyledButton,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Container,
  Flex,
  Text,
  Modal,
  TextInput,
} from "@mantine/core";
import MyPhoto from "@/public/My-Photo.png";
import classes from "./style.module.css";
import Image from "next/image";
import { IconSun, IconMoon, IconSearch } from "@tabler/icons-react";
import cx from "clsx";

export default function Header() {
  const [opened, { toggle }] = useDisclosure();
  const [opened2, { open, close }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <Container>
        <AppShell.Header
          mt="20px"
          pr="15%"
          pl="15%"
          withBorder={false}
          className={classes.header}
        >
          <Group h="100%" px="md">
            <Group justify="space-between" style={{ flex: 1 }}>
              <Flex align="center" gap="10px">
                <Image
                  src={MyPhoto}
                  width={30}
                  height={30}
                  alt="Logo-My-Photo"
                />
                <Text
                  onClick={() => (location.href = "/")}
                  className={classes.control}
                >
                  Jafar Ali
                </Text>
              </Flex>

              <Flex align="center" gap="30px">
                <UnstyledButton
                  onClick={() => (location.href = "/Contact")}
                  className={classes.control}
                >
                  Contact
                </UnstyledButton>
                <ActionIcon
                  style={{ border: "none" }}
                  onClick={() =>
                    setColorScheme(
                      computedColorScheme === "light" ? "dark" : "light"
                    )
                  }
                  variant="default"
                  size="md"
                  aria-label="Toggle color scheme"
                >
                  <IconSun
                    className={cx(classes.icon, classes.light)}
                    stroke={1.5}
                  />
                  <IconMoon
                    className={cx(classes.icon, classes.dark)}
                    stroke={1.5}
                  />
                </ActionIcon>

                <ActionIcon
                  style={{ border: "none", background: "transparent" }}
                  variant="default"
                  size="sm"
                  onClick={open}
                >
                  <IconSearch size="1rem" className={classes.iconSearch} />
                </ActionIcon>

                <Modal opened={opened2} onClose={close}>
                  <TextInput
                    leftSection={<IconSearch />}
                    placeholder="Search"
                  />
                </Modal>
              </Flex>
            </Group>
          </Group>
        </AppShell.Header>
      </Container>
    </AppShell>
  );
}
