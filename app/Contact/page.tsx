"use client";

import Header from "@/components/Header";
import { Box, Container, Flex, Mark, Text } from "@mantine/core";
import Image from "next/image";
import BuldingsImage from "@/public/Buldings.jpg";
import styles from "./style.module.css";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <Box>
      <Header />

      <Container maw="90%">
        <Image
          src={BuldingsImage}
          className={styles.imgBuildings}
          alt="Buildings Image"
        />
        <Text pos="relative" top="-70px" ta="center" fz="78px">
          ✉️
        </Text>
        <Text pos="relative" top="-50px" fz="40px" fw={600} ta="center">
          Contact
        </Text>
        <Text pos="relative" top="-30px" fz="16px" ta="center">
          In case you’d like to contact me for any opportunities, advice, or
          just a chat, please feel free to contact me via{" "}
          <Link
            className={styles.textLink}
            href="https://www.linkedin.com/in/jafar-ali-b4a8b9206/"
          >
            LinkedIn
          </Link>
        </Text>

        <Flex justify="center" gap="3px" align="center" mt="md">
          <Text lightHidden>
            <Link className={styles.textLink} href="https://t.me/JafarAli_1">
              Telegram
            </Link>
          </Text>
          <Text darkHidden>
            <Mark color="blue">
              <Link className={styles.textLink} href="https://t.me/JafarAli_1">
                Telegram
              </Link>
            </Mark>
          </Text>
          <span>•</span>
          <Text lightHidden>
            <Link className={styles.textLink} href="https://wa.me/963930460121">
              WhatsApp
            </Link>
          </Text>
          <Text darkHidden>
            <Mark color="green">
              <Link
                className={styles.textLink}
                href="https://wa.me/963930460121"
              >
                WhatsApp
              </Link>
            </Mark>
          </Text>
        </Flex>

        <Text ta="center" mt="xl" lightHidden>
          <Link
            className={styles.mailLink}
            href="mailto:Jafar-Ali.1@outlook.com"
          >
            ✉️ Jafar-Ali.1@outlook.com
          </Link>
        </Text>
        <Text ta="center" mt="xl" darkHidden>
          <Mark>
            <Link
              className={styles.mailLink}
              href="mailto:Jafar-Ali.1@outlook.com"
            >
              ✉️ Jafar-Ali.1@outlook.com
            </Link>
          </Mark>
        </Text>
      </Container>

      <Footer />
    </Box>
  );
}
