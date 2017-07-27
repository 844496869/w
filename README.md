# w
### Why I developed the project
When I use the vue framework, I want to clone a array and I don't want to change the original data,so I want use some function to finish this job, So I try two ways

1:Use the "clone" of underscore or lodash

2:Use the "slice(0)" of JS

Both of these two function were failed. After that I find a solution:
JSON.parse(JSON.stringify(object));


### run
```bush
npm install
```

### test
```bush
npm test
```
