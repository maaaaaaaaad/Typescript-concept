{
  // Record can be merged PageInformation and Page.
  type PageInformation = {
    title: string;
    subscript: string;
    message: string;
  };

  type Page = "home" | "about" | "contact";

  const nav: Record<Page, PageInformation> = {
    home: { title: "Home", subscript: "OH", message: "Welcome to Home" },
    about: { title: "About", subscript: "DONG", message: "Welcome to About" },
    contact: {
      title: "Contact",
      subscript: "WOONG",
      message: "Welcome to Contact",
    },
  };

  console.log(nav);
}
