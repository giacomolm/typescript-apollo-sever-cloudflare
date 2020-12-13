##How to build
```
wrangler build
```

##How to run
```
wrangler preview --watch
```

#Development
```
wrangler dev
```

#How to test
```
curl --location --request POST 'http://127.0.0.1:8787/' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"query pokemon{\n    pokemon(id: \"1\") {\n        id,\n        name\n    }\n}","variables":{}}'
```