const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()

router.get("/", (req,res) => res.send("This is the root!"))
router.post("/books", controllers.createItem)
router.get("/books", controllers.getAllItems)
router.get("/books/:id", controllers.getItemById)
router.put("/books/:id", controllers.updateItem)
router.delete("/books/:id", controllers.deleteItem)

module.exports = router;