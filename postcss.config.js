module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 1, // Adjust the stage based on your needs
      features: {
        'nesting-rules': true, // Example: enabling nesting
      },
    }),
  ],
};
