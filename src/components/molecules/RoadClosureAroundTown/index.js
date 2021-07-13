import React from "react";

export default function index() {
  return (
    <>
    <Box />
      <ArticleExample
        //   classname={styles.ArticleExample}
        Title={""}
        Content={
          "Our buses are running to times similar to their pre-coronavirus timetables, making it even easier to reconnect with the faces and places you love."
        }
        LinkTitle={"Go to Arriva Guidance"}
        Linkurl={"/slug"}
      >
        <StaticImage
          // style={{ height: "10%", width: "10%" }}
          src={"../../../images/bus-Example.jpg"}
        />
      </ArticleExample>
    </>
  );
}
