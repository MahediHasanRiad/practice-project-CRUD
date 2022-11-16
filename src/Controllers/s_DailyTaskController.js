const StudentTaskModel = require("../Models/s_DailyTaskModel");

exports.createTask = (req, res) => {
  let date = Date.now();

  const query = {
    UserName: req.headers.username,
    Subject: req.body["Subject"],
    TodayTopic: req.body["TodayTopic"],
    HomeWork: req.body["HomeWork"],
    HomeWorkAssignDate: date,
    HomeWorkSubmitDate: req.body["HomeWorkSubmitDate"],
  };

  StudentTaskModel.create(query, (err, data) => {
    if (err) {
        console.log(err)
      res.status(400).json({ massage: "error", data });
    } else {
      res.json({ massage: "success", data });
    }
  });
};
