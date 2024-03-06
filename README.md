# Fullstack App with Javascript, Next.js, React

## Overview
This fullstack app features a homepage where are generated 5 random locations for visiting this year, a search page where the user can search a city, and the informations about city are provided from Geocoding API and OpenWeather API by fetching informations.
The city page contains more details about the selected city, such as humiduty, temperature, sunrise, sunset and many others. Also you can the city to favorites, and by doing this the information of that city is stored in a MongoDB database.
The favorite page contains every city that the user added to favorites. If the server is restarded and the city is still in the database, the user can't add the city again, only if he deletes it.

## Preview
**Homepage**
![alt text](https://github.com/clauf14/modern-web-app-city-explorer/blob/main/poze/homepage.PNG)
**Search Page**
![alt text](https://github.com/clauf14/modern-web-app-city-explorer/blob/main/poze/search_wo_input.PNG)
**After searching a city**
![alt text](https://github.com/clauf14/modern-web-app-city-explorer/blob/main/poze/search.PNG)
**City Page with detailed info about the city**
![alt text](https://github.com/clauf14/modern-web-app-city-explorer/blob/main/poze/citypage.PNG)
**Adding a city to favorite (The icon button changed)**
![alt text](https://github.com/clauf14/modern-web-app-city-explorer/blob/main/poze/added_to_fav.PNG)
**Favorite Page**
![alt text](https://github.com/clauf14/modern-web-app-city-explorer/blob/main/poze/fav_page.PNG)

## Usage
**1. Clone the Repository and open with VSCode:**

   ```git bash
   git clone https://github.com/clauf14/modern-web-app-city-explorer.git
   ```

**2. Open the terminal and type:**

  ```git bash
   npm run dev
  ```

**3. Click on the link and enjoy!**

  - Server started on [http://localhost:3000](http://localhost:3000)

## Technologies Used

- Node.js
- Next.js
- JavaScript
- React
- MongoDB
- ChakraUI

  
