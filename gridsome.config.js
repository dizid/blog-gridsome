// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Plant & Programs',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'Post'
      }
    },
    ,
      {
        use: 'gridsome-plugin-pwa',
        options: {
            title: 'Plants & Programs',
            startUrl: '/',
            display: 'standalone',
            statusBarStyle: 'default',
            manifestPath: 'manifest.json',
            serviceWorkerPath: 'service-worker.js',
            shortName: 'P&P',
            themeColor: '#666600',
            backgroundColor: '#ffffff',
            icon: './static/favicon.png'
        }
    }
  ]
}
