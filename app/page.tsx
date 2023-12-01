"use client";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import MainPage from "@/components/MainPage";
import { Box } from "@mantine/core";

export default function Home() {
  return (
    <Box>
      <Header />
      <MainPage />
      <Footer />
    </Box>
  );
}
