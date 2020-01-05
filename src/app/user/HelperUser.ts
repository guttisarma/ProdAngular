import { Observable } from "rxjs";

export class UserHelp {
    UserHelpPID: number;
    Name: string;
    FName: string;
    LName: string;
    Code: string;
    Email: string;
    Phone: string;
    Created: string;
    Dob: string;
    Age: number;
    NotifyAfterLogin: boolean;
    PrefferedContact: string;
}
export class AddressHelp {
    AddressHelpPID: number;
    Address1: string;
    Address2: string;
    Address3: string;
    City: string;
    State: string;
    Country: string;
}
export class UserBillinginfo {
    UserHelpPID: number;
    CreationPer: number;
    AssignPer: number;
    ConvertPer: number;
}
export class SecurityQuestion{
    UserHelpPID: number;
    Question:string;
    IsAnswered:boolean;
}
export const dummyuser = new Observable<UserHelp>((observer) => {

    // observable execution
    observer.next({ UserHelpPID: 1, Name: 'Uma',FName: 'Uma',LName: 'Uma', Code: 'Uma12001', Email: 'Uma@gmail.com',Dob:'12-07-1992', Phone: '9834565450', Created: '24/09/2019', Age: 32, NotifyAfterLogin: true, PrefferedContact:'Email' })
    DummylsUseruct.forEach(P => { observer.next(P) });
    observer.complete()
})

export const dummyaddress=new Observable<AddressHelp>((observer)=>{
    observer.next({AddressHelpPID:1,Address1:'Dno:2-60',Address2:'BehindSivalayam Street',Address3:"Jandrapet,Chirala,Prakasam",City:"Chirala",State:"Andhra Pradesh",Country:"India"});
    observer.complete()
})
export const DummylsUseruct: UserHelp[] = [
    { UserHelpPID: 1, Name: 'Uma', Code: 'Uma12001', Email: 'Uma@gmail.com', Phone: '9834565450', Created: '24/09/2019', Age: 32, NotifyAfterLogin: true, PrefferedContact:'Email' ,Dob:'12-07-1992',FName: 'Uma',LName: 'Uma'},
    { UserHelpPID: 2, Name: 'Suma', Code: 'Suma12002', Email: 'Suma@outlook.in', Phone: '9223445120', Created: '02/09/2016', Age: 32, NotifyAfterLogin: true, PrefferedContact:'Email' ,Dob:'12-07-1992',FName: 'Uma',LName: 'Uma'},
    { UserHelpPID: 3, Name: 'Adi', Code: 'Adi12003', Email: 'Adi@hotmail.com', Phone: '7890322320', Created: '01/09/2019', Age: 32, NotifyAfterLogin: true, PrefferedContact:'Email' ,Dob:'12-07-1992',FName: 'Uma',LName: 'Uma'},
    { UserHelpPID: 4, Name: 'Rama', Code: 'Rama12004', Email: 'Rama@yahoo.com', Phone: '8905673740', Created: '01/12/2015', Age: 32, NotifyAfterLogin: true, PrefferedContact:'Email' ,Dob:'12-07-1992',FName: 'Uma',LName: 'Uma'},
    { UserHelpPID: 5, Name: 'Rajesh', Code: 'Rajesh12005', Email: 'Rajesh@gmail.com', Phone: '806012390', Created: '06/09/2019', Age: 32, NotifyAfterLogin: true, PrefferedContact:'Email',Dob:'12-07-1992',FName: 'Uma',LName: 'Uma' },
    { UserHelpPID: 6, Name: 'Umesh', Code: 'Umesh12006', Email: 'Umesh@gmail.com', Phone: '789012300', Created: '01/09/2017', Age: 32, NotifyAfterLogin: true, PrefferedContact:'Email' ,Dob:'12-07-1992',FName: 'Uma',LName: 'Uma'},
    { UserHelpPID: 7, Name: 'Aradinda', Code: 'Aradinda12007', Email: 'Aradinda@yahoo.com', Phone: '723523410', Created: '01/10/2019', Age: 32, NotifyAfterLogin: true, PrefferedContact:'Email',Dob:'12-07-1992',FName: 'Uma',LName: 'Uma' },
    { UserHelpPID: 8, Name: 'Shankar', Code: 'Shankar12008', Email: 'Shankar@yahoo.com', Phone: '90905613434', Created: '04/09/2013', Age: 32, NotifyAfterLogin: true, PrefferedContact:'Email' ,Dob:'12-07-1992',FName: 'Uma',LName: 'Uma'},
    { UserHelpPID: 9, Name: 'Siva', Code: 'Siva12009', Email: 'Siva@live.in', Phone: '987056412', Created: '01/08/2019', Age: 32, NotifyAfterLogin: true, PrefferedContact:'Email',Dob:'12-07-1992' ,FName: 'Uma',LName: 'Uma'},
    { UserHelpPID: 10, Name: 'Mohan', Code: 'Mohan120010', Email: 'Mohan@hotmail.com', Phone: '709845621', Created: '09/09/2012', Age: 32, NotifyAfterLogin: true, PrefferedContact:'Email' ,Dob:'12-07-1992',FName: 'Uma',LName: 'Uma'},
    { UserHelpPID: 11, Name: 'Babu', Code: 'Babu120011', Email: 'Babu@gmail.com', Phone: '7098789690', Created: '01/11/2010', Age: 32, NotifyAfterLogin: true, PrefferedContact:'Email' ,Dob:'12-07-1992',FName: 'Uma',LName: 'Uma'},

]