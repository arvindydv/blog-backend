const { ApiError } = require("../utils/ApiError");
const { asyncHandler } = require("../utils/asyncHandler");
const model = require("../models");
const { ApiResponse } = require("../utils/ApiResponse");

const postArticle = asyncHandler(async (req, res) => {
  const payload = req.body;
  if (!payload.title || payload.description) {
    throw new ApiError(421, "Title or description is required");
  }

  const article = await model.Article.create({
    title: payload.title,
    description: payload.description,
    userId: req.user.id,
  });
  return res
    .status(201)
    .json(new ApiResponse(201, article, "article posted successfully"));
});

module.exports = {
  postArticle,
};
