{
  type Video = {
    title: string;
    author: string;
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadonly = {
  //   readonly title: string;
  //   readonly author: string;
  // };
  /*
  ... so bad. this issue key is map ! 
  */

  type Optional<T> = {
    // very superfull Reusability (likes.. videoOp and dolce)
    [V in keyof T]?: T[V]; // V = key of T, T[V] = Type
  };

  type VideoOptional = Optional<Video>;
  /* Optional<Video> = {
    [V in keyof Video]?: Video[V] , V = title , author ...
  }; */
  const videoOp: VideoOptional = {
    title: "blabla",
    author: "blabalc",
  };

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type AnimalOptional = Optional<Animal>;
  const dolce: AnimalOptional = {
    name: "Dolce",
    age: 13,
    gender: "male",
  };

  /*------------------------------------------------------------------------------*/
  // try again "readonly type"
  type MyObjects = {
    title: string;
    price: number;
  };

  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type MyObjectsReadonlyVersion = Readonly<MyObjects>;

  const sell: MyObjectsReadonlyVersion = {
    title: "Macbook Pro 16in",
    price: 50000000,
  };
  //sell.title = "macOS" => error because sell is readonly propertiy

  /*------------------------------------------------------------------------------*/
  // try again "or null type"

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  type MyObjectNullable = Nullable<MyObjects>;

  const objectOrNull: MyObjectNullable = {
    title: null,
    price: 13,
  };
  console.log(objectOrNull);
}
