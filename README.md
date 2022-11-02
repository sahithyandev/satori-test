When I ran `node index.js`, it failed with the following error.

## The error

```
D:\Projects\satori-test\node_modules\yoga-layout-prebuilt\yoga-layout\build\Release\nbind.js:53
        throw ex;
        ^

TypeError: Cannot read properties of undefined (reading 'toLowerCase')
    at D:\Projects\satori-test\node_modules\satori\dist\index.cjs:8:20073
    at Array.map (<anonymous>)
    at yt.getEngine (D:\Projects\satori-test\node_modules\satori\dist\index.cjs:8:20064)
    at nn (D:\Projects\satori-test\node_modules\satori\dist\index.cjs:5:13532)
    at nn.next (<anonymous>)
    at bt (D:\Projects\satori-test\node_modules\satori\dist\index.cjs:8:16716)
    at bt.next (<anonymous>)
    at eo (D:\Projects\satori-test\node_modules\satori\dist\index.cjs:9:28898)
    at D:\Projects\satori-test\index.js:13:23

Node.js v18.9.0
```
