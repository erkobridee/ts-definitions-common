module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { targets: { node: 'current' }, modules: false, loose: true },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
};
