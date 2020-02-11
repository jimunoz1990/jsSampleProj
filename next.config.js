if (process.env.NODE_ENV === "production") {
  module.exports = {
    webpack: function(c) {
      return c;
    }
  };
}
