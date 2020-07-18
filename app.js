//Chapter 38 to 42
// Task1:
// function power(base,power)
// {
//  return Math.pow(base,power)   
// }
// var a =+prompt("Enter base")
// var b =+prompt("Enter power")
// var ans = power(a,b)
// alert(a+ " raised to power "+b+" is :"+ans)

// Task2 :
// var year=+prompt("enter any year")
// if(year%4 ==0)
// {
// alert(year+" is a leap year")
// }
// else
// {
// alert(year+" is not a leap year")
// }

// Task 3:

// function areaOfTriangle(a,b,c)
// {
//  return (valOfs(a,b,c) *(valOfs(a,b,c)-a)*(valOfs(a,b,c)-b)*(valOfs(a,b,c)-c) )
// }

// function valOfs(a,b,c)
// {
// return (a+b+c)/2    
// }

// var a =+prompt("Enter lenght of 1st side")
// var b =+prompt("Enter lenght of 2nd side")
// var c =+prompt("Enter lenght of 3rd side")
// var area = areaOfTriangle(a,b,c)
// var area = areaOfTriangle(a,b,c)
// alert("area of triangle with side "+a+","+b+","+c+" is :"+area)

// Task4:
// function marksSheet(m1,m2,m3)
// {
//     var percent=percentage(m1,m2,m3)
//     var ave = average(m1,m2,m3)

// alert("average mark is "+ave+" and percentage is :"+percent)    
// }

// function percentage(m1,m2,m3){
//     return ((m1+m2+m3)*100)/300;   
// }

// function average(m1,m2,m3)
// {
//  return (m1+m2+m3)/3   
// }
// var m1 =+prompt("Enter marks of 1st subject out of 100")
// var m2 =+prompt("Enter marks of 2nd subject out of 100")
// var m3 =+prompt("Enter marks of 3rd subject out of 100")

// marksSheet(m1,m2,m3)

// Task 5:
// var sentance="big brown fox jumbs over the lazy dog"
// function indexOfelement(input)
// {
//     for (let i = 0; i < sentance.length; i++) {
//         if(sentance[i]===input)
//         {
//         return i    
//         }

//     }

// return -1
// }
// alert(sentance)
// var input =prompt("enter a word to find its index")
// alert("element is at index : "+indexOfelement(input))

// Task 6:
// var sentance=prompt("enter a sentance")
// function removeVowel(sentance)
// {
// for (let i = 0; i < sentance.length; i++) {
//     sentance = sentance.replace("a","")  
//     sentance = sentance.replace("e","")  
//     sentance = sentance.replace("i","")  
//     sentance = sentance.replace("o","")  
//     sentance = sentance.replace("u","")  
// }
// return sentance
// }


// alert(removeVowel())

// Task 7:
// var sentance = prompt("enter a sentance").toLowerCase()
// var count=0
// function vowelOccurence(sentance,count) {
//     for (let i = 0; i < sentance.length; i++) {
//         if (sentance[i] == "a" || sentance[i] == "e" || sentance[i] == "i" || sentance[i]== "o" || sentance[i] == "u") {
//             if (sentance[i+1] == "a" || sentance[i+1] == "e" || sentance[i+1] == "i" || sentance[i+1] == "o" || sentance[i+1] == "u") {
//               count++  
//             }
//         }

//     }
//     return count
// }

// alert("two or more vowel succession in \n "+sentance+"\n is : "+vowelOccurence(sentance,count))

// Task 8:
// var distance =+prompt("enter distance between cities in km")

// function distanceInMeter(distance)
// {
//  return distance*1000   
// }

// function distanceInFeet(distance)
// {
//  return distance * 3280.84   
// }

// function distanceInInches(distance)
// {
//  return distance * 39370.1   
// }

// function distanceInCentimeter(distance)
// {
//  return distance * 100   
// }

// alert("distance between two cities in km is : "+distance+"\n in feet is : "+distanceInFeet(distance)+"\n in inchs is :"+distanceInInches(distance)+"\n in meter is : "+distanceInMeter(distance)+"\n distance in centimeter is :"+distanceInCentimeter(distanceInMeter(distance)))

// Task 9:

// var employWorkHour=+prompt("enter employ work hour")

// function overTimePay(employWorkHour)
// {
// return (employWorkHour*12)*(3/4)
// }

