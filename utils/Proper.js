const Proper = (err, req, res, next) => {

console.log(err);

res.status(500).json({ 
    status: "error",
    message: "Internal Server Error"
});

}

const CheckUrlMethod = (req, res, next) => {
  console.log(`req method: ${req.method} req url: ${req.url}`);
  next();
}

module.exports = {
    Proper,
    CheckUrlMethod
};