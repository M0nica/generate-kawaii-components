module.exports = function(plop) {
  plop.setGenerator("Generate Kawaii Component", {
    description: "Templates from the React Kawaii library ",
    prompts: [
      {
        type: "list",
        name: "kawaiiComponent",
        message: "Which Kawaii component would you like to generate?:",
        choices: [
          "Backpack",
          "Browser",
          "Cat",
          "CreditCard",
          "File",
          "Ghost",
          "IceCream",
          "Mug",
          "Planet",
          "SpeechBubble"
        ]
      },

      {
        type: "list",
        name: "mood",
        message: "Mood:",
        choices: [
          "sad",
          "shocked",
          "happy",
          "blissful",
          "lovestruck",
          "excited",
          "ko"
        ]
      },
      {
        type: "list",
        name: "color",
        message: "What color should the component be:",
        choices: ["eggplant", "mint", "bubblegum pink", "purple", "lime"],
        filter: colour =>
          ({
            eggplant: "#2E294E",
            mint: "#1B998B",
            "bubblegum pink": "#EC4067",
            purple: "#9A39AB",
            lime: "#C5D86D"
          }[colour])
      },

      {
        type: "list",
        name: "size",
        message: "What size should the component be:",
        choices: ["extra small", "small", "medium", "large", "extra large"],
        filter: val =>
          ({
            "extra small": 100,
            small: 200,
            medium: 300,
            large: 500,
            "extra large": 800
          }[val])
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/{{properCase mood}}{{properCase kawaiiComponent}}.jsx",
        templateFile: "src/plop-templates/kawaii-component-template.hbs"
      },
      {
        type: "add",
        path: "src/{{properCase mood}}{{properCase kawaiiComponent}}.test.jsx",
        templateFile: "src/plop-templates/test.hbs"
      },
      {
        type: "append",
        path: "src/index.js",
        pattern: /import ".\/index.css"[;]/,
        unique: true,
        templateFile: "src/plop-templates/import-component-template.hbs"
      },

      {
        type: "append",
        path: "src/index.js",
        pattern: /<\/h1>/,
        unique: true,
        templateFile: "src/plop-templates/render-component-template.hbs"
      }
    ]
  });
};