// alert("total extra payment for employ is :"+overTimePay(employWorkHour))

// Task 10:
// var amount=+prompt("enter amount to withdraw")

// function currency(amount)
// {
// alert("withdraw amount :"+amount+"\n total 100 rs currency : "+Math.floor((amount/100))+"\n total 50 rs currency : "+Math.floor(((amount%100)/50))+"\n total 10 rs currency : "+Math.floor((((amount%100)%50)/10))+"\n total 1 rs currency : "+(((amount%100)%50)%10))   
// }

// currency(amount)


// Chapter 43 to 48
// Task 1:
// function Clicked()
// {
// alert("Clicked")    
// }

// Task 2:
// function purchase()
// {
// alert("mobile purchased")    
// }

// Task no 3:
// function Delete(id)
// {
//     var i = id.parentNode.parentNode.rowIndex;
//     document.getElementById('practice').deleteRow(i)
// }

// Task 4:
// function changePic(id,image)
// {
// document.getElementById(id).src=image
// } 

// Task 5

// var count=0
// function add(){
//     count++
//     document.getElementById('counter').innerHTML=count
// }
// function subtract(){
//     count--
//     document.getElementById('counter').innerHTML=count
// }
// function reset(){
//     count=0
//     document.getElementById('counter').innerHTML=count
// }


// Chapter 49 to 52

// Task 1:
// function add() {
//     var table = document.getElementById('tables')
//     var firstName = document.getElementById('firstname').value
//     var lastName = document.getElementById('lastname').value
//     var email = document.getElementById('email').value
//     var password = document.getElementById('password').value
//     var row = table.insertRow();
//     var cell1 = row.insertCell()
//     var cell2 = row.insertCell()
//     var cell3 = row.insertCell()
//     var cell4 = row.insertCell()
//     cell1.innerHTML = firstName
//     cell2.innerHTML = lastName
//     cell3.innerHTML = email
//     cell4.innerHTML = password
// }


// Task no 2:
// function readMore(){
//     var message = "mobile present Qmobile Rocket lite with 4Gb Rams and 32Gb Rom with quadcore processor gorilla glass 13pixel back camera with 5 pixels front"
//     var pera = document.getElementById('pera')
//    pera.innerHTML=message 
// }

// Task no 3:
// var count=0
// function reset()
// {
//     document.getElementById('name').value=""
//     document.getElementById('classes').value=""
// }

// function add(practice)
// {
//     count++
// var button = document.createElement("button")
//  var table=document.getElementById(practice)
//  var row = table.insertRow() 
//  var cell1 = row.insertCell()
//  var cell2 = row.insertCell()
//  var cell3 = row.insertCell()
//  var cell4 = row.insertCell()
//  button.innerHTML="Delete"
 
//  button.setAttribute("class","btn btn-primary")
//     cell1.setAttribute("scoped","row")
//     cell1.innerHTML = count;
//     cell2.innerHTML = document.getElementById('name').value
//     cell3.innerHTML = document.getElementById('classes').value
//     cell4.appendChild(button)

//     reset()
// }

// Chapter 58 to 67
// Task 1
// part 1 and 2
// var element = document.getElementById('main-content')
// console.log(element.childNodes)

// Part3
// var render = document.getElementsByClassName('render')
// console.log(render)

// Part 4
// var firstName= document.getElementById('first-name')
// firstName.value = "ali"

// Part 5
// document.getElementById('last-name').value="ashar"
// document.getElementById('email').value="asharali315@gmail.com"

// Task 2
// Part1:
// console.log(document.getElementById('form-content').nodeType)
// part2
// console.log(document.getElementById('last-name').nodeType)
// console.log(document.getElementById('last-name').firstChild.nodeType)

// part 3
// var element = document.getElementById('last-name')
// var p =document.createElement('p')
// element.appendChild(p)
// console.log(element.firstChild)
// console.log(element.firstChild.nodeType)

// part4
// var element = document.getElementById('form-content')
// console.log(element.firstChild)
// console.log(element.lastChild)

// Part 5
// var element = document.getElementById('last-name')
// console.log(element.previousSibling)
// console.log(element.nextSibling)

// part 6

// var element = document.getElementById('email')
// console.log(element.nodeType)
// console.log(element.parentNode)