import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import "./main.scss";
import {
  Button,
  ButtonGroup,
  Heading,
  Stack
} from "@chakra-ui/react";
import TodoStore from "../../stores/todo.store";

export const Main = observer(() => {
  const todoStore = useContext(TodoStore);

  const { addTodo, todos } = todoStore;

  const requestDevice = () => {
    navigator.usb.requestDevice({filters: [{ vendorId: 0x187c, productId: 0x0550 }]})
      .then(device => {
        console.log(device.productName);
        console.log(device.manufacturerName);
      })
      .catch(error => { console.error(error); });
  }

  return (
    <Stack direction='column'>
      <Heading>Alienware FX Controls</Heading>
      <ButtonGroup>
        <Button colorScheme={'blue'} onClick={() => requestDevice()}>Request Device</Button>
      </ButtonGroup>
    </Stack>
  );
});