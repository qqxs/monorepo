## Monorepo

What is [Monorepo](https://en.wikipedia.org/wiki/Monorepo)?

In version control systems, a monorepo ("mono" meaning 'single' and "repo" being short for 'repository') is a software development strategy where code for many projects is stored in the same repository. As of 2017, various forms of this software engineering practice were over two decades old, but the general concept had only recently been named. Many attempts have been made to differentiate between monolithic applications and other, newer forms of monorepos.

## yarn workspace cli

```bash
# root install dependency xxxxx
yarn add -W -D xxxxx

# root remove dependency xxxxx
yarn remove -W xxxxx

# package app1 install dependency xxxx
yarn workspace app1 add xxxx

# run app1 dev
yarn workspace app1 dev

# build all package
yarn workspaces run build
```
## Use

```bash

# isntall
yarn install

# run common
yarn run common

# run app1
yarn run app1

# run node server (Koa2)
yarn run app2

# run react server render (next.js)
yarn run app-next

# run react spa
yarn run app-react
```