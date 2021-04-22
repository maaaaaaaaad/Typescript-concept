{
  interface Students {
    readonly name: string;
    search<T, K extends keyof T>(obj: T, key: K): T[K];
  }

  type Achievement = {
    readonly A: object;
    readonly B: string;
    readonly C: string;
    readonly D: string;
  };

  class StudentData implements Students {
    name = "Woong";
    grade = 3;
    achievment: Achievement = {
      A: {
        name: "Woong , Dong , Sue",
        grade: 3,
      },
      B: "Good",
      C: "Basic",
      D: "Bad",
    };

    search<T, K extends keyof T>(obj: T, key: K): T[K] {
      return obj[key];
    }
  }

  const findStudent = new StudentData();
  const result = findStudent.achievment;
  const resultA = result.A;
  console.log(resultA);
}
