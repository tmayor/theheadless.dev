---
title: Basics
date: 2020-06-26
author: Hannes
tags: 
  - Puppeteer
  - Playwright
  - JavaScript
---


Intro text for basics

Intro to alerts

:::: tabs :options="{ useUrlFragment: false }"
::: tab Puppeteer
<<< @/blog/snippets/puppeteer/basic-alert.js
:::

::: tab Playwright
<<< @/blog/snippets/playwright/basic-alert.js
:::

::::

Run this example as follows.
```shell script
node basic-alert.js
```

# Takeaways

Alert - quite similar to each other...


# File Upload
Intro to fileupload


:::: tabs :options="{ useUrlFragment: false }"
::: tab Puppeteer
<<< @/blog/snippets/puppeteer/basic-upload-file.js
:::

::: tab Playwright
<<< @/blog/snippets/playwright/basic-upload-file.js
:::

::::

Run this example as follows.
```shell script
node basic-upload-file.js
```

# Takeaways

More details here and here


# Emulate Devices

Emulating an iPhone 6
Difference between puppeteer and playwright - device context add description here:
https://blog.logrocket.com/playwright-vs-puppeteer/#:~:text=As%20a%20result%2C%20Playwright%20is,for%20Safari)%2C%20and%20Firefox.



:::: tabs :options="{ useUrlFragment: false }"
::: tab Puppeteer
<<< @/blog/snippets/puppeteer/basic-emulate-devices.js
:::

::: tab Playwright
<<< @/blog/snippets/playwright/basic-emulate-devices.js
:::

::::

Run this example as follows.
```shell script
node basic-emulate-devices.js
```

# Takeaways

More details here and here


# Get the value of common form elements

Gets the value of commonly used HTML form elements using page.$eval()

:::: tabs :options="{ useUrlFragment: false }"
::: tab Puppeteer
<<< @/blog/snippets/puppeteer/basic-forms.js
:::

::: tab Playwright
<<< @/blog/snippets/playwright/basic-forms.js
:::

::::

Run this example as follows.
```shell script
node basic-forms.js
```

# Takeaways

More details here and here


# Get list of links
Scrapes Hacker News for links on the home page and returns the top 10. We use basic javascript to return the anchor values here. Both Puppeteer and Playwright are working quite similar as you can see below. 


:::: tabs :options="{ useUrlFragment: false }"
::: tab Puppeteer
<<< @/blog/snippets/puppeteer/basic-get-list-of-links.js
:::

::: tab Playwright
<<< @/blog/snippets/playwright/basic-get-list-of-links.js
:::

::::

Run this example as follows.
```shell script
node basic-get-list-of-links.js
```

# Takeaways

More details here and here

# Get text value of an element
This script goes to Hackernews to get the text value for a specific link.


:::: tabs :options="{ useUrlFragment: false }"
::: tab Puppeteer
<<< @/blog/snippets/puppeteer/basic-get-text-value.js
:::

::: tab Playwright
<<< @/blog/snippets/playwright/basic-get-text-value.js
:::

::::

Run this example as follows.
```shell script
node basic-get-text-value.js
```

# Takeaways

More details here and here


# Get the page title
This script goes to Hackernews to get the text value for a specific link.


:::: tabs :options="{ useUrlFragment: false }"
::: tab Puppeteer
<<< @/blog/snippets/puppeteer/basic-get-title.js
:::

::: tab Playwright
<<< @/blog/snippets/playwright/basic-get-title.js
:::

::::

Run this example as follows.
```shell script
node basic-get-title.js
```

# Takeaways

More details here and here


# Hover
The hover function is a combination of scrolling and putting the mouse into a hover state over the requested element. This example hovers the first track we find on the soundcloud.com homepage, which should trigger the play and like buttons to be visible


:::: tabs :options="{ useUrlFragment: false }"
::: tab Puppeteer
<<< @/blog/snippets/puppeteer/basic-hoover.js
:::

::: tab Playwright
<<< @/blog/snippets/playwright/basic-hoover.js
:::

::::

Run this example as follows.
```shell script
node basic-hoover.js
```

# Takeaways

More details here and here



```