const cities = [
  {
  id: 1,
  name: "London",
  nameCountry: "London, England",
  description:  "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.",
  image:  "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  climate: "Temperate oceanic climate, with mild summers and cool winters",
  population: "8.982 million (2019)",
  timeZone: "GMT/BST",
  recommendedSentence: "If you like popular big cities, check these out:",
  recommendedCities: [4, 5, 3],
  googleMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.6931929206!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2skw!4v1594365969142!5m2!1sen!2skw" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
   
  attractions:
   [
  {
  name: "Buckingham Palace",
  image: "https://i2-prod.mylondon.news/article17669017.ece/ALTERNATES/s615/4_Buckingham-Palace.png",
  description: "Buckingham Palace is the London residence and administrative headquarters of the monarchy of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality. It has been a focal point for the British people at times of national rejoicing and mourning.",
  target: "Tourists"},
  {
  name: "The London Eye",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/London-Eye-2009.JPG",
  description: "The London Eye, or the Millennium Wheel, is a cantilevered observation wheel on the South Bank of the River Thames in London.",
  target: "Families"},
  {
  
  name: "Tower Bridge",
  image: "https://www.swedishnomad.com/wp-content/images/2020/03/Tower-Bridge.jpg",
  description: "Tower Bridge is a combined bascule and suspension bridge in London, built between 1886 and 1894. The bridge crosses the River Thames close to the Tower of London and has become an iconic symbol of London. As a result, it is sometimes confused with London Bridge, about half a mile upstream.",
  target: "Photographers"}]
  },
  
  {
  id:2,
  name: "Tokyo",
  nameCountry: "Tokyo, Japan",
  description:  "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
  image:  "https://i.pinimg.com/originals/24/1b/e7/241be7e9e87e5d91d997843d2ba45a90.jpg",
  climate: "Humid subtropical climate zone with hot humid summers and generally mild winters with cool spells. ",
  population: "9.273 million (2015)",
  timeZone: "JST",
  recommendedSentence: "If you like unique big cities, check these out:",
  recommendedCities: [6, 7, 5],
  googleMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326606.5311178067!2d137.52630650667987!3d35.488469958308755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2skw!4v1594367725185!5m2!1sen!2skw" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
   attractions: [
   {
  
  name: "Toyo Skytree",
  image: "https://www.gotokyo.org/en/spot/6/images/4507_5_950x637.jpg",
  description: "Tokyo Skytree is a broadcasting and observation tower in Sumida, Tokyo. It became the tallest structure in Japan in 2010 and reached its full height of 634.0 meters in March 2011, making it the tallest tower in the world, displacing the Canton Tower, and the second tallest structure in the world after the Burj Khalifa. The tower is the primary television and radio broadcast site for the Kantō region; the older Tokyo Tower no longer gives complete digital terrestrial television broadcasting coverage because it is surrounded by high-rise buildings. Skytree was completed on Leap Day, 29 February 2012, with the tower opening to the public on 22 May 2012. The tower is the centrepiece of a large commercial development funded by Tobu Railway and a group of six terrestrial broadcasters headed by NHK. Trains stop at the adjacent Tokyo Skytree Station and nearby Oshiage Station. The complex is 7 km north-east of Tokyo Station.",
  target: "Photographers"},
  {

  name: "Sensō-ji",
  image: "https://www.japan365days.com/img/tokyo/sensoji_temple/sensoji-temple-asakusa-tokyo.jpg",
  description: "Sensō-ji is an ancient Buddhist temple located in Asakusa, Tokyo, Japan. It is Tokyo's oldest temple, and one of its most significant. Formerly associated with the Tendai sect of Buddhism, it became independent after World War II.",
  target: "Tourists"},
  {
 
  name: "Meiji Jingu",
  image: "",
  description: "Meiji Shrine, located in Shibuya, Tokyo, is the Shinto shrine that is dedicated to the deified spirits of Emperor Meiji and his wife, Empress Shōken. The shrine does not contain the emperor's grave, which is located at Fushimi-momoyama, south of Kyoto.",
  target: "Tourists"}]
  },
  
  
  {
  id: 3,
  name: "Dubai",
  nameCountry: "Dubai, United Arab Emirates",
  description:  "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.",
  image:  "https://imagevars.gulfnews.com/2019/09/29/Dubai-skyline_16d7de0fdce_medium.jpg",
  climate: "Temperate oceanic climate, with mild summers and cool winters",
  population: "3.331 million (Jul 2019)",
  timeZone: "GST",
  recommendedSentence: "If you like popular big cities, check these out:",
  recommendedCities: [4, 5, 1],
  googleMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462565.197581445!2d54.94755498654818!3d25.075085310621684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2skw!4v1594368771843!5m2!1sen!2skw" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
   attractions: [
   {
  
  name: "Burj Khalifa",
  image: "https://www.timeoutdubai.com/public/styles/full_img/public/images/2019/07/02/Burj-Khalifa.jpg?itok=lGPTpBvN",
  description: "The Burj Khalifa, known as the Burj Dubai prior to its inauguration in 2010, is a skyscraper in Dubai, United Arab Emirates. With a total height of 829.8 m and a roof height of 828 m, the Burj Khalifa has been the tallest structure and building in the world since its topping out in 2009.",
  target: "Tourists"},
  {
  
  name: "Burj Al Arab",
  image: "https://www.e-architect.co.uk/wp-content/uploads/2010/03/burj-al-arab-dubai-2.jpg",
  description: "The Burj Al Arab (Arabic: برج العرب‎, Tower of the Arabs) is a luxurious 5 star hotel located in the city of Dubai, United Arab Emirates. ... Burj Al Arab stands on an artificial island 280 m (920 ft) from Jumeirah Beach and is connected to the mainland by a private curving bridge.",
  target: "Hotel Guests"},
  {
  
  name: "The Dubai Mall",
  image: "https://www.timeoutdubai.com/public/styles/full_img/public/images/2019/10/17/Dubai-Mall.jpg?itok=P2kL8JwM",
  description: "The Dubai Mall is a shopping mall in Dubai. It is the second largest mall by total land area, and the 26th-largest shopping mall in the world by gross leasable area, tying with West Edmonton Mall and Fashion Island —both of which are older than it. It has a total retail floor area of 502,000 square metres.",
  target: "Shoppers"}]
  },
  
  {
  id: 4,
  name: "New York City",
  nameCountry: "New York City, USA",
  description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.",
  image: "https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2560%2Cc_limit/GettyImages-946087016.jpg",
  climate: "Continental, with cold winters and hot summers.",
  population: "8.399 million (2018)",
  timeZone: "EDT",
  recommendedSentence: "If you like popular big cities, check these out:",
  recommendedCities: [3, 5, 1],
  googleMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2skw!4v1594370061626!5m2!1sen!2skw" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
    attractions: [
   {
  
  name: "Central Park",
  image: "https://lh6.googleusercontent.com/proxy/G3XoiF_c0LjypR2_Yo6NAaIxHiOPadUhUX-SLZ2qM5euE0b_ZDRrxr92yRk68VmVzFSHq3CjydY4K19c5YR05bqGdAndHOmtVtgZ0_fyDEjs8W_oblet5HWAzrsoZ4pjUbGzYRaHvlKdYeAKX3BUwDZsv2lhCGovvr-Fx-BsG2KA=w296-h202-n-k-no",
  description: "Central Park is an urban park in New York City, located between the Upper West and Upper East Sides of Manhattan. It is the fifth-largest park in the city by area, covering 843 acres. The park is the most visited urban park in the United States, with an estimated 38 million visitors annually, and is the most filmed location in the world. Following proposals for a large park in Manhattan during the 1840s, it was approved in 1853 to cover 778 acres. In 1857, the landscape architects Frederick Law Olmsted and Calvert Vaux won a design competition for the park with their 'Greensward Plan'. Construction began the same year, and the park's first areas were opened to the public in late 1858. Additional land at the northern end of Central Park was purchased in 1859, and the park was completed in 1876. After a period of decline in the early 20th century, New York City parks commissioner Robert Moses started a program to clean up Central Park. The Central Park Conservancy, created in 1980 to combat further deterioration in the late 20th century, refurbished many parts of the park during the 1980s and 1990s.",
  target: "Families"},
  {
  
  name: "The Statue of Liberty",
  image: "https://lh3.googleusercontent.com/proxy/jwy6_SG55FDIWnbV9eyRTHkPNzVhN7m8FIoXbyIJhmwoGUrzlCvaw6LgAam4dni8snp3ICAdy8QKTNZMQY9bQheJOj0T_Qx5sZnEZ9ZOBGWLtpYd0OoboqQu27zs1y8oOo-CIW3TlI9s_1K9PIZykkQt_rA3bLFmKby_i4Y4nWFP=w296-h202-n-k-no",
  description: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City, in the United States. The copper statue, a gift from the people of France to the people of the United States, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was dedicated on October 28, 1886. The statue is a figure of Libertas, a robed Roman liberty goddess. She holds a torch above her head with her right hand, and in her left hand carries a tabula ansata inscribed JULY IV MDCCLXXVI, the date of the U.S. Declaration of Independence. A broken shackle and chain lie at her feet as she walks forward, commemorating the recent national abolition of slavery. After its dedication, the statue became an icon of freedom and of the United States, seen as a symbol of welcome to immigrants arriving by sea. Bartholdi was inspired by a French law professor and politician, Édouard René de Laboulaye, who is said to have commented in 1865 that any monument raised to U.S. independence would properly be a joint project of the French and U.S. peoples.",
  target: "Tourists"},
  {

  name: "The Empire State Building",
  image: "https://lh5.googleusercontent.com/proxy/AOqeQFLXgTqF9KzV-nR3kx7cPAbT6ATTgkdvRnbsmNlUx8DGsHYD2PuGXSxPc9OaOLOl30aehyjo-frT9YvXTBUBU3RPk-cisqxXhdKB5LM9q3NtLhJpmJgdkm92dT4KaDtJpRH_jeoygDjrs6bUuBVzEZ7Jk8piZXY3KyCFqPMa=w296-h202-n-k-no",
  description: "The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan in New York City. It was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. Its name is derived from Empire State, the nickname of the state of New York. The building has a roof height of 1,250 feet and stands a total of 1,454 feet tall, including its antenna. The Empire State Building stood as the world's tallest building until the construction of the World Trade Center in 1970; following its collapse in the September 11, 2001 attacks, the Empire State Building was again the city's tallest skyscraper until 2012. As of 2020, the building is the seventh-tallest building in New York City, the ninth-tallest completed skyscraper in the United States, the 48th-tallest in the world, and the fifth-tallest freestanding structure in the Americas. The site of the Empire State Building, located in Midtown South on the west side of Fifth Avenue between West 33rd and 34th Streets, was originally part of an early 18th-century farm. It was developed in 1893 as the site of the Waldorf–Astoria Hotel. In 1929, Empire State Inc. acquired the site and devised plans for a skyscraper there.",
  target: "Tourists"}]
  },
  
  {
  id: 5,
  name: "Hong Kong",
  nameCountry: "Hong Kong",
  description: "Hong Kong, officially the Hong Kong Special Administrative Region of the People's Republic of China, is a metropolitan area and special administrative region of the People's Republic of China on the eastern Pearl River Delta of the South China Sea.",
  image: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/Hong%20Kong/hong-kong-victoria-peak-pano-guide.jpg?imwidth=450",
  climate: "Subtropical Hong Kong has four distinguishable seasons - warm and humid spring, hot and rainy summer, pleasant and sunny autumn, cool and dry winter.",
  population: "7.451 million (2018)",
  timeZone: "HKT",
  recommendedSentence: "If you like unique big cities, check these out:",
  recommendedCities: [6, 7, 2],
  googleMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472323.8860633225!2d113.8475072266474!3d22.352482475031337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2eda332980f%3A0xf08ab3badbeac97c!2sHong%20Kong!5e0!3m2!1sen!2skw!4v1594370478051!5m2!1sen!2skw" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
    attractions: [
   {

  name: "Victoria Peak",
  image: "https://lh4.googleusercontent.com/proxy/P7ke6lZRrDy1aH3npLHoYhZ-jXe1TH2ycNrT4sumYQY_oMp9ju4NCati59m_h26ualt400gMeaKZlnKK5bms3V3DtmfKZEbe8U-5FOEl7XWD9cMUVYURpY1dEAn1QxvLNVdcsPhDCYZI5CXNN0L2b35247oXXE2t-OoaOyCXDESG=w296-h202-n-k-no",
  description: "Victoria Peak is a hill on the western half of Hong Kong Island. It is also known as Mount Austin, and locally as The Peak. With an elevation of 552 m, it is the highest hill on Hong Kong island, ranked 31 in terms of elevation in the Hong Kong Special Administrative Region. The summit is occupied by a radio telecommunications facility and is closed to the public. However, the surrounding area of public parks and high-value residential land is the area that is normally meant by the name The Peak. It is a major tourist attraction that offers views of Central, Victoria Harbour, Lamma Island, and the surrounding islands.",
  target: "Tourists"},
  {

  name: "Hong Kong Disneyland",
  image: "https://lh4.googleusercontent.com/proxy/zA6VwNBJLmuSRNd9E-OLpuNFnZ4trztV2KTfWL_c6h7oXJAWDKJ79iSQGgj4A9gg727ZBfjpKAbMbHV1HEjqQIPtUBdexfSP7gwM9V8gTBCidgXmpnrOKywR1kWdWp4G2qkOK1ugccyqmU4Q3YhUhHAPH9H0KWXTYilSnkRia7M2=w296-h202-n-k-no",
  description: "Hong Kong Disneyland is a theme park located on reclaimed land in Penny's Bay, Lantau Island. It is located inside the Hong Kong Disneyland Resort and it is owned and managed by Hong Kong International Theme Parks. It is the largest theme park in Hong Kong, followed by Ocean Park Hong Kong. Hong Kong Disneyland was opened to visitors on Monday, 12 September 2005 at 13:00 HKT. Disney attempted to avoid problems of cultural backlash by incorporating Chinese culture, customs and traditions when designing and building the resort, including adherence to the rules of feng shui. Notably, a bend was put in a walkway near the Hong Kong Disneyland Resort entrance so good qi energy would not flow into the South China Sea.",
  target: "Families"},
  {

  name: "Victoria Harbour",
  image: "https://lh6.googleusercontent.com/proxy/3a71-haz65-0ntrN5vOoExwiY4l1OEHn_gweAeQ162skL8SIr-kEB2Lw5TTuylOtl4-kqwu29-jeJ5_V2YcWfYkVKfrijSc7XbFY_VkwKijShX2PNC5t4ehpYi6wglcDlBvmDO7Afdem1BQL_UUcYwf_KMjYTxX5dph7JcRZo7Iq=w296-h202-n-k-no",
  description: "Victoria Harbour is a natural landform harbour separating Hong Kong Island in the south from the Kowloon Peninsula to the north. The harbour's deep, sheltered waters and strategic location on the South China Sea were instrumental in Hong Kong's establishment as a British colony and its subsequent development as a trading centre. Throughout its history, the harbour has seen numerous reclamation projects undertaken on both shores, many of which have caused controversy in recent years. Environmental concerns have been expressed about the effects of these expansions, in terms of water quality and loss of natural habitat. It has also been proposed that benefits of land reclamation may be less than the effects of decreased harbour width, affecting the number of vessels passing through the harbour. Nonetheless Victoria Harbour still retains its founding role as a port for thousands of international vessels each year. The harbour is a major tourist attraction of Hong Kong. Lying in the middle of the territory's dense urban region, the harbour is the site of annual fireworks displays and its promenades are used as gathering places for tourists and residents.",
  target: "Tourists",}]
  },
  
  {
  id: 6,
  name: "Shanghai",
  nameCountry: "Shanghai, China",
  description: "Shanghai, on China’s central coast, is the country's biggest city and a global financial hub. Its heart is the Bund, a famed waterfront promenade lined with colonial-era buildings. Across the Huangpu River rises the Pudong district’s futuristic skyline, including 632m Shanghai Tower and the Oriental Pearl TV Tower, with distinctive pink spheres. Sprawling Yu Garden has traditional pavilions, towers and ponds.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Shanghai_skyline_from_the_bund.jpg/1024px-Shanghai_skyline_from_the_bund.jpg",
  climate: "Shanghai has a humid subtropical climate with four distinct seasons. Winters are cold and temperatures sometimes drop below zero.",
  population: "24.28 million (2019)",
  timeZone: "CST",
  recommendedSentence: "If you like unique big cities, check these out:",
  recommendedCities: [5, 7, 2],
  googleMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d873449.7819148405!2d120.91629749245475!3d31.22313380601164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b27040b1f53c33%3A0x295129423c364a1!2sShanghai%2C%20China!5e0!3m2!1sen!2skw!4v1594371203735!5m2!1sen!2skw" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
   attractions: [
   {

  name: "The Bund",
  image: "https://lh5.googleusercontent.com/proxy/T12Dq2I8HoXiYutIY7Y0viMVK62g-O2z5kjLF1940i9-YzApAbkQBtiDjJjyekBWLPWnG3WP88C-XGLDFGA-naEx7R0-EPQP02IYx-Kl3up0qxVJ0ZUWUK9mAEzpTjNw74vHdaF6liEsucAJW6qDLF-D0xOwfsMniXA9igGGzJHG=w296-h202-n-k-no",
  description: "The Bund or Waitan is a waterfront area in central Shanghai. The area centers on a section of Zhongshan Road within the former Shanghai International Settlement, which runs along the western bank of the Huangpu River in the eastern part of Huangpu District. The area along the river faces the modern skyscrapers of Lujiazui in the Pudong District. The Bund usually refers to the buildings and wharves on this section of the road, as well as some adjacent areas. From the 1860s to the 1930s, it was the rich and powerful center of the foreign establishment in Shanghai, operating as a legally protected treaty port.",
  target: "Tourists"},
  {
 
  name: "Yu Garden",
  image: "https://lh5.googleusercontent.com/proxy/0lJHKN9Dl6sLUS7wvR6OgXXYzxMBZ6Iiq6rsuNF8aySZzcBGlhN8BcWi4TdyAo_YAJSxKLaTd0CcVp_JmS5KnVPiS4RItTNsdqupmo5iRq5ljgE2uORnhbHx93zIV06cpxcyEa6KDCCldqEElTxzcvSdjm1RnXUdn9sp7-ND7F1i=w296-h202-n-k-no",
  description: "Yu Garden or Yuyuan Garden is an extensive Chinese garden located beside the City God Temple in the northeast of the Old City of Shanghai at Huangpu Qu, Shanghai Shi. It abuts the Yuyuan Tourist Mart, the Huxinting Teahouse and the Yu Garden Bazaar. This garden is accessible from the Shanghai Metro's Line 10 Yuyuan Garden Station. A centerpiece is the Exquisite Jade Rock a porous 3.3-m, 5-ton boulder. Rumours about its origin include the story that it was meant for the Huizong Emperor at the imperial palace in Beijing, but was salvaged from the Huangpu River after the boat carrying it had sunk.",
  target: "Tourists"},
  {

  name: "Oriental Pearl TV Tower",
  image: "https://lh6.googleusercontent.com/proxy/i6Iqun0OfhcT1zK_II3p62UHXpSjdrYJJRCYvyWoFtKgozlcZuPW3c7d3Qx5DQmhYBVmw8m-YYugj1w9INQCyNuW2Hwoie1XLbpd0HiVoIdm75H0MA24yd-2RDXaD6F3W_9J7ZFun9bAqo_r2OQ00ZvCJlrzR_gLsvvMCaJEx1-R=w296-h202-n-k-no",
  description: "The Oriental Pearl Radio & Television Tower is a TV tower in Shanghai. Its location at the tip of Lujiazui in the Pudong New Area by the side of Huangpu River, opposite The Bund, makes it a distinct landmark in the area. Its principal designers were Jiang Huan Chen, Lin Benlin, and Zhang Xiulin. Construction began in 1991, and the tower was completed in 1995. At 468 m high, it was the tallest structure in China from 1994–2007, when it was surpassed by the Shanghai World Financial Center. It is classified as an AAAAA scenic area by the China National Tourism Administration. The tower is brightly lit in different LED sequences at night. On 7 July 2007, Oriental Pearl Tower was host to the Chinese Live Earth concert. The tower features 11 spheres, big and small. The two largest spheres, along the length of the tower, have diameters of 50 m for the lower and 45 m for the upper. They are linked by three columns, each 9 m in diameter. The highest sphere is 14 m in diameter. The entire tower is supported by three enormous columns that start underground.",
  target: "Tourists"}]
  },
  
  {
  id: 7,
  name: "Seoul",
  nameCountry: "Seoul, South Korea",
  description: "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace, which once had more than 7,000 rooms; and Jogyesa Temple, site of ancient locust and pine trees.",
  image: "https://www.ef.com/blog/wp-content/uploads/2017/09/Visit_Seoul_web.jpg",
  climate: "The climate of Seoul features a humid continental climate with dry winter, called \"Dwa\" in the Köppen climate classification.",
  population: "9.776 million (2017)",
  timeZone: "KST",
  recommendedSentence: "If you like unique big cities, check these out:",
  recommendedCities: [5, 6, 2],
  googleMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404811.2671992865!2d126.70936381706494!3d37.56476893071881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca28b61c565cd%3A0x858aedb4e4ea83eb!2sSeoul%2C%20South%20Korea!5e0!3m2!1sen!2skw!4v1594371554505!5m2!1sen!2skw" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
    attractions: [
   {

  name: "Gyeongbokgung Palace",
  image: "https://lh6.googleusercontent.com/proxy/tObwjonv-zOZBbP4XSjXGcVlvyeGIOji4pev_3oJCt1eO2e1bcRXWYlFw9jQkshebsW0YDSRX-49TnIsbPzggZyBVwFGPZ2M2VXbQ7cZ5FDm4zuMIUvrsYu_jBWhjiPU4xTHRZOyEVILQUAkGmJB8kfbaB__6w_yce8gaH-FOlow=w296-h202-n-k-no",
  description: "Gyeongbokgung, also known as Gyeongbokgung Palace or Gyeongbok Palace, was the main royal palace of the Joseon dynasty. Built in 1395, it is located in northern Seoul, South Korea. The largest of the Five Grand Palaces built by the Joseon dynasty, Gyeongbokgung served as the home of Kings of the Joseon dynasty, the Kings' households, as well as the government of Joseon. Gyeongbokgung continued to serve as the main palace of the Joseon dynasty until the premises were destroyed by fire during the Imjin War and abandoned for two centuries. However, in the 19th century, all of the palace's 7,700 rooms were later restored under the leadership of Prince Regent Heungseon during the reign of King Gojong. Some 500 buildings were restored on a site of over 40 hectares. The architectural principles of ancient Korea were incorporated into the tradition and appearance of the Joseon royal court. In the early 20th century, much of the palace was systematically destroyed by Imperial Japan. Since then, the walled palace complex is gradually being restored to its original form. Today, the palace is arguably regarded as being the most beautiful and grandest of all five palaces.",
  target: "Tourists"},
  {

  name: "N Seoul Tower",
  image: "https://lh4.googleusercontent.com/proxy/gezsr1TJSm2R7uTb37l1CGrSjMoOWVaZERneDo-aCMR6pNYwOqm1sZU35_2-qxRUHbkLbMG2pt8XPiOB1RLBXJLOen2ZLbvWyra52dXJd-DgIPyUcitonOoiQUnvkH_1O4ijGzw7-_o6yb16tgTrg-tz90l9ntQngJot0ZUyQUrr=w296-h202-n-k-no",
  description: "The N Seoul Tower, officially the YTN Seoul Tower and commonly known as the Namsan Tower or Seoul Tower, is a communication and observation tower located on Namsan Mountain in central Seoul, South Korea. At 236 metres, it marks the second highest point in Seoul. Built in 1971, the N Seoul Tower is South Korea's first general radio wave tower, providing TV and radio broadcasting in Seoul. Currently, the tower broadcasts signals for Korean media outlets, such as KBS, MBC and SBS.",
  target: "Tourists"},
  {
  
  name: "Myeong-dong",
  image: "https://lh5.googleusercontent.com/proxy/kxGSOU8bNzWgdqHzPng3JQ5vuOiS3SpZymCJQPaF0bZsmF3GmYfAl-rE2RchLpw_TAypsEH43T-MqAISthNUgvwVlTHdoRGs8Abj499X4z_aQmAMqy8YLPHT-_JRuwIE2E6ZhWgms847qqp3Z0dKgQpaEgTymgFVG1DXeXblRS37=w296-h202-n-k-no",
  description: "Myeongdong is a dong in Jung-gu, Seoul, South Korea between Chungmu-ro, Eulji-ro, and Namdaemun-ro. It covers 0.99km² with a population of 3,409 and is mostly a commercial area, being one of Seoul's main shopping, parade route and tourism districts. In 2011, 2012 and 2013, Myeong-dong was listed as the ninth most expensive shopping street in the world. The area is known for its two historically significant sites, namely the Myeongdong Cathedral and the Myeongdong Nanta Theatre.",
  target: "Tourists"}]
  },
  
  {
  id: 8,
  name: "Kuwait City",
  nameCountry: "Kuwait City, Kuwait",
  description: "Kuwait City is the capital of the gulf nation of Kuwait. At its heart sits the Grand Mosque, known for its vast interior and chandeliered dome. On the waterfront, the late-19th-century Seif Palace features a neo-Arabic watchtower and manicured gardens. Nearby, the Kuwait National Museum explores history and features science shows at its planetarium. Souk Al-Mubarakiya is a vast food and handicraft market.",
  image: "https://www.came.com/global/sites/default/files/styles/image_1600x900/public/2019-06/Banner%20Kuwait%20City_0.jpg",
  climate: "Desert climate. During the year, there is virtually no rainfall.",
  population: "4.1 million (2016)",
  timeZone: "AST",
  recommendedSentence: "If you like Kuwait City, you may also like:",
  recommendedCities: [3, 1, 4],
  googleMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55628.845954578464!2d47.94684722837268!3d29.376060625233347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c83ce455983%3A0xc3ebaef5af09b90e!2sKuwait%20City!5e0!3m2!1sen!2skw!4v1594372279423!5m2!1sen!2skw" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
    attractions: [
   {

  name: "Kuwait Towers",
  image: "https://t3.gstatic.com/images?q=tbn:ANd9GcRSYlwKmRjQ_3vQWe2uvIlM72o9qgVm9nNOClcZ_kUm8arcIzPwMeHtHIwvwSBX1T5KiJIDs7RT-VNylg",
  description: "The Kuwait Towers are a group of three slender towers in Kuwait City, standing on a promontory into the Persian Gulf. They were the sixth, and last, group in the larger Kuwait Water Towers system of 34 towers, and were built in a style considerably different from the other five groups. The Kuwait Towers were officially inaugurated in March 1979 and are regarded as a landmark and symbol of modern Kuwait. The towers were closed for maintenance from March 2012 to 8 March 2016, with a massive fireworks festival commemorating the re-opening.",
  target: "Tourists"},
  {

  name: "Al Hamra Tower" ,
  image: "https://lh5.googleusercontent.com/p/AF1QipN-jJiSgNFr9byfTQPqzDd6J1X2lbLudZIn2ptX=w296-h202-n-k-no",
  description: "The Al Hamra Tower is a skyscraper in Kuwait City, Kuwait. It is the tallest building in Kuwait.",
  target: "Tourists"},
  {
 
  name: "Al Shaheed Park",
  image: "https://t0.gstatic.com/images?q=tbn:ANd9GcSBECV4v8m2vfNhB8DMQypac4-pp0EjzXqxR8eOj4877LvL_j6P1pB6r2S1vF37_vIibHh4yc56YV3yvg",
  description: "Al Shaheed Park is the largest urban park in Kuwait.",
  target: "Tourists"}]
  },
  ]
  export default cities;
  