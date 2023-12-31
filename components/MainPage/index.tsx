import { Box, Divider } from "@mantine/core";
import {
  AppShell,
  Container,
  Flex,
  Text,
  Group,
  ActionIcon,
  Modal,
  Mark,
  AspectRatio,
} from "@mantine/core";
import Image from "next/image";
import MyPhoto from "@/public/My-Photo.png";
import BuldingsImage from "@/public/Buldings.jpg";
import classes from "./style.module.css";
import { useDisclosure } from "@mantine/hooks";
import LinkedInSVG from "@/assets/SVG/Linkedin";
import ResumeSVG from "@/assets/SVG/Resume";
import {
  IconBrandLinkedin,
  IconBrandTelegram,
  IconNote,
} from "@tabler/icons-react";
import Cards from "@/shared/Cards";

export default function MainPage() {
  const [opened, { toggle }] = useDisclosure();
  const [opened2, { open, close }] = useDisclosure(false);
  return (
    <Box>
      <AppShell
        header={{ height: 90 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: false },
        }}
        padding="md"
      >
        <AppShell.Main>
          <Container maw="90%">
            <Image
              src={BuldingsImage}
              className={classes.imgBuildings}
              alt="Buildings Image"
            />

            <Image
              src={MyPhoto}
              className={classes.myPhoto}
              alt="Logo-My-Photo"
            />

            <Text pos="relative" top="-40px" ta="center" fw={500} fz="50px">
              Jafar Ali
            </Text>

            <Text
              pos="relative"
              top="-20px"
              ta="center"
              fz="16px"
              lh="2"
              w="70%"
              m="auto"
              className={classes.introText}
            >
              Hi, I am Jafar Ali and I am a Frontend Engineer at Kasroad. I have
              been working in the tech industry for over two years now, and have
              been involved in many different projects and different companies
              during that time. This website is my personal portfolio, I am
              always looking to learn more, and I am thrilled to explore any new
              opportunities that come my way. I will consider them with great
              enthusiasm and interest.
            </Text>
          </Container>

          {/* Right Icon (Telegram + LinkedIn) */}

          <Flex
            direction="column"
            gap="20px"
            pos="fixed"
            top="70%"
            right="5%"
            lightHidden
            className={classes.boxIcons}
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jafar-ali-b4a8b9206/"
              className={classes.boxSVG}
            >
              <LinkedInSVG />
            </a>
            <a
              target="_blank"
              href="https://t.me/JafarAli_1"
              className={classes.boxSVG}
            >
              <ActionIcon
                onClick={() => window.open("https://t.me/JafarAli_1")}
                size="xl"
                color="gray"
                variant="transparent"
              >
                <IconBrandTelegram
                  style={{ width: "50%", height: "50%" }}
                  stroke={2.5}
                />
              </ActionIcon>
            </a>
          </Flex>

          <Flex
            direction="column"
            gap="20px"
            pos="fixed"
            top="70%"
            right="5%"
            darkHidden
            className={classes.boxIcons}
          >
            <ActionIcon
              onClick={() =>
                window.open("https://www.linkedin.com/in/jafar-ali-b4a8b9206/")
              }
              size="xl"
              color="gray"
              variant="transparent"
              className={classes.boxSVG2}
            >
              <IconBrandLinkedin
                style={{ width: "50%", height: "50%" }}
                stroke={2.5}
              />
            </ActionIcon>

            <ActionIcon
              onClick={() => window.open("https://t.me/JafarAli_1")}
              size="xl"
              color="gray"
              variant="transparent"
              className={classes.boxSVG2}
            >
              <IconBrandTelegram
                style={{ width: "50%", height: "50%" }}
                stroke={2.5}
              />
            </ActionIcon>
          </Flex>

          <Group justify="center" gap="50px" className={classes.group}>
            <Flex gap="2px" mt="20px" justify="center">
              <Text>
                <ResumeSVG />
              </Text>

              <Text className={classes.linkContact} onClick={open} lightHidden>
                Jafar Ali’s Resume ...
              </Text>
              <Text className={classes.linkContact} onClick={open} darkHidden>
                <Mark color="green" p="6px" pr="100px">
                  &#10064; Jafar Ali’s Resume ...
                </Mark>
              </Text>
              <Modal opened={opened2} onClose={close}>
                <AspectRatio ratio={1000 / 2080}>
                  <iframe
                    className={classes.iframe}
                    src="../JafarAli-Frontend Engineer.pdf"
                    loading="lazy"
                    allowFullScreen
                    allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </AspectRatio>{" "}
              </Modal>
            </Flex>
            <Flex gap="2px" mt="20px" justify="center" lightHidden>
              <span>✉️</span>
              <Text
                onClick={() => (location.href = "/Contact")}
                className={classes.linkContact}
              >
                Contact
              </Text>
            </Flex>
            <Flex gap="2px" mt="20px" justify="center" darkHidden>
              <Text
                onClick={() => (location.href = "/Contact")}
                className={classes.linkContact}
              >
                <Mark p="6px" pr="100px">
                  ✉️ Contact{" "}
                </Mark>
              </Text>
            </Flex>
          </Group>

          <Text
            fw={500}
            fz="24px"
            pl="20%"
            mt="10%"
            className={classes.titleProjects}
          >
            Projects
          </Text>

          <Box w="80%" pl="20%" className={classes.divider}>
            <Divider />
          </Box>

          <Cards />
        </AppShell.Main>
      </AppShell>
    </Box>
  );
}
