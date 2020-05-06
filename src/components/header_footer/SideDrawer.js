import React from "react";

import { scroller } from "react-scroll";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

function SideDrawer(props) {
  const scrollTo = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100
    });

    props.onClose();
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => {
        props.onClose(false);
      }}
    >
      <List component="nav">
        <ListItem
          button
          onClick={() => {
            scrollTo("Featured");
          }}
        >
          Event Starts In
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollTo("Venue");
          }}
        >
          Venue INFO
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollTo("Highlights");
          }}
        >
          Highlights
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollTo("Pricing");
          }}
        >
          Pricing
        </ListItem>
        <ListItem
          button
          onClick={() => {
            scrollTo("Location");
          }}
        >
          Location
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideDrawer;
