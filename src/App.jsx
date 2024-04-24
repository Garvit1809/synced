import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { onValue, ref } from "firebase/database";
import db from "./Firebase-config";
import Stat from "./Stat";

const Section = styled.div`
  /* border: 1px solid red; */
  display: flex;
  width: 100vw;
  overflow-x: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.div`
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  /* border: 1px solid red; */
  text-align: center;
  margin-bottom: 1rem;
  /* margin: 0 auto; */
`;

const Stack = styled.div`
  /* border: 1px solid red; */
  /* width: 100%; */
  margin: 0;
`;

function App() {
  const [sensorData, setSensorData] = useState({
    Sensor1: null,
    Sensor2: null,
  });

  useEffect(() => {
    // The reference to your data
    const sensor1Ref = ref(db, "Sensor1");
    const sensor2Ref = ref(db, "Sensor2");

    // Listen for changes on Sensor1
    onValue(sensor1Ref, (snapshot) => {
      const data = snapshot.val();
      setSensorData((prevState) => ({ ...prevState, Sensor1: data }));
    });

    // Listen for changes on Sensor2
    onValue(sensor2Ref, (snapshot) => {
      const data = snapshot.val();
      setSensorData((prevState) => ({ ...prevState, Sensor2: data }));
    });
  }, []);

  useEffect(() => {
    console.log(sensorData);
  }, [sensorData]);

  return (
    <Section>
      {/* <Hero /> */}
      <Heading>MAX30102 Sensor Data</Heading>
      {sensorData.Sensor1 && (
        <Stack>
          {/* <li>BPM: {sensorData.Sensor1.BPM}</li> */}
          <Stat
            label={"BPM"}
            sensor={"MAX30102"}
            unit={"bpm"}
            value={sensorData.Sensor1.BPM}
          />
          <Stat
            label={"Body Temperature"}
            sensor={"MAX30102"}
            unit={"°F"}
            value={sensorData.Sensor1.Body_Temp}
          />
          <Stat
            label={"SPO2"}
            sensor={"MAX30102"}
            unit={"%"}
            value={sensorData.Sensor1.spo2}
          />
        </Stack>
      )}
      <Heading>MPU6050 Sensor Data</Heading>
      {sensorData.Sensor2 && (
        <div>
          <Stat
            label={"Temperature"}
            sensor={"MPU6050"}
            unit={"°C"}
            value={sensorData.Sensor2.Temp}
          />
          <Stat
            label={"Acceleration"}
            sensor={"MPU6050"}
            unit={"m/s2"}
            value={
              <div>
                <span>X: {sensorData.Sensor2.ac_x}</span>
                <br />
                <span>Y: {sensorData.Sensor2.ac_y}</span>
                <br />
                <span>Z: {sensorData.Sensor2.ac_z}</span>
              </div>
            }
          />
          <Stat
            label={"Rotation"}
            sensor={"MPU6050"}
            unit={"rad/s"}
            value={
              <div>
                <span>X: {sensorData.Sensor2.av_x}</span>
                <br />
                <span>Y: {sensorData.Sensor2.av_y}</span>
                <br />
                <span>Z: {sensorData.Sensor2.av_z}</span>
              </div>
            }
          />
          <Stat
            label={"ECG Signal"}
            sensor={"MPU6050"}
            unit={"uV"}
            value={sensorData.Sensor2.ecg_signal}
          />
        </div>
      )}
    </Section>
  );
}

export default App;
