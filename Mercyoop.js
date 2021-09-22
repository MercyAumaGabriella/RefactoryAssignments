//                                       ** PERSONAL BLOG. **
/* This personal blog captures someone's profile and their best interests in terms of Favourite_Restaurant, Best_Musician, Best_Actor, Fav_Dish, Greatest_Hobby and Career_Path. */

/* I am going to create seven classes for the different interests. These are: 

     1. Human_Profile -- to describe briefly the person in question

     2. Favourite_Restaurant -- to describe the person's best restaurant and their best dish

     3. Best_Musician -- to describe the person's best musician and best song in detail

     4. Best_Actor --  to describe the person's best actor in detail

     5. Fav_Dish -- to describe the perosn's best dish in detail

     6. Greatest_Hobby -- to describe the person's greatest hobby in detail

     7. Career_Path -- to describe the person's career path of interest.
*/

//HUMAN_PROFILE CLASS
function Human_Profile (title, firstName, surName, bestColor, age, gender, occupation, maritalStatus) {
    this.title = title;
    this.firstName = firstName;
    this.surName = surName;
    this.bestColor = bestColor;
    this.age = age;
    this.gender = gender;
    this.occupation = occupation;
    this.maritalStatus = maritalStatus;

    //The personality method describes the charater of the person being talked about. it uses concatenation and other class properties to generate a full sentence.
    this.personality = (personalityType) => {
        return this.title + ' ' + this.firstName + ' ' + this.surName + ' has a '+ personalityType+ ' personality.';
    }

    //The date_Of_Bith method takes in an argument of currentYear and subtracts the age of the person from it in order to generate the year of birth.
    this.year_Of_Birth = function(currentYear){
        let dateOfBirth = currentYear - this.age;
        return this.firstName+ '\'s year of birth is: ' + dateOfBirth;
    }
}
console.log('HUMAN PROFILES BELOW:','\n');

//Human_Profile Class instances

//1. Human_Profile1 - Mercy's Profile
let Human_Profile1 = new Human_Profile('Ms','Mercy','Auma','Orange',23,'Female','Student','single');
console.log(Human_Profile1.personality('Jolly'));
console.log(Human_Profile1.year_Of_Birth(2021));

//2. Human_Profile2 - Martin's Profile
let Human_Profile2 = new Human_Profile('Mr','Martin','Ogwang','Blue',56,'Male','Doctor','Married');
console.log(Human_Profile2.personality('principled'));
console.log(Human_Profile2.year_Of_Birth(2021));

//3. Human_Profile3 - Simone's Profile
let Human_Profile3 = new Human_Profile('Mrs','Simone','Byles','Black',24,'Female','Gymnist','unkown');
console.log(Human_Profile3.personality('Energetic'));
console.log(Human_Profile3.year_Of_Birth(2021));

console.log('\n');

//FAVOURITE_RESTAURANT CLASS
const Favourite_Restaurant = function (restaurantName, location, topDish, topDish_Price, restaurantType, restaurantOwner, deliveryStatus){
    this.restaurantName = restaurantName;
    this.location = location;
    this.topDish = topDish;
    this.topDish_Price = topDish_Price;
    this.restaurantType = restaurantType;
    this.restaurantOwner = restaurantOwner;
    this.deliveryStatus = deliveryStatus;

    //The Rating method uses concatenation and class properties to come up with a full sentence.
    this.Rating = function(percent){
        return this.restaurantName + ' has been rated '+percent+' by you.'
    }

    //The moneyGotFromFavDish method takes an argument of quantitySold and multiplies it with topDish_Price to get the revenue generated from the selling of that dish per day.
    this.moneyGotFromFavDish = (quantitySold) =>{
        let revenue  = topDish_Price*quantitySold;
        return this.restaurantName + ' earns ' +revenue+' from '+ topDish; 
    }
}
console.log('FAVOURITE RESTAURANTS BELOW:','\n');

