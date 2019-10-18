---
title: We are going!! (title)
author: Marc de Ruijter
tags: ["gridsome", "vue", "markdown"]
slug: blogpost2
description: Second blogpost with Gridsome (description)
timeToRead: 1
date: 2019-10-17
---

# Markdown blogpost 002 (h1)

## We are getting there! (h2)

This is a beautifull blogpost.

### TODO (h3)

* Add an image
* Use Netlify CMS

And here is our image:
Duhhh

8th try: YAY, a huge image!
![Marc en Leon](./assets/images/marc-en-leon.jpg)




7th Try (changed images folder from /src to /blog)
```
![Marc en Leon](./blog/assets/images/marc-en-leon.jpg)
TypeError: Cannot read property 'allPost' of null
```
```
6th Try:
![Marc en Leon](./assets/images/marc-en-leon.jpg)
Type error again: TypeError: Cannot read property 'allPost' of null
```

```
![Marc en Leon](./src/assets/images/marc-en-leon.jpg)

```


5th Try:
```
![Marc en Leon](./src/assets/images/marc-en-leon.jpg)
Now suddenly the whole blog does not work anymore 8deleted cache and reloaded twice)
TypeError: Cannot read property 'allPost' of null
```


4th Try:
```
![Marc en Leon](/assets/images/marc-en-leon.jpg)
marc-en-leon.jpg:1 GET http://localhost:8081/assets/images/marc-en-leon.jpg 404 (Not Found)
```

3rd Try:
```
![Marc en Leon](~/assets/images/marc-en-leon.jpg)
GET http://localhost:8081/blog/secondblogpost/~/assets/images/marc-en-leon.jpg 404 (Not Found)
```

1st try:
```
![Marc en Leon](/src/assets/images/marc-en-leon.jpg)
"errors": [
    {
      "message": "/var/www/node/gridsomeblog/blog/src/assets/images/marc-en-leon.jpg was not found.",
```


Second try:
``` 
![Marc en Leon](~/src/assets/images/marc-en-leon.jpg)
GET http://localhost:8081/blog/secondblogpost/~/src/assets/images/marc-en-leon.jpg 404 (Not Found)
 ```