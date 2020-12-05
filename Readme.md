# Readme
Generate hosts file by writing simple rules in javascript

## Example

``deno run --allow-net --allow-read https://raw.githubusercontent.com/minioin/hosts-generator/release/cli.ts hosts.js``

```javascript
# ./hosts.js

A('127.0.0.1',  ['www', 'api'], 'example.com')
//remoteStaticHosts("https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts")

```

This should produce
```
127.0.0.1 www.example.com
127.0.0.1 api.example.com

```

## Installation
```
deno install -n hosts-generator --allow-net --allow-read https://raw.githubusercontent.com/minioin/hosts-generator/release/cli.ts
```

## License
MIT
