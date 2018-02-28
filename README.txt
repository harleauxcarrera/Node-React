This is the Node-React tutorial

Use this page as a reference to points in time where the lectures were being watched
Title every new entry with the date and the section of the lectures that you were writing about


November 8th, 2017 // Just watched 'Section 4 Lecture 30'
  Implemented Google OAuth up to the point where

  Logging in works like this:
  Signup with google-> takes u to google sign in page-> log in on google -> makes an entry
  for the user in the database with returned credentials and then redirects
  to website. Each time user logs in after signing up, mongodb will check to see if
  user already exists by matching the ID in DB and if so, return with a cookie that grants
  access that particular visit.

  MONGODB INTRO:
  Make a 'Model Class' that acts as a monogdb collection
  A 'Model instance' refers to a single record in the collection (JSON)

  Created a mongodb instance on Mlab.com with user: harleauxcarrera pss: pLease313

  left off at section 4 lecture 33 @4:50 where initial attempt
  to connect to Mongodb instance made on Mlab.com
  using the MONGOURI

   trying to require 'keys.js' not working

Monday November 20th :
  Was able to fix the require 'keys ' file
  Next I fixed the Mlab URI and am now connecting to the instance of MongoDB on mlab
  (Lecture 34)
  Finally create new user instance in mongo User collection
    grab the user's google profile id and save to property 'googleId' defined in User model Schema
      ensure that the same user doesn't get created twice by checking User collection
      and making sure user with same googleId doesn't already exist
  left off at lecture 39

Wednesday November 22nd,
Lecture 42
  Enabled cookies in app
    tell  passport to use  cookies to manage google authentication
  How cookies work:
    Request comes in, cookie-session extracts cookie data-> passport pulls userid
    out of cookie data->deserializeUser function used to turn userid into a user object->
    that user model gets added to the request and sent to route handler

    Left off  lecture 42 -  attempt is made to visit /api/current_user
    and see the returned user printed  but comes back undefined.
Thursday November 24th
Lecture 42
  Fixed order of statements (app.use CookieSession comes before the initialize and session() calls)
Lecture 46
  Making two sets of keys, one for production (deployment) and one for development
      Need to create seperate Mongo database and Google API account to have seperate set of keys
        Create database in  mlab
          create new user (for access using URI)
        Create new project at console.developers.google.com
          Enable the API
          search for google+ API
            Click Enable
              create new credentials of type Oauth client id
                configure consent
            Web application
              Authorized redirect URIS specifies what URL to go back to after google Auth in app
                (use Heroku url for production set)
            Heroku deployment
                Add "engines" in package.json, specify what version of node and npm
                Specify a start script. have to tell heroku what command to run to start server
                  add "start" script in package.json
                Create a .gitIgnore file to not commit any dependencies to git
                Refer to lecture 13 for any new deployments of nodejs projects to Heroku
              Deployment process
                Create Heroku account
                Install heroku cli
                  heroku login
                  heroku create   (create ap)
                    Generates random url for site and gitHub repo that acts as deployment
                    use git remote add <heroku.git url> (might already exist)
                      git push heroku master to push to deployment repo
Lecture 47

  add /auth/google/callback to heroku site address and add as callbackURL
  in google API when create credential for projects

    use heroku address by itslef in authorized origin url
Lecture 49

    deployed heroku app with environment keys
    configured key.js to pull in key file depending on the environment (dev or prod)
    declare environment keys in heroku dashboard
    push to heroku master and deploy
    google/auth/callback

