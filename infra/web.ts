export const frontend = new sst.aws.StaticSite("Frontend", {
  path: "packages/frontend",
  build: {
    output: "build/client",
    command: "pnpm build",
  },
  indexPage: "index.html",
  
  /*
   Once you've set up your domain in Route 53, you can uncomment this and add your domain.
   You can do this anytime after initial deployment.
  */

  // domain:
  // $app.stage === 'production'
  //   ? {
  //       name: config.domain,
  //       redirects: [`www.${config.domain}`],
  //     }
  //   : undefined,
});
