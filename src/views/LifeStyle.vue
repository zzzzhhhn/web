<template>
  <div class="life-style">
    <div class="img1-container">
      <img src="@assets/img/life/banner.jpg" class="hidden-xs">
      <img src="@assets/img/life/banner-wap.png" class="visible-xs-inline">
    </div>
    <div class="item-container clearfix">
      <div class="text-title w100">Lifestyle</div>
      <div class="item1 pcm wap1 anitmate-container" @click="onShowMask(1)">
        <div class="img por">
          <img src="@assets/img/life/1.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/1.jpg" class="visible-xs-inline">
          <img class="img-player" src="@assets/img/company/play.png" />
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          <p>Vegetable transportation, Truck model:1035K, Mileage: 60,000KM</p>
          Every morning I drove to the farmer's market to deliver vegetables.
        </div>
      </div>
      <div class="item2 wap2 wapm anitmate-container" @click="onShowMask(2)">
        <div class="img animate-img">
          <img src="@assets/img/life/2.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/2.jpg" class="visible-xs-inline">
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          Wood transportation: Truck model: 1035KT, Mileage: 15412KM, "Driving a truck is as comfortable as driving a car,"
        </div>
      </div>
      <div class="item3 pcm wap2 anitmate-container" @click="onShowMask(3)">
        <div class="img por">
          <img src="@assets/img/life/3.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/3.jpg" class="visible-xs-inline">
          <img class="img-player" src="@assets/img/company/play.png" />
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          Road rescue: Truck model: 1035K, Mileage: 343,000km, "I start my car every morning at 8a.m., and turn it off at 11 p.m."
        </div>
      </div>
      <div class="clearwap"></div>
      <div class="item4 pcm wap2 anitmate-container" @click="onShowMask(4)">
        <div class="img por">
          <img src="@assets/img/life/4.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/4.jpg" class="visible-xs-inline">
          <img class="img-player" src="@assets/img/company/play.png" />
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          Driving training school: Truck model: 1040K, Mileage: 6596km, “everyday my truck is driven and tested by many people”
        </div>
      </div>
      <div class="item5 wap2 anitmate-container" @click="onShowMask(5)">
        <div class="img por">
          <img src="@assets/img/life/5.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/5.jpg" class="visible-xs-inline">
          <img class="img-player" src="@assets/img/company/play.png" />
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          Transportation: Truck model: 1020, Mileage: 435000km. Since 2007, I have purchased 5 light trucks in total, and I have been impressed by the quality of JAC light trucks
        </div>
      </div>
      <div class="item6 pc5 pcm wap2 wapm anitmate-container" @click="onShowMask(6)">
        <div class="img por">
          <img src="@assets/img/life/6.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/6.jpg" class="visible-xs-inline">
          <img class="img-player" src="@assets/img/company/play.png" />
        </div>
        <div class="title clearfix">
          <span>Vietnam</span>
          <div class="icon icon2"></div>
        </div>
        <div class="text">
          <p>Mobile coffee store</p>
          Every day with my X5 mini truck. When I drove my flexible X5 mini truck, I was like riding a strong horse
        </div>
      </div>
      <div class="item7 pc5 wap2 anitmate-container" @click="onShowMask(7)">
        <div class="img animate-img">
          <img src="@assets/img/life/7.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/7.jpg" class="visible-xs-inline">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          We are all members of JAC Auto Club. We often organize some activities, and drive our loved JAC cars to the destination
        </div>
      </div>
      <div class="item8 pc5 pcm wap1 anitmate-container" @click="onShowMask(8)">
        <div class="img animate-img">
          <img src="@assets/img/life/8.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/8.jpg" class="visible-xs-inline">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          This is my first JAC SUV. I drive it to work every day for the past three years.
        </div>
      </div>
      <div class="item9 pc5 wap1 anitmate-container" @click="onShowMask(9)">
        <div class="img animate-img">
          <img src="@assets/img/life/9.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/9.jpg" class="visible-xs-inline">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          I love to travel. I'm an online blogger, and I like to record the beauty and details of my travels.
        </div>
      </div>
      <div class="item10 pc3 pcm wap2 wapm anitmate-container" @click="onShowMask(10)">
        <div class="img animate-img">
          <img src="@assets/img/life/10.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/10.jpg" class="visible-xs-inline">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          I graduated from college this year. Speaking of this car, it is my graduation gift from my parents.
        </div>
      </div>
      <div class="item11 pc3 pcm wap2 anitmate-container" @click="onShowMask(11)">
        <div class="img animate-img">
          <img src="@assets/img/life/11.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/11.jpg" class="visible-xs-inline">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          <p>These are my two daughters, twins, as you can see!</p>
          My daughters love this car so much that they often ask me to take them for a ride!
        </div>
      </div>
      <div class="item12 pc3 wap1 anitmate-container" @click="onShowMask(12)">
        <div class="img animate-img">
          <img src="@assets/img/life/12.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/12.jpg" class="visible-xs-inline">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          I'm a model! I have two cars. This car is one of my them, and it's my favorite.
        </div>
      </div>
      <div class="item13 pc5 pcm wap2 wapm anitmate-container" @click="onShowMask(13)">
        <div class="img animate-img">
          <img src="@assets/img/life/13.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/13.jpg" class="visible-xs-inline">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          My wife and I just got married. This is the SUV we chose together.
        </div>
      </div>
      <div class="item14 pc5 wap2 anitmate-container" @click="onShowMask(14)">
        <div class="img animate-img">
          <img src="@assets/img/life/14.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/14.jpg" class="visible-xs-inline">
        </div>
        <div class="title clearfix">
          <span>Brazil</span>
          <div class="icon icon3"></div>
        </div>
        <div class="text">
          I bought this car mostly for my wife, because I travel a lot, and I worry about her life’s getting inconvenient, so I bought this JAC SUV.
        </div>
      </div>
      <div class="item15 pc3 pcm wap1 anitmate-container" @click="onShowMask(15)">
        <div class="img animate-img">
          <img src="@assets/img/life/15.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/15.jpg" class="visible-xs-inline">
        </div>
        <div class="title clearfix">
          <span>Mexico</span>
          <div class="icon icon4"></div>
        </div>
        <div class="text">
          See? This is my favorite friend, Peter. Yes, he's a dog. I bought this car for him because he loves to go for a ride.
        </div>
      </div>
      <div class="item16 pc3 pcm wap1 anitmate-container" @click="onShowMask(16)">
        <div class="img animate-img">
          <img src="@assets/img/life/16.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/16.jpg" class="visible-xs-inline">
        </div>
        <div class="title clearfix">
          <span>Chile</span>
          <div class="icon icon5"></div>
        </div>
        <div class="text">
          My favorite sport is motorcycle racing, but I found that I needed a car that would take me to more places to race!
        </div>
      </div>
      <div class="item17 pc3 wap1 anitmate-container" @click="onShowMask(17)">
        <div class="img animate-img">
          <img src="@assets/img/life/17.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/17.jpg" class="visible-xs-inline">
        </div>
        <div class="title clearfix">
          <span>Mexico</span>
          <div class="icon icon4"></div>
        </div>
        <div class="text">
          My family and I run a farm, and the most pleasant part of the day is when I spend the afternoon relaxing with my dog on a haystack in a pickup truck.
        </div>
      </div>
      <div class="item18 pc5 pcm wap2 wapm anitmate-container" @click="onShowMask(18)">
        <div class="img animate-img">
          <img src="@assets/img/life/18.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/18.jpg" class="visible-xs-inline">
        </div>
        <div class="title clearfix">
          <span>Georgia</span>
          <div class="icon icon6"></div>
        </div>
        <div class="text">
          <p>I’m Merab Odishvili, live in Kazbegi region</p>
          With snow and freeze, so 4*4 Car is very useful here, especially when you work in tourism sector.
        </div>
      </div>
      <div class="item19 pc5 wap2 anitmate-container" @click="onShowMask(19)">
        <div class="img animate-img">
          <img src="@assets/img/life/19.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/19.jpg" class="visible-xs-inline">
        </div>
        <div class="title clearfix">
          <span>Sudan</span>
          <div class="icon icon7"></div>
        </div>
        <div class="text">
          Here is Port Sudan at 6 am. I’m Mohammed Abdelgadir Abakr, a normal truck driver. My driving route is relatively fixed, between Port Sudan and Khartoum.
        </div>
      </div>
      <div class="item20 pc3 pcm wap2 wapm anitmate-container" @click="onShowMask(20)">
        <div class="img por">
          <img src="@assets/img/life/20.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/20.jpg" class="visible-xs-inline">
          <img class="img-player" src="@assets/img/company/play.png" />
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          We use it to transport fruits and vegetables to the most vulnerable areas of Montevideo.
        </div>
      </div>
      <div class="item21 pc3 pcm wap2 anitmate-container" @click="onShowMask(21)">
        <div class="img por">
          <img src="@assets/img/life/21.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/21.jpg" class="visible-xs-inline">
          <img class="img-player" src="@assets/img/company/play.png" />
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          I work at Volcanica,and we have been distributing craft beer in nightclubs and supermarkets for more than two years.
        </div>
      </div>
      <div class="item22 pc3 wap2 wapm anitmate-container" @click="onShowMask(22)">
        <div class="img por">
          <img src="@assets/img/life/22.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/22.jpg" class="visible-xs-inline">
          <img class="img-player" src="@assets/img/company/play.png" />
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          I sell firewood and construction supplies. I have had the truck for two years, It has been very good
        </div>
      </div>
      <div class="item23 pc5 pcm wap2 anitmate-container" @click="onShowMask(23)">
        <div class="img por">
          <img src="@assets/img/life/23.jpg" class="hidden-xs">
          <img src="@assets/img/life/wap/23.jpg" class="visible-xs-inline">
          <img class="img-player" src="@assets/img/company/play.png" />
        </div>
        <div class="title clearfix">
          <span>Uruguay</span>
          <div class="icon icon1"></div>
        </div>
        <div class="text">
          I have had the truck for 10 months, and i am very satisfied in forms of performance and consumption, the comforts it has.
        </div>
      </div>
      <div class="item24 pc5 wap1 anitmate-container" @click="onShowMask(24)">
          <div class="img por">
            <img src="@assets/img/life/24.jpg" class="hidden-xs">
            <img src="@assets/img/life/wap/24.jpg" class="visible-xs-inline">
            <img class="img-player" src="@assets/img/company/play.png"/>
          </div>
          <div class="title clearfix">
            <span>Uruguay</span>
            <div class="icon icon1"></div>
          </div>
          <div class="text">
            My name is Jorge. I have been driving the truck since January for a cargo company.
          </div>
        </div>
    </div>
    <div class="mask-container" v-if="showMask">
      <div class="close-container clearfix">
        <div class="icon-close" @click="onHideMask">
          <img src="@assets/img/life/close.png">
        </div>
      </div>
      <div class="over-auto of-container">
        <div class="item1" v-if="maskIndex === 1">
          <div class="img por">
            <img src="@assets/img/life/1.jpg" v-show="!showVideo1">
            <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(1)" v-show="!showVideo1" />
            <video src="@assets/video/rnd-1.mp4" id="video1" preload controls @touchend="onPause(1)" v-show="showVideo1"></video>
          </div>
          <div class="text">
            <p>Vegetable transportation, Truck model:1035K, Mileage: 60,000KM</p>
            Every morning I drove to the farmer's market to deliver vegetables. Whenever I want to go somewhere, my truck can always smoothly take me to the destination. And I even drive my JAC light truck to recreational activities, pubs and restaurants, because this is my only car, I cherish it a lot. Wherever I work, the car is with me.
          </div>
        </div>
        <div class="item2" v-if="maskIndex === 2">
          <div class="img">
            <img src="@assets/img/life/2.jpg">
          </div>
          <div class="text">
            <p>
              Wood transportation: Truck model: 1035KT, Mileage: 15412KM, "Driving a truck is as comfortable as driving a car," I am so pleased with my truck, which is just like a car with a box, especially its smooth steering.
            </p>
            To be honest, when I bought the car, I went to another brand to compare, but that brand didn't convince me. Then I went to the JAC showroom. I was completely impressed by the JAC light truck, and I asked the salesman, "The advertised fuel consumption is just kidding, right?" The salesman said to me, "No, that's the real fuel consumption figure." This truck is small, fast, and agile. I can drive it in any road condition, and it’s even more comfortable than any other car I drove before. Driving this JAC light truck even makes me more confident!
          </div>
        </div>
        <div class="item3" v-if="maskIndex === 3">
          <div class="img por">
            <img src="@assets/img/life/3.jpg" v-show="!showVideo2">
            <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(2)" v-show="!showVideo2" />
            <video src="@assets/video/rnd-2.mp4" id="video2" preload controls @touchend="onPause(2)" v-show="showVideo2"></video>
          </div>
          <div class="text">
            <p>Road rescue: Truck model: 1035K, Mileage: 343,000km, "I start my car every morning at 8a.m., and turn it off at 11 p.m."</p>
            <p>My JAC light truck is always the first out to work. It is very flexible, comfortable, and its passing ability is good. Although the mileage reached 340000 kilometers, you can set out whenever you want, whether it is 2 a.m., 3 a.m. or 6 a.m., it can be started quickly.</p>
            <p>I usually start my car at 8 a.m. and turn it off at 11 p.m., sometimes the time I stay in the car is longer than the time I stay at home.</p>
            Although the theoretical load is 1.9 tons, sometimes in special circumstances we can carry 3 tons without any problem. Can you imagine how many cars have ridden my JAC light truck under the total distance of 340,000 kilometers?
          </div>
        </div>
        <div class="item4" v-if="maskIndex === 4">
          <div class="img por">
            <img src="@assets/img/life/4.jpg" v-show="!showVideo3">
            <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(3)" v-show="!showVideo3" />
            <video src="@assets/video/rnd-1.mp4" id="video3" preload controls @touchend="onPause(3)" v-show="showVideo3"></video>
          </div>
          <div class="text">
            <p>Driving training school: Truck model: 1040K, Mileage: 6596km, “everyday my truck is driven and tested by many people”, "I named my driving school 'Leo' because when I started the driving school, the baby elephant at the zoo next door was born. And he's also called Leo.</p>
            <p>I have been looking for a suitable training vehicle for my driving school until a friend recommended me a JAC light truck.</p>
            <p>In the driving school, the vehicle needs to be used by different driver trainees, so my requirements are that the quality of the vehicle must be excellent, the reliability must be outstanding, and the spare parts must be in place. These are my requirements for the driving school vehicles, so I finally choose JAC.</p>
            We do tests on the vehicle every day and it is always in excellent condition."
          </div>
        </div>
        <div class="item5" v-if="maskIndex === 5" >
          <div class="img por">
            <img src="@assets/img/life/5.jpg" v-show="!showVideo4">
            <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(4)" v-show="!showVideo4" />
            <video src="@assets/video/rnd-1.mp4" id="video4" preload controls @touchend="onPause(4)" v-show="showVideo4"></video>
          </div>
          <div class="title clearfix">
            <span>Uruguay</span>
            <div class="icon icon1"></div>
          </div>
          <div class="text">
            <p>Transportation: Truck model: 1020, Mileage: 435000km. Since 2007, I have purchased 5 light trucks in total, and I have been impressed by the quality of JAC light trucks because there was not a single major quality accident.</p>
            <p>"We have been engaged in logistics industry for 40 years, and we are a family of transport enterprises. In 2007, we bought our first JAC light truck, and it is even the first JAC light truck that entered Uruguay. At that time my father decided to take some risks to try this Chinese brand, and eventually bought it, but now we have 5 units JAC light trucks.</p>
            <p>I remember the year very clearly, 2007, 2010, 2013, 2016, and it looks like we're going to buy another one this year.</p>
            <p>If I keep buying back one truck, that means it's really good, which is the case with the JAC light truck, otherwise we would have changed brands.</p>
            <p>People sometimes come to me and ask, "How's the car?"</p>
            And I said," Sure, we haven't even tried another truck, we just keep buying JAC."
          </div>
        </div>
        <div class="item6" v-if="maskIndex === 6" >
          <div class="img por">
            <img src="@assets/img/life/6.jpg" v-show="!showVideo5">
            <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(5)" v-show="!showVideo5" />
            <video src="@assets/video/rnd-1.mp4" id="video5" preload controls @touchend="onPause(5)" v-show="showVideo5"></video>
          </div>
          <div class="text">
            <p>Mobile coffee store</p>
            <p>Hey, you, How long has it been since the last time you counted the clouds in the sky?</p>
            <p>For me, it's every day, Every day with my X5 mini truck. When I drove my flexible X5 mini truck, I was like riding a strong horse. I jumped up to the mountainside and cloud mountains of Da Nang sea, overlooking the winding coastline slowly unfolds like a scroll, and listening to the slightly salty and wet sea breeze float on the bank. How pleasant!</p>
            <p>Before long we arrived at the destination. A platform protrudes from the hillside, and that is my stall's exclusive territory.  I start to stick up after finishing hookah, later I open the end plate and the flying wings. Let you see my good baby, a surprise, right? You did not expect so much equipment from a small car like this, right? I put the sausage in the fryer, and the aroma rises in an instant. Then I open the refrigerator with cold air gasping out. "Hey, I'll have two ice creams." "Okay." Expertly, I took two ice creams out of the refrigerator and handed them to my regular customers.</p>
            <p>Halfway up the mountain, this is the best view of the whole sea and cloud ridge, and my X5 mini truck seems to attract more attention than the sea and sky, and it is always surrounded by people inside and outside.</p>
            Afternoon free time I will set up a hammock, and I slightly lifted up my head to count the floating cloud in the sky with the sunglasses, watching them freely changing the shape. And that's just like me having X5 mini truck with the freedom of having a business of my own, with the ability to show up anytime at every corner of the city of da nang. X5 mini truck accompanies me to enjoy the beauty of this seaside city.
          </div>
        </div>
        <div class="item7" v-if="maskIndex === 7">
          <div class="img">
            <img src="@assets/img/life/7.jpg">
          </div>
          <div class="text">
            <p>We are all members of JAC Auto Club. We often organize some activities, and drive our loved JAC cars to the destination, enjoying the pleasure of travel and party!</p>
            It is JAC that brings us together, a group of like-minded people. We love this brand, and we also love the happiness this brand brings to our life!
          </div>
        </div>
        <div class="item8" v-if="maskIndex === 8">
          <div class="img">
            <img src="@assets/img/life/8.jpg">
          </div>
          <div class="text">
            <p>This is my first JAC SUV. I drive it to work every day for the past three years.</p>
            <p>With him, we walked through the streets, mountains and rivers. When I was tired, I would stop to take a look at the scenery, take a rest, have a cup of coffee and smoke a cigarette.</p>
            <p>He has become an important partner in my life, and I cannot leave him every day. Because of him, I don't have to squeeze the bus and subway every day, because of him, I can have more time and freedom to enjoy my life, and because of him, I fall in love.</p>
            <p>I often drive my car and my girlfriend to travel together, from now on my life is no longer lonely but more perfect!</p>
            When we get married, we'll buy a bigger JAC SUV and I'm sure she'll love it!
          </div>
        </div>
        <div class="item9" v-if="maskIndex === 9" >
          <div class="img">
            <img src="@assets/img/life/9.jpg">
          </div>
          <div class="text">
            <p>I love to travel. I'm an online blogger, and I like to record the beauty and details of my travels.</p>
            <p>The JAC S2 was my second car. My first car was so broken that I desperately needed a beautiful and practical SUV.</p>
            <p>I bought it with a try-and-see attitude, but what surprised me was its excellent quality and handling, which completely met my needs for travel and changed my view on Chinese automobile brands!</p>
            <p>Especially through some of the winding mountain roads, the power is great!</p>
            <p>Have you seen the flowers?</p>
            <p>This is me driving to the countryside to pick up the flowers by myself.</p>
            It's easy to drive through half the city. Because of it, I have written many wonderful articles and travel notes. It brings me more inspirations and experiences!
          </div>
        </div>
        <div class="item10" v-if="maskIndex === 10" >
          <div class="img">
            <img src="@assets/img/life/10.jpg">
          </div>
          <div class="text">
            <p>I graduated from college this year. Speaking of this car, it is my graduation gift from my parents. It should be the most expensive gift in my 20-plus years of life, and also the most meaningful gift!</p>
            <p>So I couldn't wait to let them take this picture of me!</p>
            <p>Am I cool with sunglasses on?</p>
            <p>I want to say to my parents, I love you, I will make a good effort to live in the future, work hard!</p>
            <p>And I'll take you where you want to go in my favorite car.</p>
            After I earn more money, I will also give my parents a JAC SUV, because of your love, my heart is very full and very satisfied!
          </div>
        </div>
        <div class="item11" v-if="maskIndex === 11" >
          <div class="img">
            <img src="@assets/img/life/11.jpg">
          </div>
          <div class="text">
            <p>These are my two daughters, twins, as you can see! After we got married, we desperately needed a practical SUV with plenty of space and power. However, due to the limited budget, we chose JAC after a long time of hesitation. My daughters love this car so much that they often ask me to take them for a ride! They are only two years old and they can't speak fluently, but they can stand by the car and say, "Dad, let's go!".</p>
            <p>I know what they mean, and I love to take them to experience this wonderful life!</p>
            <p>Today we went to the supermarket and filled the trunk!</p>
            <p>My wife said to take a group photo for them, so I let them sit directly in the car, and I found it really cute!</p>
            Life is much more convenient with this car.
          </div>
        </div>
        <div class="item12" v-if="maskIndex === 12" >
          <div class="img">
            <img src="@assets/img/life/12.jpg">
          </div>
          <div class="text">
            <p>I'm a model! I have two cars. This car is one of my them, and it's my favorite.</p>
            <p>My job is to be taken of pictures in front of cameras, of course I have only been doing this for a few years. I found the shape of the JAC SUV is very good, and my photographer has taken a lot of pictures of me and the car so far, the effect is also very good!</p>
            <p>This car fits me so well that I feel more confident around it!</p>
            In addition to taking photos, I often drive it to the workplace where I need it. When I get rich, I will buy a bigger and newer JAC SUV!
          </div>
        </div>
        <div class="item13" v-if="maskIndex === 13" >
          <div class="img">
            <img src="@assets/img/life/13.jpg">
          </div>
          <div class="text">
            <p>The sea, the beach, and surfing are our favorites!</p>
            <p>My wife and I just got married. This is the SUV we chose together. This car accompanied me throughout the honeymoon period and it also witnessed the excitement, cherishing and beauty of our family.</p>
            I love driving it to the beach to surf with my wife. Our home is more than 40 kilometers away from the beach, so the life without a car is really inconvenient, but now I can easily enjoy this beautiful life! My wife and I share the same hobby. Every time she stands by the car and helps me tidy up my surfboard, I think it's her sexiest moment.
          </div>
        </div>
        <div class="item14" v-if="maskIndex === 14" >
          <div class="img">
            <img src="@assets/img/life/14.jpg">
          </div>
          <div class="text">
            <p>I have a son and a daughter. My brother is 8 years old and my sister is 6 years old. Although this is their photo taken two years ago, I really love this one, because it records the happiest moment in my life! I have a very busy job and I hardly have time to spend with my children. I bought this car mostly for my wife, because I travel a lot, and I worry about her life’s getting inconvenient, so I bought this JAC SUV.</p>
            <p>My wife said the car was good for shopping with two children and it had enough space to place a week's groceries in just one trip to the supermarket.</p>
            <p>This picture was taken after I came back from a business trip for one month in a row to wash the car with my children. They worked together with me, washing the car and getting wet all over. I laughed and cried unconsciously, so I took this picture.</p>
            He was there for my family while I was away. I love JAC and I hope to spend more time with my children in the future.          </div>
        </div>
        <div class="item15" v-if="maskIndex === 15" >
          <div class="img">
            <img src="@assets/img/life/15.jpg">
          </div>
          <div class="text">
            See? This is my favorite friend, Peter. Yes, he's a dog. I bought this car for him because he loves to go for a ride. Before, my car was a used car. Peter often got stuck on his head because the electric window failed, but he kept sticking his head out of the window to see the scenery! I decided to treat him better, so I chose JAC SUV. This car is fully equipped with electronics and is very responsive. Peter loves this car so much now that he always gets on faster than me! I often take him out in the car. He is so cute, and I also hope to find a girlfriend for him to go out for a ride.
          </div>
        </div>
        <div class="item16" v-if="maskIndex === 16" >
          <div class="img">
            <img src="@assets/img/life/16.jpg">
          </div>
          <div class="text">
            <p>My favorite sport is motorcycle racing, but I found that I needed a car that would take me to more places to race!</p>
            <p>So I choose JAC pickup truck, I think this is the most correct choice I’ve made in my life!</p>
            <p>Because of this car, I have a wider range of RACES, a wider horizon, and I even make many, many friends!</p>
            I also joined JAC auto club and have many like-minded friends. In the future, JAC pickup truck will accompany me through more years and witness more growth in my life.
          </div>
        </div>
        <div class="item17" v-if="maskIndex === 17" >
          <div class="img">
            <img src="@assets/img/life/17.jpg">
          </div>
          <div class="text">
            <p>My family and I run a farm, and the most pleasant part of the day is when I spend the afternoon relaxing with my dog on a haystack in a pickup truck.</p>
            <p>We couldn't do our daily work without JAC pickup trucks. During the harvest season, we would often pull various tools and some agricultural products back and forth through the muddy roads and fields.</p>
            It can be said that the JAC pickup truck is my best work partner and assistant.          </div>
        </div>
        <div class="item18" v-if="maskIndex === 18" >
          <div class="img">
            <img src="@assets/img/life/18.jpg">
          </div>
          <div class="text">
            <p>I’m Merab Odishvili, live in Kazbegi region, which is one of the most beautiful places in Georgia. As you know there is a lot of places for off-road driving in mountains. With snow and freeze, so 4*4 Car is very useful here, especially when you work in tourism sector.</p>
            <p>Nowadays, the prices of pickup market are not easily affordable. I have been interested in JAC since it entered to Georgian market. I was searching a lot of information and specifications. I am very satisfied that i purchased Pickup T8, it’s more than quality values money. Convenient, durable, efficient and very suitable as for business and for a family.</p>
            In fact, i drive with A/C to the top of mountain, which is 2300m from height above the sea and fuels consumption was 7.9L. This car is one big beast, dressed with intelligent smoking, very nice and truly all wheel drive. I am really satisfied and advise to all. Who hasn’t decided yet and want to purchase pickup, in this price you can’t buy anything better than T8.
          </div>
        </div>
        <div class="item19" v-if="maskIndex === 19" >
          <div class="text">
            <p>Here is Port Sudan at 6 am. I’m Mohammed Abdelgadir Abakr, a normal truck driver.</p>
            <p>My driving route is relatively fixed, between Port Sudan and Khartoum, under normal circumstances, one back and forth every two days.</p>
            When I was a kid, I always admire truck drivers because I feel that they can travel around the world. It’s cool. However, when I really became a truck driver, braving the wind and dew, traveling day and night… these hardships were only known to me. But, no pain no gain.
          </div>
          <div class="img">
            <img src="@assets/img/life/19.jpg">
          </div>
          <div class="text">
            <p>Our country Sudan does not have the developed and diversified transportation network, and cargo transportation basically depends on road transport.</p>
            <p>My truck is a 6x4 tractor manufactured by JAC Motors, has been together with me for 3 years. Every day, with the four axle cargo semi-trailer, we will carry several sacks of dry cargo, like sugarcane. The GCW is around 65T.</p>
            Now, every month I will travel back and forth from Port Sudan to Khartoum for a total of about 9000 kilometers. Sudanese government is improving the main highway quality, so the road condition from Port Sudan to Khartoum now is not bad, around 90% is paved road, only small proportion of rough road. And there is a quite long but gentle downhill on the way from Port Sudan to Khartoum at Alagba area, but with slow vehicle speed and the use of exhaust auxiliary brake, no problem.
          </div>
          <div class="img">
            <img src="@assets/img/life/19.jpg">
          </div>
          <div class="text">
            <p>There are several points that I am most satisfied with my JAC tractor, first is the fuel consumption which may be the top concern of many tractor drivers. For my tractor, the average fuel consumption when empty load is about 40L/100km, and 58L/100km when full load. I’m quite satisfied with it. I have worked in professional logistic company for seven years, and also tried other brands before. The fuel consumption performance of this JAC tractor is almost similar with European brand tractor.</p>
            <p>Loading capacity is also important for us. Although we have regulatory controls on the loading of trucks in Sudan, but still, stronger loading capacity is a guarantee of better reliability and durability. Especially, when I approach Khartoum, there is a quite long way with very tough road condition. With full load of the truck, stronger frame, suspension and brackets will be valuable for us. And my tractor has double-layer and thicker frame, strengthened leaf springs and brackets. Till now, there is no breakdown caused by frame or suspension.</p>
            <p>The power train performance is also one thing that I’m satisfied with. No matter it is on the tough road or Alagba mountainous area, I was never worried about the power. Beside, some small devices are also quite thoughtful for our truck drivers in Sudan, like the oil-bath air filter and two oil-water separators. Sudan has large desert areas, so there is always heavy sand and dust in the air outside, especially during driving. This oil-bath air filter has a better filtration performance which is quite necessary for long-haul truck drivers like me.</p>
            <p>Over the past three years, this buddy, who came from over ten thousand miles away, has accompanied me, to see the sunrise in Port Sudan and the sunset in Khartoum, and also witnessed the better life of me and my family in these three years.</p>
            For me, this JAC tractor is not only a working partner, but also a trusted friend. I believe in the future, with his company and my own efforts, life will be more and more wonderful.
          </div>
          <div class="img">
            <img src="@assets/img/life/19.jpg">
          </div>
        </div>
        <div class="item20" v-if="maskIndex === 20">
          <div class="img por">
            <img src="@assets/img/life/20.jpg" v-show="!showVideo6">
            <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(6)" v-show="!showVideo6" />
            <video src="@assets/video/rnd-1.mp4" id="video6" preload controls @touchend="onPause(6)" v-show="showVideo6"></video>
          </div>
          <div class="text">
            <p>My name is Marelo Sus. I am a co-founder and Operations Director of Redalco.</p>
            <p>My name is Bruno. I have been driving the JAC 1035 for two years, it has 20,000 km.</p>
            <p>We use it to transport fruits and vegetables to the most vulnerable areas of Montevideo.</p>
            <p>Basically, what we do is recover those fruits and vegetables, that are going to be wasted both in farms and in the Merado Modelo. And then distribute them to those institutions, that work with populations that cannot access food.</p>
            During the pandemic, Redatco had a very important contribution. We are delivering fruits and vegetables to 130 popular pots in Montevideo, with the idea that many people have access to a plate of food.
          </div>
        </div>
        <div class="item21" v-if="maskIndex === 21" >
          <div class="img por">
            <img src="@assets/img/life/21.jpg" v-show="!showVideo7">
            <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(7)" v-show="!showVideo7" />
            <video src="@assets/video/rnd-1.mp4" id="video7" preload controls @touchend="onPause(7)" v-show="showVideo7"></video>
          </div>
          <div class="text">
            <p>I am Antonio Gonzalez. I work at Volcanica,and we have been distributing craft beer in nightclubs and supermarkets for more than two years. During the pandemic, all the nightclubs closed. And we had to reinvent ourselves. We distribute through various areas of Montevideo and Canelones.</p>
            <p>At the delivery points, we had to come down dressed as an astronaut, with hand sanitizer, masks and always following all sanitary measures. It is an ideal truck for what we do, because it is a very maneuverable vehicle.</p>
            We work in Las Toscas and deliver in Montevideo. With the category of this truck, there is no limitation of circulation, and it is a very easy to handle truck with a good capacity,
          </div>
        </div>
        <div class="item22" v-if="maskIndex === 22" >
          <div class="img por">
            <img src="@assets/img/life/22.jpg" v-show="!showVideo8">
            <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(8)" v-show="!showVideo8" />
            <video src="@assets/video/rnd-1.mp4" id="video8" preload controls @touchend="onPause(8)" v-show="showVideo8"></video>
          </div>
          <div class="text">
            <p>My name is Bismark Mora. I sell firewood and construction supplies. I have had the truck for two years, It has been very good, economic has a really good direction and easy to drive in the city. Regarding the pandemic, i continued to work as normal, but with the provisions of using a mask, constantly washing my hands, cleaning the steering wheel and the vehicles in general, using hand sanitizer and following all other measure.</p>
            Luckily, so far i am very satisfied.
          </div>
        </div>
        <div class="item23" v-if="maskIndex === 23" >
          <div class="img por">
            <img src="@assets/img/life/23.jpg" v-show="!showVideo9">
            <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(9)" v-show="!showVideo9" />
            <video src="@assets/video/rnd-1.mp4" id="video9" preload controls @touchend="onPause(9)" v-show="showVideo9"></video>
          </div>
          <div class="text">
            <p>I have had the truck for 10 months, and i am very satisfied in forms of performance and consumption, the comforts it has. I am dedicated to the delivery of home appliances and furniture. I travel in Montevideo and to the countryside.</p>
            <p>During the pandemic, work dropped a bit, and the relationship with people changed. When we arrived they welcome us with masks, many times we could not enter the houses. They received us at the door.</p>
            He is my son Maximo, he loves the truck.He is my co-plot guiding me. He searches the streets on the truck’s GPS. He guides me. He helps me a lot.
          </div>
        </div>
        <div class="item24" v-if="maskIndex === 24" >
          <div class="img por">
            <img src="@assets/img/life/24.jpg" v-show="!showVideo10">
            <img class="img-player" src="@assets/img/company/play.png" @click="onPlayVideo(10)" v-show="!showVideo10" />
            <video src="@assets/video/rnd-1.mp4" id="video10" preload controls @touchend="onPause(10)" v-show="showVideo10"></video>
          </div>
          <div class="text">
            <p>My name is Jorge. I have been driving the truck since January for a cargo company. We move whatever, we travel to the countryside, carrying construction materials, etc. The truck is now open but it also fully closes up, to move more delicate items safety.</p>
            <p>During the pandemic, work slowed down a bit, but we continued to work. Being more meticulous about hygiene, the booth was desinfected daily, and all preventive measures were taken to keep working.</p>
            <p>Although we are not 100% essential, we do everything possible to keep the country moving forward. The truck is very good, and it’s really very comfortable and manageable. I present it to you, it is the famous ‘EI Santo ‘’ . it has his name on the wide-shield.</p>
            I could say more than a truck, he is my partner!
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
	import mix from "@mixins/mixin";

	export default {
		name: "LifeStyle",
		mixins: [mix],
    data: () => ({
      showMask: false,
      maskIndex: 0
    }),
    methods: {
		  onShowMask(val) {
		    this.maskIndex = val;
		    this.showMask = true;
      },
      onHideMask() {
        this.showMask = false;
      }
    },
    watch: {
      showMask(val) {
        if (val) {
          $('html').css('overflow', 'hidden');
        } else {
          $('html').css('overflow', 'auto');
        }
      }
    }
	}
