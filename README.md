# Branded Captcha

This is novel captcha concept, coded in JavaScript, for the commercial use of captcha space on the web. A captcha is a test to verify that the user is human. The idea is to set a task, which is very difficult or impossible for a computer to complete, but is easily completed by a human being. This guards against bot attacks on web-services. It is often used in the online sale of tickets, for example.

This captcha is new in the sense that it allows advertisers to brand the captcha. It is an incredibly engaging medium of advertising that, when combined with demographic targeting, can attain much longer-lasting impressions than simple banners or facebook ads.

## Configuration

* Clone the repository
* `$ npm install`
* `$ jasmine` to run unit tests
* `$ mocha` to run feature tests



## The Product Journey

### Various Iterations of the MVP

When reduced to its simplest form, a captcha is really just a button that takes you from one page to the next. This is where we started our MVP journey. With time, we made the MVP progressively more complex and, for example, added a word that the user had to input correctly to progress.

All of these MVPs were still much too simple to pose any serious challenge for any type of bot. We quickly progressed to prompting the user for input with images, rather than HTML plain text and eventually developed 3 main approaches to a working captcha which causes significant or insurmountable problems to even sophisticated AI.


  #### 1. Image Association

  In the image association game, the user is prompted to freely associate one correct image with a branded message. Although specific prompts such as "click on the suitcase" may be solvable by sophisticated AI, such as Google's deepmind algorithms, more figurative prompts like "click on Messi's weapon of choice" may be harder to solve.

  #### 2. Area Click

  In the area click game, the user is prompted to click on a specific area of a branded image. Again, specific instructions, such as "click on the number 8" may be easy for an AI to solve. Less figurative instructions like "Click on her newest treasure" would be much harded to solve for any artifical intelligence, but should be fairly easy for a human to comprehend - even if the user is not completely familiar with the brand.

  #### 3. Drag & Drop

  In the drag & drop game, the user is prompted to overlay a prompt image, onto a branded target image. This game is rather complicated for an AI to solve, as it requires a comprehensive understanding of an incomplete image and a deduction of what aspect of this image is missing. Although a bot may recognize the Mercedes as a car, it is a much higher level of abstraction to deduce that the mercedes is missing its star, and where the star should be dropped.

  #### Further Approaches

  A strong further approach could be a combination of the `Drag & Drop` and `Image Association` games. Adding decoy images to the prompt image would require complex patterns of reflection and deduction, which would be hard for any conventionally available AI to emulate. In addition, Google's simple re:captcha algorithm could be used to verfify users' mouse movements and immediate internet history. These attributes generally have a strong enough indication to verify a human user on their own, and would act as a formidable second layer of defense.


### Rationale

#### Engagement

  Compared to common forms of advertisement on the web, the Branded Captcha has an exceptionally high level of user engagement. The User is prompted to think about and critically engage with the product and marketing message. To complete the primary task (eg. buying a ticket) the user has to bypass the captcha, meaning the marketing message cannot be ignored. Secondly, by engaging in a quick mini-game the user has to critically ponder the product placed on the screen. Whether it is a new football boot, home-insurance or cat food, the message will be anchored much longer and sustainably.
  
#### Monetisation

We imagine a pay-per-impression model for the monetisation of the branded captcha. Current Captchas offer the primary service provider (eg. ticketmaster) very little reward other than their primary function. This business model has worked so far, due to lack of viable alternatives. A captcha that is targetable, easy to use, safe and pays on a per-impression basis would likely be an attractive option to all sorts of service providers on the web.

Not only could websites monetise their customer base more effectively, but specific brands would be able to use captcha space to advertise their own products on their webpage. Dell, for example, at store checkout, could offer customers additional computer parts in a captcha, rather than a simple side bar.
  
  #### Security
  
  Under our current API model, we store prompt images and solutions together, server-side, in a relational SQL database. Although certain information is passed to the client upon creation of each individual captcha, the solution to the puzzle never leaves the server. Upon completion of the minigame, the user response is sent back to the server, where it is compared to the stored sample solution. A correct comparison prompts a `true` response to be sent back to the client. This clears the user as Human.
  
  For the captcha to become truly secure, there would need to be a much larger sample of prompt, decoy and solution images. This might pose a problem for the marketability of the product as lasting impressions tend to require repition of the message. Repetitive captcha input, however, would mean predictable outcomes which would be detrimental to the security of the product. Further work in this area is needed.
  
  
  ## Screen Shots
  
  ### Drage & Drop
  
  #### Confirmed
  
  <a href="https://imgur.com/LBcLQQF"><img src="https://i.imgur.com/LBcLQQF.gif" title="source: imgur.com" /></a> 