November 25th Friday

  Changed Heroku Env keys to production set (had same keys as dev set before)
    Test production keys by deploying heroku app (heroku open) and add auth/google route

  Lecture 50 CREATING THE REACT APPLICATION
    npm install create-react-app
      run create-react-app client to create new react application inside directory(creates client dir)
        this new react app has its own built in server
          change into client dir and run npm start to run react server
            should open on local host 3000
            Now we have a second server for development (confusing)
              Edit app.js to edit the home react page

      Servers explained
        Express server will only generate json data to serve it (uses mongo)
        React server takes all components and bundles them using babel and spits
        out single bundle.js file that will be loaded into the browser

        One server for all the back end  data (express)
        One server for front end (react)

        going to get them to work together in lecture 53

  Lecture 53

  Run both servers together at the same time
    (can be done by starting npm start in client dir and also npm run dev in Node-React dir)
        Don't really want to do This (want to start both at same time)
          Can be done with a package called 'concurrently' (install that module)
  Be aware that these two dirs have their own package.json files
  Inside of Node-React dir , edit package.json, edit scripts to run both front end server
  and back end server at the same time (using conccurently)

  run npm run dev to start both servers

  Created a link in app.js 'sign in with google'
    Modified package.json file in client dir to
    route to correct url (which is on localhost 5000)
      added proxy
  Lecture 55

    The use of the relative path in the call back URL is for it to work regardless of
    whether in prod or dev

    added additional callback url in google api console (:3000/auth/google/callback)
  Lecture 56

    Since two seperate servers are made,
    the way it works is creact-react app has the front end server running with
    a proxy pointed to the backend express server which acts as an unseen middleman
    in terms of the browser's point of view.
  Lecture 57

    Ajax requests use fetch function to cop Json from servers
      fetch returns a promise: chain on a .then(=>) with re.JSON
      refactored the second object in google strategy in passport.js
      to use async function syntax instead of using .then promises

  Moving on to Lecture 59

  The Front End

  Lecture 60

    App.js will host the front end components and index.js will host the redux service
      App.js is the root of the react side of the web app

    The way redux works:
        React store is the root component while combineReducer makes calls to
        other reducers to figure out the state of the application

        React-redux library is to make sure react and redux work correctly
          A provider tag is what serves as the glue behind the react and redux
          The react store is used to access depply nested data in the component tree
    Lecture 63

    Fixed app.js not found error,

    How redux is connected to react:
      'provider' is a component from the react-redux
      library that makes the connection from redux to the react application
      and makes every component the ability to access the data store
      to update the state of the application
    Creating reducers to use in the apps
      First reducer is the auth reducer to check if the user is logged in
      Second one is survey reducer to save all teh surveys the user makes
      Reducers are passed to the provider tag inside index.js
      Create reducers folder, add authReducer.js and index.js
        import reducers and pass as argument to the data store create store

    Lecture 68

    created several dummy components and added a rule paths

    December 23rd
    Lecture 68 review

    Setting up react router
      Import browserRouter as the brains of the react BrowserRouter
        BrowserRouter expects to have ATMOST one child
      import Route to set up rules for what compnonets will be shown on the screen

      set up some dummy components
      set up routes to show those components
        use the keyword exact for react router to use exact path string
      Make sure header component is always visible by
      placing the header compnonet inside browserrouter Div
          remove dummy component and make seperate component file for Header
            import into App.js

  Introducing Materialize CSS
    import using NPM and not using the CDN link
      npm install --save materialize-CSS
    Making use of WebPack (module loader)
    to condense alot of JS files into one file
    Webpack sees css import statements and ensures to read them as such
    Import materialize-css-min into index.js without using relative path "./"
      for Webpack to parse import statement as node module
    After importing the css file, fonts change but to ensure that
    the file was imported, change some aspects of a component and see if
    the CSS is changing.
      Look at materialize css doc on navbar and copy paste right aligned code
    Use "className" when using react components and not "class" like in CSS
    Now that we have the navbar set up we have to make sure to show the correct
    info on the nav by checking whether a user is logged in or not

    How fetching data works in a react app
      React components calls an Action Creator
      Returns an Action which is
      Sent to a Reducer which then
      Updates the state in the Store

    Left off at Lecture 74

    Lecture 75

    Created action creator
    installed redux thunk
    installed axios

    Refactor App to class based component in order to wire up the action Creator

    add componentDidMount method in App.js
    react-redux library is used to get react to work wth redux since redux was made assuming that you
    would not be using react with it
    the imported connect function from react-redux is used to make components able to call actionscreators
    import all the action creators from the actions folder with *

    Summary: When the app is ran, the app component calls action creator (fetchUser)
      the action creator makes the AJAX request
      action is the dispatched to a reducer to figure out the new state (in this case if a user is loggedin)


    FetchUser action creator wired up to App.js and tested to see if user was being detected once signing in
     left off at LECTURE 80

     The auth reducer (used to process the return from the action creator)
      We will give it 3 different kind of Returns
        Null, User, False: That way we can see if there is a user logged in and stay in null while data of user
        is being retreived

    Hook upthe Header Component to the redux store since the store knows whether the user is loggeed in Now
    due to the use of the FetchUser action creator and the auth reducer that carries out the return
    pull out the AUTH piece of state from the redux wstore which wtells us if the user is or isnt loggedin
    how to hook up a component to the redux store:
      import the Connect helper from react redux
      define the map to state props function
      then pull out the pieces of data that you actually Need

      Lecture 84

      Set up header component ; knows when user is logged in
      setting up log out action can be done in two ways:
        Full http request: would make browser have to refresh the page(takes long)
        AJAX request: only updates the redux store (action creator->reducer->reduxstore
        (updates react component instead of whole page refresh))

        Logout button on header component href /api/logout in authRoutes and
        redirects to landing (/)

        Coming back Monday Jan 22

      Lecture 86

      Created a Landing component (file) and imported it to App.js
      imported Link component from react-router-dom to handle logo link:
      must direct to different routes depending on whether user is signed in or not
      if statement using this.props.auth to check whether user is logged in

      Lecture 87
      Client side billing -accepting payments from users, enabling additional features on the app when
      user has paid.
      Add credits button will make form appear for credit card info,

      Start working with accepting credit cards from users,

      RULES OF BILLING
      We are bad at security - Never accept raw credit card numbers,
      never store card numbers always use an outside payment processor (outside API)
      Avoid monthly payments if possible.One time payments are better, or pay as you go. money  = credits
      no money no credits
      Simplify the billing process
      How the STRIPE API WORKS

      user clicks add credits -> Tell stripe to show a credit card form->
      User enters cc details->take form and sent to STRIPE API (credit card numbers are not
      being handled by us). -> stripe respinds with a token that represents the pending charge.
      That token is sent to our API while our API makes a follow up request to STRIPE to confirm the
      payment -> add credits to user's account.

      Why do we need the token?

      Token: The user has authorized your app to chard X $ to their credit card.
       That token is input to our API and a total amount to charge is returned to bill the customer.

       Create Stripe account, create API key to access API, STRIPE runs in test mode letting
       you create fake credit card numbers for testing .
        Will not activate an account since it requires too much information, test mode can be
        ran without creating an account anyway,

        Stripe checkout is a library / plugin  that provides the credit card form to collect credit card nums

        Install react-stripe-checkout as an npm module from gitHub
        Next cofigure the front end to add the  add credit features
        The config file hosts the production file and the deveelopment file that has the keys
        used when running in either environment

        Dev side holds raw keys and prod pulls the environment vars from heroku
        add stripePublishableKey and stripeSecretKey in dev.js

        Setup stripePublishableKey and stripeSecretKey as environment vars
        in heroku dashboard->settings->config vars

        Keys are in Stripe Dashboard -> API in Test mode

        The front end side of the app (the REACT side) will not deal with the config/dev/prod keys files
        at all or else they would be exposed to the public. any files that are required into react components
        are visible to the outside world.

        The front end of the application is making use of ES-2015 modules which are characterized by
        import statements /export/default statements
        the back end is making use of Common js files which are characterized by the require statements
        or require function

        Problem->

        LECTURE 92 Env Vars in React.

        React needs to use env vars so we need to use create-react-app
        Lookup create-react-app docs and look for adding env Vars
        can be done by creating .env files and store keys in the cleint directory
        If you want to hide these keys, add these file names to the gitignore files

        Create a file called .env.productiona dn .env.devlopment and store the STRIPE API
        public key there

        Getting access to these vars - > inside /cleint/src/index.js -> console.log process.env.REACT_APP_STRIPE_KEY
        to make sure that we are accessing these Vars
        also console log the process.env.NODE_ENV which represents the rnning env (prod or dev)
        inspect->console to check console.logs

        reminder: using same stripe key between prod and dev environments

        .env files are interpreted by mac as invisitble (will not show up in finder)
        be aware of dragging files in directory in finder (,env files are invisible)

        Keys are setup on the react side of the application

        The react stripe checkout component LECTURE 93

        create a file called payments.js
        import react and the component object from React
        import StripeChecout from react-stripe-checkout

        make class based component that extends component
        Amount is chosen in cents (5$ = 500 cents)
        the token property is expecting to recieve a call back function after we have
        recieved an authorization token from the STRipe api

        Set up the payments class component to have several properties: amount, token, stripeKey
        LECTURE 94
        INside the header component, include the payments component as an <li>
        in header component the stripeCheckOut component take 3 args: amount, token & stripekey

        Fixed react-stripe-checkout payment button Problem
          had to downgrade the npm package to 2.4.0
        Pushed to heroku but application failed
          had to make sure node and npm versions matched on package.JSON

          LECTURE 95
          Cant get stripe checkout component to submit the form
          seems that stripePublishableKey needs to be added
          
