import axios from "axios";

export const getSwitchValue = async () => {
    // console.log('a')
    try {
      const response = await fetch(
        'http://139.150.73.211:8000/scheduler/api/dust/switch/get/'
      );
      const json = await response.json();
      console.log(json)
        return json;
    } catch (error) {
      console.error(error);
    }
  };