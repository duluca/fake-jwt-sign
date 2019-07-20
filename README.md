# Fake JWT Sign

> A basic JWT sign method, meant for browser-side testing and dummy implementations

_FOR EDUCATIONAL PURPOSES ONLY. DO NOT USE IN PRODUCTION CODE!_

## Installing the Package

`npm i -D fake-jwt-sign`

## Sample Usage

Given some data object (i.e. `authStatus` as shown below) and a `'secret'`, the `sign` method generates a valid JWT token, assigned to `accessToken` below.

```
const authStatus = {
      isAuthenticated: true,
      userId: 'e4d1bc2ab25c',
      userRole: 'manager@test.com'
    }

const accessToken = sign(authStatus, 'secret', {
        expiresIn: '1h',
        algorithm: 'none',
      })
```

## Sample Project

Check out https://github.com/duluca/lemon-mart/ to see the package in action.

## Attribution

Based on this Codepen https://codepen.io/jpetitcolas/pen/zxGxKN
