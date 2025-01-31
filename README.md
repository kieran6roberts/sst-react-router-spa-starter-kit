# This is still a work in progress. More to come.

## sst-react-router-spa-starter-kit

A starter kit for creating a React Router v7 based React app with SST v3. We are using React Router simply as a routing library,
and not as a framework as is now possible. The kit is defined as single page client side app. With a few commands you can deploy the site to AWS using CloudFront, S3, Route 53. It also comes with TypeScript for type-checking and the new TailwindCSS V4 for styling. Finally there is linting with ESLint and Prettier formatting.

## Details

- React Router v7 as a library: https://reactrouter.com/start/library/installation
- SST v3: https://sst.dev/
- TypeScript: https://www.typescriptlang.org/
- TailwindCSS V4: https://tailwindcss.com/
- ESLint: https://eslint.org/
- Prettier: https://prettier.io/

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

3. You'll notice some type complaints initially relating to SST, to get rid of those initialize sst.

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

   You can find more instructions on the frontend package in the `packages/frontend/README.md` file.


## Infrastructure

The `infra/` directory contains a `web.ts` file which I have set up to deploy the 1 page React app with SST v3. SST handles provisioning the necessary resources, AWS in this case but you are free to adapt if you want to deploy elsehwere. I recommend reading the [SST docs](https://sst.dev/docs/) for more information.

If you choose to use AWS as your infra and you already have your own domain registered outside of Route 53, check this [AWS guide](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-in-use.html) to migrate.

If your app grows to use storage or API's, you can define those in the `infra/` directory. They would then be run from `sst.config.ts`.

## Deploying the app

1. From the root of the repo run the following command to deploy the app.

   ```bash
   pnpm sst deploy --stage your-stage-name
   ```

   Common stage names are `dev`, `staging`, `prod` etc. For more detailed instructions on deployments, follow this excellent guide [https://guide.sst.dev/](https://guide.sst.dev/chapters/getting-production-ready.html).


## AWS Associated Costs

The starter kit is set up to deploy using AWS services. Here is some pricing info if you decide to deploy this way:

### CloudFront

Pay for what you use and part of the AWS free tier.

You can read more about CloudFront pricing here: https://aws.amazon.com/cloudfront/pricing/

### S3

Pay as you goand part of the AWS free tier.

You can read more about S3 pricing here: https://aws.amazon.com/s3/pricing/

### Route 53

$0.50 per hosted zone per month for the first 25 hosted zones. You would need 1 hosted zone for this app.

Pricing: https://aws.amazon.com/route53/pricing/

### Additional Costs

If you decide to setup up autodeployments using SST Autodeploy, you may incur some additional costs. 
Autodeploy uses AWS CodeBuild which runs on pay-as-you-go pricing with free tier on certain instance types. More
information here: https://aws.amazon.com/codebuild/pricing/


Autodeploy: https://sst.dev/docs/console#autodeploy



