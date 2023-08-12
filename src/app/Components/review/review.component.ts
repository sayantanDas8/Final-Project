import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  first_eight: any = [
    {
      name: 'Harsh Mahta',
      rating: 5,
      comment: 'Amezing website! it is very easy to book a car with desired colors.'
    },
    {
      name: 'Naimita Jaswal',
      rating: 3.5,
      comment: 'It is a good experience with Gearheads but the products should have more colours available.'
    },
    {
      name: 'Kingshuk Mukherjee',
      rating: 4.2,
      comment: 'I recently bought a new car from this website, it has a great servicing and delivered at perfect time.'
    },
    {
      name: 'Ishan Kumar',
      rating: 4.5,
      comment: 'Such a wonderful website, bokking vehicle with your desired colour thankyou!.'
    },
    {
      name: 'Riddhi Achariya',
      rating: 4.7,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    },
    {
      name: 'Karan Patel',
      rating: 4,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    },
    {
      name: 'Rajat Dubey',
      rating: 3.5,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    },
    {
      name: 'Raj Veer Shaw',
      rating: 3.9,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    },
  ]

  others: any = [
    {
      name: 'Ujjwal Biswas',
      rating: 4.5,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    },
    {
      name: 'Agniva Kumar Ghosh',
      rating: 4.8,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    },
    {
      name: 'Ipshita Karmakar',
      rating: 4.3,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    },
    {
      name: 'Ashutosh Barman',
      rating: 5,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    },
    {
      name: 'Rohit Das',
      rating: 4.5,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    },
    {
      name: 'Pankaj Saha',
      rating: 3.9,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    },
    {
      name: 'Rishav Dey',
      rating: 4,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    },
    {
      name: 'Mridul Singha',
      rating: 3.5,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    },
    {
      name: 'Arjun Shukla',
      rating: 4.5,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    },
    {
      name: 'Nidhi Sharma',
      rating: 4.2,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    },
    {
      name: 'Amarjeet Singh',
      rating: 4.8,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    },
    {
      name: 'Ushashi Dasgupta',
      rating: 4.2,
      comment: 'It is a good experience with Gearheads but if the the products have more colours available, then that will be ok.'
    }
    
  ]
  view = 'View More'
  
  
  onView(){
    this.view = (this.view === 'View More')? 'View Less' : 'View More';
  }
}
