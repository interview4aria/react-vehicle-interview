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
The API will be accession here http://localhost:8081/api/vehicles

## Starking the Local React UI APP

Issue the following command in the base directory `yarn start`

This should make the application available at http://127.0.0.1:3000/.


## Application Description

The application is a small prototype that lists the inventory of exotic vehicles.
The list page uses an API available at /api/vehicles. There is also a page to
submit an inquiry at /inquire and an small admin section page to create new
vehicle records at /admin/vehicle/create. The username is ariauser and the
password is aria1234.

There are 5 tables Vehicle, Boat, Car, Plane, and SalesPerson. Boat, Car, and
Plane all have a one-to-one relationship with Vehicle and contain additional
information for those vehicles based on which type of vehicle it is.

Each vehicle type has its own detail API that returns the specific details of
the vehicle at /api/boat/vehicle_id, /api/car/vehicle_id, and /api/plane/vehicle_id.


## Requirements

Please attempt to complete development of the following feature based on this
user story

As a user I want to be able to see the number of people a vehicle can
carry. In the case of boats and planes this number should contain both passengers
and crew. For cars it should just be passengers. The /vehicles API should return a
new value 'numPeople' that should contain the total for each vehicle. It should then
be displayed as a column in the table on the main page.

In the demo and meeting we'll also discuss

* In our production environment the inquiry page is loading extremely slow
despite working fine in the dev and qa environments. What may be the performance
issue with this page. Describe or prototype any solutions you could make to this
application to improve the performance problems.

* A code review needs to be done on some code recently merged to add a new
vehicle. A copy of the diff from the pull request is in /public/code_review.txt.
Review the changes for this new feature and describe any performance, quality,
or security concerns and possible solutions to them.


## Running Tests

There is a small set of tests that can be run with the following command:

yarn test

