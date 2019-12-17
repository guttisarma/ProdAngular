export class ProdHelp {
    ProdHelpPID: number;
    Name: string;
    Code: string;
    TQuantity: number;
    RQuantity: number;
    AllowedQuantity: number;
    Description: string
    Created: string;
}
export class ProdAssignHelp {
    ProdAssignHelpPID: number;
    Code: string;
    NoProduct: number;
    Owner: string;
    Created: string;
    TransApproved: boolean;
}
export class lsAssignProdhelper{
    ProdHelpPID: number;
    AssignQuantity: number;

}
export class AssignUsertoProd {
    AssignUsertoProd: number;
    UserPID: number;
    lsassignprod:AssignUsertoProd[]=[];
}
export const DummylsProdAssign: ProdAssignHelp[] = [
    { ProdAssignHelpPID: 1, Code: 'ProAssign_123', NoProduct: 8, Owner: "Siva", Created: '24/09/2019', TransApproved: false },
    { ProdAssignHelpPID: 2, Code: 'ProAssign_124', NoProduct: 9, Owner: "Raju", Created: '02/09/2016', TransApproved: false },
    { ProdAssignHelpPID: 3, Code: 'ProAssign_125', NoProduct: 3, Owner: "Ramu", Created: '24/09/2019', TransApproved: false },
    { ProdAssignHelpPID: 4, Code: 'ProAssign_126', NoProduct: 2, Owner: "Jay", Created: '01/09/2017', TransApproved: false }
]

export const Dummylsproduct: ProdHelp[] = [
    { ProdHelpPID: 1, Name: 'Pen', Code: 'Pro_cre_12001', TQuantity: 5030, RQuantity: 450, Created: '24/09/2019', AllowedQuantity: 0, Description: 'some' },
    { ProdHelpPID: 2, Name: 'Pencil', Code: 'Pro_cre_12002', TQuantity: 1200, RQuantity: 120, Created: '02/09/2016', AllowedQuantity: 0, Description: 'some' },
    { ProdHelpPID: 3, Name: 'Book', Code: 'Pro_cre_12003', TQuantity: 1300, RQuantity: 320, Created: '01/09/2019', AllowedQuantity: 0, Description: 'some' },
    { ProdHelpPID: 4, Name: 'Bag', Code: 'Pro_cre_12004', TQuantity: 1100, RQuantity: 740, Created: '01/12/2015', AllowedQuantity: 0, Description: 'some' },
    { ProdHelpPID: 5, Name: 'Cycle', Code: 'Pro_cre_12005', TQuantity: 300, RQuantity: 90, Created: '06/09/2019', AllowedQuantity: 0, Description: 'some' },
    { ProdHelpPID: 6, Name: 'Bike', Code: 'Pro_cre_12006', TQuantity: 450, RQuantity: 300, Created: '01/09/2017', AllowedQuantity: 0, Description: 'some' },
    { ProdHelpPID: 7, Name: 'Buld', Code: 'Pro_cre_12007', TQuantity: 650, RQuantity: 110, Created: '01/10/2019', AllowedQuantity: 0, Description: 'some' },
    { ProdHelpPID: 8, Name: 'Phone', Code: 'Pro_cre_12008', TQuantity: 150, RQuantity: 130, Created: '04/09/2013', AllowedQuantity: 0, Description: 'some' },
    { ProdHelpPID: 9, Name: 'Watch', Code: 'Pro_cre_12009', TQuantity: 8900, RQuantity: 145, Created: '01/08/2019', AllowedQuantity: 0, Description: 'some' },
    { ProdHelpPID: 10, Name: 'Tie', Code: 'Pro_cre_120010', TQuantity: 1200, RQuantity: 550, Created: '09/09/2012', AllowedQuantity: 0, Description: 'some' },
    { ProdHelpPID: 11, Name: 'Stamps', Code: 'Pro_cre_120011', TQuantity: 780, RQuantity: 90, Created: '01/11/2010', AllowedQuantity: 0, Description: 'some' },

]