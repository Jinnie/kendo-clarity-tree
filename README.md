# Clarity and Kendo Comparison

View the chart at https://gnomeontherun.github.io/kendo-clarity-tree/chart.

This is a comparason of how long it takes to render various types of Tree Views. 

## Limitations of this benchmark

The biggest limitation is that this benchmark does not aggregate successive runs to ensure that the variances between executions are normalized. That could be fixed by taking the results of multiple runs and averaging the values, but has not been implemented.

## How to work with this

You can setup this repo using

```
git clone https://github.com/gnomeontherun/kendo-clarity-tree.git
cd kendo-clarity-tree
npm install
npm start
```

This will let you view the test website at http://localhost:4200 and view the various demos. You should be able to review the implementations of each tree view this way and see differences. 

## How to generate the tests

The benchmark uses unit tests that are written the same way to generate structured results. 

If you want to run the benchmark, pipe the output of the test to `output.txt`, run the `parse-output.js` file with node, then start the server to view the chart.

```
npm test > output.txt
node parse-output
npm start
```

## How to create more tests

More tests can be added, probably the easiest way is to copy one of the existing directories like `src/app/clarity-tree` and updating the component names and routes to be unique. 

The unit tests expect that you'll run them in the same way, and use the component in the top level describe. That way the tests can be grouped by example and a JSON file is generated.

The unit tests all expect that your example will allow the top level item can expand by setting the components `expand` property to true. This is imperative for consistency between tests.
