const navData = ()=>{
    return {
      logoWebsite: {
        srcLogo: "../images/apsLogo.jpg ",
        alt: "APSignals",
      },
      routes: [
        {
          nameRoute: "Home",
          route: "/",
        },
        {
          nameRoute: "AboutUs",
          route: "/aboutUs",
        },
      ],
    };
}

module.export = navData;