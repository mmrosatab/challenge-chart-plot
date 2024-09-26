### Challenge Chart Plot

This project was developed to solve the challenge proposed by Intelie company. The challenge is to develop an application using ReactJS to plot charts. The application reads and processes data that has been entered by the user into a text box and then plots a graph corresponding to that entry.

You can use this application here: https://challenge-chart-plot.vercel.app/

### How use this application locally?

1. Install dependencies

> yarn install

2. Run app

> yarn start

### Strategy

Application development began with the processing of the data entered by the user into the text box. For each row of data, the spaces between the strings were removed, and then that data was transported to a JSON string and stored in a list.

The strategy used to solve the problem consisted of reading each position of the list, searching the index of the last _start event_ present in this list, and storing that index so that only subsequent data to that start event is considered. Therefore, after you set the list index that contains the last _start event_ of the set, the _select_ and _group_ information is captured.

While a _span event_ is not defined, data type events are not captured to be computed. When a _span event_ is defined, start and end timestamps are collected to set the global timestamps interval. Then _data-type events_ are captured following the criteria that their timestamps must be within the global timestamp range. The _timestamp_ of the _data event_ must be contained in the global timestamp interval, otherwise this event will not be counted.

If there is a new _span event_, a new global timestamp will be defined and a check will be made on the data of the _data type_ events that have been registered so far, removing events where the timestamp is not in the global range of timestamps.

### An example of entry and exit for the happy day

###### {type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group:['os', 'browser']}

###### {type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862460000}

###### {type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}

###### {type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2}

###### {type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2}

###### {type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0}

###### {type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9}

###### {type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0}

###### {type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1}

###### {type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4}

###### {type: 'stop', timestamp: 1519862460000}

![Captura de tela de 2019-04-02 14-51-56](https://user-images.githubusercontent.com/9852787/58393770-96412b80-8016-11e9-88d3-9eaee8b55cfd.png)
