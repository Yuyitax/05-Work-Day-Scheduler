# 05 Third-Party APIs: Work Day Scheduler

## URL to launch website

**Please use the following link to view the website: [Work Day Scheduler Website](https://yuyitax.github.io/05-Work-Day-Scheduler/)

-------------

## About this project

This is a calendar application that allows users to save events happening from 8am to 5pm. 

The top clock shows the current date and time from the time the users are viewing the page. The calendar is responsive according to the time of day. If the current hour is between 8am and 5pm, the current hour will be shown in red. The past time will display in gray and future time (up to 5pm) will appear in green.

-------------

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

-------------

## Screenshots

![First look once you go inside the website and hours are not in between 8am and 5pm.](./assets/past-time-view.png)

![Look inside the Local Storage, Key is the time and Value is the input](./assets/todo-saved-local-storage.png)

![If time is on hour 11, the red background(present class) will be activated like shown on this photo:](./assets/hour-11-preview.png)

-------------

© 2022 Cristina Yunes -- Yuyitax. All Rights Reserved.
