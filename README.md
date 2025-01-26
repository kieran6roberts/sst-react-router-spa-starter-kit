# This is still a work in progress. More to come.

## sst-static-site-react-router-starter-kit

A starter kit for creating a React Router v7 framework based React app with SST v3. The kit is defined as single page client side  app but it can be adapted to suit your requirements. With a few commands you can deploy the site to AWS using CloudFront and S3. Finally the kit comes with TypeScript for type-checking and TailwindCSS V4 for styling.

A template to create a monorepo SST v3 project. [Learn more](https://sst.dev/docs/set-up-a-monorepo).

## Getting Started

This starter kit uses a monorepo approach.

1. Clone the repo

   ```bash
   git clone https://github.com/kieran6roberts/sst-static-site-react-router-starter-kit.git
   ```

2. Install dependencies from the root of the repo

   ```bash
   pnpm i
   ```

3. You'll notice some type complaints initially, to get rid of those initialize sst.

   ```bash
   pnpm sst install
   ```

4. To run your react app locally, navigate into the frontend package:

   ```bash
   cd packages/frontend
   ```

   install the dependencies

    ```bash
   pnpm i
   ```

   and run the dev server

   ```bash
   pnpm dev
   ```


## Infrastructure

The `infra/` directory contains a `web.ts` file which I have set up to deploy the 1 page React app with SST v3. SST handles provisioning the necessary AWS resources. I recommend reading the [SST docs](https://sst.dev/docs/set-up-a-monorepo) for more information.

This is where you can add you domain after you've set this up in AWS Route 53. If you already have your own domain, check this [AWS guide](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-in-use.html) to migrate your domain to Route 53.

If your app grows to use storage or API's, you can define those in the `infra/` directory. They would then be run from `sst.config.ts`.

## Deploying the app

1. From the root of the repo run the following command to deploy the app.

   ```bash
   pnpm sst deploy --stage your-stage-name
   ```

   Common stage names are `dev`, `staging`, `prod` etc. For more detailed instructions on deployments, follow this excellent guide [https://guide.sst.dev/](https://guide.sst.dev/chapters/getting-production-ready.html).


## AWS Associated Costs

More to come...

