const { Router } = require("express");
const { postArticle } = require("../controllers/article.controller");
const verifyJwt = require("../middlewares/auth.midleware");
const router = Router();

router.post("/post", verifyJwt, postArticle);

module.exports = router;
