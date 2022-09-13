module.exports = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch(next); //func is an promise
  };
};
