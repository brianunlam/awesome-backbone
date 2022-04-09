
# Roadmap

## What?

A basic backbone system with a component library and microservices for authentication/authorization

### Our target

  - Simple creation of:
    - react apps in the monorepo using the components library
    - common tools to be used across the monorepo
    - microservices using nextjs integrated with the authorization/authentication component

  - Github workflow to run eslint, build and deploy tasks

  - Most of the reusable functions should be in a separate folder to be used by the other projects

  - Components managing using storybook and bit

  - Basic dashboard application with the following features
    - i18n
    - Theming
    - User managment
    - Permissions Managment
    - Authentication/Authorization
    - Multiple roles

  - Microservice to manage app's configuration

  - Microservice to manage user auth and roles

  - CLI to generate
    - frontend apps
    - components
    - common libraries
    - microservices

## Tools
  - Storybook
  - Lerna
  - Yarn workspaces
  - Typescript
  - Testing
    - Jest
    - React Testing Library
    - Cypress
  - nextjs
  - nestjs