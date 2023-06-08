// import express from 'express'

// const router = express.Router()

// export default router

// import { getPosts, addPost, updatePostById, deletePostById, getCommentsByPostId, addComment, updateCommentById } from '../db/db'

// import { Post, PostData, PostUpdate } from '../../models/post'

// import { Comment, CommentData } from '../../models/comment'

// // GET api/v1/posts

// router.get('/', async (req, res) => {
//   try {
//     const posts = await getPosts()
//     res.json(posts)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({
//       error: 'There was an error trying to get the posts',
//     })
//   }
// })

// router.post('/', async (req, res) => {
//   try {
//     const newPostData = req.body as PostData

//     if (typeof newPostData.title !== 'string' || typeof newPostData.text !== 'string') {
//       return res.status(400).json({
//         error: 'Invalid post data',
//       })
//     }
    
//     const newPost = await addPost(newPostData)

//     res.json(newPost)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({
//       error: 'There was an error trying to add your post to the database',
//     })
//   }
// })

// // Patch api/v1/posts/:id

// router.patch('/:id', async (req, res) => {
//   try {
//     const postId = Number(req.params.id)
//     const updatedPostData = req.body as PostUpdate

//     if (isNaN(postId)) {
//       res.status(400).json({ error: 'Invalid Post ID' })
//       return
//     }

//     const updatedPost = await updatePostById(postId, updatedPostData)
//     res.json(updatedPost)
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({
//       error: 'There was an error trying to update the post',
//     })
//   }
// })

// // delete api/v1/posts/:id

// router.delete('/:id', async (req, res) => {
//   try {
//     const postId = Number(req.params.id)

//     if (isNaN(postId)) {
//       res.status(400).json({ error: 'Invalid Post ID' })
//       return
//     }

//     await deletePostById(postId)
//     res.sendStatus(200)
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({
//       error: 'There was an error trying to delete the post',
//     })
//   }
// })

// //GET /v1/posts/:postId/comments

// router.get('/:postId/comments', async (req, res) => {
//   try {
//     const postId = Number(req.params.postId)

//     if (isNaN(postId)) {
//       res.status(400).json({ error: 'Invalid Post ID' })
//       return
//     }

//     const comments = await getCommentsByPostId(postId)
//     res.json(comments)
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({
//       error: 'There was an error trying to get the comments',
//     })
//   }
// })

// //POST /v1/posts/:postId/comments

// router.post('/:postId/comments', async (req, res) => {
//   try {
//     const postId = Number(req.params.postId);
//     const commentData = req.body as CommentData;

//     if (isNaN(postId)) {
//       res.status(400).json({ error: 'Invalid Post ID' });
//       return;
//     }

//     const newComment = await addComment(postId, commentData);
//     res.json(newComment);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       error: 'There was an error trying to add the comment',
//     })
//   }
// })

