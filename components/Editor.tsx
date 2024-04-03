"use client"

import { loadStripe } from "@stripe/stripe-js";
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import {useEffect} from "react";

const config = {
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children }) => {
        return <h1>{children}</h1>;
      },
    },
  },
};

const initialData = {
  content: [],
  root: {},
};

const save = (data) => {};

const Editor = () => {

  useEffect(() => {
    loadStripe("key")
      .then(stripe => {
        console.log(stripe, 'stripe')
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return <Puck config={config} iframe={{enabled: false}} data={initialData} onPublish={save} />;
}

export default Editor;