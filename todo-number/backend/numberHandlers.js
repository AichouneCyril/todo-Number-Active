const database = require("./database");

const getNumbers = (req, res) => {
  const baseSql = "SELECT id, number FROM numbers";
  const where = [];
  const values = [];

  if (req.query.min) {
    where.push("number >= ?");
    values.push(req.query.min);
  }

  if (req.query.max) {
    where.push("number <= ?");
    values.push(req.query.max);
  }

  const sql = `${baseSql} ${
    where.length > 0 ? `WHERE ${where.join(" AND ")}` : ""
  } ORDER BY number ASC`;

  database
    .query(sql, values)
    .then(([numbers]) => {
      res.json(numbers);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getNumberById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("SELECT id, number FROM numbers WHERE id = ?", [id])
    .then(([numbers]) => {
      if (numbers[0] != null) {
        res.json(numbers[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const postNumber = (req, res) => {
  const { number } = req.body;

  database
    .query("INSERT INTO numbers(number) VALUES (?, ?)", [number])
    .then(([result]) => {
      res.location(`/numbers/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the number");
    });
};

const updateNumber = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { number } = req.body;

  database
    .query("UPDATE numbers SET number = ? WHERE id = ?", [number, id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error updating the number");
    });
};

const deleteNumber = (req, res) => {
  const id = parseInt(req.params.id, 10);

  database
    .query("DELETE FROM numbers WHERE id =?", [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting the number");
    });
};

module.exports = {
  getNumbers,
  getNumberById,
  postNumber,
  updateNumber,
  deleteNumber,
};
