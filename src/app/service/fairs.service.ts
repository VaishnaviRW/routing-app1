import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFairs } from '../models/fairs';

@Injectable({
  providedIn: 'root'
})
export class FairsService {
  fairsArr: IFairs[] = [
    {
      fairId: 'F101',
      fairName: 'Pune Job Fair 2026',
      startDate: 1782864000,
      endDate: 1782950400,
      timezoneId: 'India Standard Time',
      location: {
        addressOne: 'Pune Exhibition Center',
        addressTwo: 'Shivajinagar',
        city: 'Pune',
        state: 'Maharashtra',
        country: 'India',
        zip: '411005'
      },
      numberOfUsersRegistered: 120,
      numberOfSchoolsRegistered: 25,
      isCandidateRegistered: true,
      bannerUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
      showRegisteredUsersToCandidate: true,
      showRegisteredUsersToSchools: false,
      showRegisteredSchoolsToCandidate: true,
      showRegisteredSchoolsToSchools: true,
      fairStatus: 'published',
      fairStartTime: '09:00 AM',
      fairEndTime: '05:00 PM',
      type: 'InPerson',
      candidateDescription: 'Meet top companies and recruiters from across India.',
      schoolDescription: 'Connect with talented candidates and conduct interviews.'
    },
  
    {
      fairId: 'F102',
      fairName: 'Mumbai Career Expo',
      startDate: 1783468800,
      endDate: 1783555200,
      timezoneId: 'India Standard Time',
      location: {
        addressOne: 'Bombay Convention Center',
        addressTwo: 'Bandra',
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
        zip: '400050'
      },
      numberOfUsersRegistered: 200,
      numberOfSchoolsRegistered: 40,
      isCandidateRegistered: false,
      bannerUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',
      showRegisteredUsersToCandidate: true,
      showRegisteredUsersToSchools: true,
      showRegisteredSchoolsToCandidate: true,
      showRegisteredSchoolsToSchools: true,
      fairStatus: 'published',
      fairStartTime: '10:00 AM',
      fairEndTime: '06:00 PM',
      type: 'InPerson',
      candidateDescription: 'Explore career opportunities from leading organizations.',
      schoolDescription: 'Hire skilled professionals and fresh graduates.'
    },
  
    {
      fairId: 'F103',
      fairName: 'Virtual Tech Hiring Fair',
      startDate: 1784073600,
      endDate: 1784073600,
      timezoneId: 'India Standard Time',
      location: null,
      numberOfUsersRegistered: 350,
      numberOfSchoolsRegistered: 60,
      isCandidateRegistered: true,
      bannerUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      showRegisteredUsersToCandidate: true,
      showRegisteredUsersToSchools: false,
      showRegisteredSchoolsToCandidate: true,
      showRegisteredSchoolsToSchools: false,
      fairStatus: 'published',
      fairStartTime: '11:00 AM',
      fairEndTime: '04:00 PM',
      type: 'Virtual',
      candidateDescription: 'Attend interviews online from anywhere.',
      schoolDescription: 'Recruit top tech talent virtually.'
    },
  
    {
      fairId: 'F104',
      fairName: 'Bangalore IT Recruitment Fair',
      startDate: 1784678400,
      endDate: 1784764800,
      timezoneId: 'India Standard Time',
      location: {
        addressOne: 'Tech Park Convention Hall',
        addressTwo: 'Whitefield',
        city: 'Bengaluru',
        state: 'Karnataka',
        country: 'India',
        zip: '560066'
      },
      numberOfUsersRegistered: 180,
      numberOfSchoolsRegistered: 35,
      isCandidateRegistered: false,
      bannerUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      showRegisteredUsersToCandidate: false,
      showRegisteredUsersToSchools: true,
      showRegisteredSchoolsToCandidate: true,
      showRegisteredSchoolsToSchools: true,
      fairStatus: 'draft',
      fairStartTime: '09:30 AM',
      fairEndTime: '05:30 PM',
      type: 'InPerson',
      candidateDescription: 'Specialized hiring event for IT professionals.',
      schoolDescription: 'Meet software developers, testers, and engineers.'
    },
  
    {
      fairId: 'F105',
      fairName: 'Hyderabad Mega Placement Drive',
      startDate: 1785283200,
      endDate: 1785369600,
      timezoneId: 'India Standard Time',
      location: {
        addressOne: 'HITEX Exhibition Center',
        addressTwo: 'Madhapur',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
        zip: '500081'
      },
      numberOfUsersRegistered: 500,
      numberOfSchoolsRegistered: 75,
      isCandidateRegistered: true,
      bannerUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      showRegisteredUsersToCandidate: true,
      showRegisteredUsersToSchools: true,
      showRegisteredSchoolsToCandidate: true,
      showRegisteredSchoolsToSchools: true,
      fairStatus: 'published',
      fairStartTime: '08:00 AM',
      fairEndTime: '06:00 PM',
      type: 'InPerson',
      candidateDescription: 'One of the largest placement drives in South India.',
      schoolDescription: 'Recruit thousands of candidates across multiple domains.'
    }
  ];

  constructor() { }

  fetchFairsArr(): Observable<IFairs[]> {
    return of(this.fairsArr)
  }

  fetchFairById(id: string): Observable<IFairs>{
    let fairObj = this.fairsArr.find(f => f.fairId === id)!;
    return of(fairObj);
  }
  
}
