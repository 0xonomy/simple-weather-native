import { StyleSheet, Modal, View, Text, Button, Image } from "react-native";

export default function Results(props) {
  function formatTime(unixTime) {
    const date = new Date(unixTime * 1000);
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  const weatherData = JSON.parse(props.data);

  // Main data
  const countryCode = weatherData.sys.country;
  const cityName = weatherData.name;
  const iconCode = weatherData.weather[0].icon;
  const temp = weatherData.main.temp;
  const feelsLike = weatherData.main.feels_like;
  const humidity = weatherData.main.humidity;
  const tempMax = weatherData.main.temp_max;
  const tempMin = weatherData.main.temp_min;
  const windSpeed = weatherData.wind.speed;
  const windDegree = weatherData.wind.deg;
  const sunrise = weatherData.sys.sunrise;
  const sunset = weatherData.sys.sunset;

  let mainImagePath;
  switch (iconCode) {
    case "01d":
      mainImagePath = require("../assets/images/weatherIcons/01d.png");
      break;
    case "01n":
      mainImagePath = require("../assets/images/weatherIcons/01n.png");
      break;
    case "02d":
      mainImagePath = require("../assets/images/weatherIcons/02d.png");
      break;
    case "02n":
      mainImagePath = require("../assets/images/weatherIcons/02n.png");
      break;
    case "03d":
      mainImagePath = require("../assets/images/weatherIcons/03d.png");
      break;
    case "03n":
      mainImagePath = require("../assets/images/weatherIcons/03n.png");
      break;
    case "04d":
      mainImagePath = require("../assets/images/weatherIcons/04d.png");
      break;
    case "04n":
      mainImagePath = require("../assets/images/weatherIcons/04n.png");
      break;
    case "09d":
      mainImagePath = require("../assets/images/weatherIcons/09d.png");
      break;
    case "09n":
      mainImagePath = require("../assets/images/weatherIcons/09n.png");
      break;
    case "10d":
      mainImagePath = require("../assets/images/weatherIcons/10d.png");
      break;
    case "10n":
      mainImagePath = require("../assets/images/weatherIcons/10n.png");
      break;
    case "11d":
      mainImagePath = require("../assets/images/weatherIcons/11d.png");
      break;
    case "11n":
      mainImagePath = require("../assets/images/weatherIcons/11n.png");
      break;
    case "13d":
      mainImagePath = require("../assets/images/weatherIcons/13d.png");
      break;
    case "13n":
      mainImagePath = require("../assets/images/weatherIcons/13n.png");
      break;
    case "50d":
      mainImagePath = require("../assets/images/weatherIcons/50d.png");
      break;
    case "50n":
      mainImagePath = require("../assets/images/weatherIcons/50n.png");
      break;
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.rootContainer}>
        <View style={styles.mainCont}>
          <View style={styles.headerCont}>
            <Text style={styles.headerText}>
              {cityName}, {countryCode}
            </Text>
          </View>
          <View style={styles.dataCont}>
            <View style={styles.degreeCont}>
              <View style={styles.TextdegreeMain}>
                <Text>{temp}°</Text>
                <Text>
                  {tempMax}°/{tempMin}°
                </Text>
              </View>
              <View style={styles.degreeSecondary}>
                <Text>feels like {feelsLike}°</Text>
              </View>
            </View>
            <View style={styles.imageCont}>
              <Image style={mainImage} source={mainImagePath} />
            </View>
          </View>
        </View>
        <View style={styles.secondaryCont}>
          <View style={styles.cardCont}>
            <Image
              style={styles.cardImage}
              source={require("../assets/images/results/humidity.png")}
            />
            <Text>{humidity}%</Text>
          </View>
          <View style={styles.cardCont}>
            <Image
              style={styles.cardImage}
              source={require("../assets/images/results/wind.png")}
            />
            <Text>
              {windSpeed}({windDegree})
            </Text>
          </View>
          <View style={styles.cardCont}>
            <Image
              style={styles.cardImage}
              source={require("../assets/images/results/sunrise.png")}
            />
            <Text>{formatTime(sunrise)}</Text>
          </View>
          <View style={styles.cardCont}>
            <Image
              style={styles.cardImage}
              source={require("../assets/images/results/sunset.png")}
            />
            <Text>{formatTime(sunset)}</Text>
          </View>
        </View>
      </View>
      <Button title="back" onPress={props.toggleResults} />
    </Modal>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    width: 20,
    height: 20,
  },

  mainImage: {
    width: 100,
    height: 100,
  },
});
