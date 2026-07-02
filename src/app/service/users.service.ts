import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Iuser, IuserResp } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersArr: Iuser[] = [
    {
      userName: "Aarav Sharma",
      userId: "USR2001",
      userRole: "admin",
      profileDescription: "Senior Full Stack Developer with expertise in Angular, Node.js, and cloud technologies.",
      profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      skills: [
        "Angular",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "AWS",
        "REST API"
      ],
      experienceYears: "8 to 10 years",
      isActive: true,
      address: {
        current: {
          city: "Mumbai",
          state: "Maharashtra",
          country: "India",
          zipcode: "400001"
        },
        permanent: {
          city: "Nashik",
          state: "Maharashtra",
          country: "India",
          zipcode: "422001"
        }
      },
      isAddressSame: false
    },
    {
      userName: "Priya Verma",
      userId: "USR2002",
      userRole: "manager",
      profileDescription: "Project Manager experienced in Agile development, team leadership, and delivery management.",
      profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      skills: [
        "Agile",
        "Scrum",
        "JIRA",
        "Leadership",
        "Planning",
        "Communication"
      ],
      experienceYears: "6 to 8 years",
      isActive: true,
      address: {
        current: {
          city: "Pune",
          state: "Maharashtra",
          country: "India",
          zipcode: "411001"
        },
        permanent: {
          city: "Pune",
          state: "Maharashtra",
          country: "India",
          zipcode: "411001"
        }
      },
      isAddressSame: true
    },
    {
      userName: "Rahul Patil",
      userId: "USR2003",
      userRole: "candidate",
      profileDescription: "Frontend Developer passionate about building responsive and user-friendly web applications.",
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      skills: [
        "Angular",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Bootstrap"
      ],
      experienceYears: "2 to 4 years",
      isActive: true,
      address: {
        current: {
          city: "Nagpur",
          state: "Maharashtra",
          country: "India",
          zipcode: "440001"
        },
        permanent: {
          city: "Amravati",
          state: "Maharashtra",
          country: "India",
          zipcode: "444601"
        }
      },
      isAddressSame: false
    },
    {
      userName: "Sneha Kulkarni",
      userId: "USR2004",
      userRole: "candidate",
      profileDescription: "UI/UX Designer with experience in Figma, Adobe XD, and responsive design systems.",
      profileImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      skills: [
        "Figma",
        "Adobe XD",
        "Wireframing",
        "Prototyping",
        "UI Design",
        "UX Research"
      ],
      experienceYears: "3 to 5 years",
      isActive: false,
      address: {
        current: {
          city: "Bengaluru",
          state: "Karnataka",
          country: "India",
          zipcode: "560001"
        },
        permanent: {
          city: "Hubli",
          state: "Karnataka",
          country: "India",
          zipcode: "580020"
        }
      },
      isAddressSame: false
    },
    {
      userName: "Vikram Singh",
      userId: "USR2005",
      userRole: "manager",
      profileDescription: "Experienced Software Engineering Manager leading cross-functional development teams.",
      profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      skills: [
        "Team Management",
        "System Design",
        "Agile",
        "DevOps",
        "Mentoring",
        "Project Planning"
      ],
      experienceYears: "10 to 12 years",
      isActive: true,
      address: {
        current: {
          city: "Hyderabad",
          state: "Telangana",
          country: "India",
          zipcode: "500001"
        },
        permanent: {
          city: "Hyderabad",
          state: "Telangana",
          country: "India",
          zipcode: "500001"
        }
      },
      isAddressSame: true
    }
  ];

  setFirstUserSub$: Subject<boolean> = new Subject<boolean>()

  constructor() { }

  fetchUsersArr(): Observable<Iuser[]> {
    return of(this.usersArr);
  }

  fetchUserById(id: string): Observable<Iuser> {
    let getUserObj = this.usersArr.find(u => u.userId === id)!
    return of(getUserObj);
  }

  addUser(user: Iuser): Observable<IuserResp<Iuser>> {
    this.usersArr.unshift(user);
    return of({
      msg: `The new user with id ${user.userId} is added successfully!!!`,
      data: user
    })
  }

  updateUser(user: Iuser): Observable<IuserResp<Iuser>> {
    let getIndex = this.usersArr.findIndex(u => u.userId === user.userId);
    this.usersArr[getIndex] = user;
    return of({
      msg: `The user with id ${user.userId} is updated successfully!!!`,
      data: user
    })
  }

  removeUser(id: string): Observable<IuserResp<Iuser>> {
    let getIndex = this.usersArr.findIndex(u => u.userId === id);
    let removedUser = this.usersArr.splice(getIndex, 1);
    return of({
      msg: `The user ${removedUser[0].userName} with id ${id} is removed successfully!!!`,
      data: removedUser[0]
    })
  }
}