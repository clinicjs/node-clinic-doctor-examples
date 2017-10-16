# node-clinic-examples

Server examples for `clinic`

## Examples

### Deoptimization

```
node slow-deoptimization
wrk http://127.0.0.1:3000
```

### Event Loop

```
node slow-event-loop
wrk http://127.0.0.1:3000
```

### GC

```
node slow-gc
wrk -c 2500 -t 512 http://127.0.0.1:3000
```

### I/O

```
node slow-io
wrk http://127.0.0.1:3000
```

## License
[MIT](https://tldrlegal.com/license/mit-license)
