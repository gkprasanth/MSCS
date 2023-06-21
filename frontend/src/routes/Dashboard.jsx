import React from "react";

import { Box, Container, Stack, Typography } from "@mui/material";
import BarChart from "../charts/BarChart";
import StateSocieties from "../charts/StateSocieties";
import { PieChart } from "../charts/PieChart";

function Tile({ title, content }) {
  return (
    <Box
      sx={{
        boxShadow: 5,
        width: "fit-content",
        padding: 6,
        backgroundColor: "white",
        borderRadius: 2,
      }}
    >
      <Stack direction={"row"} gap={5}>
        <Stack direction={"column"}>
          <Typography>{title}</Typography>
          <Typography>{content}</Typography>
        </Stack>
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "red",
          }}
        />
      </Stack>
    </Box>
  );
}

const Dashboard = () => {
  const tiles = [
    {
      title: "Total Registered Societies",
      content: "100,000",
    },
    {
      title: "Total Sectors",
      content: "100,000",
    },
    {
      title: "Total Revenue",
      content: "100,000",
    },
  ];

  return (
    <>
      <Container
        disableGutters
        maxWidth={"xl"}
        sx={{
          backgroundColor: "#e9e9e9",
          padding: 2,
          height: "fit-content",
          overflow: "hidden",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <Typography variant={"h4"} sx={{ textAlign: "center" }}>Dashboard</Typography>
        <Stack direction={"column"} gap={4}>
          <Stack
            direction={"row"}
            gap={5}
            sx={{
              margin: "auto",
              width: "100%",
              justifyContent: "space-evenly ",
            }}
          >
            {tiles.map((item, idx) => {
              return (
                <Tile key={idx} title={item.title} content={item.content} />
              );
            })}
          </Stack>

          <Stack
            direction={"column"}
            gap={3}
            sx={{
              justifyContent: "center",
              width: "100%",
              margin: "auto",
            }}
          >
            <Box
              width={"90%"}
              sx={{
                backgroundColor: "white",
                height: "fit-content",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
                padding: 1.5,
                margin: "auto",
              }}
            >
              <StateSocieties />
            </Box>

            <Stack direction={"row"} gap={3} width={"100%"} sx={{
              justifyContent: "center",
              margin: "auto",

            }} >
              <Box
                width={"45%"}
                sx={{
                  backgroundColor: "white",
                  height: "fit-content",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                  padding: 1.5,
                }}
              >
                <BarChart />
              </Box>

              <Box
                width={"45%"}
                sx={{
                  backgroundColor: "white",
                  height: "fit-content",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                  padding: 1.5,
                }}
              >
                <PieChart />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Dashboard;
