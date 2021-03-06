# Ms. Houchens' Kandy Korner 🍭

<!--  a story for kandy korner -->
<!-- goals: 
    - go over planning process with students
    - students should lead the discussion (with us asking questions)
    - students should be able to take this criteria and build:
        - an ERD?
        - a component list/dependency graph
        - wireframe
 -->

Ms. Houchens came to us wanting to build an application for her candy company, Kandy Korner™. Kandy Korner has been a 🔥HOT🔥 business here in Nashville for the last 5 years, with Ms. Houchens opening up 2 more locations in the last year. She and her employees are tired of keeping track of products, location information, employee information, EVERYTHING on candy wrappers. Everything that her company does/is is on those candy wrappers and she's looking to move into a paperless world. Right now she needs an application to take care of her inventory needs and employees.

Ms. Houchens has requested these features in her application:

1. An employee can login with their username and password.
1. ONLY employees can access the application.
1. An employee can view a list of all products.
1. An employee can add a new product to the inventory.
1. When an employee is viewing the list of products, they can click on a details button to view that product's product type and which location(s) it's sold at.
1. If an employee is viewing the details of a product, they can edit that product's information.
1. An employee can view a list of all locations.
1. An employee can view a list of all employees.
1. When an employee is viewing the list of employees, they can click on a details button to view that employee's address, phone number, and which location they work at.
1. Only Ms. Houchens can fire an employee.

And has provided us with these resources:
- products: `id`, `name`, `price`, `productTypeId`
- productTypes: `id`, `name`
- employees: `id`, `firstName`, `lastName`, `address`, `phone`, `locationId`, `username`, `password`, `isSupervisor`
- locations: `id`, `name`, `address`, `phone`
- productLocations: `id`, `productId`, `locationId`

### Discussion Points:
1. What are the components and their responsibilities?
1. What are the data relationships?
1. Which components will have state?
1. Which components will receive props?
1. Will we need any modules?

<!-- ```json
{
    "products": [
        {
            "id": 1,
            "name": "Pink Gummy Bears",
            "price": "3.99",
            "productTypeId": 2
        },
        {
            "id": 2,
            "name": "Houchen's Favorite Licorice",
            "price": "60.95",
            "productTypeId": 4
        },
        {
            "id": 3,
            "name": "Ghost Pepper Chocolate Bar",
            "price": "4.07",
            "productTypeId": 1
        },
        {
            "id": 4,
            "name": "World's Softest Jawbreaker",
            "price": "20.99",
            "productTypeId": 3
        },
        {
            "id": 5,
            "name": "World's Shortest Lasting Gum",
            "price": "99.99",
            "productTypeId": 5
        },
        {
            "id": 6,
            "name": "Jolly Developer",
            "price": "65,000.00",
            "productTypeId": 3
        },
        {
            "id": 7,
            "name": "Candy Broccoli",
            "price": "2.99",
            "productTypeId": 3
        },
        {
            "id": 8,
            "name": "Chocolate Tux",
            "price": "3.89",
            "productTypeId": 1
        }
    ],
    "productTypes": [
        {
            "id": 1,
            "name": "Chocolate"
        },
        {
            "id": 2,
            "name": "Gummy"
        },
        {
            "id": 3,
            "name": "Hard Candy"
        },
        {
            "id": 4,
            "name": "Licorice"
        },
        {
            "id": 5,
            "name": "Gum"
        }
    ],
    "locations": [
        {
            "id": 1,
            "name": "Kandy Korner Kidz",
            "address": "202 Success Circle, Nashville, TN",
            "phone": "154-7622"
        },
        {
            "id": 2,
            "name": "Kandy Korner",
            "address": "418 Teapot Way, Nashville, TN",
            "phone": "154-7624"
        },
        {
            "id": 3,
            "name": "Kandy Korner West Side",
            "address": "304 Unchanged Drive, Nashville, TN",
            "phone": "154-7626"
        }
    ],
    "employees": [
        {
            "id": 1,
            "firstName": "Sage",
            "lastName": "Houchens",
            "address": "404 Lost Way, Nashville, TN",
            "phone": "657-2355",
            "username": "houchieMama",
            "password": "appleprincess1",
            "isSupervisor": true,
            "locationId": 1
        },
        {
            "id": 2,
            "firstName": "Rose",
            "lastName": "Fieri",
            "address": "500 Internal Drive, Nashville, TN",
            "phone": "627-1435",
            "username": "galFieri",
            "password": "password123",
            "isSupervisor": false,
            "locationId": 2
        },
        {
            "id": 3,
            "firstName": "Bry",
            "lastName": "Fyve",
            "address": "403 Forbidden Way, Nashville, TN",
            "phone": "763-8733",
            "username": "bryFive",
            "password": "bryFive",
            "isSupervisor": false,
            "locationId": 3
        }
    ],
    "productLocations": [
        {
            "id": 1,
            "productId": 1,
            "locationId": 2
        },
        {
            "id": 2,
            "productId": 1,
            "locationId": 1
        },
        {
            "id": 3,
            "productId": 2,
            "locationId": 3
        },
        {
            "id": 4,
            "productId": 2,
            "locationId": 1
        },
        {
            "id": 5,
            "productId": 3,
            "locationId": 3
        },
        {
            "id": 6,
            "productId": 3,
            "locationId": 2
        },
        {
            "id": 7,
            "productId": 4,
            "locationId": 1
        },
        {
            "id": 8,
            "productId": 4,
            "locationId": 2
        },
        {
            "id": 9,
            "productId": 4,
            "locationId": 3
        },
        {
            "id": 10,
            "productId": 5,
            "locationId": 1
        },
        {
            "id": 11,
            "productId": 6,
            "locationId": 2
        },
        {
            "id": 12,
            "productId": 6,
            "locationId": 3
        },
        {
            "id": 13,
            "productId": 7,
            "locationId": 1
        },
        {
            "id": 14,
            "productId": 8,
            "locationId": 3
        },
        {
            "id": 15,
            "productId": 8,
            "locationId": 2
        },
        {
            "id": 16,
            "productId": 8,
            "locationId": 1
        }
    ]
}
``` -->