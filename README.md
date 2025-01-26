# sst-static-site-react-router-starter-kit

A starter kit for creating a React Router based React app with SST v3. The kit uses a client side react router approach but it can be changed to suit your needs. With a few commands you can deploy the site to AWS using CloudFront and S3. Finally the kit comes with TypeScript for type-checking and TailwindCSS for styling.

A template to create a monorepo SST v3 project. [Learn more](https://sst.dev/docs/set-up-a-monorepo).

<!-- ## Get started

1. Use this template to [create your own repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

2. Clone the new repo.

   ```bash
   git clone <REPO_URL> MY_APP
   cd MY_APP
   ```

3. Rename the files in the project to the name of your app.

   ```bash
   npx replace-in-file '/monorepo-template/g' 'MY_APP' '**/*.*' --verbose
   ```

4. Deploy!

   ```bash
   npm install
   npx sst deploy
   ```

5. Optionally, enable [_git push to deploy_](https://sst.dev/docs/console/#autodeploy). -->

### Infrastructure

The `infra/` directory contains a `web.ts` file which creates a static site using SST v3. 

This is where you add you domain after you've set this up in AWS Route 53. If you already have your own domain you can add it to AWS Route 53 using the instructions found [here](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-in-use.html).

If your app grows to use storage or API's, you can define those in the `infra/` directory.
