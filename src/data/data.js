module.exports = {
  SiteTitle: "Fabran99",
  Sitelogo: "#",
  SiteLogoText: "Fabran99",
  SiteAuthor: "Facundo Branbate",
  SiteDescription: "Full Stack Developer",
  defaultDescription: "Full Stack Developer",
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  },
  SiteSocialLinks: {
    gmail: "fabran99@gmail.com",
    github: "https://github.com/fabran99",
  },
  SiteAddress: {
    city: "Montevideo",
    region: "Montevideo",
    country: "Uruguay",
    zipCode: "ZipCode",
  },
  SiteContact: {
    email: "fabran99@gmail.com",
  },
  SiteCopyright: "2021",
}
