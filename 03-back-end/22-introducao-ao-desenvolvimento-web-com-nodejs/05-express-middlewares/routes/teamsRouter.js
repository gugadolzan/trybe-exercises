const express = require('express');

const { isTeamValid } = require('../middlewares/validations');
const { HTTP_STATUS_OK } = require('../utils');
const { readFileContent, writeFileContent } = require('../utils/readWriteFile');

const router = express.Router();
const FILE_PATH = './teams.json';

router.post('/', isTeamValid, async (req, res) => {
  const { name, initials, country, league } = req.body;
  const newTeam = { name, initials, country, league };

  const teams = await readFileContent(FILE_PATH);

  if (!teams) {
    writeFileContent(FILE_PATH, { teams: [newTeam] });
    return res.status(HTTP_STATUS_OK).send(newTeam);
  }

  const newTeams = [...teams.teams, newTeam];
  writeFileContent(FILE_PATH, { teams: newTeams });

  res.status(HTTP_STATUS_OK).send(newTeam);
});

module.exports = router;
