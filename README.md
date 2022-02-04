# Aria Systems Frontend Test Application


## System Requirements

The following software is required to run the application.

* Node 17.4.0
* npm 8.4.0
* Yarn 1.22.17

## Installation

Clone the repository locally, cd in the directory and issue the following command `yarn install`.


## Starting Local API

Navigate to the `/api/` directory and issue the following command `node server.js`
The API will be accessible here http://localhost:8081/api/vehicles

## Starking the Local React UI APP

Issue the following command in the base directory `yarn start`

This should make the application available at http://127.0.0.1:3000/.


## Application Description

The application is a small prototype that lists the inventory of exotic vehicles.
The list page uses an API available at `/api/vehicles`. There is also a page to
submit an inquiry at /inquire.


## Requirements

Please attempt to complete development of the following feature based on this
user story

As a user I want to be able to see the number of people a vehicle can
carry. In the case of boats and planes this number should contain both passengers
and crew. For cars it should just be passengers. The `/api/vehicles` API should return a
new value 'numPeople' that should contain the total for each vehicle. It should then
be displayed as a column in the table on the main page.

Add the ability to create a new vehicle given post api endpoint `POST: /api/vehicles` and request payload in the following shape:
```
{
    "name": "Example name",
    "type": "Plane",
    "color": "Blue",
    "description": "Example of a description",
    "price": 99999
}

```

Add the ability to edit a vehicle given put api endpoint `PUT: /api/vehicles//{vehicle_id}` and request payload in the following shape:
```
{
    "name": "Example name",
    "type": "Plane",
    "color": "Blue",
    "description": "Example of a description",
    "price": 99999
}
```

Also, we have an api endpoint to delete a vehicle, `DELETE: /api/vehicles/{vehicle_id}`.
Add a delete feature in the vehicle list page to remove vehicles.


We have a vehicle detail page API endpoint `GET: /api/vehicles/{vehicle_id}`.
Make the name of each vehicle a link in the vehicle list page that take you to a vehicle detail page base on the vehicle type.
For example, all vehicles that are cars should go to /cars/{vehicle_id} and all vehicles that are of type boat should go to `/boats/{vehicle_id}`.

## Running Tests

There is a small set of tests that can be run with the following command:

yarn test

