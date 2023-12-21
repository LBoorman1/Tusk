# Models for the app

## User(Freelancer)
This model shows basic user data such as name etc, whether the user is verified and how many jobs they have completed / purchased
```
User: {
    firstName: String,
    lastName: String,
    email: String (validate),
    password: String (encrypt),
    verified: boolean,
    jobsCompleted: Integer,
    timesHired: Integer,
    freelanceRating: float (0.0 - 5.0),
    jobsPurchased: Integer,
    customerRating: Integer 
}
```
## Service

```
Service: {
    name: String,
    quoteable: boolean,
    minPrice: float,
    maxPrice: float,
}
```

## Transaction
```
Transaction: {
    freelancer: User(Object),
    customer: User(Object),
    completed: boolean,
    priceAgreed: float,
}
```