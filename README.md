# Algomus Developer

This repo outlines a many developers topics from workstation setup/configuration, database information, and links to other documentation repo's.

**Index**

1. [Overview](#overview) - `required`
2. [General Setup](#general-setup) - `required`
3. [GitHub](#github) - `required`
4. [Database Info](#database-info)
5. [Okta User](#okta-user)
6. [Algo Info](#algo)
7. [ETL/ELT/Brain2](#etleltbrain2)
8. [NodeJS](#nodejs)
9. [NodeJS TDD/BDD](#nodejs-tddbdd)
10. [DevOps](#devops)
11. [Tableau Developer](#tableau-developer)
12. [Legacy TDD/BDD](#legacy-tddbdd)
13. [AI/Machine Learning/Data Science](#aimachine-learningdata-science)
14. [Redshift Tables Docs](#redshift-tables-docs)
15. [DataDog Installation](#datadog-setup-and-installation)

## Overview

Algomus, Inc uses `Amazon Web Services` to host all its infrastructure and software. All software developed at Algomus, Inc, is stored in `GitHub`. All individual software assets are to contain the following `copyright` line as the very first line. Python assets importing `futures` is an exception to the rule at the moment.

```PYTHON
__copyright__ = "Algomus, Inc. 2020"
```

## General Setup

This section applies to all developers working at `Algomus, Inc`, including `Tableau` and `AI/Machine Learning/Data Science` developers. Follow [Tableau Developer](#tableau-developer) or [AI/Machine Learning/Data Science](#aimachine-learningdata-science) links to setup your `workstation` appropriately.

### Software

Install and configure the following list of software on your `workstation`. Some software requires license keys, credentials or profiles to utilize. Please work with team on providing necessary access.

-   Messaging/Productivity [Slack](https://slack.com/downloads)
-   [VPN](https://algomus.zendesk.com/hc/en-us/articles/360047612671-Algo-VPN-Client)
-   GitHub UI [GitHub Desktop](https://desktop.github.com/)
-   [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)
-   Database IDE [DataGrip](https://www.jetbrains.com/datagrip/download) (Redshift, MySQL, POSTgres)
-   MongoDB IDE [NoSQL Booster](https://nosqlbooster.com/)
-   Development [Visual Studio Code](https://code.visualstudio.com/download)  (Python, NodeJS, SQL, JavaScript, React)

-   VSCode Extensions
    -   Python
    -   SQL
    -   [NodeJS](#nodejs)
        - [Prettier](#prettier)
        - [ESLint](#eslint)
        - [Jest Orta](#jest-orta)
        - [Cypress](#bdd)

#### GitHub

Configure GitHub to implement signed commits using GPG.

-   [GitHub Link](https://help.github.com/articles/managing-commit-signature-verification/)
-   [GPG](https://gpgtools.org/)
-   Windows
    - run the command `git config --global core.autocrlf true`

## GitHub

This section applies to all developers working at `Algomus, Inc`, including `Tableau` and `AI/Machine Learning/Data Science` developers. All software being developed at/for Algomus, Inc is either stored or is to be stored in `GitHub`. Developers are to review Algomus, Inc's `GitHub` procedures, protocols, best-practices and `git flow` by visiting [wiki github](https://github.com/algomusinc/wiki-github).

## Database Info
### Standard users-names & groups-names for Algo & Brain 2.0

- Groups: same in Prod & Dev env for a client
```
group_<client-alias>_<schema-name>_full_access: 	Group with full access on all objects of a schema
group_<client-alias>_<schema-name>_read_access:		Group with read only access on all objects of a schema
group_<client-alias>_<schema-name>_algo_write_access:	Group with write acces on specific tables of a schema
```
- Users: same in Prod & Dev env for a client
```
user_<client-alias>_<schema-name>_full_access:	ELT/Brain 2.0 user with ownership of all objects in a schema - member of full_access group
algo_user_<client-alias>_<schema-name>:		user used for Algo app - member of read_access & algo_write_access groups
```
### MongoDB

-   Algo-DEV

```
    URI: mongodb://<username>:<password>@algo-dev-shard-00-00-shnic.mongodb.net:27017,algo-dev-shard-00-01-shnic.mongodb.net:27017,algo-dev-shard-00-02-shnic.mongodb.net:27017/algo_dev?ssl=true&replicaSet=Algo-DEV-shard-0&authSource=admin&retryWrites=true
```

-   Algo-QA

```
    URI: mongodb://<username>:<password>@algo-qa-shard-00-00-hbt0v.mongodb.net:27017,algo-qa-shard-00-01-hbt0v.mongodb.net:27017,algo-qa-shard-00-02-hbt0v.mongodb.net:27017/algo_qa?ssl=true&replicaSet=Algo-QA-shard-0&authSource=admin&retryWrites=true
```

-   Algo-PROD

```
    URI: mongodb://<username>:<password>@algo-prod-shard-00-00-ku182.mongodb.net:27017,algo-prod-shard-00-01-ku182.mongodb.net:27017,algo-prod-shard-00-02-ku182.mongodb.net:27017/algo_prod?ssl=true&replicaSet=Algo-PROD-shard-0&authSource=admin&retryWrites=true
```

-   Algomus-DEV

```
    URI: mongodb://<username>:<password>@algomus-dev-shard-00-00-wr5ns.mongodb.net:27017,algomus-dev-shard-00-01-wr5ns.mongodb.net:27017,algomus-dev-shard-00-02-wr5ns.mongodb.net:27017/algomus_dev?ssl=true&replicaSet=Algomus-DEV-shard-0&authSource=admin&retryWrites=true
```

-   Algomus-PROD

```
    URI: mongodb://<username>:<password>@algomus-prod-shard-00-00-yjdp2.mongodb.net:27017,algomus-prod-shard-00-01-yjdp2.mongodb.net:27017,algomus-prod-shard-00-02-yjdp2.mongodb.net:27017/algomus_prod?ssl=true&replicaSet=Algomus-PROD-shard-0&authSource=admin&retryWrites=true
```

### Redshift

-   Golden Eye

```
PROD
    host: goldeneye-rsdb.algomus.technology
    port: Redshift default
    Database: algomus
    Schemas: goldeneye

DEV
    host: dev-goldeneye-rsdb.algomus.technology
    port: Redshift default
    Database: algomus
    Schemas: goldeneye
```

-   Crosby

```
PROD
    host: crosby-rsdb.algomus.technology
    port: Redshift default
    Database: crosby
    Schemas: crosby_stage

DEV
    host: dev-crosby-rsdb.algomus.technology
    port: Redshift default
    Database: crosby
    Schemas: crosby_stage
```

-   Disney/Fox

```
PROD
    host: fox-rsdb.algomus.technology
    port: Redshift default
    Database: fox
    Schemas: prod

DEV
    host: dev-fox-rsdb.algomus.technology
    port: Redshift default
    Database: fox
    Schemas: prod
```

-   Sony/SPHE

```
PROD
    host: sphe-rsdb.algomus.technology
    port: Redshift default
    Database: sony
    Schemas: stage

DEV
    host: dev-sphe-rsdb.algomus.technology
    port: Redshift default
    Database: sphe
    Schemas: stage
```

-   AEC

```
PROD
    host: aec-rsdb.algomus.technology
    port: Redshift default
    Database: aec
    Schemas: prod

DEV
    host: dev-aec-rsdb.algomus.technology
    port: Redshift default
    Database: aec
    Schemas: prod
```

-   SDS/JV

```
PROD
    host: jv-rsdb.algomus.technology
    port: Redshift default
    Database: jv
    Schemas: prod,demandplanning

DEV
    host: dev-jv-rsdb.algomus.technology
    port: Redshift default
    Database: jv
    Schemas: prod,demandplanning
```

-   DIS-EU

```
PROD
    host: dis-eu-rsdb.algomus.technology
    port: Redshift default
    Database: dis_eu
    Schemas: prod

DEV
    host: dev-dis-eu-rsdb.algomus.technology
    port: Redshift default
    Database: dis_eu
    Schemas: prod
```

-   EXCELL

```
PROD
    host: aec-rsdb.algomus.technology
    port: Redshift default
    Database: excell
    Schemas: prod

DEV
    host: dev-rsdb.algomus.technology
    port: Redshift default
    Database: excell
    Schemas: prod
```

-   TARGET

```
PROD
    host: target-rsdb.algomus.technology
    port: Redshift default
    Database: target
    Schemas: prod

DEV
    host: dev-rsdb.algomus.technology
    port: Redshift default
    Database: target
    Schemas: prod
```

-   DIS-GSA

```
PROD
    host: dis-eu-rsdb.algomus.technology
    port: Redshift default
    Database: dis_gsa
    Schemas: prod

DEV
    host: dev-rsdb.algomus.technology
    port: Redshift default
    Database: dis_gsa
    Schemas: prod

```

-   MICROSOFT

```
PROD
    host: aec-rsdb.algomus.technology
    port: Redshift default
    Database: microsoft
    Schemas: prod, demandplanning

DEV
    host: dev-rsdb.algomus.technology
    port: Redshift default
    Database: microsoft
    Schemas: prod, demandplanning
```
#### DEV Credentials

-   Full Access users / Brain 2.0 users

| Client       | Permission  | Username                                  | Password                                             |
| ------------ | ----------- | ----------------------------------------- | ---------------------------------------------------- |
| AEC          | Full Access | user_aec_full_access                      | `8_!rH#*Hsm-Mn&N?x9tsrs!htz!ziH4amBU^_&Tq`           |
| EXCELL       | Full Access | user_excell_prod_full_access              | `9458Y_Mek^cgNMYLNY&uaA85h-_zD@!EZzDHEhuM5mSC&Pt+Yr` |
| CROSBY       | Full Access | user_crosby_stage_full_access             | `000=AmRUw%eh5va99LBMQxP3h@*7g9liWE@%ZKcn`           |
| DISNEY       | Full Access | user_disney_prod_full_access              | `R8r=*9Ja9?US+@t-8nE_9j*hcVf3%t@6#Z5AybE%`           |
| DIS-EU       | Full Access | user_dis_eu_prod_full_access              | `8CZFWRM@L7g!SQ??mFnHxD%Jvm^+UV$$325Lv=PyR@Dr!ztk4r` |
| DIS-GSA      | Full Access | user_dis_gsa_prod_full_access             | `MNUNA$mTj5_Y7ak+VQ$DsBCyhm%aQnq4tmerefP+5%gLyA^d%7` |
| Goldeneye    | Full Access | User_algomus_goldeneye_full_access        | `_4hV+pM%R$f%n5yVZW67X3#p&Gf%v$YNGk9C46MaDDdek@tz$N` |
| MICROSOFT    | Full Access | user_microsoft_prod_full_access           | `JCbWGXiAEzutpamupf6JxiLTxkazm7Hi1MfbJwdb`           |
| MICROSOFT DP | Full Access | user_microsoft_demandplanning_full_access | `h6NEinklDMGCZNJnldM7cnqMGa5lxOYLKYTe4fsN`           |
| SDS          | Full Access | user_sds_prod_full_access                 | `ZeWN_T2-5y^kUQYA6w6L_jueEsv8LS$wYRmJt@Y^EE8JxKs&p6` |
| SDS DP       | Full Access | user_sds_demandplanning_full_access       | `JAc^67hA_5ULmU23qfVzLNPLTPCau+YwLVPPm4_%kW75cR$2By` |
| SPHE         | Full Access | user_sphe_stage_full_access               | `kt5q@nb28mT_2*-2TS*p!x9LcQ^-qt`                     |
| SPHE DP      | Full Access | user_sphe_demandplanning_full_access      | `g&h?9QV2MMysq-_X_*UJz2Rmet-SRm`                     |
| TARGET       | Full Access | user_target_prod_full_access              | `Zb9EuM!nF^Cv83h=Mtt!p?hYtcvMC^VZ#GYzTrrW=-+V!GG9$v` |

-   Algo Users

| Client       | Permission | Username                           | Password                                             |
| ------------ | ---------- | ---------------------------------- | ---------------------------------------------------- |
| AEC          | Algo User  | algo_user_aec_prod                 | `@eMAWXmaj?sW8k7f?_Q6ERq+Nvdb6XA*#QBUD_@xjNEF$tPkRx` |
| CATAD        | Algo User  | algo_user_algomus_stage_bby        | `hUG!!KeCGPU9BaS-Wef!=BsENm@jZ$QP_9H#m!aRqGvbhx6ep7` |
| EXCELL       | Algo User  | algo_user_excell_prod              | `4r3Ru&cvv$Vh#YdkvLRBFDZn?dVdqQCvv#8QHfCKA!uMqRq3rE` |
| CROSBY       | Algo User  | algo_user_crosby_stage             | `FMEBav%F6FdUdJ^E&+K#*k?#pt5tvNGwDDZ47TWX&G^e@6JqA6` |
| DISNEY       | Algo User  | algo_user_disney_prod              | `HGBK^kwaxj?s7^=WJqtCDK6xn%7tPFggNsk#x&FK`           |
| DIS-EU       | Algo User  | algo_user_diseu_prod               | `xBWnv3U8DRFK!wKdKbK+jy9kqYKFa&VW&w4Sm+Nzb$&tRK3!h#` |
| DIS-GSA      | Algo User  | algo_user_disgsa_prod              | `W+*!?!$arckjr5$#wU*r*yssUWXj4DX_&LvSeaRXK-c8#!+A^n` |
| Goldeneye    | Algo User  | algo_user_algomus_goldeneye        | `+ufj4Q!5=@#d3SYz=xHqFYrEpdeSvBHTTpbL7pjwEQRw=6N*37` |
| MICROSOFT    | Algo User  | algo_user_microsoft_prod           | `ku&-a*bj%XHPx_e_yDaKZAZykLU$zQ2xp%G7-q!cUh?psw=PSf` |
| MICROSOFT DP | Algo User  | algo_user_microsoft_demandplanning | `MckjbW42ME!thkF@D!*6Y==L_h_ALPX@2Lme6Qf!^kWCc6-JyM` |
| SDS          | Algo User  | algo_user_sds_prod                 | `n$UCN%8MuG#tm&Vssrxp@_&?B!k5G73sW&XK_bWCPJNCGvqMZu` |
| SDS DP       | Algo User  | algo_user_sds_demandplanning       | `wJhr!756$H7-WjaA54f=dHL$MJfh3ZvQJNKzySXBbT3$CSD+cf` |
| SPHE         | Algo User  | algo_user_sphe_stage               | `YsMSyy-gc9@*vrPK$hSbz6jMFWgamVkwYCg_cakhRa&vHU_@W9` |
| SPHE DP      | Algo User  | algo_user_sphe_demandplanning      | `&TQJ!yEwAH377kT-rr5Vj+F2*dDQy?KJ!BhR*35M+px67UauLd` |
| TARGET       | Algo User  | algo_user_target_prod              | `YnGUNMVJFXfDq@esQD33%m8-54e?5zTNJXBqU5Q!*RXzLewweb` |

### MySQL

-   Warner Brothers Digital/WBED

```
    host: wbe-msdb.algomus.technology
    port: MySQL default
    Database: wbe
```
## Okta User
Algo uses Okta as an Idp.  There are three Okta accounts that Also uses, which are a workforce, customer identity and mock client Idp.  The `worforce` account is used for all internal employees.  The `customer identity` account is used for any client that does not have an Idp or chooses not use their Idp.  The `mock client Idp` is used to simulate a deployment model of a client using their own Idp of Okta.

Below outlines usernames and passwords to use for local development TDD only.
| Account       | Username            | Password                           |
| ------------- | ------------------- | ---------------------------------- |
| Workforce     | app.local@algo.com  | '57^jgq[)R+3)3xaJ(gSjvt4n?;&k8_'   |

## Algo

### User Info

| Email                 | Password           |
| --------------------- | ------------------ |
| auto.test@algomus.com | `C3gKP^^8Arpnn^-L` |

## ETL/ELT/Brain2

## Legacy TDD/BDD

Please find the Legacy TDD/BDD from the following link:
[Legacy TDD/BDD](legacy/README-legacy.md)

## NodeJS

General info

NodeJs information is available at [About NodeJS](https://nodejs.org/en/about/)

### NodeJS Install

Install `LTS` version of [NodeJS](https://nodejs.org/en/download/)

You can test NodeJS install by checking the version.You should see the current Node.js version.

    node —version

### IDE Configuration

After installing [VSCode](#software) as listed and [NodeJs](#nodejs) user can use the link to refer for NodeJs and Typescript based applications [VSCode and NodeJs](https://code.visualstudio.com/docs/typescript/typescript-tutorial)

### Standards

- For standards [ESLint](#eslint) is used
- For code formatter [Prettier](#prettier) is used
- [Configure ESLint](#configure-eslint)
- [Configure Prettier](#configure-prettier)

### NodeJS Project Setup

Use following steps to setup NodeJs project with VS Code:

- Create an empty folder and use the following command on terminal

    ```
    mkdir demo
    cd demo
    code .
    ```
- It will open the folder in VS Code. Now open the terminal in Vs Code by selecting File menu `Terminal` and then select `New Terminal`. From the open terminal window ,select `Command Prompt` from toolbar to switch to cmd terminal.

- To create `package.json` file for project, run the following in the terminal
    ```
    npm init
    ```
- This utility will walk you through creating a package.json file. It will ask you to for field values to configure in `package.json`, please add the relevant values. You can press enter to move to next option.


- `package.json` will be available in project root folder and you can open to verify/change the field values. Please confirm for the following values
    ```
    "author": "Algo. Inc, <full name of who is setting it up>"
    "main":  "app.js" <as entry point of application>
    ```
 - Use following to run `.js` files with `node`
    ```
    node app.js
    ```
- To install the packages in your project you can use the following command to install a package and save it as a dependency in the `package.json` file. Change your package name with `<pkg>` which you want to install.

    ```
    npm install <pkg>
    ```
### Configure ESLint

Run following command  to install `eslint`
   ```
   npm install eslint
   ```
Run following command in terminal to configure `eslint` in project and select the options that are suitable for the project.
```
eslint --init
```
### Configure Prettier

Run following command  to install `prettier`
```
npm install prettier
```
Add following [Prettier config](templates/.prettierrc) that is being used at Algo in project root folder.

### TypeScript

For [TypeScript](https://www.typescriptlang.org/) install:

    npm install -g typescript

You can test your install by checking the version.

    tsc --version

To create a `tsconfig.json` file for project, run the following in the terminal
```
tsc --init
```
Please confirm following values in `tsconfig.json`
```
"outDir": "./dist"
"declaration": "true"
```

Create `app.ts` file in the project and write typescript code.

Once you have "main" attribute set with the app entry point in `package.json`,and to generate type files in the specified location as set in `outDir` of `tsconfig.json` (`./dist` in this example),
add entry in `package.json` like:
```
"types": "app.d.ts"
```
You need to confirm the following entry in `package.json` so it will generate type files also while using as a node module.

```json
"scripts": {
   "prepare": "tsc"
}
```

You need to add a `.npmignore` file to the project file can be empty

Run following command to generate `.js` file under the folder name `dist`
```
tsc
```

### Backend/Microservices

Backend & Microservice is build using [NodeJS and TypeScript](#nodejs). Backend test cases are developed using [TDD](#nodejs) and end to end testing is done using [BDD](#bdd)

- Following is a application structure for backend system.

    ```
    >src
        > routes
        > interfaces
        > controllers
        > orchestration
        > services
    > test
    > app.ts
    > package.json
    > tsconfig.json
    > .env
   ```
- Use following command to run the backend

    ```
    npm install
    ```
- Use following section to [Run test cases](#nodejs-tddbdd).

#### Module Structure
- Following is a node module structure.

    ```
        >src
        >test
        package.json
        app.ts
        package.json
        tsconfig.json
        .env
    ```

### Frontend - React
#### Setup - New Application

- Creating new react application using `Typescript` with `Jest` testing framework, Run command
```
    npx create-react-app <your-app> --template typescript
```
This project will be bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Customize structure
  - Add folders `components`, `css`, `intefaces` and `services` to `src` folder.

  - Eject
    - Run command in terminal
    ```
       npm run eject
    ```
    - Are you sure you want to eject? This action is permanent. » (y/N) - Press y to confirm
    - Ejected successfully! message will appear once completed.
    - `eject` process will add new configurations files in newly created `<your-app>\config` folder and will update `package.json` file as well respectively.

  - Add `Jest Junit` to the project,
    - Run command in terminal
    ```
        npm i jest-junit
    ```

    - In your jest config add the following entry:
    ```
        {
            "reporters": [ "default", "jest-junit" ]
        }
    ```
    - For your Continuous Integration, modifiy script section of `package.json` :
    ```
        {
            "scripts": {
                "test:jenkins": "jest -ci"
            }
        }
    ```
### VS Code Extensions

#### Prettier

Prettier is great to use with [Visual Studio Code](https://code.visualstudio.com/). Download [this extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). Set it to only run Prettier when it detects a Prettier config file for that there are a couple of things that you need to enable, open up your VS code settings and set following properties:
- `prettier.requireConfig` to `true`
- `editor.formatOnSave` to `true`
- `editor.defaultFormatter` to `esbenp.prettier-vscode` from the list of available formatter in the dropdown.


Here is [the link](templates/.prettierrc) to Prettier config file that is being used at Algo.

To break down the steps for installation of prettier (code formatter) extension, you can use the following steps:
- Open VS Code
- Type `Ctrl + p` and paste `ext install esbenp.prettier-vscode` and then press enter. It will install the extension on VS Code.

#### Eslint

For linting the code, eslint is a great extension to use. It also has an extension in Visual Studio Code that can be downloaded using [this link](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). Eslint extension can be used for frontend and backend project where we have javascript file, jsx and tsx files.

To break down the steps for installation of eslint extension, you can use the following steps:
- Open VS Code
- Type `Ctrl + p` and paste `ext install dbaeumer.vscode-eslint` and then press enter. It will install the extension on VS Code.

#### Jest Orta

Within `Visual Studio Code`:

- Click `extensions` widget
- Search `Jest`
- Find [Jest Orta](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- Click `Install` button

#### Note
After installing Jest extension, Please restart the VSCode and reopen the project to have the Jest in VSCode status bar.

## NodeJS TDD/BDD
General info

For NodeJs based applications testing frameworks utilized in Backend/Microservices and Frontend-React are Jest for TDD and Cypress for BDD. CI will be handle utilizing the Jest and for CD Cypress is used.


### Backend/Microservices
#### TDD

Framework used in  Backend/Microservices based on NodeJs services is `Jest`. Utilizing Jest and related typescript frameworks allows environment specific test case execution and jenkins integration.

-  [Jest](https://jestjs.io/) is TDD framework that includes code coverage.
- [Jenkins integration](#jest-junit)

#### Jest Setup

- `npm install --save-dev jest @types/jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript`

Add @babel/preset-typescript to the list of presets in your babel.config.js:
```
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
```
Add the following section to your `package.json`:
```
{
  "scripts": {
    "test": "jest"
  }
}
```
Create a file app.ts and test file in `test` folder and add test case using [TDD template](templates/tdd-bdd_nodejs-tdd.js)

Test folder location as needed can be set in `package.json`:
```
 "jest": {
    "testRegex": "(/test/.*)$"
    }
```
- npm run test
- npm test -- --coverage

#### Jest Junit
-   Run command in terminal
    ```
        npm i jest-junit
    ```
-   In your jest config add the following entry:
    ```
        {
            "reporters": [ "default", "jest-junit" ]
        }
    ```

 -  For your Continuous Integration, modifiy script section of `package.json`:
    ```
        {
            "scripts": {
                "test:jenkins": "jest -ci"
            }
        }
    ```
#### Jest TDD Standards
- TDD standards template is: [TDD template](templates/tdd-bdd_nodejs-tdd.js). That can be use to add tdd in the application. Following section list down tdds examples using Jest mocking:  
-   Mocking   
    Mock fucntions are also known as spies, Mocking in jest gives the ability to add user defined implementation and remove the actual implementation of a function. [Mock Functions](https://jestjs.io/docs/mock-function-api)
    -   Mocking gives us following features:
        -   Change Implementation
        -   Change/Set return values
        -   Track function calling
    -   Mocking Api  
        - Mock a function `jest.fn`
        - Mock a module   `jest.mock`
        - Spy or mock a function `jest.spyon`
    
- Mocking Examples
    - Mocking a function using `jest.fn`
    ```
        const mockFn = jest.fn();
        mockFn();
        expect(mockFn).toHaveBeenCalled();
    ```
    - Mocking a return value
    ```
        const returnsValue = jest.fn(() => true);
        console.log(returnsValue()); 
        
    ```
    ```
        test("jest.fn mocking", () => {
            const mock = jest.fn(() => "value1");
            expect(mock("param1")).toBe("value1");
            expect(mock).toHaveBeenCalledWith("param1");
        });

    ```
    ```
        test("jest.fn mock implementation", () => {
            const mock = jest.fn().mockImplementation(() => "value1");

            expect(mock("param1")).toBe("value1");
            expect(mock).toHaveBeenCalledWith("param1");
        });

    ```
    ```
        test("mocking promise resolve", () => {
            const mock = jest.fn();
            mock.mockResolvedValue("value1");
            expect(mock("param1")).resolves.toBe("value1");
            expect(mock).toHaveBeenCalledWith("param1");
        });

    ```
    ```
        test('async test', async () => {
            const asyncMock = jest.fn<() => Promise<number>>().mockResolvedValue(43);
            await asyncMock(); // 43
        });

        
    ```
    mockFn.mockRejectedValue(value) [mock rejected value](https://jestjs.io/docs/mock-function-api#mockfnmockrejectedvaluevalue)
    ```
        test('async test', async () => {
            const asyncMock = jest
            .fn<() => Promise<never>>()
            .mockRejectedValue(new Error('Async error message'));
            await asyncMock(); // throws 'Async error message'
        });
    ```
    
    mockFn.mockResolvedValue(value) [mock resolved value](https://jestjs.io/docs/mock-function-api#mockfnmockresolvedvaluevalue)

    ```
        test('async test', async () => {
            const asyncMock = jest.fn<() => Promise<number>>().mockResolvedValue(43);
            await asyncMock(); // 43
    });

    ```
    mocking a constructor call
    ```
        jest.mock('./app', () => {
            return jest.fn().mockImplementation(() => {
                //mock implementation here
            })
        })
    ```
    - Mock a module `jest.mock`
    ```
        
        import myobject  from "./myobjectFile";
        // Set all module functions to jest.fn
        jest.mock(myobject);
        test('call myobject function', () => {
            const spy = jest.spyOn(myobject, 'function1');
            const isReturnType = myobject.function1();
            expect(spy).toHaveBeenCalled();
            expect(isReturnType).toBe(true);

            spy.mockRestore();
        });

    ```

    - Mocking a function using `jest.spyon`  
        Spy on a function gives the ability to keep the original implementation and calling function works as it normally does and then all calls of that fucntion will be tarcked. Spy also gives the ability to mock the implementation but one can restore the actual implmentation latter.         

    ```
        import app from "./app";
        import calc from "./calc";
        
        test("calls calc multiply", () => {
            const multiplyMock = jest.spyOn(calc, "multiply");           
            multiplyMock.mockImplementation(() => "testValue");
            expect(app.doMultiply(4, 2)).toEqual("testValue");            
            multiplyMock.mockRestore();
            expect(app.doMultiply(4, 2)).toEqual(8);
        });
    
    ```
    - Mocking multiple functions using array of `jest.SpyInstance`  
        Instead of creating mutiple declarations of each spyon, we can use `jest.SpyInstance` in a key/value as follows:  
    ```
        describe('getAppSettings', () => {
            let spyOns: { [key: string]: jest.SpyInstance } = {}
             beforeEach(() => {
                jest.restoreAllMocks()
                jest.clearAllMocks()
                spyOns = {
                    getByType: jest.spyOn(app.service, 'getByType'),
                    getByValue: jest.spyOn(app.service, 'getByValue')
                }
            })
            test('should resolve', async () => {
                
                spyOns.getByType.mockResolvedValue([])
                let returnValue = await service.funcCall()
                expect(returnValue).toEqual([])
                expect(spyOns.getByType).toHaveBeenCalledTimes(1)
                expect(spyOns.getByValue).toHaveBeenCalledTimes(1)
            })

        })
    ```


    - Mock and MockDeep using [jest-mock-extended](https://www.npmjs.com/package/jest-mock-extended)  
        - Mock        
        ```
            import { mock } from 'jest-mock-extended';

            interface MyProvider {
            getProviderType: () => string;
            getProvider: (type: string) => string[]
            provide: (type: string) => void;
            }

            describe('My Provider Tests', () => {
                test('mock out an interface', () => {
                    const mock = mock<MyProvider>();
                    mock.start('new provider');
                    
                    expect(mock.start).toHaveBeenCalledWith('new provider');
                });
                
                
                test('mock out a return type', () => {
                    const mock = mock<MyProvider>();
                    mock.getProviderType.mockReturnValue('provider type');               
                    expect(mock.getProviderType()).toBe('provider type');
                    });
            });
        ```
        - MockDeep  
            If your class has objects returns from methods that you would also like to mock, you can use mockDeep in replacement for mock.
        ```
            import { mockDeep } from 'jest-mock-extended';

            const mockObj: DeepMockProxy<Test1> = mockDeep<Test1>();
            mockObj.deepProp.getNumber.calledWith(1).mockReturnValue(4);
            expect(mockObj.deepProp.getNumber(1)).toBe(4);

        ```
    

#### Visual Code Extension Setup
[Jest Orta Extension](#jest-orta)

#### Example

    To show VSCode testing navigation bar,Go to File menu , select 'View' and then click on 'Testing'

 ![alt text](images/debug-from-test-explorer.png "Visual Code- NodeJS Jest Test Cases")

#### BDD
We are using cypress for end to end testing of our applications. To install cypress testing framework in a new or existing NodeJS project follow the below steps.

- npm install cypress
- The above command will configure and setup the cypress testing framework in a NodeJS project.
- Update package.json `scripts` section to have commands `"cy:run": "cypress run"` and `"cy:open": "cypress open"`
- Create the config file `cypress.json` in the root of the project folder.
- To create the base folder structure run `cy:run`
- set the `baseUrl` in `cypress.json` file to the url for the appliaction you are writing test cases for. As an example `"baseUrl": "https://example.cypress.io"`
- To run test cases in headless chrome mode use this commad `npm run cy:run`
- To run test cases in chrome mode use this commad `npm run cy:open`
- Create bdd.spec.js file in test --> cypress --> integration directory for all BDD cases using [BDD template](templates/tdd-bdd_nodejs-bdd.js)
### Frontend - React
#### TDD

Framework used in Frontend-React is `Jest`.
-   [Jest](https://jestjs.io/) is TDD framework that includes code coverage.
-   It comes pre configured with `create-react-app`

#### BDD
We are using cypress for end to end testing of our frontend applications.
- [How to setup Cypress](#bdd)

## DevOps
`DevOps` team utilizes multiple technologies, programming languages and tools to implement automation, security and monitoring.  Infrastructure is primarily managed using `Terraform` along with some `AWS CloudFormation`.  Programming languages used are shell scripting, NodeJS/TypeScript, and python.

All engineers are required to use `Visual Code` as an IDE.  Use developer sections to setup/configure IDE for specific programming languages.

### Terraform
Install Visual Code extensions:
- `HashiCorp Terraform`
- `Terraform Autocomplete`

After installing the extensions, edit the Terraform extension settings. By visiting `Settings` > `Extensions` > `Terraform`.  Click link `Edit in settings.json`.  Add below snippit with JSON object after last property definition.
```
    "[terraform]": {
        "editor.defaultFormatter": "hashicorp.terraform",
        "editor.formatOnSave": false,
        "editor.codeActionsOnSave": {
            "source.formatAll.terraform": true
        },
        },
        "[terraform-vars]": {
        "editor.defaultFormatter": "hashicorp.terraform",
        "editor.formatOnSave": false,
        "editor.codeActionsOnSave": {
            "source.formatAll.terraform": true
        },
    }
```

## Tableau Developer

A developer is required to have a `license key` is required. Install `Tableau Desktop` version 2020.3.13

-   [Click here](https://www.tableau.com/support/releases/desktop/2020.3.13) to download.

## AI/Machine Learning/Data Science

## Redshift Tables Docs

Documentation for Database Tables in Redshift is [here](redshift/).

## Datadog Setup and Installation

-   Install datadog test recorder as extension on chrome: https://chrome.google.com/webstore/detail/datadog-test-recorder/kkbncfpddhdmkfmalecgnphegacgejoa.
-   Make sure `https://qa-app.algo.com/` and `https://app.algo.com/` can be accessed by the extension.
-   Because of the nature of how datadog synthesis works, we need to clear `storage` and `cookies` for `https://qa-app.algo.com/` while making qa test and `https://app.algo.com/` while making prod test. Which means every test case that you build you have to login in the recorder.

### Naming Convention:

-   All the test cases that will be part of Datadog Synthesis will follow these naming conventions:

```
Algo-{Env}: {client} Action/Question/Measure
Algo-QA: User Login Success (No client is given as this is generic and common)
Algo-QA: SPHE Debug Client Batch Status
```

### Methodology

-   Just like programming, Datadog Synthesis provides the concept of `reuseability`. Meaning tests can be reused if needed. This funtionality helps us to maintain test cases.
-   For example: We always have to login to algo application for any question to run, rather than writing that test case everytime for every question, we can reuse the test case that just does the login, `Algo-QA: User Login Success`.
