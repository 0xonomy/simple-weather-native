import { StyleSheet, Modal, View, Text, Button, Image } from "react-native";
export default function Results(props) {
  function formatTime(unixTime) {
    var time = unixTime + timezone;
    var date = new Date(time * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ":" + minutes.substr(-2);
    return formattedTime;
  }

  const weatherData = JSON.parse(props.data);

  // Main data
  const countryCode = weatherData.sys.country;
  const cityName = weatherData.name;
  const timezone = weatherData.timezone;
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

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.rootContainer}>
        <View style={styles.mainCont}>
          <View style={styles.headerCont}>
            <Text style={headerText}>
              {cityName}, {countryCode}
            </Text>
          </View>
          <View style={styles.dataCont}>
            <View style={styles.degreeCont}>
              <View style={degreeMain}>
                <Text>{temp}°</Text>
                <Text>
                  {tempMax}°/{tempMin}°
                </Text>
              </View>
              <View style={degreesecondary}>
                <Text>feels like {feelsLike}°</Text>
              </View>
            </View>
            <View style={styles.imageCont}>
              <Image
                source={require(`../assets/images/weatherIcons/${iconCode}.png`)}
              />
            </View>
          </View>
        </View>
        <View style={styles.secondaryCont}>
          <View style={styles.cardCont}>
            <Image sourc={require("../assets/images/results/humidity.png")} />
            <Text>{humidity}</Text>
          </View>
          <View style={styles.cardCont}>
            <Image sourc={require("../assets/images/results/wind.png")} />
            <Text>
              {windSpeed}({windDegree})
            </Text>
          </View>
          <View style={styles.cardCont}>
            <Image sourc={require("../assets/images/results/sunrise.png")} />
            <Text>{formatTime(sunrise)}</Text>
          </View>
          <View style={styles.cardCont}>
            <Image sourc={require("../assets/images/results/sunset.png")} />
            <Text>{formatTime(sunset)}</Text>
          </View>
        </View>
      </View>
      <Button title="back" onPress={props.toggleResults} />
    </Modal>
  );
}

const styles = StyleSheet.create({});

{
  /* <Button title="back" onPress={props.toggleResults} /> */
}
