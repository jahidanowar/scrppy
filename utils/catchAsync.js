module.exports = (fn) => {
  fn().catch((error) => {
    console.log('Something went very wrong 🔥🧯', error);
    process.exit(1)
  });
};
