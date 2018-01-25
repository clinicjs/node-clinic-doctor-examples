# node-clinic-examples

Server examples for `clinic`

```
npm install -g clinic
npm install -g autocannon
```

## Examples

### Deoptimization

```
clinic doctor -- node slow-deoptimization
autocannon http://127.0.0.1:3000
```

### Event Loop

```
clinic doctor -- node slow-event-loop
autocannon http://127.0.0.1:3000
```

### GC

```
clinic doctor -- node slow-gc
autocannon -c 2500 http://127.0.0.1:3000
```

### I/O

```
clinic doctor -- node slow-io
autocannon http://127.0.0.1:3000
```

## License

[Apache 2.0](<https://tldrlegal.com/license/apache-license-2.0-(apache-2.0)>)
