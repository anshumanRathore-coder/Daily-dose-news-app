import React, { useState } from "react";
import { Box, HStack } from "@chakra-ui/react";

import Categories from "./Categories";

export default function NavBar(props) {
  const choices = {
    top: false,
    food: false,
    world: false,
    health: false,
    tourism: false,
    sports: false,
    science: false,
    politics: false,
    business: false,
    technology: false,
    environment: false,
    entertainment: false,
  };
  
  const toggleCategory = (name) => {
    if (lastState === name) {
      setState("top");
      categoryButton[name] = false;
      props.dispatch({ type: "category", value: "top" });
    } else {
      const updateChoices = { ...categoryButton };
      updateChoices[lastState] = false;
      updateChoices[name] = true;
      setState(name);
      setcategoryButton(updateChoices);
      props.dispatch({ type: "category", value: name });
    }
  };

  const [categoryButton, setcategoryButton] = useState(choices);
  const [lastState, setState] = useState("top");
  return (
    <>
      <Box mt="1em">
        <HStack
          ml={["0px", "5px"]}
          wrap="wrap"
          justify={["space-evenly", "start"]}
          align="center"
        >
          {(() => {
            const elements = [];
            for (const key in categoryButton) {
              elements.push(
                <Categories
                  toggleCategory={toggleCategory}
                  key={key}
                  showIcon={categoryButton[key]}
                  categoryName={key}
                />
              );
            }
            return elements;
          })()}
        </HStack>
      </Box>
    </>
  );
}
