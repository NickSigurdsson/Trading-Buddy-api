
# Trading Buddy (API)

Trading buddy is beginner friendly stock monitoring and analysis web application whose goal is to provide adequate stock analysis 
tools through a clutter-free UI.


## Features

- Auto-updating news list
- Built-in economic calendar
- User-Customizable watchlist and portfolio list
- Auto-updating stock quotes
- Customizable news list


## Tech Stack
Front-end: React.js , Sass

Backend: Express, node.js, MySQL
## Run Locally

Clone the project

```bash
  git clone https://github.com/NickSigurdsson/Trading-Buddy-api.git
```

Go to the project directory

```bash
  cd trading-buddy-client
```

Install dependencies

```bash
  npm install
```

Create migrations

```bash
  npx knex migrate:latest
```

Seed initial data

```bash
  npx knex seed:run
```

Start the server

```bash
  npm start
```


## IMPORTANT

This Repository is ONE of TWO parts of the project, you must run both the client and the server code locally in order to run this project!

The link for the server repository is : https://github.com/NickSigurdsson/Trading-Buddy-client
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`API_KEY_ALPHA_ADV`

`API_MARKETAUX`

`API_EODHISTORICALDATA`

`DB_LOCAL_DBNAME`

`DB_LOCAL_USER`

`DB_LOCAL_PASSWORD`
## API Requirements

You will need to obtain API KEYS from several different API providers as listed below: 

https://www.alphavantage.co/

https://www.marketaux.com/

https://eodhistoricaldata.com/
## Key Learnings

- Preprocessing API data prior to usage 
- Efficiently traversing through complex objects obtained through API calls
- Using Plotly.js for data visualization
- Utilizing multiple APIs and Libraries to obtain various functionalities
- To always set a realistic goal when provided with a time constraint on a project