</script>

<style lang="scss">
  @import "~@assets/scss/func.scss";
  .life-style {
    .img1-container {
      margin-bottom: vw(76);
    }
    .item-container {
      padding: 0 vw(110) vw(250);
      .text-title {
        font-size: vw(72);
        font-family: Cormorant-Bold;
        line-height: 1;
        font-weight: bold;
      }
      .anitmate-container {
        float: left;
        margin-top: vw(97);
      }
      .pcm {
        margin-right: vw(48);
      }
      .pc3 {
        width: vw(534);
      }
      .pc5 {
        width: vw(825);
      }
      .item1 {
        width: vw(1152);
      }
      .item2 {
        width: vw(497);
      }
      .item3 {
        width: vw(637);
      }
      .item4 {
        width: vw(465);
      }
      .item5 {
        width: vw(495);
      }
      .title {
        font-size: vw(60);
        font-family: Cormorant-Bold;
        font-weight: bold;
        color: #410004;
        line-height: 1;
        margin-top: vw(50);
        margin-bottom: vw(20);
      }
      .text {
        font-size: vw(30);
        font-family: Aileron-Regular;
        line-height: vw(40);
      }
      .icon {
        width: vw(58);
        height: vw(58);
        float: right;
        background-size: contain;
        &.icon1 {
          background-image: url("~@assets/img/life/g1.png");
        }
        &.icon2 {
          background-image: url("~@assets/img/life/g2.png");
        }
        &.icon3 {
          background-image: url("~@assets/img/life/g3.png");
        }
        &.icon4 {
          background-image: url("~@assets/img/life/g4.png");
        }
        &.icon5 {
          background-image: url("~@assets/img/life/g5.png");
        }
        &.icon6 {
          background-image: url("~@assets/img/life/g6.png");
        }
        &.icon7 {
          background-image: url("~@assets/img/life/g7.png");
        }
      }
    }
    .mask-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      padding-right: vw(16);
      background: #000;
      opacity: .9;
      z-index: 999;
      .close-container {
        height: 14.5vw;
        padding-top: vw(138);
        padding-right: vw(155);
        .icon-close {
          width: vw(59);
          height: vw(59);
          float: right;
          cursor: pointer;
        }
      }
      .of-container {
        height: calc(100% - 14.5vw);
        &::-webkit-scrollbar-track {
          background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
          background: #D81010;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .life-style {
      .img1-container {
        margin-bottom: 0;
      }
      .clearwap {
        clear: left;
      }
      .item-container {
        padding: 0 wp(22) wp(250);
        .text-title {
          font-size: wp(60);
        }
        .anitmate-container {
          margin-top: wp(80);
        }

        .wap1 {
          width: 100%;
          .img {
            height: wp(334);
          }
        }
        .wap2 {
          width: wp(338);
          .img {
            height: wp(387);
          }
        }
        .wapm {
          margin-right: wp(10);
        }
        .title {
          font-size: wp(38);
          margin-top: wp(32);
          margin-bottom: wp(10);
        }
        .text {
          font-size: wp(28);
          line-height: wp(40);
        }
        .icon {
          width: wp(41);
          height: wp(41);
        }
      }
    }
  }
</style>
