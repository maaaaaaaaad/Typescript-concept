{
  function fileLoader(fileName: string): string {
    if (fileName == "noFile") {
      throw new Error(`${fileName} is not defined`);
    }
    return fileName;
  }

  const fileName: string = "myFile";
  const noFileName: string = "noFile";

  try {
    // Using handle the excepted error with try & catch
    const inputFile = fileLoader(fileName);
    // or const inputFile = fileLoader(noFileName) 👉🏻 go to catch !
    console.log(inputFile);
  } catch (error) {
    console.log(`Caught Error`); // Even if it exists "return", excute finally
  } finally {
    console.log("Yeeeeee!!"); // try & catch is not killing form this line
    // Always excuted finally...
  }
}
