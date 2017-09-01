# React Router Issue Reproduction

## Steps to reproduce

1. Pull down repo
2. `$ yarn install`
3. `$ CI=true yarn test`
4. This will return a failing test that shows the problem
5. `$ rm -Rf node_modules`
6. `$ mv yarn.lock yarn.lock.failing && mv yarn.lock.working yarn.lock`
7. `$ yarn install`
8. `$ CI=true yarn test`

See code in `/src`. The test that fails is the one labeled `should redirect passed component when no token is passed`.

What's special about this test is that it return a `<Redirect />`. The other tests never render a `<Redirect />` and pass with both sets of dependencies.

The failing yarn.lock installs `react-router@4.2.0` even when `react-router-dom` is locked to `4.1.2`

The passing yarn.lock has both `react-router` and `react-router-dom` pinned to `4.1.2`
