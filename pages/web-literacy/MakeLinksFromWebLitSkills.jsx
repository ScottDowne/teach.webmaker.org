var React = require('react');
var weblitcontent = require('./weblitcontent');
var webLitSkillsContent = weblitcontent.webLitSkills;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = function(webLitSkills) {
  return (
    <span>
    {
      webLitSkills.map(function(webLitSkill, index) {
        var comma = "";
        if (index+1 < webLitSkills.length) {
          comma = ", ";
        }
        return (
          <span>
            <Link key={webLitSkill}
              to={"/web-literacy/" + webLitSkillsContent[webLitSkill].topic + "/" + webLitSkill + "/"}
            >
              {webLitSkill}
            </Link>
            {comma}
          </span>
        );
      })
    }
    </span>
  );
};
