import express from 'express'
import {getposts, createPost} from '../controllers/posts.js'

const router = express.Router();

router.get('/',getposts)
router.post('/',createPost)
router.update('/', updatePost)

export default router;