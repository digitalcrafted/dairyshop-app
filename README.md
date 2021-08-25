# Dairy Shop Nuxt SSR App

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Objective
Build a display using Vue.js to hit our API and display the data. The display must contain the following results:

	Name
	Image
	Price

The grid must also have a filter menu to filter results by either category or catname.

### `Feedback`
- See `Extra Bonus Below`

### `Requirements`

- Make a fetch request to `REDACTED` using Axios
- Create a state and pass Axios data to it
- Map through data and render an item for each object
- Item should contain an image with a transparent overlay on the bottom of the image
- Overlay should contain item name & price (see example below)
- Data must be displayed in a 4 column grid using flexbox
- Entire project must be responsive on all screen sizes
- Create an array of unique categories from the api data (example function below)
- Create a dropdown menu that has a list of unique categories you can filter by 
- Products should be filterable by selected category from the drop down menu
- When everything is complete please submit a staging link and github repo


### `Bonus`

- Add Pagination

### `Extra Bonus`
- I completed the requirements listed and went the extra mile:
- I added `Search` functionality
- I ensured that the `Search` was performant by implemented a character limit and a debounce functionality


