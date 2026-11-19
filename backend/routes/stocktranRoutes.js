
import express from "express";

import {
    addTransaction,
    getHighestMoving,
    getTransactions
} from "../controller/stocktranController.js";

const router = express.Router();

router.post("/", addTransaction);
router.get("/", getTransactions);
router.get("/highest-moving", getHighestMoving);

export default router;
