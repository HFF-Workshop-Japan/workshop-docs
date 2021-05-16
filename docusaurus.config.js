/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'HFF-Workshop-Japan',
  tagline: '日本のHuman:FallFlat',
  url: 'https://hff-workshop-japan.github.io',
  baseUrl: '/workshop-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'HFF-Workshop-Japan', // Usually your GitHub org/user name.
  projectName: 'workshop-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'HFF-Workshop-Japan',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'チュートリアル',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/HFF-Workshop-Japan/workshop-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'チュートリアル',
              to: '/docs/intro',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: '外部リンク',
          items: [
            {
              label: 'Steam - Human: Fall Flat',
              href: 'https://store.steampowered.com/app/477160/Human_Fall_Flat/',
            },
            {
              label: 'Steam Workshop - Human: Fall Flat',
              href: 'https://steamcommunity.com/app/477160/workshop/'
            },
            {
              label: 'Official Discord - Human: Fall Flat',
              href: 'https://discord.gg/hff'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HFF-Workshop-Japan. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
