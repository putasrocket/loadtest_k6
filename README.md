# k6 example

> ตัวอย่างการเขียน/ใช้งาน k6

<img src="./k6-icon.png" width="200">

# Table of Contens

- [Google Slide](#google-slide)
- [k6 คืออะไร ?](#k6-คืออะไร-)
- [Official Document](#official-document)
- [วิธีการใช้งาน k6](#วิธีการใช้งาน-k6)
- [Dashboard](#dashboard)
  - [การ ดู Dashboard แบบ realtime](#การ-ดู-dashboard-แบบ-realtime)
  - [การ ดู Dashboard แบบไม่ realtime](#การ-ดู-dashboard-แบบไม่-realtime)
  - [Run dashboard ผ่าน Docker](#run-dashboard-ผ่าน-docker)
  - [Export to HTML](#export-to-html)
- [Extensions](#extensions)
- [Custom k6](#custom-k6)



```sh
$ brew install go
$ brew install k6
```

3. Check version

```sh
$ k6 --version
# k6 v0.48.0 (go1.21.6, darwin/amd64)
```

2. Create sample script

```sh
# Command format
# k6 new <script-name.js>

$ k6 new world.js
```

3. Run

```sh
$ k6 run world.js
```


4. Run Docker 

```sh
$ docker run -v $(pwd):/script --rm -i grafana/k6 run /script/world.js
```


# Dashboard

1. Install **xk6**

[https://github.com/grafana/xk6/](https://github.com/grafana/xk6/)

> This command line tool and associated Go package makes it easy to make custom builds of k6. -- [Document](https://github.com/grafana/xk6)

```sh
$ go install go.k6.io/xk6/cmd/xk6@latest
```

2. Intall **k6 extension** 

[https://github.com/grafana/xk6-dashboard](https://github.com/grafana/xk6-dashboard)

```sh
$ xk6 build --with github.com/grafana/xk6-dashboard@latest
```

`command not found: xk6` run command run script yet.

```sh
export PATH=$(go env GOPATH)/bin:$PATH
```

### Dashboard realtime

3. Run  

ใช้ `./k6` แทน `k6`

```sh
$ ./k6 run --out web-dashboard world.js
```

4. Open Dashboard    


### Dashboard not realtime  

run k6 and save result `.json` open dashboard 

5. Run (Save output เป็น .json)

```sh
$ ./k6 run --out json=output.json world.js
```

6. Install **k6-web-dashboard**

[https://github.com/grafana/xk6-dashboard/tree/master/cmd/k6-web-dashboard](https://github.com/grafana/xk6-dashboard/tree/master/cmd/k6-web-dashboard)

> The k6-web-dashboard is a command-line tool that enables the dashboard event file (saved during the previous k6 run) to be played back (and displayed in a browser). In addition to playback, it also offers the possibility to create a single file HTML report from the event file.

```sh
$ go install github.com/grafana/xk6-dashboard/cmd/k6-web-dashboard@latest
```

7. change `.json` to `.ndjson` (Web Dashboard support .ndjson)

```sh
$ k6-web-dashboard aggregate output.json output.ndjson
```

8. Run/Replay dashboard on .ndjson

```sh
$ k6-web-dashboard replay output.ndjson
```

### Run dashboard ผ่าน Docker

```sh
$ docker run --rm -i -p 5665:5665 -v $(pwd):/script ghcr.io/grafana/xk6-dashboard:0.7.2 run --out web-dashboard /script/world.js
```

### Export to HTML

```sh
$ docker run --rm -i -p 5665:5665 -v $(pwd):/script ghcr.io/grafana/xk6-dashboard:0.7.2 run --out web-dashboard=export=/script/output.html /script/world.js

  ./k6 run --out web-dashboard=export=/script/output.html script/world.js

```


# Extensions

[https://k6.io/docs/extensions/](https://k6.io/docs/extensions/)

# Custom k6

ตัวอย่างการ Custom k6 โดยเพิ่ม dashboard และ mongodb extension เข้าไป

- xk6-dashbaord - [https://github.com/grafana/xk6-dashboard](https://github.com/grafana/xk6-dashboard)
- xk6-mongo - [https://github.com/GhMartingit/xk6-mongo](https://github.com/GhMartingit/xk6-mongo)

Dockerfile

```Dockerfile
FROM golang:latest as builder

RUN go install go.k6.io/xk6/cmd/xk6@latest

RUN xk6 build \
    --with github.com/grafana/xk6-dashboard@latest \
    --with github.com/GhMartingit/xk6-mongo@latest \
    --output /k6

FROM grafana/k6:latest
COPY --from=builder /k6 /usr/bin/k6
```

Build

```sh
$ docker build -t custom-k6 .
```

ตัวอย่างการ Run

```sh
$ docker run --rm -i -p 5665:5665 -v $(pwd):/script custom-k6 run --out web-dashboard=export=/script/output.html /script/world.js 
```

Connect Mongodb

```sh
$ docker run --rm -i -p 5665:5665 --add-host host.docker.internal:host-gateway -v $(pwd)/examples:/script custom-k6 run --out web-dashboard=export=/script/output.html /script/connect-mongodb.js
```

![](./connect-mongodb.png)
