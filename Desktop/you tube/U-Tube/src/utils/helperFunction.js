export function convertToAgo(dateTimeStr) {
  // Get the current date and time
  var currentDatetime = new Date();

  // Convert the input datetime string to a Date object
  var inputDatetime = new Date(dateTimeStr);

  // Calculate the difference in milliseconds between the current datetime and input datetime
  var diffInMs = currentDatetime - inputDatetime;

  // Convert the difference to the corresponding "ago" format
  var diffInSeconds = Math.floor(diffInMs / 1000);
  var diffInMinutes = Math.floor(diffInSeconds / 60);
  var diffInHours = Math.floor(diffInMinutes / 60);
  var diffInDays = Math.floor(diffInHours / 24);
  var diffInMonths = Math.floor(diffInDays / 30);
  var diffInYears = Math.floor(diffInDays / 365);

  if (diffInYears > 0) {
    return diffInYears + ' year(s) ago';
  } else if (diffInMonths > 0) {
    return diffInMonths + ' month(s) ago';
  } else if (diffInDays > 0) {
    return diffInDays + ' day(s) ago';
  } else if (diffInHours > 0) {
    return diffInHours + ' hour(s) ago';
  } else if (diffInMinutes > 0) {
    return diffInMinutes + ' minute(s) ago';
  } else {
    return diffInSeconds + ' second(s) ago';
  }
}

//convert large numbers to K M or B
export const formater = (string) => {
  return Intl.NumberFormat('en-US', {notation: "compact",maximumFractionDigits: 1 }).format(string)
}


var nameList = [
  'Time','Past','Future','Dev',
  'Fly','Flying','Soar','Soaring','Power','Falling',
  'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
  'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
  'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
  'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
  'Mine','Your','Worst','Enemy','Hostile','Force','Video',
  'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
  'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
  'Script','Writer','Near','Close','Open','Cube','Circle',
  'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
  'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
  'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
  'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
  'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
  'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
  'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
  'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
  'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
  'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
  'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

//generate random names
export function RandomName() {
 var finalName = nameList[Math.floor( Math.random() * nameList.length )];
 return  finalName;
}

// generate random string
 export function RandomMessage(length=10) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