//Favourite Restaurant Class instances
//1. Favourite_Restaurant1 - Cafe Java (Mercy's favourite Restaurant)
let Favourite_Restaurant1 = new Favourite_Restaurant('Cafe Javas','Acacia','Mexican Pizza',54000,'Junk','Mr. Denis','available');
console.log(Favourite_Restaurant1.Rating('97%'));
console.log(Favourite_Restaurant1.moneyGotFromFavDish(20));

//2. Favourite_Restaurant2 - KFC's Profile (Martin's favourite Restaurant)
let Favourite_Restaurant2 = new Favourite_Restaurant('KFC','Village Mall','Streetwise 2',50000,'Junk','Mr. Kentucky','available');
console.log(Favourite_Restaurant2.Rating('95%'));
console.log(Favourite_Restaurant2.moneyGotFromFavDish(450));

//3. Favourite_Restaurant3 -Mama Fahad's Profile (Simone's favourite Restaurant)
let Favourite_Restaurant3 = new Favourite_Restaurant('Mama Fahad','Downtown Kampala','Chips and Beef Stew',7000,'Junk','Mama Fahad','unavailable');
console.log(Favourite_Restaurant3.Rating('34%'));
console.log(Favourite_Restaurant3.moneyGotFromFavDish(78));

console.log('\n');

//BEST_MUSICIAN CLASS
function Best_Musician (MusicianName, maritalStatus, gender, musicGenre, favSong, favAlbum, favConcert,  ranking){
    this.MusicianName = MusicianName;
    this.maritalStatus = maritalStatus;
    this.gender = gender;
    this.musicGenre = musicGenre;
    this.favSong = favSong;
    this.favAlbum = favAlbum;
    this.favConcert = favConcert;
    this.ranking = ranking;

    //This method adds a song to an array list before outputing it in a statement form
    this.topSongs = function(songOfChoice){
        let songList = [];
        songList[0] = songOfChoice;
        return 'My favourite song from '+MusicianName+' is '+songList[0];
    }

    //This method calculates the money got from an album by multiplying albumPrice which is a constant with numberOfCopiesSold
    this.revenueFromAlbum = (numberOfCopiesSold) => {
        const albumPrice = 10000;
        let revenue = numberOfCopiesSold*albumPrice;
        return 'The money generated from '+this.favAlbum+' is '+revenue;
    }
}
console.log('BEST MUSICIANS BELOW:','\n');

//Best_Musician class instances
//1. Best_Musician1 - Willow Smith's Profile (Mercy's Best Muscian)
let Best_Musician1 = new Best_Musician('Willow Smith', 'Single','Female','Rock','Transparent Soul','Peace','Willow+Peace', '87%');
console.log(Best_Musician1.topSongs('Transparent Soul'));
console.log(Best_Musician1.revenueFromAlbum(200));

//2. Best_Musician2 - Faouzia's Profile (Martin's Best Muscian)
let Best_Musician2 = new Best_Musician('Faouzia', 'Dating','Female','Pop','This Mountain','Stripped','Stripped Concert', '95%');
console.log(Best_Musician2.topSongs('Born Without A Heart'));
console.log(Best_Musician2.revenueFromAlbum(458));

//3. Best_Musician3 - Charlie's Puth's Profile (Simone's Best Muscian)
let Best_Musician3 = new Best_Musician('Charlie Puth', 'Dating','Male','Pop','Attention','Voicenotes','Voicenotes Concert', '90%');
console.log(Best_Musician3.topSongs('We don\'t talk anymore'));
console.log(Best_Musician3.revenueFromAlbum(890));

console.log('\n');

//BEST_ACTOR CLASS
const Best_Actor = function (actorName, movieType, bestMovie, bestSeries, ActingStyle, netWorth, yearsOfActing) {
    this.actorName = actorName;
    this.movieType = movieType;
    this.bestMovie = bestMovie;
    this.bestSeries = bestSeries;
    this.ActingStyle = ActingStyle;
    this.netWorth = netWorth;
    this.yearsOfActing = yearsOfActing;

    //This method takes in three arguments which are then placed in an array before outputing them using a forEach loop.
    this.Languages = (language1, language2, language3) => {
        let languageList = [];
        languageList[0] = language1;
        languageList[1] = language2;
        languageList[2] = language3;

        function print(i){
            console.log('This person can speak the '+i+' language');
        }

        languageList.forEach(print);
    }

    //this method checks the if the argument compares with any of the consitions set. If so, the statement within the conditions brackets are executed.
    this.relationshipStatus = (status) =>{
        if (status = 'married'){
            console.log(actorName + '\'s relationship status is: '+status);
        }
        else if (status = 'dating'){
            console.log(actorName + '\'s relationship status is: '+status);
        }
        else if(status = 'single'){
            console.log(actorName + '\'s relationship status is: '+status);
        }
        else
            console.log(actorName + '\'s relationship status is: '+status);
        
    }
}
console.log('BEST ACTORS BELOW:','\n');

