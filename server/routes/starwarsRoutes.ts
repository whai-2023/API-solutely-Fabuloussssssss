import express from 'express'
import {
  getWidgets,
  addNewWidget,
  deleteWidgetById,
  updateWidgetById,
} from '../db/db'
import { NewWidget, Widget } from '../../models/Widget'
const router = express.Router()

// GET /api/v1/widgets
router.get('/', async (req, res) => {
  try {
    const widgets = await getWidgets()
    res.json({ widgets })
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
