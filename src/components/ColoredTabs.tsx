import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

type TabsProps = {
  labels: String[];
};

export default function ColoredTabs({ labels }: TabsProps) {
  const [value, setValue] = React.useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        {labels.map((label, i) => {
          return (
            <Tab
              value={i.toString()}
              label={label}
              sx={{ textTransform: "lowercase" }}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
