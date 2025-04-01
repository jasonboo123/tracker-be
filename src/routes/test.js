const express = require('express');
const router = express.Router();
const db = require('@/config/db');

router.get('/clients', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM clients LIMIT 10');
    res.json(result.rows);
  } catch (err) {
    console.error('DB Test Error:', err);
    res.status(500).json({ error: 'Database test failed' });
  }
});

module.exports = router;
