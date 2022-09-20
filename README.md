# FruityNutrition
Single Page for Applications (SPA) + RESTful API for Fruit Nutrition. It supports the following operations:
- List all fruit: fruit/all
- View single fruit (by id): /details/:id
- Search by fruit name: fruit/:keyword
- Search by fruit genus fruit/genus/:keyword
- Search by fruit family: fruit/family/:keyword
- Search by fruit order: fruit/order/:keyword
- Search by fruit Add a new fruit: /create
## App Details
The app is based on Node.js + lit-HTML + Page.js + CSS.
Note: To fix CORS issue please visit https://cors-anywhere.herokuapp.com and click button ,,Request temporary access to the demo server".
## RESTful API
The app use two APIs:
### https://www.fruityvice.com - get all information about fruit details and nutritions:
- GET /api/fruit/:name - Get Fruits available in the database in a list form.
- GET /api/fruit/all - Get all Fruits available in the database in a list form.
- GET /api/fruit/family/:family - Get all Fruits available in the database in a list form which belong to a given family.
- GET /api/fruit/genus/:genus - Get all Fruits available in the database in a list form which belong to a given genus.
- GET /api/fruit/order/:order - Get all Fruits available in the database in a list form which belong to a given order.
- PUT /api/fruit - {"genus": "Fragaria","name": "Strawberry","family": "Rosaceae","order": "Rosales","nutritions": {"carbohydrates": 5.5,"protein": 0,"fat": 0.4,"calories": 29,"sugar": 5.4}}
### https://imsea.herokuapp.com/api/1?q= - get picture for searched fruit
- GET /api/1?q=:keyword
## Screenshots
- Main menu
![main_menu](https://user-images.githubusercontent.com/59261346/191263717-63849bd4-1baa-48b5-8ee0-d7b7d1693198.PNG)
- Create fruit
![create](https://user-images.githubusercontent.com/59261346/191263917-de8d674d-addf-45cd-9242-4b6dc490169e.PNG)
- Create fruit issue ,,All field are required!"
![create_issue](https://user-images.githubusercontent.com/59261346/191264304-a731b27b-7c69-44ad-9485-0e8a4a198916.PNG)
- Search all fruit
![search_main_all](https://user-images.githubusercontent.com/59261346/191264474-fdecf4b5-fb97-4161-aaf5-d06cb3e52a70.PNG)
- Search by name
![search_by_name](https://user-images.githubusercontent.com/59261346/191264561-e2613227-ff25-42ad-8efe-d7a466db6ac9.PNG)
- Search by order
![search_by_order](https://user-images.githubusercontent.com/59261346/191265302-2b20c6b5-d228-45bc-b8e5-04467b6c767a.PNG)
- Search by family
![search_by_family](https://user-images.githubusercontent.com/59261346/191265397-c064a1df-9baa-4028-a83a-9574ebaab229.PNG)
- Search by genus:
![search_by_genus](https://user-images.githubusercontent.com/59261346/191265476-131f3882-a07c-4223-8115-19291d10c553.PNG)
- Details
![details](https://user-images.githubusercontent.com/59261346/191265544-bc000e6f-23ae-4ca2-98f0-12de61e6929a.PNG)
- About
![about](https://user-images.githubusercontent.com/59261346/191265591-3d9d5e66-fa1c-4cac-996c-9f1a704978a7.PNG)



