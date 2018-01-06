---
title: "My Eighth  Post"
date: 2017-12-29T14:34:03-07:00
draft: false
---

Torquent ea tincidunt veniam. Scelerisque elementum magnis faucibus. Aute cursus rutrum habitant litora. Inceptos veniam dolore. Nullam fusce felis.Elementum libero imperdiet nisl viverra placerat. Sodales excepteur lectus lobortis duis. Sociis euismod vehicula cras. Quisque vulputate pede libero dis. Cursus mus fames libero pharetra.Culpa vulputate aptent adipisicing. Maecenas sagittis orci primis vitae hendrerit. Facilisi fames sollicitudin gravida vitae penatibus. Per erat purus proident. Libero tempus occaecat sunt.

{{< highlight javascript >}}
const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
{{< / highlight >}}

<!--more-->

{{< gist spf13 7896402 >}}