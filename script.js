// If the code is ran as is, you will see in the terminal that they all return the difference in the days


const getDays = (p1,p2) => {
    let dayDiff = p2-p1;
    // I knew I would end up using some type of arithmetic when I saw new Date returned as a huge Number, which is why I'm multiplying the difference of the new dates 
    mainDayDiff = dayDiff / (1000 * 60 * 60 * 24)
    return console.log(mainDayDiff)
}



// These are the examples I used for calling my function, which are the the same examples used in the original challenge

getDays(

    new Date("June 14, 2019"),
  
    new Date("June 20, 2019")
  
  )

  getDays(

    new Date("December 29, 2018"),
  
    new Date("January 1, 2019")
  
  )

  getDays(

    new Date("July 20, 2019"),
  
    new Date("July 30, 2019")
  
  )
