# burger

Welcome to Eat-Da-Burger, a playful app where you can make your own burger and devour burgers made by our staff or yourself!

To start, go to https://vast-basin-38012.herokuapp.com/ or simply clone the hub over to your computer.

If cloning, skip to the 'Cloning' section to learn how.

# Using the App
When the app is running, either in Heroku or on local machine, take a look over the samples provided.

Click the burger button of your choice to eat said burger on the left. The burger will then appear on the right.

You can insert your own creation via the textbox. Come up with a name and submit and our staff shall quickly craft it to be ready to eat.

Do enjoy your meal(s)!

# Cloning
If cloning it:

1)Begin with npm install to get the required packets and services in and registered.

2)Go to db/schema.sql and db/seeds.sql and run them into MySQL or something similar via terminal or MySQL Workbench to obtain tables and sample information.

3)Go to config/connection.js and insert the password needed and, if need be, change the port, host and user if you use something different.

4)Open the burger folder in the terminal and enter 'node server.js' then navigate to localhost:8080 to begin using app.