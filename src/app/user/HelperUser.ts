import { Observable } from "rxjs";

 export class UserHelp
{
    UserHelpPID: number;
    Name: string;
    Code: string;
    Email: string;
    Phone: string;
    Created:string;
}
export const dummyuser = new Observable<UserHelp>((observer) => {
    
    // observable execution
    observer.next({ UserHelpPID:1,Name:'Uma',Code:'Uma12001',Email:'Uma@gmail.com',Phone:'9834565450',Created:'24/09/2019' })
    DummylsUseruct.forEach(P=>{observer.next(P)});
    observer.complete()
})

export const DummylsUseruct:UserHelp[]=[
    { UserHelpPID:1,Name:'Uma',Code:'Uma12001',Email:'Uma@gmail.com',Phone:'9834565450',Created:'24/09/2019' },
    { UserHelpPID:2,Name:'Suma',Code:'Suma12002',Email:'Suma@outlook.in',Phone:'9223445120',Created:'02/09/2016' },
    { UserHelpPID:3,Name:'Adi',Code:'Adi12003',Email:'Adi@hotmail.com',Phone:'7890322320',Created:'01/09/2019' },
    { UserHelpPID:4,Name:'Rama',Code:'Rama12004',Email:'Rama@yahoo.com',Phone:'8905673740',Created:'01/12/2015' },
    { UserHelpPID:5,Name:'Rajesh',Code:'Rajesh12005',Email:'Rajesh@gmail.com',Phone:'806012390',Created:'06/09/2019' },
    { UserHelpPID:6,Name:'Umesh',Code:'Umesh12006',Email:'Umesh@gmail.com',Phone:'789012300',Created:'01/09/2017' },
    { UserHelpPID:7,Name:'Aradinda',Code:'Aradinda12007',Email:'Aradinda@yahoo.com',Phone:'723523410',Created:'01/10/2019' },
    { UserHelpPID:8,Name:'Shankar',Code:'Shankar12008',Email:'Shankar@yahoo.com',Phone:'90905613434',Created:'04/09/2013' },
    { UserHelpPID:9,Name:'Siva',Code:'Siva12009',Email:'Siva@live.in',Phone:'987056412',Created:'01/08/2019' },
    { UserHelpPID:10,Name:'Mohan',Code:'Mohan120010',Email:'Mohan@hotmail.com',Phone:'709845621',Created:'09/09/2012' },
    { UserHelpPID:11,Name:'Babu',Code:'Babu120011',Email:'Babu@gmail.com',Phone:'7098789690',Created:'01/11/2010' },

]