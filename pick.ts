{
  // just extra what you need... is "pick" !

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id: id,
      title: "first Video",
      url: "https://www.dongwoongoh.github.io",
      data: "byte-data...",
    };
  }

  function getMetaVideo(id: string): Pick<Video, "title" | "id"> {
    return {
      title: "second Video",
      id: id,
    };
  }

  /*or function getMetaVideo(id:string): Pick<VideoMetaData> {...}
  type VideoMetaData = <Video, "title" | "id">*/

  const getResult = getVideo("Dong");
  const metaResult = getMetaVideo("OH");

  console.log(getResult);
  console.log(metaResult);
}
