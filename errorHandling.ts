{
  interface Greeting {
    greeting(userPoint: number): number;
  }
  class Practice implements Greeting {
    greeting(userPoint: number): number {
      if (userPoint <= 0) {
        throw new Error(
          `Your number is small or same to the zero : ${userPoint}`
        );
      }
      return userPoint;
    }
  }

  const numberTest = new Practice();
  try {
    const result = numberTest.greeting(0);
    console.log(result);
  } catch (error) {
    const caught = "Caught the Error!!";
    console.log(caught);
  } finally {
    const finallyText = "Keep going to your proccess!";
    console.log(finallyText);
  }
}
