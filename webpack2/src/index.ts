// export class Name{
//     Name(){
//         debugger;
//         console.log('I am from typescript file.');
//     }
//     firstName: string;
// }

function disp_details(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
 }
 // export { disp_details as disp_details }
 disp_details(123, "John");