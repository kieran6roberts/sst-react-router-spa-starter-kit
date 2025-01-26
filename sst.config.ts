/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      // The name of your app
      name: "sst-static-site-react-router-starter-kit",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      // providers: {
      //   aws: {
      //     region: "eu-west-1",
      //   }
      // }
    };
  },
  async run() {
    await import("./infra/web");
    /**
     * If you need to add other infra like storage or api's, run it from here.
     * 
     *  const storage = await import("./infra/storage");
     *  await import("./infra/api");
     * 
     *   return {
     *     MyBucket: storage.bucket.name,
     *   };
     */
  },
});
