const express = require('express')
const { getForms, PostForm, PutForms } = require('../controller/formController')

const router = express.Router()

router.route("/alldata/").get(getForms)
router.route("/postform/").post(PostForm)
router.route("/putform/:id").put(PutForms)
module.exports = router