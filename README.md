# node-clinic-examples

Server examples for `clinic`

```
npm install -g clinic
npm install -g autocannon
```

## Examples

### Sync I/O

```
clinic doctor --on-port 'autocannon 127.0.0.1:$PORT' -- node sync-io
```

### Event Loop

```
clinic doctor --on-port 'autocannon 127.0.0.1:$PORT' -- node slow-event-loop
```

### GC

```
clinic doctor --on-port 'autocannon -c 2500 127.0.0.1:$PORT' -- node slow-gc
```

### I/O

```
clinic doctor --on-port 'autocannon 127.0.0.1:$PORT' -- node slow-io
```

## License

[Apache 2.0](<https://tldrlegal.com/license/apache-license-2.0-(apache-2.0)>)
