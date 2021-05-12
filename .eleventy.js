module.exports = function(config) {
    config.addPassthroughCopy({
        'src/_includes/assets/css/global.css': './global.css'
    });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
  };
};
