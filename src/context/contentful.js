import * as contentful from 'contentful';

export const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "ipb4xaic17wo",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "SdOXtaoVi-P8znACPEqmGUB6edPZLbql1gPor6pIkUk"
  });

  