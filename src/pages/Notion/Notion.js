import React, { useEffect, useState } from "react";

// import { NotionRenderer } from "react-notion-x";
import { NotionRenderer } from "react-notion";

// import "react-notion/src/styles.css";
// import "prismjs/themes/prism-tomorrow.css";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
// // import "rc-dropdown/assets/index.css";
// import "katex/dist/katex.min.css";

// const notion = new NotionAPI();

const Notion = ({ user }) => {
  const [recordMap, setRecordMap] = useState();

  useEffect(() => {
    console.log("Test");
    if (!recordMap) {
      console.log(recordMap);
      getNotionPage();
    }
  });
  const getNotionPage = async () => {
    // const recordMap = await notion.getPage("c0926b0e52694659b73e297c8f34f7f2");
    const recordMap = await fetch(
      "https://notion-api.splitbee.io/v1/page/c0926b0e52694659b73e297c8f34f7f2"
    ).then((res) => res.json());
    console.log(recordMap);
    setRecordMap(recordMap);
  };
  return (
    <>
      {/* {recordMap && (
        <NotionRenderer
          recordMap={recordMap}
          fullPage={true}
          darkMode={false}
        />
      )} */}
      {recordMap && <NotionRenderer blockMap={recordMap} />}
    </>
  );
};

export default Notion;
