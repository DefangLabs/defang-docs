---
title: "Hard Lessons From Hardware"
tags: [Cloud, NoDevOps, Embedded Systems, Hardware, Wifi, Arduino, Defang]
author: Linda Lee
---

*About the author: Linda Lee is an intern at Defang Software Labs who enjoys learning about computer-related things. She wrote this blog post after having fun with hardware at work.* 

## My Story of Embedded Systems With Defang

Have you ever looked at a touch screen fridge and wondered how it works? Back in my day (not very long ago), a fridge was just a fridge. No fancy built-in interface, no images displayed, and no wifi. But times have changed, and I’ve learned a lot about embedded systems, thanks to Defang! 

![smart_fridge](/img/hardware-story/smart_fridge.png)

From my background, I was more into the web development and software side of things. Buffer flushing? Serial monitors? ESP32-S3? These were unheard of. Then one day at Defang, I was suggested to work on a project with a [SenseCAP Indicator](https://wiki.seeedstudio.com/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator/), a small programmable touch screen device. Everyone wished me good luck when I started. That’s how I knew it wasn’t going to be an easy ride. But here I am, and I’m glad I did it. 

What is embedded systems/programming? It’s combining hardware with software to perform a function, such as interacting with the physical world or accessing cloud services. A common starting point for beginners is an Arduino board, which is what the SenseCAP Indicator has for its hardware. My goal was to make a UI display for this device, and then send its input to a computer, and get that data into the cloud.

![hand_typing](/img/hardware-story/hand_typing.png)

## The Beginning

My journey kicked off with installing the [Arduino IDE](https://www.arduino.cc/en/software) on my computer. It took me two hours—far longer than I expected—because the software versions I kept trying were not the right ones. Little did I know that I would encounter this issue many times later, such as when downloading [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html), a tool for firmware flashing. Figuring out what not to install had become a highly coveted skill. 

The next part was writing software to display images and text. This was slightly less of a problem thanks to forums of users who had done the exact same thing several years ago. One tool I used was [Squareline Studio](https://squareline.io/), a UX/UI design tool for embedded devices. With a bit of trial and error, I got a simple static program displayed onto the device. Not half bad looking either. Here’s what it looked like:

![ui_static](/img/hardware-story/ui_static.png)

## The Middle

Now came the networking part. Over wifi, I set up a Flask (Python) server on my computer to receive network pings from the SenseCAP Indicator. I used a library called [ArduinoHTTPClient](https://github.com/arduino-libraries/ArduinoHttpClient). At first, I wanted to ping the server each time a user touched the screen. Then came driver problems, platform incompatibilities, deprecated libraries…

… After weeks of limited progress due to resurfacing issues, I decided to adjust my goal to send pings on a schedule of every 5 seconds, rather than relying on user input. I changed the UI to be more colorful, and for good reason. Now, each network ping appears with a message on the screen. Can you look closely to see what it says? 

![ui_wifi](/img/hardware-story/ui_wifi.png)

This is what the Flask server looked like on my computer as it got pinged:

![local_server](/img/hardware-story/local_server.png)

Hooray! Once everything was working, It was time to deploy my Flask code as a cloud service so I could access it from any computer, not just my own. Deployment usually takes several hours due to configuring a ton of cloud provider settings. But I ain’t got time for that. Instead, I used Defang to deploy it within minutes, which took care of all that for me. Saved me a lot of time and tears.

Here’s the Flask deployment on Defang’s Portal view: 

![portal_view](/img/hardware-story/portal_view.png)

Here’s the Flask server on the cloud, accessed with a deployment link:

![deployed_server](/img/hardware-story/deployed_server.png)

## The End

After two whole months, I finally completed my journey from [start](https://github.com/commit111/defang-arduino-static) to [finish](https://github.com/commit111/defang-arduino-wifi)! This project was an insightful dive into the world of embedded systems, internet networking, and cloud deployment. 

Before I let you go, here are the hard lessons from hardware, from yours truly:
1. Learning what not to do can be equally as important.
2. Some problems are not as unique as you think. 
3. One way to achieve a goal is by modifying it. 
4. Choose the simpler way if it is offered.
5. That’s where Defang comes in.

Want to try deploying to the cloud yourself? You can try it out [here](https://defang.io/samples). Keep on composing up! 💪
