# product-catalog-api

## Get all products
    GET: /products/?page=number&limit=number&sort=string

Where: 

> ```page=1``` by default

>  ```limit=16``` by default

> ```sort=name``` by default, **Avaliable: (newest, oldest, price-lowest)**


## Get product by Id
    GET: /products/:productId
    
 ## Get newest products
    GET: /products/new/?limit=number
   
  Where:
  
  > ```limit=10``` by default

## Get products with the biggest discount
    GET: /products/discount/?limit=number
   
  Where:
  
  > ```limit=10``` by default





