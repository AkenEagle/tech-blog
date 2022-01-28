const { Router } = require("express");

const router = Router();

router.post("/", createBlog);
router.put("/:id", updateBlogById);
router.delete("/:id", deleteBlogById);

module.export = router;