//Best_Actor class instances.
//1. Best_Actor1 - Will Smith's Profile (Mercy's Best Actor)
let Best_Actor1 = new Best_Actor('Will Smith','Action','Suicide Squad','Fresh Prince Of Bel-Air','Comedy-like',350000000, 56);
console.log(Best_Actor1.Languages('English', 'Spanish', 'French'));
console.log(Best_Actor1.relationshipStatus('married'));

//1. Best_Actor2 - Anne Hathaway's Profile (Martin's Best Actor)
let Best_Actor2 = new Best_Actor('Anne Hathaway','Romantic Comedy','Princess Diaries','unkown','Girly',60000000, 38);
console.log(Best_Actor2.Languages('English', 'Turkish', 'Dutch'));
console.log(Best_Actor2.relationshipStatus('dating'));

//1. Best_Actor3 - Ken Jeong's Profile (Simone's Best Actor)
let Best_Actor3 = new Best_Actor('Ken Jeong','Comedy','Carzy Rich Asians','Dr. Ken','Crazy Comedy',14000000, 52);
console.log(Best_Actor3.Languages('Korean', 'English', 'Chinese'));
console.log(Best_Actor3.relationshipStatus('married'));

console.log('\n');

//FAV_DISH CLASS
function Fav_Dish (foodName, topIngredient, carbsPercentage, proteinPercentage, microPercentage, genderPopularity, foodCategory) {
    this.foodName = foodName;
    this.topIngredient = topIngredient;
    this.carbsPercentage = carbsPercentage;
    this.proteinPercentage = proteinPercentage;
    this.microPercentage = microPercentage;
    this.genderPopularity = genderPopularity;
    this.foodCategory = foodCategory;

    //This method uses a condition technique to check for the food composition with the biggest percentage. The one with the biggest percentage is outputed usind the return statement
    this.overallPercentage = function(){
        let value;
        if (this.carbsPercentage > this.proteinPercentage){
            value = 'carbs';
        }
        else
            value = 'proteins';
        
        
        if(this.microPercentage > value){
            value = 'micros';
        }
        console.log(this.foodName + ' is rich in '+ value);
    }
    
    this.foodStatment = () => {
        return this.foodName + ' is your favorite food';
    }
}
console.log('FAVOURITE DISHES BELOW:','\n');

//Fav_Dish object instances
//1. Fav_Dish1 - Pizza (Mercy's Favourite Dish)
let Fav_Dish1 = new Fav_Dish('Pizza','Cheese',50,25,12,'Female','Junk');
console.log(Fav_Dish1.overallPercentage());
console.log(Fav_Dish1.foodStatment());

//1. Fav_Dish2 - Roasted Pork (Martin's Favourite Dish)
let Fav_Dish2 = new Fav_Dish('Roasted Pork','Pork meat',19,56,23,'Male','Local');
console.log(Fav_Dish2.overallPercentage());
console.log(Fav_Dish2.foodStatment());

//1. Fav_Dish3 - Rolex (Simone's Favourite Dish)
let Fav_Dish3 = new Fav_Dish('Rolex','Chapati',67,34,16,'Male','Local');
console.log(Fav_Dish3.overallPercentage());
console.log(Fav_Dish3.foodStatment());

console.log('\n');

