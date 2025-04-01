const db = require('@/config/db');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = `
      SELECT * FROM users
      WHERE email = $1 AND password = $2
      LIMIT 1;
    `;
    const values = [email, password];
    const result = await db.query(query, values);
    if (result.rows.length > 0) {
      res.json({
        success: true,
        payload: null // or you can send result.rows[0] if you want to include user info
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
