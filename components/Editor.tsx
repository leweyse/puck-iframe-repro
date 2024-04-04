"use client"

import { DropZone, Puck } from "@measured/puck";

import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";

import "@measured/puck/puck.css";

const dataAtom = atomWithStorage("puck-data", {
  content: [],
  root: {},
}, undefined, {
  getOnInit: true,
});

const config = {
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children }) => {
        return <span>{children}</span>;
      },
    },
    DropzoneBlock: {
      render: () => 
        <DropZone zone='test' />,
    },
    ImageBlock: {
      render: () => {
        return <img src="https://cdn.candycode.com/jotai/jotai-mascot.png" />;
      }
    }
  },
};

const Editor = () => {
  const [data, setData] = useAtom(dataAtom);

  const save = (data) => {
    setData(data);
  };

  return <Puck config={config} data={data} onPublish={save} />;
}

export default Editor;
