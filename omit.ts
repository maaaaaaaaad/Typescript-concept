{
  // what i want exclude..."omit"!

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
    message: string;
  };

  function _getVideo(id: string): Video {
    return {
      id: id,
      title: "first Video",
      url: "https://www.dongwoongoh.github.io",
      data: "byte-data...",
      message: "hello world",
    };
  }

  function _getMetaVideo(id: string): Omit<Video, "url" | "data" | "message"> {
    //exclude "url", "data". return id, title
    return {
      title: "second Video",
      id: id,
    };
  }

  /*or function getMetaVideo(id:string): Pick<VideoMetaData> {...}
  type VideoMetaData = <Video, "url" | "data" | "message">*/

  const getResult = _getVideo("Dong");
  const metaResult = _getMetaVideo("OH");

  console.log(getResult);
  console.log(metaResult);
}
