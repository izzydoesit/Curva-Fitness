# Curva Fit

Rails eCommerce application that allows users to learn about ketogenics, sign up for the mailing list, shop for ketogenic supplements, and sign up for a personal or group training session. 

![homepage](https://github.com/everysum1/curva_proto2/blob/master/app/assets/images/CurvaHomepage1.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
ruby 2.3.1
bundler 1.12.5
rails 5.0.0
```

### Installing
From the command terminal, clone the repository to your local directory...
```
$ git clone https://www.bitbucket.org/everysum1/curva_proto2.git
$ cd curva_proto2
```

Then run bundle command to install all dependencies and run the server.  

```
$ bundle install
$ rails server
```
then visit 'localhost:8000' in your browser


## Running ALL the tests

```
$ bundle exec rspec spec
```

## Deployment

You must have Heroku CLI installed and be logged in to Heroku in order to deploy live via Heroku servers (Please see the documentation to get set up with Heroku)

Then, after installation and login, via the command line...
```
$ heroku create 
$ git push heroku master
$ heroku open
```

## Built With

* [Ruby on Rails](http://api.rubyonrails.org/) - Primary framework used
* [React](https://facebook.github.io/react) - Front end UI plugin used
* [Spree](https://spreecommerce.com) - Shopping cart solution
* [Stripe](https://stripe.com) - Payments API used
* [Booking Bug](https://www.bookingbug.com) - Scheduling API used
* [PostgreSQL](https://www.postgresql.org/docs/) - Database used
* [HTTParty](https://github.com/jnunemaker/httparty) - Library used for making HTTP requests

## Authors

* **Israel Matos** - [Github](https://github.com/everysum1)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Thank you for all your help!!
* Arthur Aires
