var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="small-centered text-center page-title">About</h1>
      <p className="text-center">Welcome to the about page</p>
      <p> </p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - this was the Javascript framework that I used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map api to search for weather data by city name
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
