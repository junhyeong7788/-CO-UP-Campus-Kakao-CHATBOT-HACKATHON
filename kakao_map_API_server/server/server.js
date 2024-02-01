/**
 * This is the main Node.js server script for your project
 * Check out the two endpoints this back-end API provides in fastify.get and fastify.post below
 */

const path = require("path");

// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  // Set this to true for detailed logging:
  logger: false,
});

// ADD FAVORITES ARRAY VARIABLE FROM TODO HERE

// Setup our static files
fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: "/", // optional: default '/'
});

// Formbody lets us parse incoming forms
fastify.register(require("@fastify/formbody"));

// View is a templating manager for fastify
fastify.register(require("@fastify/view"), {
  engine: {
    handlebars: require("handlebars"),
  },
});

// Load and parse SEO data
const seo = require("./src/seo.json");
if (seo.url === "glitch-default") {
  seo.url = `https://${process.env.PROJECT_DOMAIN}.glitch.me`;
}

/**
 * Our home page route
 *
 * Returns src/pages/index.hbs with data built into it
 */
fastify.get("/", function (request, reply) {
  // params is an object we'll pass to our handlebars template
  let params = { seo: seo };

  // If someone clicked the option for a random color it'll be passed in the querystring
  if (request.query.randomize) {
    // We need to load our color data file, pick one at random, and add it to the params
    const colors = require("./src/colors.json");
    const allColors = Object.keys(colors);
    let currentColor = allColors[(allColors.length * Math.random()) << 0];

    // Add the color properties to the params object
    params = {
      color: colors[currentColor],
      colorError: null,
      seo: seo,
    };
  }

  // The Handlebars code will be able to access the parameter values and build them into the page
  return reply.view("/src/pages/index.hbs", params);
});

/**
 * Our POST route to handle and react to form submissions
 *
 * Accepts body data indicating the user choice
 */



fastify.get("/map8", function (request, reply) {
 
  return reply.view("/src/pages/map8.hbs");
});

fastify.get("/map9", function (request, reply) {
 
  return reply.view("/src/pages/map9.hbs");
});

fastify.get("/map10", function (request, reply) {
 
  return reply.view("/src/pages/map10.hbs");
});

fastify.get("/map11", function (request, reply) {
 
  return reply.view("/src/pages/map11.hbs");
});

fastify.get("/map12", function (request, reply) {
 
  return reply.view("/src/pages/map12.hbs");
});




fastify.post("/", function (request, reply) {
  // Build the params object to pass to the template
  let params = { seo: seo };

  // If the user submitted a color through the form it'll be passed here in the request body
  let color = request.body.color;

  // If it's not empty, let's try to find the color
  if (color) {
    // ADD CODE FROM TODO HERE TO SAVE SUBMITTED FAVORITES

    // Load our color data file
    const colors = require("./src/colors.json");

    // Take our form submission, remove whitespace, and convert to lowercase
    color = color.toLowerCase().replace(/\s/g, "");

    // Now we see if that color is a key in our colors object
    if (colors[color]) {
      // Found one!
      params = {
        color: colors[color],
        colorError: null,
        seo: seo,
      };
    } else {
      // No luck! Return the user value as the error property
      params = {
        colorError: request.body.color,
        seo: seo,
      };
    }
  }

  // The Handlebars template will use the parameter values to update the page with the chosen color
  return reply.view("/src/pages/index.hbs", params);
});

/*
// 수업용 코드 1 - 오픈빌더와 연결

fastify.post("/data0", function (request, reply) {
  console.log(request.body);

  return {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "서버테스트",
          },
        },
      ],
    },
  };
});


// 수업용 코드 2 - 오픈빌더와 연결


{
  bot: { id: '659a9de29921b868bf96e0ed!', name: '프롬플레이스' },
  intent: {
    id: '659a9deed7f9e0312a5f3ef7',
    name: '스킬연결',
    extra: { reason: [Object] }
  },
  action: {
    id: '659aa839aac2c05731652745',
    name: '스킬데이터확인',
    params: { question: '이름이 뭐에요?' },
    detailParams: { question: [Object] },
    clientExtra: {}
  },
  userRequest: {
    block: { id: '659a9deed7f9e0312a5f3ef7', name: '스킬연결' },
    user: {
      id: '2ce4a02fcf63d404f1729e3599d328ad8f83e3634ca15ee80f7fb14c44765c4343',
      type: 'botUserKey',
      properties: [Object]
    },
    utterance: '안녕하세요',
    params: { ignoreMe: 'true', surface: 'BuilderBotTest' },
    lang: 'ko',
    timezone: 'Asia/Seoul'
  },
  contexts: []
}



fastify.post("/data1", function (request, reply) {
  console.log(request.body);

  let json = request.body;
  // 오픈빌더에서 전송하는 json 데이터에서 블럭이름, 사용자발화, 파라미터값에서 값, 사용자 아이디를 다시 전송해 봅시다.
  let blockName = json.userRequest.block.name;
  let utterance = json.userRequest.utterance;
  let uid = json.userRequest.user.id;
  let question = json.action.params.question;

  return {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: `블럭이름 : ${blockName}
발화 : ${utterance}
사용자 아이디 : ${uid}
질문 : ${question}
`,
          },
        },
      ],
    },
  };
});

// ------------------------

// 수업용 코드 3 - ChatGPT 연결

const { getChatGPT } = require('./gpt.js');

fastify.post("/data",async function (request, reply) {
  console.log(request.body);

  let json = request.body;
  // 오픈빌더에서 전송하는 json 데이터에서 블럭이름, 사용자발화, 파라미터값에서 값, 사용자 아이디를 다시 전송해 봅시다.
  let blockName = json.userRequest.block.name;
  let utterance = json.userRequest.utterance;
  let uid = json.userRequest.user.id;
  let question = json.action.params.question;

  const {answer} = await getChatGPT('임무1 : 사용자 질문에 최대한 짧게 답변해 주세요, 임무2 : 사용자가 선택한 음식에 대해 의학적으로 설명해주세요.',question)
  
  return {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: answer,
          },
        },
      ],
    },
  };
});
*/
/*
fastify.post("/data0", function (request, reply) {
  console.log(request.body);

  return {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "서버테스트",
          },
        },
      ],
    },
  };
});
*/











// Run the server and report out to the logs
fastify.listen(
  { port: process.env.PORT, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
  }
);
