/*import { Router } from 'express';
import { filterPerks, getPerk, createPerk, updatePerk, deletePerk, getAllPerks} from '../controllers/perkController.js';

const router = Router();

router.get('/', filterPerks);
router.get('/all', getAllPerks);
router.get('/:id', getPerk);
router.post('/', createPerk);
// put vs patch: put is for full updates, patch is for partial updates. they will both work,However it is just a convention.
router.patch('/:id', updatePerk);
router.delete('/:id', deletePerk);

export default router;*/

import express from "express";
import {
  getAllPerks,
  getPerk,
  createPerk,
  updatePerk,
  deletePerk,
  filterPerks
} from "../controllers/perkController.js";

const router = express.Router();

// GET /api/perks        → get all perks
router.get("/", getAllPerks);

// GET /api/perks/filter?title=...   → filter by title
router.get("/filter", filterPerks);

// GET /api/perks/:id   → get a single perk by ID
router.get("/:id", getPerk);

// POST /api/perks      → create a new perk
router.post("/", createPerk);

// PUT /api/perks/:id   → update a perk by ID
router.put("/:id", updatePerk);

// DELETE /api/perks/:id  → delete a perk by ID
router.delete("/:id", deletePerk);

export default router;