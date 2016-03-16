var React = require('react');
var weblitcontent = require('./weblitcontent');
var competenciesContent = weblitcontent.competencies;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = function(competencies) {
  return (
    <span>
    {
      competencies.map(function(competency, index) {
        var comma = "";
        if (index+1 < competencies.length) {
          comma = ", ";
        }
        return (
          <span>
            <Link key={competency}
              to={"/web-literacy/" + competenciesContent[competency].topic + "/" + competency + "/"}
            >
              {competency}
            </Link>
            {comma}
          </span>
        );
      })
    }
    </span>
  );
};
