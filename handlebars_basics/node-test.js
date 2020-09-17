const { captureRejectionSymbol } = require("events");
const Handlebars = require("handlebars");

const data = {
  message: "Handlebars is good with: ",
  places: ["the browser", "node", "gulp"],
};

const template =
  "{{message}}" +
  "{{#each places}}" +
  "{{^@first}}" +
  ", " +
  "{{/@first}}" +
  "{{this}}" +
  "{{/each}}";

const compiled = Handlebars.compile(template);

console.log(compiled(data));
