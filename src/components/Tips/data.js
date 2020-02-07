const tipsData = [
  {
    tabName: 'frontend',
    content: {
      id: 1,
      title: 'HTML',
      children: [
        {
          id: 2,
          title: 'CSS',
          children: [
            {
              id: 3,
              title: 'SASS/SCSS',
              children: [{ id: 4, title: 'Flex/Grid' }]
            },
            {
              id: 5,
              title: 'JS',
              children: [
                {
                  id: 6,
                  title: 'Npm, Webpack',
                  children: [
                    {
                      id: 7,
                      title: 'Framework',
                      children: [
                        { id: 8, title: 'Vue.js' },
                        { id: 9, title: 'React.js' },
                        {
                          id: 10,
                          title: 'Server',
                          children: [
                            { id: 11, title: 'Nuxt.js' },
                            { id: 12, title: 'Next.js' },
                            { id: 13, title: 'Gatsby' }
                          ]
                        },
                        {
                          id: 14,
                          title: 'Desktop',
                          children: [{ id: 15, title: 'Electron' }]
                        }
                      ]
                    },
                    {
                      id: 16,
                      title: 'Type Script',
                      children: [
                        {
                          id: 17,
                          title: 'Mobile',
                          children: [
                            { id: 18, title: 'Cordova' },
                            { id: 19, title: 'Framework 7' },
                            { id: 20, title: 'React Native' },
                            {
                              id: 21,
                              title: 'PWA'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    tabName: 'backend',
    content: {
      id: 1,
      title: 'Terminal',
      children: [
        {
          id: 2,
          title: 'Programs',
          children: [
            {
              id: 3,
              title: 'Node.js',
              children: [{ id: 4, title: 'Express' }]
            },
            {
              id: 5,
              title: 'Python',
              children: [{ id: 6, title: 'Django' }]
            },
            {
              id: 7,
              title: 'Java',
              children: [{ id: 8, title: 'Spring' }]
            }
          ]
        },
        {
          id: 9,
          title: 'Database',
          children: [
            {
              id: 10,
              title: 'Sql',
              children: [
                { id: 11, title: 'PostgreSql' },
                { id: 12, title: 'MySql' }
              ]
            },
            {
              id: 13,
              title: 'NoSql',
              children: [
                { id: 14, title: 'Firebase' },
                { id: 15, title: 'MongoDB' },
                { id: 16, title: 'GraphQL' }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    tabName: 'utils',
    content: {
      id: 1,
      title: 'Docker',
      children: [
        {
          id: 2,
          title: 'Redis'
        },
        {
          id: 3,
          title: 'RabbitMq',
          children: [
            {
              id: 4,
              title: 'Auth',
              children: [
                { id: 5, title: 'OAuth' },
                { id: 6, title: 'JWT' }
              ]
            },
            {
              id: 7,
              title: 'Web Servers',
              children: [
                { id: 8, title: 'Apache' },
                { id: 9, title: 'Nginx' }
              ]
            },
            {
              id: 10,
              title: 'Testing',
              children: [
                { id: 11, title: 'Jest' },
                { id: 12, title: 'Cypress' },
                { id: 13, title: 'Selenium' }
              ]
            }
          ]
        },
        {
          id: 14,
          title: 'Elastic Search'
        }
      ]
    }
  }
];

export { tipsData };
