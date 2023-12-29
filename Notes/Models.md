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
    customerRating: float,
    location: Coordinates?? - City / town
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
    timeStamp: DateTime
}
```

## Message
```
Message: {
    sender: User(Object),
    receiver: User(Object),
    createdAt: DateTime,
    content: String;
}
```

## Reviews
```
Review: {
    reviewer: User(Object),
    reviewee: User(Object),
    rating: 1-5,
    content: String
}
```