//GREATEST_HOBBY CLASS
function Greatest_Hobby (hobbyName, hobbyCategory, Skill_related, yearOfInterestInHobby, yearsOfExperience, workDone, popularityPercentage ) {
    this.hobbyName = hobbyName;
    this.hobbyCategory = hobbyCategory;
    this.Skill_related = Skill_related;
    this.yearOfInterestInHobby = yearOfInterestInHobby;
    this.yearsOfExperience = yearsOfExperience;
    this.workDone = workDone;
    this.popularityPercentage = popularityPercentage;

    //This method outputs a statement describing the history of the hobby in relation to the person.
    this.hobbyHistory = function(){
        return this.hobbyName + ' under the category of '+ hobbyCategory + ' with skills search as '+Skill_related+' has a popularity percentage of '+popularityPercentage+ '%.';
    }

    //This method calculates the year of Start of the person's interest in the hobby.
    this.yearOfStart = function(thisYear){
        let Start = thisYear - yearsOfExperience;
        return 'You have been loving this hobby since '+Start;
    }

}
console.log('GREATEST HOBBIES BELOW:','\n');

//Greatest_Hobby Class instances
//1. Greatest_Hobby1 - Swimming (Mercy's greatest hobby)
let Greatest_Hobby1 = new Greatest_Hobby('Swimming','Sports','flexibility',14,13,'Swimming Galas',90);
console.log(Greatest_Hobby1.hobbyHistory());
console.log(Greatest_Hobby1.yearOfStart(2021));

//1. Greatest_Hobby2 - Script-Writing (Martin's greatest hobby)
let Greatest_Hobby2 = new Greatest_Hobby('Script-Writing','Literature','Grammar skills',12,2,'Short Films',75);
console.log(Greatest_Hobby2.hobbyHistory());
console.log(Greatest_Hobby2.yearOfStart(2021));

//1. Greatest_Hobby3 - Acting (Simone's greatest hobby)
let Greatest_Hobby3 = new Greatest_Hobby('Acting','Theatre','Emotion control',7,3,'School plays',90);
console.log(Greatest_Hobby3.hobbyHistory());
console.log(Greatest_Hobby3.yearOfStart(2021));

console.log('\n');

//CAREER_PATH CLASS
const Career_Path = function (CareerName, degreeNeeded, salaryEstimate, popularityPercentage, yearsOfStudy, yearOfStart, specificInterest) {
    this.CareerName = CareerName;
    this.degreeNeeded = degreeNeeded;
    this.salaryEstimate = salaryEstimate;
    this.popularityPercentage = popularityPercentage;
    this.yearsOfStudy = yearsOfStudy;
    this.yearOfStart = yearOfStart;
    this.specificInterest = specificInterest;

    //This method calculates the person's salary accumulated in five years of following their career path
    this.salaryInFiveYears = function(){
        let moneyPerAnnum = salaryEstimate*12;
        let moneyGot = moneyPerAnnum*5;

        return 'With ' +this.CareerName +' ,you will have accumulated money worth '+moneyGot+' in five years.';
    }

    //This method outputs the person's career story in a sentence format
    this.CareerStory = function(){
        return 'For '+this.CareerName+', one needs to have a '+this.degreeNeeded+'. This person must have started atleast '+this.yearsOfStudy+' and He/she must have a specific interest like ' +this.specificInterest;
    }

}

console.log('CAREER PATHS BELOW:','\n');

//Career_Path class instances
//1. Career_Path1 - Cyber Security (Mercy's Future Career Path)
let Career_Path1 = new Career_Path('Cyber Security','Computer Science',240000000,67,3,2020,'penetrationTesting');
console.log(Career_Path1.salaryInFiveYears());
console.log(Career_Path1.CareerStory());

//1. Career_Path2 - Data Analysis (Martin's Future Career Path)
let Career_Path2 = new Career_Path('Data Analysis','Data Science',160000000,78,3,2019,'Data Mining');
console.log(Career_Path2.salaryInFiveYears());
console.log(Career_Path2.CareerStory());

//1. Career_Path3 - Graphics Design (Simone's Future Career Path)
let Career_Path3 = new Career_Path('Graphics Design','Computer Science',6000000,86,3,2018,'Animations');
console.log(Career_Path3.salaryInFiveYears());
console.log(Career_Path3.CareerStory());