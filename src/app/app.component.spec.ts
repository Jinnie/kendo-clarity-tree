let start;
beforeEach(() => {
  start = Date.now();
});

afterEach(() => {
  const time = Date.now() - start;
  console.log(`Test took: ${time}ms`);
  results[results.length - 1].time = time;
});

const results = [];
afterAll(() => {
  let output = `
---------------------------------
CSV
---------------------------------

`;
  results.forEach(result => {
    output += `${result.test},${result.count},${result.time}
`;
  });
  output += `
---------------------------------
>>> START JSON

${JSON.stringify(results, null, '\t')}

>>> END JSON
---------------------------------
`;
  console.log(output);
});

function inText(text, query) {
  return (text.indexOf(query) > -1) ? true : false;
}

// Have it log each test name
jasmine.getEnv().addReporter({
  specStarted: function(result) {
    console.log(result.fullName);
    results.push({ test: result.fullName, time: 0, expand: (result.fullName.indexOf('expand') > -1) ? true : false, count: Number.parseInt(result.fullName.split(' ')[1])});
  }
});
