const express = require('express');

const { isTeamValid } = require('../middlewares/validations');
const { HTTP_STATUS_OK } = require('../utils');
const { readFileContent, writeFileContent } = require('../utils/readWriteFile');

const router = express.Router();
const FILE_PATH = './teams.json';

router.get('/', async (_req, res) => {
  const teams = (await readFileContent(FILE_PATH)) || { teams: [] };

  res.status(HTTP_STATUS_OK).json(teams);
});

router.post('/', isTeamValid, async (req, res) => {
  const { name, initials, country, league } = req.body;
  const newTeam = { name, initials, country, league };

  const teams = await readFileContent(FILE_PATH);

  if (!teams) {
    writeFileContent(FILE_PATH, { teams: [newTeam] });
    return res.status(HTTP_STATUS_OK).json(newTeam);
  }

  const newTeams = [...teams.teams, newTeam];
  writeFileContent(FILE_PATH, { teams: newTeams });

  res.status(HTTP_STATUS_OK).json(newTeam);
});

module.exports = router;
